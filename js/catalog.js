"use strict";

// Bancos precargados, uno por carpeta bank/semestre-N/. Para sumar una materia,
// poné el .md en la carpeta de su semestre y agregalo a la lista de ese número.
// Los semestres sin materias aparecen en el selector, pero deshabilitados.
var MATERIAS = {
  1: [],
  2: [
    { label: "Algoritmos y Patrones de Diseño", file: "AYPD.md" },
    { label: "Programación SQL", file: "SQL.md" }
  ],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: []
};

var CATALOG = Object.keys(MATERIAS).map(function(n){
  return {
    label: "Semestre " + n,
    materias: MATERIAS[n].map(function(m){
      return { label: m.label, file: "bank/semestre-" + n + "/" + m.file };
    })
  };
});
