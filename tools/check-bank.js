"use strict";

// Revisa un banco .md con el mismo parser que usa la página y, si hay CodeRunner,
// compila la solución con cada prueba en el JDK local y compara la salida esperada.
//   node tools/check-bank.js bank/semestre-2/AYPD.md
// Necesita javac/java en el PATH para las preguntas de código (cualquier JDK >= 8).

var fs = require("fs"), vm = require("vm"), cp = require("child_process"), os = require("os"), path = require("path");

var file = process.argv[2];
if (!file){ console.error("uso: node tools/check-bank.js <banco.md>"); process.exit(2); }

var ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, "../js/parser.js"), "utf8") + ";this.parseDB = parseDB;", ctx);
var db = ctx.parseDB(fs.readFileSync(file, "utf8"));
var normalize = function(s){ return String(s).replace(/\r/g, "").split("\n").map(function(l){ return l.replace(/\s+$/, ""); }).join("\n").replace(/\n+$/, ""); };

var problems = 0;
function bad(q, msg){ problems++; console.log("✕ " + q.label + ": " + msg); }

console.log(db.title + " — " + db.questions.length + " preguntas");
// Clave para detectar preguntas repetidas: enunciado + alternativas (sin orden ni letras),
// o el código base en las CodeRunner. Ignora mayúsculas, tildes, puntuación y espacios.
function plain(s){ return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim(); }
function dupKey(q){
  if (q.type === "code") return "code|" + plain(q.template || q.statement.join(" "));
  var opts = q.options.map(function(o){
    return plain(o.text.split(OK_MARK).join("").replace(/^\s*[a-z][.)]\s+/i, "")) + "{" + o.children.map(function(c){ return plain(c.text); }).sort().join(",") + "}";
  }).sort();
  return plain(q.statement.join(" ").replace(/\*\*Enunciado:\*\*/, "")) + "|" + opts.join("|");
}
var OK_MARK = "✅";

var nums = {}, keys = {};
db.questions.forEach(function(q){
  if (nums[q.num]) bad(q, "número repetido");
  nums[q.num] = true;
  var k = dupKey(q);
  if (keys[k]) bad(q, "repite la " + keys[k]);
  else keys[k] = q.label;
  if (q.type === "code") return checkCode(q);
  if (q.type === "match"){
    q.options.forEach(function(o){ if (o.children.filter(function(c){ return c.correct; }).length !== 1) bad(q, "«" + o.text + "» necesita exactamente una ✅"); });
  } else if (q.type === "single" && !q.options.some(function(o){ return o.correct; })){
    bad(q, "ninguna alternativa marcada con ✅");
  }
});

function checkCode(q){
  if (!q.tests.length) return bad(q, "CodeRunner sin «### Prueba»");
  if (!q.solution) return console.log("· " + q.label + ": sin «### Solución», no se verifican las pruebas");
  var dir = fs.mkdtempSync(path.join(os.tmpdir(), "ltiexam-"));
  var m = q.solution.match(/public\s+(?:(?:abstract|final|static)\s+)*(?:class|interface|enum)\s+([A-Za-z_$][\w$]*)/);
  fs.writeFileSync(path.join(dir, (m ? m[1] : "Solucion") + ".java"), q.solution);
  q.tests.forEach(function(t, i){
    fs.writeFileSync(path.join(dir, "__Prueba" + i + ".java"),
      "public class __Prueba" + i + " {\n    public static void main(String[] args) throws Exception {\n" + t.code + "\n    }\n}\n");
  });
  try { cp.execSync("javac -encoding UTF-8 *.java", { cwd: dir, stdio: "pipe" }); }
  catch (e){ return bad(q, "la solución no compila con las pruebas\n" + e.stderr); }
  q.tests.forEach(function(t, i){
    var got;
    try { got = cp.execSync("java -Dfile.encoding=UTF-8 -Dstdout.encoding=UTF-8 __Prueba" + i, { cwd: dir, stdio: "pipe", timeout: 10000 }).toString(); }
    catch (e){ return bad(q, "la prueba " + (i + 1) + " falla con la solución\n" + e.stderr); }
    if (normalize(got) !== normalize(t.expected)) bad(q, "prueba " + (i + 1) + ": se esperaba\n" + t.expected + "\npero la solución imprime\n" + got);
  });
  fs.rmSync(dir, { recursive: true, force: true });
  console.log("✓ " + q.label + ": " + q.tests.length + " pruebas");
}

if (problems){ console.log(problems + " problema(s)"); process.exit(1); }
console.log("todo bien");
