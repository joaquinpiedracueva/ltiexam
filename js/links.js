"use strict";

/* -------------------------------- links ------------------------------- */
// Pestaña Links: los enlaces de js/enlaces.js, por grupo.
var linksPane = document.getElementById("paneLinks");

function renderLinks() {
  linksPane.innerHTML =
    '<div class="page-head">' +
    "<h1>¿A dónde querés ir?</h1>" +
    "<p>Plataformas y documentos de la facultad.</p>" +
    "</div>" +
    ENLACES.map(function (g) {
      return (
        '<section class="home-links">' +
        "<h2>" +
        esc(g.titulo) +
        "</h2>" +
        '<ul class="link-list">' +
        g.items
          .map(function (x) {
            return (
              '<li><a href="' +
              esc(x.url) +
              '" target="_blank" rel="noopener">' +
              '<span class="link-label">' +
              esc(x.label) +
              (x.pdf ? " <small>PDF</small>" : "") +
              "</span>" +
              '<span class="link-desc">' +
              esc(x.desc) +
              "</span>" +
              '<span class="link-ext" aria-hidden="true">↗</span>' +
              "</a></li>"
            );
          })
          .join("") +
        "</ul>" +
        "</section>"
      );
    }).join("");
}
