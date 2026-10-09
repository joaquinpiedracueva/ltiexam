"use strict";

// Enlaces de la pestaña Links, por grupo. Para sumar uno, agregalo a la lista de su grupo:
// { label, url, desc }. pdf: true marca los documentos que se abren como PDF.
var ENLACES = [
  {
    titulo: "Plataformas",
    items: [
      { label: "Portal del estudiante", url: "https://utec.universitasxxi.cloud/portal/home", desc: "Universitas XXI" },
      { label: "Moodle", url: "https://ev1.utec.edu.uy/moodle/login/index.php", desc: "Aula virtual de los cursos" },
      { label: "Cursos EDU", url: "https://edu2.utec.edu.uy/learner-dashboard/", desc: "Panel de cursos de EDU" },
      { label: "Plataforma de Inglés", url: "https://utec.netlanguages.com/utec/login.php", desc: "Net Languages" },
      { label: "Utec Innova", url: "https://airtable.com/appmmqzKdATI7wRwD/shrm963356m0de6lj/tblUnEnOv4jH2Ovgk", desc: "Actividades en Airtable" }
    ]
  },
  {
    titulo: "Carrera y documentos",
    items: [
      { label: "Sobre la carrera", url: "https://utec.edu.uy/es/educacion/carrera/licenciatura-en-tecnologias-de-la-informacion/", desc: "Página de la LTI en utec.edu.uy" },
      { label: "Plan de Estudios", url: "https://utec.edu.uy/uploads/plan/11f6e5d08a1aafde57de34c907b6fd8ba6ee0a54.pdf", desc: "Materias y créditos por semestre", pdf: true }
    ]
  }
];
