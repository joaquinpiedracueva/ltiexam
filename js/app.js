"use strict";

/* ----------------------------- estado ------------------------------- */
var S = { db: null, dbName: "", count: null, tab: "preset", sem: null, mat: null, order: [], idx: 0, answers: [], pick: null, answered: false, matchPick: {} };
var app = document.getElementById("app");
var bar = document.getElementById("bar");
var PASS = 0.6;

function shuffle(a){
  var r = a.slice(), i, j, t;
  for (i = r.length - 1; i > 0; i--){
    j = Math.floor(Math.random() * (i + 1));
    t = r[i]; r[i] = r[j]; r[j] = t;
  }
  return r;
}

// null (o basura) = todas; si no, entre 1 y max
function clampCount(v, max){
  v = Math.floor(Number(v));
  if (!isFinite(v) || v < 1) return max;
  return Math.min(v, max);
}

/* --------------------------- carga del .md --------------------------- */
function loadText(text, name){
  var db = parseDB(text);
  if (!db.questions.length) throw new Error("No se encontró ninguna pregunta con el formato «## Pregunta N».");
  S.db = db; S.dbName = name; S.count = null;
  return db;
}

function loadPreset(){
  var sem = CATALOG[S.sem], mat = sem.materias[S.mat];
  fetch(mat.file)
    .then(function(r){
      if (!r.ok) throw new Error("No se pudo cargar " + mat.file + " (" + r.status + ").");
      return r.text();
    })
    .then(function(text){ loadText(text, sem.label + " · " + mat.label); renderSetup(); })
    .catch(function(err){
      renderSetup(location.protocol === "file:"
        ? "Los precargados necesitan abrir la página desde un servidor (no con doble clic). Usá «Archivo propio» o servila con, por ejemplo, python3 -m http.server."
        : err.message);
    });
}

function boot(){ renderSetup(); }

/* --------------------------- pantalla inicio ------------------------- */
function renderSetup(msg){
  bar.hidden = true;
  var n = S.db ? S.db.questions.length : 0;
  if (n) S.count = clampCount(S.count, n);

  app.innerHTML =
    '<section class="card pad setup">' +
      '<span class="eyebrow">Simulador de examen · Licenciatura en Tecnologías de la Información (LTI) · UTEC</span>' +
      "<h1>" + (S.db ? esc(S.db.title) : "Carga tu banco de preguntas") + "</h1>" +
      '<p class="lede">Las preguntas salen en orden aleatorio en cada intento, se responden de una en una y no se puede volver atrás. El examen completo vale 100% y se aprueba con <strong>60%</strong>.</p>' +
      '<div id="dbSlot"></div>' +
      '<div class="field"' + (S.db ? "" : " hidden") + ">" +
        '<span class="eyebrow">Cuántas preguntas</span>' +
        '<div class="size-row">' +
          '<input type="number" id="count" class="num-input" inputmode="numeric" min="1" max="' + n + '" step="1" value="' + (n ? S.count : "") + '" aria-label="Cantidad de preguntas">' +
          '<span class="size-hint">de ' + n + " disponibles</span>" +
          '<button class="chip" id="allBtn" aria-pressed="' + (S.count === n) + '">Todas</button>' +
        "</div>" +
      "</div>" +
      (msg ? '<p class="err">' + esc(msg) + "</p>" : "") +
      '<div class="row-end"><button class="btn" id="start"' + (S.db ? "" : " disabled") + ">Empezar</button></div>" +
    "</section>";

  var slot = document.getElementById("dbSlot");
  if (S.db){
    slot.innerHTML =
      '<div class="db-loaded">' +
        '<span class="dot"></span>' +
        '<span class="name">' + esc(S.dbName) + "</span>" +
        '<span class="count num">' + n + " preguntas</span>" +
        '<button class="btn-link" id="change">Cambiar base</button>' +
      "</div>";
    document.getElementById("change").onclick = function(){ S.db = null; S.count = null; renderSetup(); };
  } else {
    slot.innerHTML =
      '<div class="tabs" role="tablist">' +
        '<button class="tab" role="tab" data-tab="preset" aria-selected="' + (S.tab === "preset") + '">Precargados</button>' +
        '<button class="tab" role="tab" data-tab="file" aria-selected="' + (S.tab === "file") + '">Archivo propio</button>' +
      "</div>" +
      '<div id="tabBody"></div>';
    Array.prototype.forEach.call(slot.querySelectorAll(".tab"), function(t){
      t.onclick = function(){ S.tab = t.dataset.tab; renderSetup(); };
    });
    if (S.tab === "preset") renderPresetTab(document.getElementById("tabBody"));
    else renderFileTab(document.getElementById("tabBody"));
  }
  bindCount(n);
}

function renderPresetTab(box){
  // la primera opción es el placeholder: vacía y deshabilitada, así el select queda :invalid hasta elegir
  function opts(list, sel, placeholder){
    return '<option value="" disabled' + (sel === null ? " selected" : "") + ">" + placeholder + "</option>" +
      list.map(function(x, i){
        var empty = x.materias && !x.materias.length; // semestre todavía sin bancos
        return '<option value="' + i + '"' + (i === sel ? " selected" : "") + (empty ? " disabled" : "") + ">" +
          esc(x.label) + (empty ? " — próximamente" : "") + "</option>";
      }).join("");
  }
  var hasSem = S.sem !== null;
  box.innerHTML =
    '<div class="preset">' +
      '<label><span class="eyebrow">Semestre</span><span class="select-wrap"><select id="semSel" required>' + opts(CATALOG, S.sem, "Seleccionar semestre") + "</select></span></label>" +
      '<label><span class="eyebrow">Materia</span><span class="select-wrap"><select id="matSel" required' + (hasSem ? "" : " disabled") + ">" +
        opts(hasSem ? CATALOG[S.sem].materias : [], S.mat, "Seleccionar materia") + "</select></span></label>" +
      '<button class="btn btn-ghost" id="loadPreset"' + (hasSem && S.mat !== null ? "" : " disabled") + ">Cargar</button>" +
    "</div>";
  document.getElementById("semSel").onchange = function(){ S.sem = Number(this.value); S.mat = null; renderPresetTab(box); };
  document.getElementById("matSel").onchange = function(){ S.mat = Number(this.value); document.getElementById("loadPreset").disabled = false; };
  document.getElementById("loadPreset").onclick = function(){ this.disabled = true; this.textContent = "Cargando…"; loadPreset(); };
}

function renderFileTab(box){
  box.innerHTML =
    '<div class="drop" id="drop">' +
      '<button class="btn btn-ghost" id="pick">Elegir archivo .md</button>' +
      "<p>o arrastralo acá &mdash; formato <code>## Pregunta N</code> con alternativas marcadas con " + OK + "</p>" +
      '<input type="file" id="file" accept=".md,.markdown,.txt,text/markdown" hidden>' +
    "</div>";
  var drop = document.getElementById("drop");
  var file = document.getElementById("file");
  document.getElementById("pick").onclick = function(){ file.click(); };
  file.onchange = function(){ if (file.files[0]) readFile(file.files[0]); };
  ["dragenter", "dragover"].forEach(function(ev){
    drop.addEventListener(ev, function(e){ e.preventDefault(); drop.classList.add("over"); });
  });
  ["dragleave", "drop"].forEach(function(ev){
    drop.addEventListener(ev, function(e){ e.preventDefault(); drop.classList.remove("over"); });
  });
  drop.addEventListener("drop", function(e){
    var f = e.dataTransfer && e.dataTransfer.files[0];
    if (f) readFile(f);
  });
}

function bindCount(n){
  var countBox = document.getElementById("count");
  var allBtn = document.getElementById("allBtn");
  function syncCount(){
    S.count = clampCount(countBox.value, n);
    countBox.value = S.count;
    allBtn.setAttribute("aria-pressed", String(S.count === n));
  }
  if (countBox){
    countBox.oninput = function(){
      var v = Math.floor(Number(countBox.value));
      if (countBox.value !== "" && isFinite(v) && v >= 1){
        S.count = Math.min(v, n);
        allBtn.setAttribute("aria-pressed", String(S.count === n));
      }
    };
    countBox.onchange = syncCount;
    countBox.onkeydown = function(e){
      if (e.key === "Enter"){ e.preventDefault(); syncCount(); beginAttempt(); }
    };
    allBtn.onclick = function(){ countBox.value = n; syncCount(); };
  }
  var start = document.getElementById("start");
  if (start) start.onclick = function(){ if (countBox) syncCount(); beginAttempt(); };
}

function readFile(f){
  var r = new FileReader();
  r.onload = function(){
    try { loadText(r.result, f.name); renderSetup(); }
    catch(err){ renderSetup(err.message); }
  };
  r.readAsText(f);
}

/* ------------------------------ intento ------------------------------ */
function beginAttempt(){
  var all = shuffle(S.db.questions);
  var n = clampCount(S.count, all.length);
  S.order = all.slice(0, n);
  S.idx = 0; S.answers = []; S.pick = null; S.answered = false; S.matchPick = {};
  document.getElementById("barTitle").textContent = S.db.title;
  bar.hidden = false;
  renderQuestion();
}

function stats(){
  var total = S.order.length;
  var ok = S.answers.filter(function(a){ return a.correct; }).length;
  return { total: total, ok: ok, bad: S.answers.length - ok, answered: S.answers.length, left: total - S.answers.length };
}

function updateBar(){
  var s = stats();
  document.getElementById("barPos").textContent = "Pregunta " + Math.min(S.idx + 1, s.total) + " de " + s.total;
  document.getElementById("statOk").textContent = s.ok;
  document.getElementById("statBad").textContent = s.bad;
  document.getElementById("statPct").textContent = s.answered ? Math.round(s.ok / s.answered * 100) + "%" : "—";
  document.getElementById("mOk").style.width = (s.ok / s.total * 100) + "%";
  document.getElementById("mBad").style.width = (s.bad / s.total * 100) + "%";
  var chip = document.getElementById("statChip");
  chip.className = "verdict-chip";
  if (!s.answered){ chip.classList.add("chip-live"); chip.textContent = "Sin responder"; }
  else if (s.ok / s.total >= PASS){ chip.classList.add("chip-ok"); chip.textContent = "Aprobado asegurado"; }
  else if ((s.ok + s.left) / s.total < PASS){ chip.classList.add("chip-bad"); chip.textContent = "Ya no alcanza"; }
  else { chip.classList.add("chip-live"); chip.textContent = "Faltan " + (Math.ceil(PASS * s.total) - s.ok) + " aciertos"; }
}

var TYPE_LABEL = { single: "Opción múltiple", multi: "Varias correctas", match: "Emparejar", selfgrade: "Completar" };

function renderQuestion(){
  var q = S.order[S.idx];
  S.pick = null; S.answered = false; S.matchPick = {};
  updateBar();

  var optsHtml;
  if (q.type === "match"){
    optsHtml = '<div class="groups">' + q.options.map(function(o, gi){
      return '<div class="group">' +
        '<div class="group-label">' + mdInline(o.text) + "</div>" +
        '<div class="group-opts">' + o.children.map(function(c, ci){
          return '<button class="tile" data-g="' + gi + '" data-c="' + ci + '" aria-pressed="false">' + mdInline(c.text) + "</button>";
        }).join("") + "</div></div>";
    }).join("") + "</div>";
  } else {
    optsHtml = '<ul class="opts">' + q.options.map(function(o, k){
      return "<li><button class=\"opt\" data-i=\"" + k + "\">" +
        '<span class="key">' + esc(o.key) + "</span>" +
        '<span class="body' + (looksSql(o.text) ? " sql" : "") + '">' +
          (o.text ? mdInline(o.text) : "") + (o.lines.length ? mdBlock(o.lines) : "") +
        "</span>" +
        '<span class="mark" aria-hidden="true"></span>' +
      "</button></li>";
    }).join("") + "</ul>";
  }

  app.innerHTML =
    '<section class="card pad" style="margin-top:1.6rem">' +
      '<div class="q-head">' +
        '<span class="n">' + esc(q.label) + "</span>" +
        '<span class="rule"></span>' +
        '<span class="eyebrow">' + (TYPE_LABEL[q.type] || "") + "</span>" +
      "</div>" +
      '<div class="statement">' + mdBlock(stripEnunciado(q.statement)) + "</div>" +
      optsHtml +
      '<div id="fb"></div>' +
      '<div class="row-end" id="actions"></div>' +
      '<p class="hint">Elegí con <kbd>1</kbd>&ndash;<kbd>9</kbd>, continuá con <kbd>Enter</kbd>. No se puede volver atrás.</p>' +
    "</section>";
  window.scrollTo(0, 0);

  if (q.type === "match"){
    Array.prototype.forEach.call(app.querySelectorAll(".tile"), function(t){
      t.onclick = function(){
        if (S.answered) return;
        var g = t.dataset.g;
        Array.prototype.forEach.call(app.querySelectorAll('.tile[data-g="' + g + '"]'), function(x){
          x.setAttribute("aria-pressed", "false");
        });
        t.setAttribute("aria-pressed", "true");
        S.matchPick[g] = Number(t.dataset.c);
        renderActions();
      };
    });
  } else {
    Array.prototype.forEach.call(app.querySelectorAll(".opt"), function(b){
      b.onclick = function(){
        if (S.answered) return;
        S.pick = Number(b.dataset.i);
        if (q.type === "multi"){ b.classList.toggle("picked"); renderActions(); }
        else { answer(); }
      };
    });
  }
  renderActions();
}

function stripEnunciado(lines){
  var c = (lines || []).slice();
  for (var i = 0; i < c.length; i++){
    if (c[i].trim() === "") continue;
    c[i] = c[i].replace(/^\s*\*\*Enunciado:?\*\*\s*/, "");
    break;
  }
  return c;
}

function renderActions(){
  var q = S.order[S.idx];
  var box = document.getElementById("actions");
  if (!box) return;
  if (S.answered){
    var last = S.idx === S.order.length - 1;
    box.innerHTML = '<button class="btn" id="next">' + (last ? "Ver resultado" : "Siguiente") + " &rarr;</button>";
    var nb = document.getElementById("next");
    nb.onclick = next;
    nb.focus({ preventScroll: true });
    return;
  }
  if (q.type === "match"){
    var done = Object.keys(S.matchPick).length === q.options.length;
    box.innerHTML = '<button class="btn" id="check"' + (done ? "" : " disabled") + ">Responder</button>";
    if (done) document.getElementById("check").onclick = answer;
    return;
  }
  if (q.type === "multi"){
    box.innerHTML = '<button class="btn" id="check">Responder</button>';
    document.getElementById("check").onclick = answer;
    return;
  }
  box.innerHTML = "";
}

function answer(){
  var q = S.order[S.idx];
  var correct = false, picked = null;

  if (q.type === "match"){
    correct = q.options.every(function(o, gi){
      var c = o.children[S.matchPick[gi]];
      return !!(c && c.correct);
    });
    Array.prototype.forEach.call(app.querySelectorAll(".tile"), function(t){
      var o = q.options[Number(t.dataset.g)];
      var c = o.children[Number(t.dataset.c)];
      var chosen = S.matchPick[t.dataset.g] === Number(t.dataset.c);
      t.classList.add("locked");
      t.setAttribute("aria-pressed", "false");
      if (c.correct) t.classList.add("is-ok");
      else if (chosen) t.classList.add("is-bad");
    });
    picked = q.options.map(function(o, gi){
      var c = o.children[S.matchPick[gi]];
      return o.text + ": " + (c ? c.text : "—");
    }).join(" · ");
  } else if (q.type === "multi"){
    var chosen = Array.prototype.map.call(app.querySelectorAll(".opt.picked"), function(b){ return Number(b.dataset.i); });
    correct = q.options.every(function(o, i){ return o.correct === (chosen.indexOf(i) !== -1); });
    picked = chosen.map(function(i){ return q.options[i].key.toUpperCase(); }).join(", ");
    lockOptions(q, chosen, false);
  } else if (q.type === "selfgrade"){
    picked = q.options[S.pick].key.toUpperCase();
    lockOptions(q, [S.pick], true);
  } else {
    correct = !!q.options[S.pick].correct;
    picked = q.options[S.pick].key.toUpperCase();
    lockOptions(q, [S.pick], false);
  }

  S.answered = true;

  if (q.type === "selfgrade"){
    document.getElementById("fb").innerHTML =
      '<div class="feedback">' +
        '<div class="verdict"><span aria-hidden="true">●</span> Compará con la respuesta correcta</div>' +
        '<div class="reveal">' + mdBlock(q.reveal) + "</div>" +
        (q.note.length ? mdBlock(q.note) : "") +
      "</div>";
    document.getElementById("actions").innerHTML =
      '<button class="btn btn-ghost" id="sgBad">Fallé</button>' +
      '<button class="btn" id="sgOk">Acerté</button>';
    document.getElementById("sgOk").onclick = function(){ finishAnswer(q, true, picked); };
    document.getElementById("sgBad").onclick = function(){ finishAnswer(q, false, picked); };
    return;
  }
  finishAnswer(q, correct, picked);
}

function lockOptions(q, chosen, hideMarks){
  Array.prototype.forEach.call(app.querySelectorAll(".opt"), function(b){
    var i = Number(b.dataset.i);
    var o = q.options[i];
    b.classList.add("locked");
    b.classList.remove("picked");
    if (hideMarks){
      if (chosen.indexOf(i) !== -1) b.classList.add("picked");
      return;
    }
    if (o.correct){ b.classList.add("is-ok"); b.querySelector(".mark").textContent = "✓"; }
    else if (chosen.indexOf(i) !== -1){ b.classList.add("is-bad"); b.querySelector(".mark").textContent = "✕"; }
    else b.classList.add("dim");
  });
}

function finishAnswer(q, correct, picked){
  S.answers.push({ q: q, correct: correct, picked: picked });
  S.answered = true;
  var fb = document.getElementById("fb");
  if (q.type === "selfgrade"){
    var v = fb.querySelector(".verdict");
    v.className = "verdict " + (correct ? "ok" : "bad");
    v.innerHTML = '<span aria-hidden="true">' + (correct ? "✓" : "✕") + "</span> " +
      (correct ? "Marcada como acierto" : "Marcada como fallo");
  } else {
    var right = q.type === "match"
      ? q.options.map(function(o){
          var c = o.children.filter(function(x){ return x.correct; })[0];
          return o.text + ": " + (c ? c.text : "");
        }).join(" · ")
      : q.options.filter(function(o){ return o.correct; }).map(function(o){ return o.key.toUpperCase(); }).join(", ");
    fb.innerHTML =
      '<div class="feedback">' +
        '<div class="verdict ' + (correct ? "ok" : "bad") + '">' +
          '<span aria-hidden="true">' + (correct ? "✓" : "✕") + "</span>" +
          (correct ? "Correcto" : "Incorrecto — la respuesta es " + esc(right).replace(/\*\*/g, "")) +
        "</div>" +
        (q.reveal.length ? '<div class="reveal">' + mdBlock(q.reveal) + "</div>" : "") +
        (q.note.length ? mdBlock(q.note) : "") +
      "</div>";
  }
  updateBar();
  renderActions();
}

function next(){
  if (S.idx === S.order.length - 1){ renderResult(); return; }
  S.idx++;
  renderQuestion();
}

/* ----------------------------- resultado ----------------------------- */
function renderResult(){
  var s = stats();
  var pct = Math.round(s.ok / s.total * 1000) / 10;
  var pass = s.ok / s.total >= PASS;
  var need = Math.ceil(PASS * s.total);
  var misses = S.answers.filter(function(a){ return !a.correct; });
  document.getElementById("barPos").textContent = s.total + " de " + s.total + " respondidas";

  app.innerHTML =
    '<section class="card pad" style="margin-top:1.6rem">' +
      '<span class="eyebrow">Resultado del intento</span>' +
      '<div class="score-head" style="margin-top:.6rem">' +
        '<div class="score-big ' + (pass ? "ok" : "bad") + '">' + pct + "%</div>" +
        '<div class="score-meta">' +
          '<span class="verdict-chip ' + (pass ? "chip-ok" : "chip-bad") + '">' + (pass ? "Aprobado" : "Reprobado") + "</span>" +
          '<span style="color:var(--text-dim); font-size:13.5px">Se aprueba con 60% — ' + need + " de " + s.total + " preguntas</span>" +
        "</div>" +
      "</div>" +
      '<div class="tally">' +
        '<div><div class="v num ok">' + s.ok + '</div><span class="eyebrow">Aciertos</span></div>' +
        '<div><div class="v num bad">' + s.bad + '</div><span class="eyebrow">Fallos</span></div>' +
        '<div><div class="v num">' + s.total + '</div><span class="eyebrow">Respondidas</span></div>' +
        '<div><div class="v num">' + (pass ? "+" : "−") + Math.abs(s.ok - need) + '</div><span class="eyebrow">' + (pass ? "Sobre el corte" : "Bajo el corte") + "</span></div>" +
      "</div>" +
      '<div class="row-end">' +
        '<button class="btn btn-ghost" id="again2">Cambiar base</button>' +
        '<button class="btn" id="again">Reintentar (nuevo orden)</button>' +
      "</div>" +
    "</section>" +
    (misses.length ?
      '<section class="review">' +
        "<h2>Para repasar</h2>" +
        '<p class="sub">' + misses.length + (misses.length === 1 ? " pregunta fallada." : " preguntas falladas.") + "</p>" +
        misses.map(function(a){
          return '<details class="miss">' +
            '<summary><span class="qn">' + esc(a.q.label.replace(/^Pregunta\s*/i, "#")) + '</span>' +
            '<span class="txt">' + mdInline(firstLine(a.q)) + "</span></summary>" +
            '<div class="miss-body">' +
              '<div class="statement" style="font-size:15px">' + mdBlock(stripEnunciado(a.q.statement)) + "</div>" +
              '<div class="ans-line"><span class="tag tag-bad">Tu respuesta</span><span>' + esc(a.picked || "—") + "</span></div>" +
              '<div class="ans-line"><span class="tag tag-ok">Correcta</span><span>' + answerHtml(a.q) + "</span></div>" +
            "</div></details>";
        }).join("") +
      "</section>"
    : "");

  document.getElementById("again").onclick = beginAttempt;
  document.getElementById("again2").onclick = function(){ renderSetup(); };
  window.scrollTo(0, 0);
}

function firstLine(q){
  var lines = stripEnunciado(q.statement).filter(function(l){ return l.trim() !== ""; });
  var t = lines.length ? lines[0] : q.label;
  return t.length > 130 ? t.slice(0, 130) + "…" : t;
}

function answerHtml(q){
  if (q.type === "match"){
    return q.options.map(function(o){
      var c = o.children.filter(function(x){ return x.correct; })[0];
      return "<strong>" + mdInline(o.text) + "</strong> " + mdInline(c ? c.text : "");
    }).join("<br>");
  }
  if (q.type === "selfgrade") return mdBlock(q.reveal);
  return q.options.filter(function(o){ return o.correct; }).map(function(o){
    return '<strong class="mono">' + esc(o.key.toUpperCase()) + ".</strong> " +
      (o.text ? mdInline(o.text) : "") + (o.lines.length ? mdBlock(o.lines) : "");
  }).join("<br>");
}

/* ----------------------------- teclado ------------------------------- */
document.addEventListener("keydown", function(e){
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (S.answered && (e.key === "Enter" || e.key === " ")){
    var nb = document.getElementById("next");
    if (nb){ e.preventDefault(); nb.click(); }
    return;
  }
  if (!S.order.length || S.answered) return;
  var n = Number(e.key);
  if (n >= 1 && n <= 9){
    var list = app.querySelectorAll(".opt");
    if (!list.length) list = app.querySelectorAll(".tile");
    var b = list[n - 1];
    if (b){ e.preventDefault(); b.click(); }
  }
});

/* ------------------------------- tema -------------------------------- */
var ICON_SUN = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
var ICON_MOON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
var darkMq = window.matchMedia("(prefers-color-scheme: dark)");
var themeBtn = document.getElementById("themeBtn");

// sin elección guardada sigue al sistema
function currentTheme(){ return document.documentElement.dataset.theme || (darkMq.matches ? "dark" : "light"); }
function syncThemeBtn(){
  var dark = currentTheme() === "dark";
  themeBtn.innerHTML = dark ? ICON_SUN : ICON_MOON;
  themeBtn.setAttribute("aria-label", dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
  themeBtn.title = themeBtn.getAttribute("aria-label");
}
themeBtn.onclick = function(){
  var t = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("theme", t); } catch(e){}
  syncThemeBtn();
};
darkMq.addEventListener("change", syncThemeBtn);
syncThemeBtn();

boot();
