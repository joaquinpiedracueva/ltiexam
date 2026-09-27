"use strict";

/* ----------------------------- estado ------------------------------- */
var S = { db: null, count: null, minutes: null, sem: null, mat: null, loading: false, finished: false, timedOut: false, deadline: 0, order: [], idx: 0, answers: [], pick: null, answered: false, matchPick: {} };
var app = document.getElementById("app");
var bar = document.getElementById("bar");
var qnav = document.getElementById("qnav");
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
  document.querySelector("#matDd .dd-btn").focus(); // el formulario se redibuja: no perder el foco
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
      document.getElementById("start").focus(); // listo: Enter empieza
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

// vacío, 0 o basura = sin límite; si no, entre 1 y 600 minutos
function readMinutes(v){
  v = Math.floor(Number(v));
  if (!isFinite(v) || v < 1) return null;
  return Math.min(v, 600);
}

/* ---------------------------- desplegables --------------------------- */
// Reemplazo del <select> nativo con el estilo de la página. Teclado: flechas, Home/End,
// Enter/espacio para elegir, Esc o Tab para cerrar. items: [{ label, disabled, note }].
function dropdownHtml(id, label, items, sel, placeholder, disabled){
  var cur = sel !== null && items[sel] ? items[sel].label : null;
  return '<div class="pk-field">' +
    '<span class="eyebrow" id="' + id + 'Lbl">' + label + "</span>" +
    '<div class="dd" id="' + id + '">' +
      '<button type="button" class="dd-btn" aria-haspopup="listbox" aria-expanded="false"' +
        ' aria-labelledby="' + id + 'Lbl ' + id + 'Val"' + (disabled ? " disabled" : "") + ">" +
        '<span class="dd-val' + (cur ? "" : " empty") + '" id="' + id + 'Val">' + esc(cur || placeholder) + "</span>" +
      "</button>" +
      '<ul class="dd-list" role="listbox" aria-labelledby="' + id + 'Lbl" hidden>' +
        items.map(function(x, i){
          return '<li role="option" id="' + id + "-" + i + '" data-i="' + i + '"' +
            ' aria-selected="' + (i === sel) + '"' + (x.disabled ? ' aria-disabled="true"' : "") + ">" +
            '<span>' + esc(x.label) + "</span>" + (x.note ? '<small>' + esc(x.note) + "</small>" : "") + "</li>";
        }).join("") +
      "</ul>" +
    "</div>" +
  "</div>";
}

function bindDropdown(id, onPick){
  var root = document.getElementById(id);
  var btn = root.querySelector(".dd-btn");
  var list = root.querySelector(".dd-list");
  var opts = Array.prototype.slice.call(list.children);
  var active = -1;

  function enabled(i){ return opts[i] && opts[i].getAttribute("aria-disabled") !== "true"; }
  function setActive(i){
    if (active >= 0) opts[active].classList.remove("active");
    active = i;
    if (i < 0){ btn.removeAttribute("aria-activedescendant"); return; }
    opts[i].classList.add("active");
    btn.setAttribute("aria-activedescendant", opts[i].id);
    opts[i].scrollIntoView({ block: "nearest" });
  }
  function step(from, dir){
    for (var i = from + dir; i >= 0 && i < opts.length; i += dir) if (enabled(i)) return i;
    return from;
  }
  function open(){
    if (btn.disabled || !list.hidden) return;
    closeDropdowns();
    list.hidden = false; btn.setAttribute("aria-expanded", "true"); root.classList.add("open");
    var sel = opts.findIndex(function(o){ return o.getAttribute("aria-selected") === "true"; });
    setActive(sel >= 0 ? sel : step(-1, 1));
  }
  function close(){
    list.hidden = true; btn.setAttribute("aria-expanded", "false"); root.classList.remove("open");
    setActive(-1);
  }
  function pick(i){ if (!enabled(i)) return; close(); btn.focus(); onPick(i); }
  root._close = close;

  btn.onclick = function(){ list.hidden ? open() : close(); };
  btn.onkeydown = function(e){
    var isOpen = !list.hidden;
    if (e.key === "ArrowDown" || e.key === "ArrowUp"){
      e.preventDefault();
      if (!isOpen) return open();
      setActive(step(active, e.key === "ArrowDown" ? 1 : -1));
    } else if (e.key === "Home" && isOpen){ e.preventDefault(); setActive(step(-1, 1)); }
    else if (e.key === "End" && isOpen){ e.preventDefault(); setActive(step(opts.length, -1)); }
    else if ((e.key === "Enter" || e.key === " ") && isOpen){ e.preventDefault(); pick(active); }
    else if (e.key === "Escape" && isOpen){ e.preventDefault(); close(); }
    else if (e.key === "Tab" && isOpen){ close(); }
  };
  opts.forEach(function(o, i){
    o.onmousedown = function(e){ e.preventDefault(); }; // no robarle el foco al botón
    o.onclick = function(){ pick(i); };
    o.onmousemove = function(){ if (enabled(i) && active !== i) setActive(i); };
  });
}

function closeDropdowns(){
  Array.prototype.forEach.call(document.querySelectorAll(".dd.open"), function(d){ d._close(); });
}
// clic afuera cierra
document.addEventListener("mousedown", function(e){ if (!e.target.closest(".dd")) closeDropdowns(); });

/* --------------------------- pantalla inicio ------------------------- */
// Un solo formulario: semestre → materia (carga el banco) → cantidad → Empezar.
function renderSetup(msg){
  stopTimer();
  dropEditor();
  S.attempt = (S.attempt || 0) + 1; // una comprobación que vuelva tarde ya no cuenta
  bar.hidden = true;
  qnav.hidden = true;
  var n = S.db ? S.db.questions.length : 0;
  if (n) S.count = clampCount(S.count, n);
  var hasSem = S.sem !== null;

  var semItems = CATALOG.map(function(x){
    var empty = !x.materias.length; // semestre todavía sin bancos
    return { label: x.label, disabled: empty };
  });
  var matItems = hasSem ? CATALOG[S.sem].materias.map(function(m){ return { label: m.label }; }) : [];

  app.innerHTML =
    '<section class="setup">' +
      '<form class="picker" id="picker" novalidate>' +
        dropdownHtml("semDd", "Semestre", semItems, S.sem, "Seleccionar", false) +
        dropdownHtml("matDd", "Materia", matItems, S.mat, "Seleccionar", !hasSem) +
        '<div class="pk-field">' +
          '<span class="pk-label"><label class="eyebrow" for="count">Preguntas</label></span>' +
          '<span class="count-wrap">' +
            '<input type="number" id="count" inputmode="numeric" min="1" step="1"' +
              (n ? ' max="' + n + '" value="' + S.count + '"' : ' disabled placeholder="-"') + ">" +
            (n ? '<span class="count-of">de ' + n + "</span>" : "") +
          "</span>" +
        "</div>" +
        '<div class="pk-field">' +
          '<span class="pk-label"><label class="eyebrow" for="minutes">Tiempo</label></span>' +
          '<span class="count-wrap">' +
            '<input type="number" id="minutes" inputmode="numeric" min="1" max="600" step="1" placeholder="-"' +
              (S.minutes ? ' value="' + S.minutes + '"' : "") + ">" +
            '<span class="count-of">min</span>' +
          "</span>" +
        "</div>" +
        '<button type="submit" class="btn" id="start"' + (S.db ? "" : " disabled") + ">" + (S.loading ? "Cargando…" : "Empezar") + "</button>" +
      "</form>" +
      (msg ? '<p class="err">' + esc(msg) + "</p>" : "") +
    "</section>";

  bindDropdown("semDd", function(i){
    if (i === S.sem) return;
    S.sem = i; S.mat = null; S.db = null; S.loading = false;
    renderSetup();
    document.querySelector("#matDd .dd-btn").focus(); // seguir con la materia
  });
  bindDropdown("matDd", function(i){
    if (i === S.mat && S.db) return;
    S.mat = i; loadPreset();
  });

  var countBox = document.getElementById("count");
  countBox.oninput = function(){
    var v = Math.floor(Number(countBox.value));
    if (countBox.value !== "" && isFinite(v) && v >= 1) S.count = Math.min(v, n);
  };
  countBox.onchange = function(){ S.count = clampCount(countBox.value, n); countBox.value = S.count; };
  // Enter en cualquier campo también envía
  document.getElementById("picker").onsubmit = function(e){
    e.preventDefault();
    if (!S.db) return;
    S.count = clampCount(countBox.value, n);
    S.minutes = readMinutes(document.getElementById("minutes").value);
    beginAttempt();
  };
}

/* ------------------------------ intento ------------------------------ */
// pool: preguntas puntuales (p. ej. las falladas); sin pool, el examen completo según la cantidad elegida
function beginAttempt(pool){
  var all = shuffle(pool || S.db.questions);
  var n = pool ? all.length : clampCount(S.count, all.length);
  S.order = all.slice(0, n).map(shuffleOptions);
  S.review = !!pool;
  // answers[i] y drafts[i] van por posición en el intento, así se puede ir y volver entre preguntas
  S.idx = 0; S.answers = []; S.drafts = []; S.pick = null; S.answered = false; S.matchPick = {};
  S.finished = false; S.finishing = false; S.timedOut = false; S.attempt = (S.attempt || 0) + 1;
  document.getElementById("barTitle").textContent = S.db.title + (S.review ? " · falladas" : "");
  bar.hidden = false;
  qnav.hidden = false;
  if (S.order.some(function(q){ return q.type === "code"; })) CR.init().catch(function(){}); // el error se muestra al comprobar
  startTimer();
  renderQuestion();
}

/* ------------------------ mezclar alternativas ------------------------ */
// Opciones que nombran a otras por letra o posición: mezclarlas rompería el sentido.
var REFS_OTHERS = /\(\s*[a-e]\s*(?:y|,|e|o)\s*[a-e]\s*\)|\b(?:las|todas las|ninguna de las)\s+(?:opciones\s+)?anteriores\b|\b(?:opci[oó]n|alternativa)\s+\(?[a-e]\)?(?![\wáéíóú])/i;

// Copia de la pregunta con las alternativas en orden aleatorio y las letras reasignadas por
// posición (a, b, c…), así lo que se ve, «tu respuesta» y «correcta» usan la misma letra.
function shuffleOptions(q){
  if (q.type === "code") return q;
  if (q.type === "match"){
    return Object.assign({}, q, { options: q.options.map(function(o){
      return Object.assign({}, o, { children: shuffle(o.children) });
    }) });
  }
  if (q.options.some(function(o){ return REFS_OTHERS.test(o.text); })) return q;
  var letters = /^[a-z]$/.test(q.options[0].key);
  return Object.assign({}, q, { options: shuffle(q.options).map(function(o, i){
    return Object.assign({}, o, { key: letters ? String.fromCharCode(97 + i) : String(i + 1) });
  }) });
}

/* ------------------------------ tiempo ------------------------------- */
var timerId = null;
var timeWrap = document.getElementById("statTimeWrap");
var timeOut = document.getElementById("statTime");

function startTimer(){
  stopTimer();
  timeWrap.hidden = !S.minutes;
  if (!S.minutes) return;
  S.deadline = Date.now() + S.minutes * 60000;
  tick();
  timerId = setInterval(tick, 250);
}

function stopTimer(){
  if (timerId){ clearInterval(timerId); timerId = null; }
}

// se calcula contra la hora de fin, así no se atrasa si la pestaña queda en segundo plano
function tick(){
  var left = Math.max(0, S.deadline - Date.now());
  var sec = Math.ceil(left / 1000);
  var h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), ss = sec % 60;
  timeOut.textContent = (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(ss).padStart(2, "0");
  timeWrap.classList.toggle("low", sec <= 60);
  if (left <= 0){ S.timedOut = true; finish(); }
}

// Cada respuesta vale de 0 a 1: las de opción múltiple 1 o 0, un CodeRunner 1 menos 0,1 por comprobación fallida.
// «Aciertos» cuenta las que sumaron algo; el porcentaje y el aprobado usan los puntos.
function stats(){
  var total = S.order.length;
  var done = S.answers.filter(Boolean);
  var ok = done.filter(function(a){ return a.correct; }).length;
  var pts = done.reduce(function(t, a){ return t + a.score; }, 0);
  return { total: total, ok: ok, bad: done.length - ok, answered: done.length, left: total - done.length, pts: pts };
}

// 2,5 / 3 (con coma, un decimal si hace falta)
function fmtPts(x){ return String(Math.round(x * 10) / 10).replace(".", ","); }

function updateBar(){
  var s = stats();
  document.getElementById("barPos").textContent = "Pregunta " + Math.min(S.idx + 1, s.total) + " de " + s.total;
  document.getElementById("statOk").textContent = s.ok;
  document.getElementById("statBad").textContent = s.bad;
  document.getElementById("statPct").textContent = s.answered ? Math.round(s.pts / s.answered * 100) + "%" : "0%";
  document.getElementById("mOk").style.width = (s.pts / s.total * 100) + "%";
  document.getElementById("mBad").style.width = ((s.answered - s.pts) / s.total * 100) + "%";
  var chip = document.getElementById("statChip");
  chip.className = "verdict-chip";
  if (!s.answered){ chip.classList.add("chip-live"); chip.textContent = "Sin responder"; }
  else if (s.pts / s.total >= PASS - 1e-9){ chip.classList.add("chip-ok"); chip.textContent = "Aprobado asegurado"; }
  else if ((s.pts + s.left) / s.total < PASS - 1e-9){ chip.classList.add("chip-bad"); chip.textContent = "Ya no alcanza"; }
  else {
    var need = PASS * s.total - s.pts;
    chip.classList.add("chip-live");
    if (Math.abs(s.pts - Math.round(s.pts)) > 1e-9){ // hay un CodeRunner con penalización
      chip.textContent = "Faltan " + fmtPts(Math.ceil(need * 10 - 1e-9) / 10) + " puntos";
    } else {
      need = Math.ceil(need - 1e-9);
      chip.textContent = need === 1 ? "Falta 1 acierto" : "Faltan " + need + " aciertos";
    }
  }
}

function renderQuestion(){
  var q = S.order[S.idx];
  dropEditor();
  renderNav();
  if (q.type === "code") return renderCode(q);
  S.pick = null; S.answered = false; S.matchPick = {};
  updateBar();
  var done = S.answers[S.idx];
  if (done){ // ya respondida: se muestra como quedó, sin poder cambiarla
    S.answered = true;
    app.innerHTML = done.html;
    window.scrollTo(0, 0);
    renderActions();
    return;
  }

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
    box.innerHTML = '<button class="btn" id="next">' + (isLast() ? "Ver resultado" : "Siguiente") + " &rarr;</button>";
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
      return o.text + ": " + (c ? c.text : "-");
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
  var a = S.answers[S.idx] = { q: q, correct: correct, picked: picked, score: correct ? 1 : 0 };
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
  // copia de cómo quedó la pregunta, para mostrarla igual si se vuelve a ella
  var snap = app.firstElementChild.cloneNode(true);
  snap.querySelector("#actions").innerHTML = "";
  a.html = snap.outerHTML;
  updateBar();
  renderNav();
  renderActions();
}

/* ---------------------------- navegación ----------------------------- */
// sin responder, sin contar la actual
function othersLeft(){
  return S.order.filter(function(q, i){ return i !== S.idx && !S.answers[i]; }).length;
}

// última pregunta y no queda otra por responder: el botón pasa a «Ver resultado»
function isLast(){ return S.idx === S.order.length - 1 && !othersLeft(); }

// sigue en orden; desde la última vuelve a la primera sin responder
function next(){
  if (S.idx < S.order.length - 1) return goTo(S.idx + 1);
  for (var i = 0; i < S.order.length; i++) if (i !== S.idx && !S.answers[i]) return goTo(i);
  finishAsk();
}

function goTo(i){
  if (S.finishing || S.finished) return;
  S.idx = i;
  renderQuestion();
}

// cuadros de navegación: verde acertada, rojo fallada, borde celeste la actual
function renderNav(){
  document.getElementById("qnavGrid").innerHTML = S.order.map(function(q, i){
    var a = S.answers[i], cur = i === S.idx;
    return '<button type="button" class="qn-sq' + (a ? (a.correct ? " ok" : " bad") : "") + (cur ? " cur" : "") + '" data-i="' + i + '"' +
      ' aria-label="Pregunta ' + (i + 1) + (a ? (a.correct ? ", acertada" : ", fallada") : "") + '"' + (cur ? ' aria-current="step"' : "") + ">" + (i + 1) + "</button>";
  }).join("");
}
document.getElementById("qnavGrid").onclick = function(e){
  var b = e.target.closest(".qn-sq");
  if (b) goTo(Number(b.dataset.i));
};
document.getElementById("finishBtn").onclick = function(){ finishAsk(); };

function finishAsk(){
  saveDraft();
  // el código escrito cuenta como respuesta: se califica al terminar
  var left = S.order.filter(function(q, i){
    var d = S.drafts[i];
    return !S.answers[i] && !(d && (d.lastChecked !== null || d.code !== q.template));
  }).length;
  if (left && !confirm(left === 1 ? "Queda 1 pregunta sin responder. ¿Terminar el intento?" : "Quedan " + left + " preguntas sin responder. ¿Terminar el intento?")) return;
  finish();
}

// Termina el intento. Como Moodle al enviar: el código que quedó escrito sin comprobar se califica ahora.
function finish(){
  if (S.finishing || S.finished) return;
  S.finishing = true;
  stopTimer();
  saveDraft();
  var attempt = S.attempt;
  var todo = S.order.map(function(q, i){ return i; }).filter(function(i){
    return S.order[i].type === "code" && !S.answers[i] && S.drafts[i];
  });
  if (!todo.length) return renderResult();
  dropEditor();
  app.innerHTML = '<section><p class="cr-status">Calificando el código…</p></section>';
  todo.reduce(function(chain, i){
    var st = S.drafts[i];
    return chain.then(function(){ return st.pending; }).then(function(){
      if (attempt !== S.attempt || S.answers[i]) return;
      if (st.code === st.lastChecked) return recordCode(i, false); // ya se comprobó así y falló
      if (st.code === S.order[i].template) return; // sin tocar: queda sin responder
      return runCheck(i, true).then(function(pass){ if (!pass) recordCode(i, false); });
    });
  }, Promise.resolve()).then(function(){ if (attempt === S.attempt) renderResult(); });
}

/* ----------------------------- CodeRunner ----------------------------- */
// Como en Moodle: se escribe el código, «Comprobar» lo compila y corre las pruebas, y cada
// comprobación que falla (no compila o alguna salida no coincide) resta 10% de esta pregunta.
// El borrador queda guardado al cambiar de pregunta; al terminar el intento, lo escrito y no
// comprobado se califica con la penalización acumulada.
var PENALTY = 0.1;
var codeEditor = null;

function aceTheme(){ return currentTheme() === "dark" ? "ace/theme/tomorrow_night" : "ace/theme/tomorrow"; }

// Ace (el editor del plugin CodeRunner de Moodle); sin conexión al CDN queda un textarea
function makeEditor(el, value){
  if (window.ace){
    var ed = ace.edit(el, {
      mode: "ace/mode/java", theme: aceTheme(), fontSize: 14, tabSize: 4, useSoftTabs: true,
      showPrintMargin: false, minLines: 14, maxLines: 40, useWorker: false
    });
    ed.session.setValue(value);
    return { ace: ed, get: function(){ return ed.getValue(); }, lock: function(){ ed.setReadOnly(true); }, focus: function(){ ed.focus(); } };
  }
  var ta = document.createElement("textarea");
  ta.className = "cr-plain"; ta.spellcheck = false; ta.value = value;
  el.appendChild(ta);
  return { get: function(){ return ta.value; }, lock: function(){ ta.readOnly = true; }, focus: function(){ ta.focus(); } };
}

function saveDraft(){ if (codeEditor && S.code) S.code.code = codeEditor.get(); }

function dropEditor(){
  saveDraft();
  if (codeEditor && codeEditor.ace) codeEditor.ace.destroy();
  codeEditor = null;
  S.code = null; // una comprobación que vuelva después ya no escribe en esta pantalla
}

function renderCode(q){
  var idx = S.idx;
  var st = S.drafts[idx] || (S.drafts[idx] = { code: q.template, fails: 0, checking: false, lastChecked: null, passed: false, fbHtml: "", pending: null });
  S.code = st;
  S.pick = null; S.answered = st.passed; S.matchPick = {};
  updateBar();
  app.innerHTML =
    '<section>' +
      '<div class="statement">' + mdBlock(stripEnunciado(q.statement)) + "</div>" +
      (q.tests.length ?
        '<div class="scroll-x"><table class="cr-table cr-examples"><thead><tr><th>Prueba</th><th>Resultado</th></tr></thead><tbody>' +
          q.tests.map(function(t){
            return "<tr><td><pre>" + esc(t.code) + "</pre></td><td><pre>" + esc(t.expected) + "</pre></td></tr>";
          }).join("") +
        "</tbody></table></div>" : "") +
      '<div class="cr-editor" id="editor"></div>' +
      '<div id="fb">' + (st.checking ? checkingHtml() : st.fbHtml) + "</div>" +
      '<div class="row-end" id="actions"></div>' +
    "</section>";
  window.scrollTo(0, 0);
  codeEditor = makeEditor(document.getElementById("editor"), st.code);
  if (S.answers[idx]) codeEditor.lock();
  renderCodeActions();
}

function checkingHtml(){
  return '<p class="cr-status">' + (CR.warm() ? "Compilando…" : "Preparando Java… la primera vez tarda unos segundos.") + "</p>";
}

function renderCodeActions(){
  var st = S.code, box = document.getElementById("actions");
  if (!box || !st) return;
  if (S.answers[S.idx]) return renderActions(); // «Siguiente» como en las demás
  box.innerHTML =
    '<button class="btn btn-ghost" id="skip">' + (isLast() ? "Terminar" : "Siguiente") + " &rarr;</button>" +
    '<button class="btn" id="crCheck"' + (st.checking ? " disabled" : "") + ">" + (st.checking ? "Comprobando…" : "Comprobar") + "</button>";
  document.getElementById("crCheck").onclick = checkCode;
  document.getElementById("skip").onclick = next;
}

// botón «Comprobar»: se puede cambiar de pregunta mientras compila, el resultado queda en el borrador
function checkCode(){
  var st = S.code;
  saveDraft();
  st.pending = runCheck(S.idx, false).then(function(pass){
    if (S.code === st && !pass){ document.getElementById("fb").innerHTML = st.fbHtml; renderCodeActions(); }
    return pass;
  });
  document.getElementById("fb").innerHTML = checkingHtml();
  renderCodeActions();
}

// Compila y prueba el borrador de la pregunta i. final = calificación al terminar: no suma penalización.
function runCheck(i, final){
  var q = S.order[i], st = S.drafts[i], code = st.code, attempt = S.attempt;
  st.checking = true;
  return CR.check(code, q.tests).then(function(res){
    if (attempt !== S.attempt) return false;
    st.checking = false; st.lastChecked = code;
    var pass = res.compiled && res.results.every(function(r){ return r.pass; });
    if (!pass && !final) st.fails++;
    st.fbHtml = codeResultHtml(q, res, pass, st.fails);
    if (pass) recordCode(i, true);
    return pass;
  }, function(err){
    if (attempt !== S.attempt) return false;
    st.checking = false;
    st.fbHtml = '<p class="err">' + esc(err.message) + "</p>";
    return false;
  });
}

function codeScore(fails){ return Math.max(0, 1 - PENALTY * fails); }

function recordCode(i, pass){
  var st = S.drafts[i];
  st.passed = pass;
  S.answers[i] = { q: S.order[i], correct: pass, picked: st.code, score: pass ? codeScore(st.fails) : 0 };
  if (S.finishing || S.finished) return;
  renderNav();
  updateBar();
  if (S.code === st){ // está en pantalla
    codeEditor.lock();
    document.getElementById("fb").innerHTML = st.fbHtml;
    S.answered = true;
    renderActions();
  }
}

function codeResultHtml(q, res, pass, fails){
  var penalty = fails ? '<p class="cr-penalty">' + (pass
    ? "Puntaje de esta pregunta: " + Math.round(codeScore(fails) * 100) + "% (" + fails + (fails === 1 ? " comprobación fallida" : " comprobaciones fallidas") + ")"
    : "Penalización acumulada: −" + Math.round(Math.min(1, PENALTY * fails) * 100) + "%") + "</p>" : "";
  if (!res.compiled){
    return '<div class="cr-result">' +
      '<div class="verdict bad"><span aria-hidden="true">✕</span> Error de compilación</div>' +
      '<pre class="cr-err">' + esc(res.errors.map(function(e){
        return e.where + (e.line > 0 ? ", línea " + e.line : "") + ": " + e.message;
      }).join("\n\n")) + "</pre>" + penalty + "</div>";
  }
  var failed = res.results.filter(function(r){ return !r.pass; }).length;
  return '<div class="cr-result">' +
    '<div class="verdict ' + (pass ? "ok" : "bad") + '"><span aria-hidden="true">' + (pass ? "✓" : "✕") + "</span> " +
      (pass ? "Pasó todas las pruebas" : "Falló " + failed + " de " + res.results.length + (res.results.length === 1 ? " prueba" : " pruebas")) + "</div>" +
    '<div class="scroll-x"><table class="cr-table"><thead><tr><th></th><th>Prueba</th><th>Esperado</th><th>Obtenido</th></tr></thead><tbody>' +
      res.results.map(function(r, i){
        var got = r.status === "timeout" ? "Tiempo excedido" : r.got;
        return '<tr class="' + (r.pass ? "ok" : "bad") + '"><td class="cr-mark">' + (r.pass ? "✓" : "✕") + "</td>" +
          "<td><pre>" + esc(q.tests[i].code) + "</pre></td><td><pre>" + esc(r.expected) + "</pre></td><td><pre>" + esc(got) + "</pre></td></tr>";
      }).join("") +
    "</tbody></table></div>" + penalty + "</div>";
}

/* ----------------------------- resultado ----------------------------- */
function renderResult(){
  stopTimer();
  dropEditor();
  S.finished = true; S.finishing = false;
  qnav.hidden = true;
  var s = stats();
  var pct = Math.round(s.pts / s.total * 1000) / 10;
  var pass = s.pts / s.total >= PASS - 1e-9;
  var partial = Math.abs(s.pts - s.ok) > 1e-9; // algún CodeRunner con penalización
  var need = Math.ceil(PASS * s.total);
  // falladas y sin responder, en el orden del intento
  var misses = S.order.map(function(q, i){
    return S.answers[i] || { q: q, correct: false, picked: null, skipped: true };
  }).filter(function(a){ return !a.correct; });
  document.getElementById("barPos").textContent = s.answered + " de " + s.total + " respondidas";
  // la barra muestra el veredicto final (si se cortó por tiempo, «Faltan N» ya no aplica)
  var chip = document.getElementById("statChip");
  chip.className = "verdict-chip " + (pass ? "chip-ok" : "chip-bad");
  chip.textContent = pass ? "Aprobado" : "Reprobado";

  app.innerHTML =
    '<section>' +
      '<span class="eyebrow">Resultado del intento</span>' +
      '<div class="score-head" style="margin-top:.6rem">' +
        '<div class="score-big ' + (pass ? "ok" : "bad") + '">' + pct + "%</div>" +
        '<div class="score-meta">' +
          '<span class="verdict-chip ' + (pass ? "chip-ok" : "chip-bad") + '">' + (pass ? "Aprobado" : "Reprobado") + "</span>" +
          (S.timedOut ? '<span class="verdict-chip chip-live">Tiempo agotado</span>' : "") +
          '<span style="color:var(--text-dim); font-size:13.5px">' + (partial ? fmtPts(s.pts) + " de " + s.total + " puntos · " : "") +
            "Se aprueba con 60% - " + need + " de " + s.total + " preguntas</span>" +
        "</div>" +
      "</div>" +
      '<div class="tally">' +
        '<div><div class="v num ok">' + s.ok + '</div><span class="eyebrow">Aciertos</span></div>' +
        '<div><div class="v num bad">' + s.bad + '</div><span class="eyebrow">Fallos</span></div>' +
        '<div><div class="v num">' + s.answered + (s.left ? '<span class="of"> / ' + s.total + "</span>" : "") + '</div><span class="eyebrow">Respondidas</span></div>' +
        '<div><div class="v num">' + (pass ? "+" : "−") + fmtPts(Math.abs(s.pts - need)) + '</div><span class="eyebrow">' + (pass ? "Sobre el corte" : "Bajo el corte") + "</span></div>" +
      "</div>" +
      '<div class="row-end">' +
        '<button class="btn btn-ghost" id="again2">Cambiar examen</button>' +
        (misses.length ? '<button class="btn btn-ghost" id="againMiss">Repetir falladas (' + misses.length + ")</button>" : "") +
        '<button class="btn" id="again">Reintentar (nuevo orden)</button>' +
      "</div>" +
    "</section>" +
    (misses.length ?
      '<section class="review">' +
        "<h2>Para repasar</h2>" +
        '<p class="sub">' + [
          s.bad ? s.bad + (s.bad === 1 ? " fallada" : " falladas") : "",
          s.left ? s.left + " sin responder" : ""
        ].filter(Boolean).join(" y ") + ".</p>" +
        misses.map(function(a){
          return '<details class="miss">' +
            '<summary><span class="qn">' + esc(a.q.label.replace(/^Pregunta\s*/i, "#")) + '</span>' +
            '<span class="txt">' + mdInline(firstLine(a.q)) + "</span></summary>" +
            '<div class="miss-body">' +
              '<div class="statement" style="font-size:15px">' + mdBlock(stripEnunciado(a.q.statement)) + "</div>" +
              '<div class="ans-line"><span class="tag tag-bad">Tu respuesta</span><span>' + (a.skipped ? "Sin responder"
                : a.q.type === "code" ? '<pre><code>' + esc(a.picked) + "</code></pre>" : esc(a.picked || "-")) + "</span></div>" +
              '<div class="ans-line"><span class="tag tag-ok">Correcta</span><span>' + answerHtml(a.q) + "</span></div>" +
            "</div></details>";
        }).join("") +
      "</section>"
    : "");

  document.getElementById("again").onclick = function(){ beginAttempt(); };
  // falladas + sin responder; se vuelven a mezclar orden y alternativas
  if (misses.length) document.getElementById("againMiss").onclick = function(){
    beginAttempt(misses.map(function(a){ return a.q; }));
  };
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
  if (q.type === "code") return '<pre><code>' + esc(q.solution) + "</code></pre>";
  return q.options.filter(function(o){ return o.correct; }).map(function(o){
    return '<strong>' + esc(o.key.toUpperCase()) + ".</strong> " +
      (o.text ? mdInline(o.text) : "") + (o.lines.length ? mdBlock(o.lines) : "");
  }).join("<br>");
}

/* --------------------------- navegación ------------------------------ */
// examen empezado y sin terminar
function inAttempt(){ return !bar.hidden && !S.finished; }

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
  if (e.target.closest && e.target.closest("textarea, input, .ace_editor")) return; // escribiendo código
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
  if (codeEditor && codeEditor.ace) codeEditor.ace.setTheme(aceTheme());
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
