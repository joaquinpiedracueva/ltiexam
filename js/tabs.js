"use strict";

/* ------------------------------ pestañas ------------------------------ */
// Práctica (selector y examen), Carrera (avance del plan y previas) y Links (enlaces de la
// facultad). La pestaña va en el hash (#carrera, #links), así se puede enlazar y sobrevive a la
// recarga; sin hash es Práctica. Se carga al final: usa renderCarrera y renderLinks.
var panes = {
  practica: document.getElementById("panePractica"),
  carrera: document.getElementById("paneCarrera"),
  links: document.getElementById("paneLinks")
};
// lo que se redibuja al entrar a cada pestaña (Práctica conserva su pantalla)
var TAB_RENDER = { carrera: renderCarrera, links: renderLinks };

function currentTab(){
  var h = location.hash.slice(1);
  return panes[h] ? h : "practica";
}

function showTab(name){
  if (currentTab() === name) return syncTab();
  location.hash = name; // dispara hashchange → syncTab
}

function syncTab(){
  var tab = currentTab();
  closeDropdowns();
  Object.keys(panes).forEach(function(k){ panes[k].hidden = k !== tab; });
  Array.prototype.forEach.call(document.querySelectorAll(".tabs a"), function(a){
    if (a.getAttribute("href") === "#" + tab) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  if (TAB_RENDER[tab]) TAB_RENDER[tab]();
}
window.addEventListener("hashchange", function(){ syncTab(); window.scrollTo(0, 0); });

syncTab();
