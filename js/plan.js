"use strict";

// Plan de estudios 2024 de la Licenciatura en Tecnologías de la Información (UTEC), para la
// pestaña Carrera. cr = créditos. Cada semestre suma 45 y la carrera 360.
//
// previas: lo que hay que tener aprobado para cursar (matricularse), según el «Régimen de
// previaturas» del plan (Resolución 127/2024 del CDCP, Anexo II, y los programas del Anexo III).
// Se muestran debajo de cada materia en la pestaña Carrera.
//   semestres: N  → semestres 1 a N completos (todas sus materias aprobadas, incluidas
//                   Utec Innova, Vinculación, Optativas e Inglés)
//   materias: […] → materias puntuales, por su label
// Sin previas: no tiene. Inglés, Utec Innova, Vinculación y Optativa van sin previas a propósito
// (la tabla pide el nivel anterior de Inglés y deja otras celdas vacías o «a determinar»).
// Dudas del plan:
//   - Sistemas Operativos de Red: la previa lleva un asterisco que el plan no explica.
//   - Semestre 8: la tabla y los programas piden semestres 1 a 7; el texto dice 1 a 6.
// Fuente: https://utec.edu.uy/uploads/resolucion/2024_03_05_Resolucion127.pdf

var PLAN = {
  1: [
    { label: "Introducción y Perspectivas de las TI", cr: 2 },
    { label: "Fundamentos e Introducción a la Programación", cr: 10 },
    { label: "Metodologías de Testing Funcional", cr: 5 },
    { label: "Análisis de Requerimientos", cr: 6 },
    { label: "Base de Datos, Conceptos y Diseño", cr: 6 },
    { label: "Proyecto S1 / Caso Estudio", cr: 6 },
    { label: "Vinculación con el Medio Empresarial 1", cr: 4 },
    { label: "Inglés 1", cr: 4 },
    { label: "Utec Innova 1", cr: 2 }
  ],
  2: [
    { label: "Implementación de Testing Funcional", cr: 5 },
    { label: "Programación SQL", cr: 8 },
    { label: "Algoritmos y Patrones de Diseño", cr: 10 },
    { label: "Fundamentos de Arquitectura, Seguridad y Cloud", cr: 7 },
    { label: "Proyecto S2 / Proyecto de Desarrollo", cr: 7, previas: { materias: ["Proyecto S1 / Caso Estudio"] } },
    { label: "Vinculación con el Medio Empresarial 2", cr: 2 },
    { label: "Inglés 2", cr: 4 },
    { label: "Utec Innova 2", cr: 2 }
  ],
  3: [
    { label: "Redes Infraestructura e Interconexión", cr: 12, previas: { semestres: 1 } },
    { label: "Gestión de Ingeniería de Software", cr: 5, previas: { semestres: 1 } },
    { label: "Programación Backend", cr: 7, previas: { semestres: 1 } },
    { label: "Metodologías de Desarrollo", cr: 3, previas: { semestres: 1 } },
    { label: "Diseño Experiencia Usuario", cr: 3, previas: { semestres: 1 } },
    { label: "Proyecto S3 / Proyecto Desarrollo e Infraestructura", cr: 5, previas: { semestres: 1, materias: ["Proyecto S2 / Proyecto de Desarrollo"] } },
    { label: "Vinculación con el Medio Empresarial 3", cr: 2 },
    { label: "Inglés 3", cr: 4 },
    { label: "Utec Innova 3", cr: 2 },
    { label: "Optativa 1", cr: 2 }
  ],
  4: [
    { label: "Sistemas Operativos de Red y Virtualización", cr: 9, previas: { semestres: 2 } },
    { label: "Seguridad y Auditoría de Redes", cr: 6, previas: { semestres: 2 } },
    { label: "Programación Frontend", cr: 7, previas: { semestres: 2 } },
    { label: "Datawarehousing", cr: 4, previas: { semestres: 2 } },
    { label: "Proyecto S4 / Proyecto Final Tecnicatura", cr: 9, previas: { semestres: 2, materias: ["Proyecto S3 / Proyecto Desarrollo e Infraestructura"] } },
    { label: "Vinculación con el Medio Empresarial 4", cr: 2 },
    { label: "Inglés 4", cr: 4 },
    { label: "Utec Innova 4", cr: 2 },
    { label: "Optativa 2", cr: 2 }
  ],
  5: [
    { label: "Gestión de Proyectos", cr: 5, previas: { semestres: 3 } },
    { label: "Programación de Dispositivos Móviles", cr: 6, previas: { semestres: 3 } },
    { label: "Base de Datos No Relacionales", cr: 6, previas: { semestres: 3 } },
    { label: "Automatización de Testing", cr: 5, previas: { semestres: 3 } },
    { label: "Gestión de la Calidad", cr: 4, previas: { semestres: 3 } },
    { label: "Data Science", cr: 7, previas: { semestres: 3 } },
    { label: "Derecho Informático y Normativa Asociada", cr: 2, previas: { semestres: 3 } },
    { label: "Vinculación con el Medio Empresarial 5", cr: 2 },
    { label: "Inglés 5", cr: 4 },
    { label: "Utec Innova 5", cr: 2 },
    { label: "Optativa 3", cr: 2 }
  ],
  6: [
    { label: "Programación Funcional", cr: 5, previas: { semestres: 4 } },
    { label: "Arquitectura y Modelos de Cloud Computing", cr: 11, previas: { semestres: 4 } },
    { label: "Ciberseguridad en Ambientes Cloud", cr: 6, previas: { semestres: 4 } },
    { label: "Inteligencia Artificial Aplicada", cr: 7, previas: { semestres: 4 } },
    { label: "Ética, Tecnología y Sociedad", cr: 2, previas: { semestres: 4 } },
    { label: "Testing de Performance", cr: 4, previas: { semestres: 4 } },
    { label: "Vinculación con el Medio Empresarial 6", cr: 2 },
    { label: "Inglés 6", cr: 4 },
    { label: "Utec Innova 6", cr: 2 },
    { label: "Optativa 4", cr: 2 }
  ],
  7: [
    { label: "Introducción a Devops", cr: 7, previas: { semestres: 5 } },
    { label: "Fundamentos de Robótica y Sistemas Autónomos", cr: 6, previas: { semestres: 5 } },
    { label: "Anteproyecto", cr: 5, previas: { semestres: 5, materias: ["Ética, Tecnología y Sociedad"] } },
    { label: "Gestión de la Ciberseguridad", cr: 12, previas: { semestres: 5 } },
    { label: "Taller de Ciberseguridad", cr: 5, previas: { semestres: 5 } },
    { label: "Vinculación con el Medio Empresarial 7", cr: 2 },
    { label: "Inglés 7", cr: 4 },
    { label: "Utec Innova 7", cr: 2 },
    { label: "Optativa 5", cr: 2 }
  ],
  8: [
    { label: "Taller Devops", cr: 8, previas: { semestres: 7 } },
    { label: "Preparación para Proyecto Final", cr: 2, previas: { semestres: 7 } },
    { label: "Proyecto Final Licenciatura", cr: 25, previas: { semestres: 7 } },
    { label: "Vinculación con el Medio Empresarial 8", cr: 2 },
    { label: "Inglés 8", cr: 4 },
    { label: "Utec Innova 8", cr: 2 },
    { label: "Optativa 6", cr: 2 }
  ]
};
