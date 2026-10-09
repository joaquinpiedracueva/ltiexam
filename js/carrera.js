"use strict";

/* ------------------------------ carrera ------------------------------- */
// Estado de cada materia del plan, por "semestre-índice" (C), y las materias que se anotaron
// en los cupos de Utec Innova y Optativa (A). Se guarda solo en localStorage (solo en este
// navegador) con cada cambio; para no perderlo, se puede descargar un backup e importarlo.
var ESTADOS = [
  { key: "cursando", label: "Cursando" },
  { key: "examen", label: "Examen" },
  { key: "aprobada", label: "Aprobada" }
];
var STORE_KEY = "carrera";
var SEMS = Object.keys(PLAN);
var carrera = document.getElementById("paneCarrera");
var saveError = false;

// Utec Innova y Optativa son cupos: se cumplen con materias a elección, que pueden valer
// menos que el cupo (dos de 1 crédito en uno de 2). No tienen examen ni estado propio: se
// anotan las materias (hasta llenar los créditos del cupo; si hay más, van en el cupo de otro
// semestre), cada una «Cursando» o «Aprobada», y el estado del cupo sale de ahí.
function anotable(m){ return /^(Utec Innova|Optativa) \d/.test(m.label); }

// estados de una materia anotada (en A, st: "cursando" | "aprobada")
var NOTA_ESTADOS = [
  { key: "cursando", label: "Cursando" },
  { key: "aprobada", label: "Aprobada" }
];

function planItem(id){
  var p = String(id).split("-");
  return PLAN[p[0]] && PLAN[p[0]][p[1]];
}

// mismo contenido → mismo texto (claves ordenadas), para comparar con lo guardado
function serialize(){
  function sorted(x){
    var o = {};
    Object.keys(x).sort().forEach(function(k){ o[k] = x[k]; });
    return o;
  }
  return JSON.stringify({ estados: sorted(C), anotadas: sorted(A) });
}

// lo guardado
function loadCarrera(){
  var raw = null;
  try { raw = JSON.parse(localStorage.getItem(STORE_KEY)); } catch(e){}
  applyCarrera(raw);
}

// pasa a C y A lo leído (localStorage o un backup importado), sin materias ni estados que ya
// no existan (por si cambia el plan) y sin pasarse de los créditos de cada cupo
function applyCarrera(raw){
  C = {}; A = {};
  if (!raw || typeof raw !== "object") return;
  var est = raw.estados || {}, an = raw.anotadas || {};
  Object.keys(est).forEach(function(k){
    var ok = ESTADOS.some(function(e){ return e.key === est[k]; });
    if (ok && planItem(k) && !anotable(planItem(k))) C[k] = est[k];
  });
  Object.keys(an).forEach(function(k){
    var m = planItem(k);
    if (!m || !anotable(m) || !Array.isArray(an[k])) return;
    var usados = 0;
    var list = an[k].filter(function(x){
      var ok = x && typeof x.n === "string" && x.n.trim() && x.cr >= 1 && Math.floor(x.cr) === x.cr && usados + x.cr <= m.cr;
      if (ok) usados += x.cr;
      return ok;
    }).map(function(x){ return { n: x.n.trim().slice(0, 80), cr: x.cr, st: x.st === "aprobada" ? "aprobada" : "cursando" }; });
    if (list.length) A[k] = list;
  });
}

var C, A;
loadCarrera();
var saved = serialize();

// formulario para anotar una materia: abierto en un cupo a la vez; nombre y créditos
// quedan acá para no perderlos cuando la pantalla se redibuja
var F = { id: null, name: "", cr: 1 };

// aviso después de importar un backup (se va con el próximo cambio)
var notice = null;

// guarda si algo cambió desde lo último guardado; se llama al redibujar, que es después de
// cada cambio
function persist(){
  var s = serialize();
  if (s === saved) return;
  notice = null;
  try { localStorage.setItem(STORE_KEY, s); saved = s; saveError = false; }
  catch(e){ saveError = true; }
}

/* -------------------------------- backup ------------------------------- */
// El localStorage se puede perder (datos del sitio borrados, Safari después de 7 días sin
// entrar, otro navegador): un backup en JSON se descarga y se vuelve a importar.
function downloadCarrera(){
  var data = JSON.parse(serialize());
  data = { app: "ltiexam", tipo: "carrera", version: 1, fecha: new Date().toISOString(), estados: data.estados, anotadas: data.anotadas };
  var url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
  var a = document.createElement("a");
  a.href = url; a.download = "ltiexam-backup-" + data.fecha.slice(0, 10) + ".json";
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
}

function importCarrera(file){
  var reader = new FileReader();
  reader.onload = function(){
    var raw = null;
    try { raw = JSON.parse(reader.result); } catch(e){}
    if (!raw || raw.app !== "ltiexam" || raw.tipo !== "carrera"){
      notice = { text: "Ese archivo no es un backup de ltiexam.", err: true };
      return renderCarrera();
    }
    var hay = Object.keys(C).length || Object.keys(A).length;
    if (hay && !confirm("El backup reemplaza lo que tenés marcado ahora. ¿Importarlo?")) return;
    applyCarrera(raw);
    persist();
    notice = { text: "Backup importado" + (raw.fecha ? " (del " + new Date(raw.fecha).toLocaleDateString("es-UY") + ")" : "") + "." };
    renderCarrera();
  };
  reader.readAsText(file);
}


// créditos aprobados de un cupo
function cupoCr(id){
  return (A[id] || []).reduce(function(t, x){ return t + (x.st === "aprobada" ? x.cr : 0); }, 0);
}

// estado de una materia; en los cupos se calcula: aprobada si las aprobadas llegan a los
// créditos del cupo, cursando si hay alguna anotada pero no llegan
function estadoDe(id, m){
  if (!anotable(m)) return C[id];
  if (cupoCr(id) >= m.cr) return "aprobada";
  return (A[id] || []).length ? "cursando" : undefined;
}

// créditos y materias por estado en los semestres dados. Un cupo a medias suma sus créditos
// aprobados a «aprobadas» y el resto a «cursando» (la materia cuenta como cursando).
function tally(sems){
  var t = { cr: 0, n: 0 };
  ESTADOS.forEach(function(e){ t[e.key] = { cr: 0, n: 0 }; });
  sems.forEach(function(s){
    PLAN[s].forEach(function(m, i){
      var id = s + "-" + i, st = estadoDe(id, m), parcial = 0;
      t.cr += m.cr; t.n++;
      if (!st) return;
      if (st === "cursando" && anotable(m)) parcial = cupoCr(id);
      t.aprobada.cr += parcial;
      t[st].cr += m.cr - parcial; t[st].n++;
    });
  });
  return t;
}

function crText(n){ return n + (n === 1 ? " crédito" : " créditos"); }

// Debajo de la materia: «Previa: Semestres 1 a 3» (completos), tal como la pide el plan, sin
// calcular si se cumple. Sin previas, no se muestra nada.
function previasHtml(m){
  var p = m.previas, items = [];
  if (!p) return "";
  if (p.semestres) items.push(p.semestres === 1 ? "Semestre 1"
    : "Semestres 1 " + (p.semestres === 2 ? "y" : "a") + " " + p.semestres);
  items = items.concat(p.materias || []);
  return '<span class="subj-prev"><b>' + (items.length === 1 ? "Previa:" : "Previas:") + "</b> " + esc(items.join(", ")) + "</span>";
}

function anotadasCr(id){ return (A[id] || []).reduce(function(t, x){ return t + x.cr; }, 0); }

// cupo de Utec Innova u Optativa: lo anotado y el formulario (o el enlace para abrirlo)
function notesHtml(id, m){
  var list = A[id] || [];
  var html = list.length ? '<ul class="note-list">' + list.map(function(x, k){
    return '<li class="is-' + x.st + '">' +
      '<span class="note-name">' + esc(x.n) + "<small>" + crText(x.cr) + "</small></span>" +
      '<span class="seg" role="group" aria-label="' + esc(x.n) + '">' + NOTA_ESTADOS.map(function(e){
        return '<button type="button" id="nst' + id + "-" + k + e.key + '" data-nid="' + id + '" data-k="' + k + '" data-nst="' + e.key + '"' +
          ' aria-pressed="' + (x.st === e.key) + '">' + e.label + "</button>";
      }).join("") + "</span>" +
      '<button type="button" class="note-del" id="del' + id + "-" + k + '" data-del="' + id + '" data-k="' + k + '"' +
        ' aria-label="Quitar ' + esc(x.n) + '" title="Quitar">✕</button></li>';
  }).join("") + "</ul>" : "";
  var libres = m.cr - anotadasCr(id);
  if (!libres) return '<div class="notes">' + html +
    '<p class="note-full">Cupo lleno: si hiciste otra, anotala en ' + esc(m.label.replace(/ \d+$/, "")) + " de otro semestre.</p></div>";
  if (F.id !== id) return '<div class="notes">' + html +
    '<button type="button" class="btn-link" id="add' + id + '" data-add="' + id + '">+ Anotar materia</button></div>';
  var crs = [];
  for (var c = 1; c <= libres; c++) crs.push(c);
  return '<div class="notes">' + html +
    '<form class="note-form" data-form="' + id + '" novalidate>' +
      '<input type="text" id="noteName" maxlength="80" autocomplete="off" placeholder="Nombre de la materia"' +
        ' aria-label="Materia que hiciste en ' + esc(m.label) + '" value="' + esc(F.name) + '">' +
      '<span class="seg" role="group" aria-label="Créditos">' + crs.map(function(c){
        return '<button type="button" id="noteCr' + c + '" data-cr="' + c + '" aria-pressed="' + (F.cr === c) + '">' + crText(c) + "</button>";
      }).join("") + "</span>" +
      '<button type="submit" class="btn" id="noteAdd">Agregar</button>' +
      '<button type="button" class="btn btn-ghost" id="noteCancel" data-cancel="1">Cancelar</button>' +
    "</form></div>";
}

// focusId: a dónde mover el foco; si no, vuelve al botón que se usó
function renderCarrera(focusId){
  persist();
  // se redibuja todo en cada cambio: devolverle el foco al botón que se usó
  var focus = focusId || (carrera.contains(document.activeElement) ? document.activeElement.id : null);
  var t = tally(SEMS);
  function w(x){ return (x.cr / t.cr * 100) + "%"; }

  carrera.innerHTML =
    '<section class="career">' +
      '<div class="page-head">' +
        "<h1>¿Cómo vas en la carrera?</h1>" +
        "<p>Marcá el estado de cada materia. El porcentaje cuenta los créditos aprobados.</p>" +
      "</div>" +
      '<div class="score-head">' +
        '<div class="score-big">' + fmtPts(t.aprobada.cr / t.cr * 100) + "%</div>" +
        '<div class="score-meta"><span class="career-sub">' + t.aprobada.cr + " de " + t.cr + " créditos aprobados</span></div>" +
      "</div>" +
      '<div class="meter career-meter" aria-hidden="true">' +
        '<i class="m-ok" style="width:' + w(t.aprobada) + '"></i>' +
        '<i class="m-bad" style="width:' + w(t.examen) + '"></i>' +
        '<i class="m-warn" style="width:' + w(t.cursando) + '"></i>' +
      "</div>" +
      saveHtml() +
    "</section>" +
    SEMS.map(function(s){
      var st = tally([s]);
      return '<section class="sem">' +
        '<div class="sem-head">' +
          "<h2>Semestre " + s + "</h2>" +
          '<span class="sem-cr num">' + st.aprobada.cr + " / " + st.cr + " créditos</span>" +
        "</div>" +
        '<ul class="subjs">' + PLAN[s].map(function(m, i){
          var id = s + "-" + i, cur = estadoDe(id, m), cupo = anotable(m), done = cupo ? cupoCr(id) : 0;
          return '<li class="subj' + (cur ? " is-" + cur : "") + '">' +
            '<span class="subj-name">' + esc(m.label) + "<small>" + crText(m.cr) +
              (done ? " · " + done + (done === 1 ? " aprobado" : " aprobados") : "") + "</small>" +
              previasHtml(m) + "</span>" +
            (cupo ? notesHtml(id, m) :
              '<span class="seg" role="group" aria-label="' + esc(m.label) + '">' + ESTADOS.map(function(e){
                return '<button type="button" id="st' + id + e.key + '" data-id="' + id + '" data-st="' + e.key + '"' +
                  ' aria-pressed="' + (cur === e.key) + '">' + e.label + "</button>";
              }).join("") + "</span>") +
          "</li>";
        }).join("") + "</ul>" +
      "</section>";
    }).join("");

  if (focus && document.getElementById(focus)) document.getElementById(focus).focus({ preventScroll: true });
}

// Debajo de la barra de avance, un párrafo con los enlaces del backup dentro del texto. Un
// aviso (backup importado, archivo inválido, no se pudo guardar) va adelante.
function saveHtml(){
  var aviso = saveError ? { text: "No se pudo guardar: este navegador no permite usar localStorage.", err: true } : notice;
  return '<p class="career-save">' +
    (aviso ? '<span class="save-msg' + (aviso.err ? " err" : "") + '" role="status">' + aviso.text + "</span> " : "") +
    "Tu progreso se guarda en este navegador. " +
    '<button type="button" class="btn-link" id="carreraDownload">Descargá un backup</button>' +
    " para no perderlo o para pasarlo a otro dispositivo. ¿Ya tenés uno? " +
    '<button type="button" class="btn-link" id="carreraImport">Importalo</button>.' +
    '<input type="file" id="carreraFile" accept=".json,application/json" hidden></p>';
}

function openNote(id){
  var m = planItem(id);
  // créditos por defecto: los que le faltan al cupo
  F = { id: id, name: "", cr: m.cr - anotadasCr(id) };
  renderCarrera("noteName");
}

function closeNote(){
  var id = F.id, n = (A[id] || []).length;
  F = { id: null, name: "", cr: 1 };
  // si el cupo se llenó ya no hay «+ Anotar materia»: el foco va a la última anotada
  renderCarrera(anotadasCr(id) < planItem(id).cr ? "add" + id : "nst" + id + "-" + (n - 1) + "cursando");
}

// un estado se elige con su botón y se quita volviendo a tocarlo
carrera.onclick = function(e){
  if (e.target.closest("#carreraDownload")) return downloadCarrera();
  if (e.target.closest("#carreraImport")) return document.getElementById("carreraFile").click();
  var b = e.target.closest("button");
  if (!b) return;
  var d = b.dataset;
  if (d.add) return openNote(d.add);
  if (d.cancel) return closeNote();
  if (d.cr){ F.cr = Number(d.cr); return renderCarrera(); }
  if (d.nst){ A[d.nid][Number(d.k)].st = d.nst; return renderCarrera(); }
  if (d.del){
    A[d.del].splice(Number(d.k), 1);
    if (!A[d.del].length) delete A[d.del];
    return renderCarrera("add" + d.del);
  }
  if (!d.id) return;
  if (C[d.id] === d.st) delete C[d.id];
  else C[d.id] = d.st;
  renderCarrera();
};

carrera.oninput = function(e){ if (e.target.id === "noteName") F.name = e.target.value; };
carrera.onchange = function(e){
  if (e.target.id === "carreraFile" && e.target.files[0]) importCarrera(e.target.files[0]);
};

// Enter en el nombre también agrega; Esc cierra el formulario
carrera.onsubmit = function(e){
  e.preventDefault();
  var name = F.name.trim();
  if (!name) return document.getElementById("noteName").focus();
  if (anotadasCr(F.id) + F.cr > planItem(F.id).cr) return; // no pasar del cupo
  (A[F.id] || (A[F.id] = [])).push({ n: name.slice(0, 80), cr: F.cr, st: "cursando" });
  closeNote();
};
carrera.onkeydown = function(e){
  if (e.key === "Escape" && e.target.closest(".note-form")){ e.preventDefault(); closeNote(); }
};
