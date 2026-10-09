"use strict";

// Bancos precargados, uno por carpeta bank/semestre-N/. Para sumar una materia,
// poné el .md en la carpeta de su semestre y agregalo a la lista de ese número.
// Una materia sin file (todavía sin banco) aparece en el selector, pero deshabilitada.
// Los semestres sin materias aparecen en el selector, pero deshabilitados.
var MATERIAS = {
  1: [
    {label: "Fundamentos e Introducción a la Programación", file: "FEIP.md"},
    {label: "Introducción y Perspectivas de las TI"},
    {label: "Metodologías de Testing Funcional"},
    {label: "Análisis de Requerimientos"},
    {label: "Base de Datos, Conceptos y Diseño", file: "BDCD.md"}
  ],
  2: [
    {label: "Algoritmos y Patrones de Diseño", file: "AYPD.md"},
    {label: "Programación SQL", file: "SQL.md"},
    {label: "Implementación de Testing Funcional", file: "ITF.md"},
    {label: "Fundamentos de Arquitectura, Seguridad y Cloud"}
  ],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: []
};

var CATALOG = Object.keys(MATERIAS).map(function (n) {
  return {
    label: "Semestre " + n,
    materias: MATERIAS[n].map(function (m) {
      return {label: m.label, file: m.file ? "bank/semestre-" + n + "/" + m.file : null};
    })
  };
});
