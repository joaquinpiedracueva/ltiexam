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

Abrí `index.html` en el navegador (doble clic alcanza, no necesita servidor) y elegí o
arrastrá el `.md` con el formato de arriba — por ejemplo `db-cuestionarios-sql.md`.

Ninguna base viene precargada ni queda guardada: cada vez arrancás eligiendo el archivo.

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
| `index.html` | El simulador (una sola página, sin dependencias). |
| `db-cuestionarios-sql.md` | Base de SQL / PostgreSQL — 308 preguntas. |
