# Cómo contribuir

Gracias por querer sumar a ltiexam. La forma más útil de ayudar es agregar preguntas a los bancos o corregir respuestas que estén mal. También se aceptan arreglos y mejoras de la página.

Al participar aceptás el [código de conducta](CODE_OF_CONDUCT.md).

## Reportar un error

Abrí un [issue](https://github.com/joaquinpiedracueva/ltiexam/issues) con:

- **Respuesta incorrecta:** la materia, el número de pregunta (`## Pregunta N` en el banco) y por qué creés que la respuesta es otra. Si tenés una fuente (el material del curso, la revisión del cuestionario), mejor.
- **Error de la página:** qué hiciste, qué esperabas y qué pasó, con el navegador que usaste. Para las preguntas de código, pegá el código que diste como respuesta.

Los problemas de seguridad no van en un issue público: ver [SECURITY.md](SECURITY.md).

## Agregar preguntas

Cada materia es un archivo Markdown en `bank/semestre-N/`. El formato está en el [README](README.md#formato-del-banco). Para pasar un cuestionario de Moodle o un PDF a ese formato, está el prompt de [`prompts/extraer-preguntas.md`](prompts/extraer-preguntas.md).

1. **No repetir preguntas.** Antes de agregar, compará con las del banco y entre sí, aunque cambie el orden de las alternativas. Si ya está, no va.
2. **Numerar desde el siguiente libre.** Las nuevas van al final, empezando por el último `## Pregunta N` + 1.
3. **Marcar la correcta con ✅** según la fuente oficial (la revisión de Moodle, la corrección del docente). Si no estás seguro de alguna, decilo en el pull request.
4. **No subir evaluaciones que estén abiertas.** Solo preguntas de cuestionarios ya cerrados, de práctica o de material publicado.
5. **Correr el verificador** y no mandar el cambio si falla:

   ```sh
   node tools/check-bank.js bank/semestre-N/SIGLA.md
   ```

   En las preguntas de código (CodeRunner), compila la solución y compara la salida con la esperada, así que hace falta un JDK instalado.

Para una materia nueva, ver [Agregar una materia](README.md#agregar-una-materia).

## Cambios en el código

- Es un sitio estático, sin build ni dependencias. Para probarlo hace falta un servidor HTTP: `python3 -m http.server 8000` y abrir <http://localhost:8000>.
- El código y los comentarios van en español. Se mantiene ES5 (`var`, `function`), sin módulos: los scripts comparten el ámbito global y se cargan en el orden de `index.html`.
- Imitá el estilo del archivo que estás tocando.
- Probá el cambio en el navegador, en tema claro y oscuro y en pantalla de celular si toca la interfaz.
- Si cambiás `vendor/java/runner/CodeRunner.java`, recompilá el jar (instrucciones en el README).

## Pull requests

1. Hacé un fork y una rama para el cambio.
2. Un pull request por tema: no mezcles preguntas nuevas con cambios en el código.
3. Explicá qué cambia y cómo lo probaste.

Lo que se fusiona a `main` se publica solo en GitHub Pages.

Al contribuir código, aceptás que se publique bajo la [licencia MIT](LICENSE) del proyecto. Las preguntas de los bancos no están bajo esa licencia (ver [Licencia](README.md#licencia)).
