# Seguridad

## Qué versión se mantiene

Solo la que está publicada en <https://joaquinpiedracueva.github.io/ltiexam/>, que es la rama `main`. No hay otras versiones.

## Cómo está hecho

Para saber qué puede salir mal:

- Es un sitio estático en GitHub Pages: no tiene servidor propio, cuentas ni base de datos.
- El avance de la pestaña Carrera se guarda solo en el `localStorage` del navegador. El backup es un `.json` que descarga e importa cada usuario.
- Los bancos son Markdown del repositorio, que la página convierte a HTML en el navegador (`js/markdown.js`).
- Las preguntas de código compilan y ejecutan Java en el navegador con CheerpJ, sin mandar nada a un servidor.
- Las visitas se miden con Google Analytics.

## Qué reportar

Por ejemplo:

- Que el contenido de un banco o de un backup importado pueda inyectar HTML o JavaScript en la página.
- Que el código Java de una respuesta pueda salir del entorno de CheerpJ o afectar la página.
- Que la página filtre datos del `localStorage` o mande datos a terceros además de Google Analytics.

## Cómo reportar

**No abras un issue público.** Usá el reporte privado de GitHub: en la pestaña [Security](https://github.com/joaquinpiedracueva/ltiexam/security) del repositorio, **Report a vulnerability**.

Incluí qué encontraste, los pasos para reproducirlo y qué impacto tiene. Es un proyecto personal sin plazos garantizados, pero voy a responder lo antes posible y avisar cuando esté resuelto.
