# utec-cuestionarios

Simulador de exámenes que arma un cuestionario a partir de una base de preguntas en Markdown.

## Estructura de la base

```markdown
# Nombre de la Materia

## Pregunta N

**Enunciado:** texto de la pregunta

- a. alternativa
- ✅ b. alternativa correcta
- c. alternativa
- d. alternativa
```

- El `# Título` da nombre al cuestionario.
- Cada `## Pregunta N` es una pregunta; el texto del encabezado se muestra tal cual.
- El bloque `**Enunciado:**` admite párrafos, listas, tablas y bloques ` ```sql `.
- Las alternativas son viñetas `-`; **`✅`** antes de la letra marca la correcta.
- También reconoce alternativas sin letra, de emparejar (viñetas anidadas, un `✅` por
  grupo) y de completar (la respuesta va en una línea con `✅` después de las opciones).
- Una cita `>` al final de la pregunta se muestra como nota al responder.

## Uso

Abrí la página, elegí semestre y materia y tocá **Empezar**. Los bancos se cargan con
`fetch`, así que la página tiene que servirse por HTTP (GitHub Pages, o
`python3 -m http.server` en local); con doble clic (`file://`) no cargan.

Los bancos se manejan solo desde el código, no se suben archivos desde la página.
Para sumar un precargado, poné el `.md` en la carpeta de su semestre (`bank/semestre-1/` … `bank/semestre-8/`)
y agregalo a la lista de ese número en `js/catalog.js`. Los semestres sin materias aparecen
en el selector como «próximamente».

## Cómo funciona el examen

- Orden aleatorio distinto en cada intento; elegís cuántas preguntas entran — cualquier
  número entre 1 y el total, o «Todas».
- Una pregunta por pantalla. Al responder se marca la correcta y **no se puede volver atrás**.
- La barra superior muestra aciertos, fallos y precisión sobre el total del examen (100%),
  con la marca del **60%** de aprobación.
- Al terminar: nota final, aprobado/reprobado y la lista de preguntas falladas con su respuesta.

## Archivos

| Archivo | Contenido |
|---|---|
| `index.html` | Estructura de la página (y el logo de UTEC inline). |
| `css/styles.css` | Estilos y temas claro/oscuro. |
| `js/parser.js` | Lee el `.md` y arma las preguntas. |
| `js/markdown.js` | Convierte el Markdown de enunciados y alternativas a HTML. |
| `js/catalog.js` | Lista de bancos precargados por semestre y materia. |
| `js/app.js` | Selector de examen, preguntas, resultado, teclado y tema. |
| `assets/` | Favicon y mosaico de fondo. |
| `bank/semestre-N/` | Bancos por semestre (1 a 8). |
| `bank/semestre-2/programacion-sql.md` | Semestre 2 · Programación SQL — 308 preguntas. |
