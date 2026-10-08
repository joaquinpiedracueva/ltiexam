"use strict";

/* ============================ CODERUNNER ==============================
   Compila y prueba Java en el navegador con CheerpJ (una JVM 8 en WebAssembly).
   El compilador es vendor/java/tools.jar y el motor de pruebas vendor/java/ltiexam-runner.jar
   (fuente en vendor/java/runner/CodeRunner.java). CheerpJ monta la raíz del sitio en /app/.
   ==================================================================== */

var CR = (function(){
  var LOADER = "https://cjrtnc.leaningtech.com/4.3/loader.js";
  var TIMEOUT_MS = 4000;     // por prueba, lo aplica el motor en Java
  var HANG_MS = 20000;       // margen del lado de la página: la compilación + todas las pruebas
  var COLD_HANG_MS = 90000;  // la primera vez baja parte de tools.jar (18 MB) y calienta javac: 15-30 s o más
  var ready = null;
  var runs = 0;
  var warm = false;          // ya corrió una comprobación: las siguientes tardan ~1 s
  var queue = Promise.resolve(); // una comprobación por vez: todas comparten la JVM y la salida #console
  var stuck = false;         // la comprobación anterior sigue corriendo: no se puede lanzar otra

  function appPath(rel){ return "/app" + decodeURIComponent(new URL(rel, location.href).pathname); }

  // CheerpJ se baja recién cuando el examen tiene un CodeRunner, y la JVM arranca mientras se lee
  // el enunciado: así al comprobar ya está lista
  function init(){
    if (!ready){
      ready = loadScript(LOADER).then(function(){ return cheerpjInit({ version: 8, status: "none" }); });
      ready.catch(function(){ ready = null; }); // sin conexión: se reintenta al comprobar
    }
    return ready;
  }

  // cheerpjAddStringFile quedó obsoleta en CheerpJ 4
  function addFile(path, text){ (window.cheerpOSAddStringFile || window.cheerpjAddStringFile)(path, text); }

  function loadScript(src){
    if (typeof cheerpjInit === "function") return Promise.resolve();
    return new Promise(function(resolve, reject){
      var s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = function(){ s.remove(); reject(new Error("No se pudo cargar CheerpJ (¿sin conexión?).")); };
      document.head.appendChild(s);
    });
  }

  // CheerpJ escribe stdout/stderr en un elemento #console
  function consoleEl(){
    var el = document.getElementById("console");
    if (!el){
      el = document.createElement("pre");
      el.id = "console";
      el.hidden = true;
      document.body.appendChild(el);
    }
    return el;
  }

  function publicClass(code){
    var m = code.match(/public\s+(?:(?:abstract|final|static)\s+)*(?:class|interface|enum)\s+([A-Za-z_$][\w$]*)/);
    return m ? m[1] : "Solucion";
  }

  function imports(code){ return (code.match(/^\s*import\s+[\w.]+(?:\.\*)?\s*;/gm) || []).map(function(l){ return l.trim(); }).join("\n"); }

  // como CodeRunner: sin espacios al final de cada línea ni líneas vacías al final
  function normalize(s){
    return String(s).replace(/\r/g, "").split("\n").map(function(l){ return l.replace(/\s+$/, ""); })
      .join("\n").replace(/\n+$/, "");
  }

  function testSource(i, code, test){
    return imports(code) + "\npublic class __Prueba" + i + " {\n" +
      "    public static void main(String[] args) throws Exception {\n" +
      "        __G.deadline = System.currentTimeMillis() + " + TIMEOUT_MS + "L;\n" + test.code + "\n    }\n}\n";
  }

  /* Un bucle que nunca cede el control congela la página entera (CheerpJ corre en el hilo
     principal), así que ningún temporizador puede cortarlo desde afuera. Por eso cada while/for/do
     del alumno llama a __G.t(), que mira el reloj y corta con un Error pasado el tiempo de la
     prueba. Se inserta sin agregar líneas, así los errores de compilación siguen en su lugar. */
  var GUARD = "public class __G {\n" +
    "    public static long deadline;\n" +
    "    private static long n;\n" +
    "    public static boolean t() {\n" +
    "        if ((++n & 1023) == 0 && System.currentTimeMillis() > deadline) throw new Error(\"" + "__TIMEOUT" + "\");\n" +
    "        return true;\n" +
    "    }\n" +
    "}\n";

  // salta un comentario o literal que empieza en i; devuelve dónde termina, o i si no hay ninguno
  function skipToken(src, i){
    var c = src[i], d = src[i + 1], e;
    if (c === "/" && d === "/"){ e = src.indexOf("\n", i); return e < 0 ? src.length : e; }
    if (c === "/" && d === "*"){ e = src.indexOf("*/", i + 2); return e < 0 ? src.length : e + 2; }
    if (c === '"' || c === "'"){
      for (e = i + 1; e < src.length && src[e] !== c && src[e] !== "\n"; e++) if (src[e] === "\\") e++;
      return e + 1;
    }
    return i;
  }

  function closeParen(src, open){
    for (var i = open, depth = 0; i < src.length; i++){
      var j = skipToken(src, i);
      if (j !== i){ i = j - 1; continue; }
      if (src[i] === "(") depth++;
      else if (src[i] === ")" && --depth === 0) return i;
    }
    return -1;
  }

  // divide por «;» de primer nivel (la cabecera de un for)
  function splitTop(s){
    var parts = [], depth = 0, last = 0;
    for (var i = 0; i < s.length; i++){
      var j = skipToken(s, i);
      if (j !== i){ i = j - 1; continue; }
      if ("([{".indexOf(s[i]) !== -1) depth++;
      else if (")]}".indexOf(s[i]) !== -1) depth--;
      else if (s[i] === ";" && !depth){ parts.push(s.slice(last, i)); last = i + 1; }
    }
    parts.push(s.slice(last));
    return parts;
  }

  function guardLoops(src){
    var out = "", i = 0;
    function ws(k){ while (k < src.length && /\s/.test(src[k])) k++; return k; }
    function constTrue(c){ return /^\s*(true)?\s*$/.test(c); }
    function guardCond(c){ return constTrue(c) ? c : " __G.t() && (" + c + ")"; }
    // un cuerpo sin llaves con condición constante (while (true) x++;) no se puede tocar en la
    // condición sin cambiar qué es alcanzable: se le antepone un if con su else, que no roba
    // el else de un if de afuera
    var PREFIX = " if (!__G.t()) ; else ";
    while (i < src.length){
      var j = skipToken(src, i);
      if (j !== i){ out += src.slice(i, j); i = j; continue; }
      var m = /^[A-Za-z_$][\w$]*/.exec(src.slice(i, i + 64));
      if (!m){ out += src[i++]; continue; }
      var w = m[0], k = ws(i + w.length);
      if (w === "do" && src[k] === "{"){ out += src.slice(i, k + 1) + " __G.t();"; i = k + 1; continue; }
      if (w === "do" && src[k] !== ";"){ out += w + PREFIX; i += w.length; continue; }
      if ((w === "while" || w === "for") && src[k] === "("){
        var close = closeParen(src, k);
        if (close > 0){
          var head = src.slice(k + 1, close), body = ws(close + 1);
          // con llaves va adentro del cuerpo: así no cambia qué código es alcanzable (while (true) {...})
          if (src[body] === "{"){ out += src.slice(i, body + 1) + " __G.t();"; i = body + 1; continue; }
          var parts = splitTop(head), forever = false;
          if (w === "while"){ forever = constTrue(head); head = guardCond(head); }
          else if (parts.length === 3){ forever = constTrue(parts[1]); parts[1] = guardCond(parts[1]); head = parts.join(";"); }
          // un «;» es el final de un do-while (ya vigilado por el do) o un bucle vacío
          out += src.slice(i, k + 1) + head + ")" + (forever && src[body] !== ";" ? PREFIX : ""); i = close + 1; continue;
        }
      }
      out += w; i += w.length;
    }
    return out;
  }

  function parse(text, tests, mainFile){
    var res = { compiled: false, errors: [], results: [], raw: text };
    if (text.indexOf("@@COMPILE_ERROR") !== -1){
      var re = /@@ERR (\S*) (-?\d+)\n([\s\S]*?)(?=\n@@)/g, m;
      while ((m = re.exec(text))){
        var t = /^__Prueba(\d+)\.java$/.exec(m[1]);
        res.errors.push({ where: t ? "prueba " + (Number(t[1]) + 1) : (m[1] === mainFile ? "tu código" : m[1]), line: Number(m[2]), message: m[3].trim() });
      }
      return res;
    }
    if (text.indexOf("@@COMPILED") === -1) throw new Error("No se pudo ejecutar el compilador.\n" + text.trim());
    res.compiled = true;
    tests.forEach(function(test, i){
      var m = new RegExp("@@TEST " + i + " (\\w+)\\n([\\s\\S]*?)\\n@@END").exec(text);
      var got = m ? normalize(m[2]) : "";
      var status = m ? m[1] : "error";
      if (status === "error" && /java\.lang\.Error: __TIMEOUT\s*$/.test(got)){ status = "timeout"; got = got.replace(/java\.lang\.Error: __TIMEOUT\s*$/, "").replace(/\n+$/, ""); }
      res.results.push({ status: status, got: got, expected: normalize(test.expected), pass: status === "ok" && got === normalize(test.expected) });
    });
    return res;
  }

  // Compila `code` y corre cada prueba. Devuelve { compiled, errors[], results[{pass, got, expected, status}] }.
  function check(code, tests){
    var job = queue.then(function(){ return run(code, tests); });
    queue = job.catch(function(){});
    return job;
  }

  function run(code, tests){
    if (stuck) return Promise.reject(stuckError());
    return init().then(function(){
      var n = ++runs;
      var dir = "/str/"; // CheerpJ no admite subcarpetas en /str/
      var mainFile = publicClass(code) + ".java";
      var files = [dir + mainFile, dir + "__G.java"];
      addFile(files[0], guardLoops(code));
      addFile(files[1], GUARD);
      tests.forEach(function(test, i){
        var f = dir + "__Prueba" + i + ".java";
        addFile(f, testSource(i, code, test));
        files.push(f);
      });
      var out = consoleEl();
      out.textContent = "";
      var classpath = appPath("vendor/java/tools.jar") + ":" + appPath("vendor/java/ltiexam-runner.jar");
      var args = ["CodeRunner", classpath, "/files/cr" + Date.now() + "-" + n + "/", String(TIMEOUT_MS)].concat(files);
      var timer;
      var run = cheerpjRunMain.apply(null, args).then(function(){ warm = true; return parse(out.textContent, tests, mainFile); });
      // si termina tarde (una primera vez muy lenta), se puede volver a comprobar sin recargar
      run.then(done, done);
      function done(){ clearTimeout(timer); stuck = false; }
      // CheerpJ no puede interrumpir un bucle que nunca cede el control: si no vuelve, se da por colgado
      var hang = new Promise(function(resolve, reject){
        timer = setTimeout(function(){ stuck = true; reject(stuckError()); },
          (warm ? HANG_MS : COLD_HANG_MS) + TIMEOUT_MS * tests.length);
      });
      return Promise.race([run, hang]);
    });
  }

  function stuckError(){
    var e = new Error("La comprobación está tardando más de lo normal. Esperá unos segundos y volvé a comprobar.");
    e.stuck = true;
    return e;
  }

  return { init: init, check: check, normalize: normalize, warm: function(){ return warm; }, guardLoops: guardLoops };
})();
