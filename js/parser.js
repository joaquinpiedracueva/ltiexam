"use strict";

/* ============================ PARSER START ============================
   Lee un .md con la estructura del README:
     # Titulo
     ## Pregunta N
     **Enunciado:** ...
     - a. alternativa
     - OK b. alternativa correcta   (OK = marca de verificacion)
   ==================================================================== */

var OK = "✅";

function parseDB(md){
  var lines = String(md).replace(/\r\n?/g, "\n").split("\n");
  var title = null, fence = false, cur = null, blocks = [];
  for (var i = 0; i < lines.length; i++){
    var line = lines[i];
    var isFence = /^\s*```/.test(line);
    if (isFence) fence = !fence;
    if (!fence && !isFence){
      var h2 = line.match(/^##\s+(.+?)\s*$/);
      if (h2){ cur = { label: h2[1], lines: [] }; blocks.push(cur); continue; }
      var h1 = line.match(/^#\s+(.+?)\s*$/);
      if (h1){ if (title === null) title = h1[1]; continue; }
    }
    if (cur) cur.lines.push(line);
  }
  var questions = [];
  blocks.forEach(function(b, i){
    var q = parseQuestion(b.label, b.lines, questions.length);
    if (q) questions.push(q);
  });
  return { title: title || "Cuestionario", questions: questions };
}

var RE_TOP = /^- (.*)$/;
var RE_NESTED = /^ +[-*] (.*)$/;
var RE_LETTER = /^([a-z])[.)]\s*(.*)$/i;

function parseQuestion(label, raw, idx){
  // 1. clasificar cada linea (respetando bloques de codigo)
  var marks = [], fence = false;
  raw.forEach(function(line, i){
    var isFence = /^\s*```/.test(line);
    if (isFence){ marks[i] = { kind: "fence" }; fence = !fence; return; }
    if (fence){ marks[i] = { kind: "code" }; return; }
    if (line.trim() === ""){ marks[i] = { kind: "blank" }; return; }
    var mt = line.match(RE_TOP);
    if (mt){ marks[i] = { kind: "top", text: mt[1] }; return; }
    var mn = line.match(RE_NESTED);
    if (mn){ marks[i] = { kind: "nested", text: mn[1] }; return; }
    if (/^\s/.test(line)){ marks[i] = { kind: "indent" }; return; }
    marks[i] = { kind: "text" };
  });

  // 2. donde empiezan las alternativas: primera vineta con letra (a. b. c.);
  //    si no hay letras, la primera vineta de nivel 0
  var start = -1, i;
  for (i = 0; i < marks.length; i++){
    if (marks[i].kind === "top" && RE_LETTER.test(marks[i].text.split(OK).join("").trim())){ start = i; break; }
  }
  if (start === -1){
    for (i = 0; i < marks.length; i++){ if (marks[i].kind === "top"){ start = i; break; } }
  }
  if (start === -1) return null;

  // 3. enunciado
  var statement = raw.slice(0, start);
  while (statement.length && statement[statement.length - 1].trim() === "") statement.pop();

  // 4. alternativas + cola
  var options = [], tailStart = raw.length;
  i = start;
  while (i < raw.length){
    var m = marks[i];
    if (m.kind === "top"){ options.push({ raw: m.text, lines: [], children: [] }); i++; continue; }
    if (!options.length){ i++; continue; }
    if (m.kind === "nested"){
      var t = m.text.trim(), correct = t.indexOf(OK) === 0;
      options[options.length - 1].children.push({ text: correct ? t.slice(OK.length).trim() : t, correct: correct });
      i++; continue;
    }
    if (m.kind === "blank" || m.kind === "indent" || m.kind === "code" || m.kind === "fence"){
      options[options.length - 1].lines.push(raw[i]); i++; continue;
    }
    tailStart = i; break;
  }
  var tail = raw.slice(tailStart);

  // 5. normalizar alternativas
  options.forEach(function(o, k){
    var t = o.raw.trim();
    o.correct = t.indexOf(OK) === 0;
    if (o.correct) t = t.slice(OK.length).trim();
    var lm = t.match(RE_LETTER);
    if (lm){ o.key = lm[1].toLowerCase(); t = lm[2].trim(); }
    else { o.key = String(k + 1); }
    o.text = t;
    while (o.lines.length && o.lines[0].trim() === "") o.lines.shift();
    while (o.lines.length && o.lines[o.lines.length - 1].trim() === "") o.lines.pop();
  });

  // 6. cola: revelacion (lleva la marca) y notas (>)
  var reveal = [], note = [];
  tail.forEach(function(l){ (l.trim().indexOf(">") === 0 ? note : reveal).push(l); });
  function trim(a){
    var c = a.slice();
    while (c.length && c[0].trim() === "") c.shift();
    while (c.length && c[c.length - 1].trim() === "") c.pop();
    return c;
  }
  reveal = trim(reveal); note = trim(note);

  // 7. tipo de pregunta
  var hasChildren = options.some(function(o){ return o.children.length > 0; });
  var nCorrect = options.filter(function(o){ return o.correct; }).length;
  var type;
  if (hasChildren) type = "match";
  else if (nCorrect === 1) type = "single";
  else if (nCorrect > 1) type = "multi";
  else if (reveal.some(function(l){ return l.indexOf(OK) !== -1; })) type = "selfgrade";
  else type = "single";

  var num = (label.match(/(\d+)/) || [])[1];
  return {
    id: idx, label: label, num: num ? Number(num) : idx + 1,
    statement: statement, options: options, type: type, reveal: reveal, note: note
  };
}
/* ============================= PARSER END ============================= */
