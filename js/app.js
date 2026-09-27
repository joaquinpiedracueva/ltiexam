"use strict";

/* ----------------------------- estado ------------------------------- */
var S = { db: null, count: null, sem: null, mat: null, loading: false, order: [], idx: 0, answers: [], pick: null, answered: false, matchPick: {} };
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
// Se dispara al elegir la materia: trae el banco y habilita «Empezar».
function loadPreset(){
  var sem = S.sem, mat = S.mat, file = CATALOG[sem].materias[mat].file;
  S.db = null; S.count = null; S.loading = true;
  renderSetup();
  fetch(file)
    .then(function(r){
      if (!r.ok) throw new Error("No se pudo cargar " + file + " (" + r.status + ").");
      return r.text();
    })
    .then(function(text){
      var db = parseDB(text);
      if (!db.questions.length) throw new Error("No se encontró ninguna pregunta en " + file + ".");
      if (sem !== S.sem || mat !== S.mat) return; // cambió la selección mientras cargaba
      S.db = db; S.loading = false;
      renderSetup();
    })
    .catch(function(err){
      if (sem !== S.sem || mat !== S.mat) return;
      S.loading = false;
      renderSetup(location.protocol === "file:"
        ? "La página tiene que abrirse desde un servidor (no con doble clic), por ejemplo con python3 -m http.server."
        : err.message);
    });
}

function boot(){ renderSetup(); }

/* --------------------------- pantalla inicio ------------------------- */
// Un solo formulario: semestre → materia (carga el banco) → cantidad → Empezar.
function renderSetup(msg){
  bar.hidden = true;
  var n = S.db ? S.db.questions.length : 0;
  if (n) S.count = clampCount(S.count, n);
  var hasSem = S.sem !== null;

  // la primera opción es el placeholder: vacía y deshabilitada, así el select queda :invalid hasta elegir
  function opts(list, sel, placeholder){
    return '<option value="" disabled' + (sel === null ? " selected" : "") + ">" + placeholder + "</option>" +
      list.map(function(x, i){
        var empty = x.materias && !x.materias.length; // semestre todavía sin bancos
        return '<option value="' + i + '"' + (i === sel ? " selected" : "") + (empty ? " disabled" : "") + ">" +
          esc(x.label) + (empty ? " — próximamente" : "") + "</option>";
      }).join("");
  }

  app.innerHTML =
    '<section class="setup">' +
      '<form class="picker" id="picker" novalidate>' +
        '<label class="pk-field"><span class="eyebrow">Semestre</span>' +
          '<span class="select-wrap"><select id="semSel" required>' + opts(CATALOG, S.sem, "Seleccionar") + "</select></span></label>" +
        '<label class="pk-field"><span class="eyebrow">Materia</span>' +
          '<span class="select-wrap"><select id="matSel" required' + (hasSem ? "" : " disabled") + ">" +
            opts(hasSem ? CATALOG[S.sem].materias : [], S.mat, "Seleccionar") + "</select></span></label>" +
        '<div class="pk-field">' +
          '<span class="pk-label"><label class="eyebrow" for="count">Preguntas</label>' +
            '<button type="button" class="btn-link" id="allBtn"' + (n && S.count < n ? "" : " hidden") + ">Todas</button></span>" +
          '<span class="count-wrap">' +
            '<input type="number" id="count" inputmode="numeric" min="1" step="1"' +
              (n ? ' max="' + n + '" value="' + S.count + '"' : ' disabled placeholder="—"') + ">" +
            (n ? '<span class="count-of">de ' + n + "</span>" : "") +
          "</span>" +
        "</div>" +
        '<button type="submit" class="btn" id="start"' + (S.db ? "" : " disabled") + ">" + (S.loading ? "Cargando…" : "Empezar") + "</button>" +
      "</form>" +
      (msg ? '<p class="err">' + esc(msg) + "</p>" : "") +
    "</section>";

  document.getElementById("semSel").onchange = function(){
    S.sem = Number(this.value); S.mat = null; S.db = null; S.loading = false;
    renderSetup();
  };
  document.getElementById("matSel").onchange = function(){ S.mat = Number(this.value); loadPreset(); };

  var countBox = document.getElementById("count");
  var allBtn = document.getElementById("allBtn");
  function syncAll(){ allBtn.hidden = !(n && S.count < n); }
  countBox.oninput = function(){
    var v = Math.floor(Number(countBox.value));
    if (countBox.value !== "" && isFinite(v) && v >= 1){ S.count = Math.min(v, n); syncAll(); }
  };
  countBox.onchange = function(){ S.count = clampCount(countBox.value, n); countBox.value = S.count; syncAll(); };
  allBtn.onclick = function(){ S.count = n; countBox.value = n; syncAll(); };
  // Enter en cualquier campo también envía
  document.getElementById("picker").onsubmit = function(e){
    e.preventDefault();
    if (!S.db) return;
    S.count = clampCount(countBox.value, n);
    beginAttempt();
  };
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
  else {
    var need = Math.ceil(PASS * s.total) - s.ok;
    chip.classList.add("chip-live");
    chip.textContent = need === 1 ? "Falta 1 acierto" : "Faltan " + need + " aciertos";
  }
}

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
    '<section>' +
      '<div class="statement">' + mdBlock(stripEnunciado(q.statement)) + "</div>" +
      optsHtml +
      '<div id="fb"></div>' +
      '<div class="row-end" id="actions"></div>' +
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
  } else if (q.reveal.length || q.note.length){
    // el acierto/fallo ya se ve en el color de las opciones; solo se agrega la explicación del banco, si hay
    fb.innerHTML =
      '<div class="explain">' +
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
    '<section>' +
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
        '<button class="btn btn-ghost" id="again2">Cambiar examen</button>' +
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

/* --------------------------- navegación ------------------------------ */
// examen empezado y sin terminar
function inAttempt(){ return !bar.hidden && S.answers.length < S.order.length; }

// el logo vuelve al selector sin recargar (conserva semestre y materia)
document.querySelector(".brand").onclick = function(e){
  e.preventDefault();
  if (inAttempt() && !confirm("¿Salir del examen? Se pierde el progreso de este intento.")) return;
  S.order = []; S.answered = false;
  renderSetup();
};

/* ----------------------------- teclado ------------------------------- */
// Enter / espacio pasan a la siguiente pregunta una vez respondida
document.addEventListener("keydown", function(e){
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (S.answered && (e.key === "Enter" || e.key === " ")){
    var nb = document.getElementById("next");
    if (nb){ e.preventDefault(); nb.click(); }
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
