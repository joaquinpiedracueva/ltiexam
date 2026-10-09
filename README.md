# ltiexam

Práctica de exámenes de la Licenciatura en Tecnologías de la Información (UTEC). Es un sitio estático, sin build ni dependencias, publicado en GitHub Pages: <https://joaquinpiedracueva.github.io/ltiexam/>.

Tiene tres pestañas: **Práctica** (los exámenes), **Carrera** (el avance en el plan de estudios y las previas de cada materia) y **Links** (enlaces de la facultad). Cada materia es un banco de preguntas en Markdown. La página lo descarga, sortea las preguntas, mezcla las alternativas y corrige en el navegador. Las preguntas CodeRunner compilan y ejecutan Java en el navegador con CheerpJ.

## Estructura

```
index.html            página única: header con las pestañas, panel Práctica (barra, <main id="app">), panel Carrera, pie
css/styles.css        todos los estilos; tema claro/oscuro con variables en :root
js/parser.js          Markdown del banco → { title, questions[] }
js/markdown.js        Markdown → HTML para enunciados y alternativas (esc, mdInline, mdBlock)
js/catalog.js         lista de semestres y materias con banco (MATERIAS)
js/plan.js            plan de estudios completo con créditos y previas (PLAN), para la pestaña Carrera
js/enlaces.js         enlaces de la pestaña Links, por grupo (ENLACES)
js/coderunner.js      CR.check(code, tests): compila y prueba Java con CheerpJ
js/app.js             estado (S), selector, examen, tiempo, navegación y resultados
js/carrera.js         pestaña Carrera: estado de cada materia, previas, materias anotadas, guardado
js/links.js           pestaña Links: los enlaces de enlaces.js
js/tabs.js            cambio de pestaña (#practica / #carrera / #links); se carga al final
bank/semestre-N/*.md  un banco por materia, en la carpeta de su semestre
vendor/java/          tools.jar (javac), ltiexam-runner.jar y su fuente en runner/
assets/               favicon y mosaicos del fondo
tools/check-bank.js   revisa un banco (ver «Verificar un banco»)
```

Los scripts se cargan en orden en `index.html` (`parser` → `markdown` → `catalog` → `plan` → `coderunner` → `app` → `carrera` → `enlaces` → `links` → `tabs`) y comparten el ámbito global: no hay módulos. El código y los comentarios están en español; se mantiene ES5 (`var`, `function`).

## Correr en local

Hace falta un servidor HTTP, porque la página descarga los bancos con `fetch` y CheerpJ no funciona desde `file://`:

```sh
python3 -m http.server 8000   # y abrir http://localhost:8000
```

Publicar es hacer push a `main`: GitHub Pages sirve la raíz del repo. Pages cachea los archivos 10 minutos (`max-age=600`), así que un cambio puede tardar en verse sin recarga forzada.

Las visitas se miden con Google Analytics (propiedad `G-V9MSQSSBXR`, en el `<head>` de `index.html`). El script solo se carga en `joaquinpiedracueva.github.io`, así que las pruebas en local no cuentan.

## Agregar una materia

1. Crear `bank/semestre-N/SIGLA.md` con un título `# Nombre de la materia`.
2. Agregarla en `js/catalog.js`, en la lista de su semestre:
   ```js
   2: [
     { label: "Algoritmos y Patrones de Diseño", file: "AYPD.md" },
     ...
   ]
   ```
   Una materia sin `file` (todavía sin banco) aparece en el selector, pero deshabilitada. Un semestre sin materias aparece, pero deshabilitado.

## Pestaña Links

Muestra los enlaces de `js/enlaces.js`: plataformas de la facultad y documentos de la carrera. Para sumar uno, se agrega `{ label, url, desc }` a la lista de su grupo (`pdf: true` le pone la marca PDF).

## Pestaña Carrera

Lista todas las materias de `js/plan.js` por semestre; cada una se marca como *Cursando*, *Examen* o *Aprobada*. Utec Innova y Optativa son cupos que se cumplen con materias a elección, a veces de 1 crédito (dos por cupo): en esos se anota cuáles se hicieron, con nombre y créditos, cada una *Cursando* o *Aprobada*, hasta llenar los créditos del cupo (si hay más, van en el cupo de otro semestre). Estos cupos no tienen examen ni botones propios: quedan aprobados cuando las aprobadas suman sus créditos y, si no llegan, como cursando (los créditos aprobados ya cuentan en el porcentaje).

Se muestran las previas para cursar tal como las pide el plan 2024 ([Resolución 127/2024](https://utec.edu.uy/uploads/resolucion/2024_03_05_Resolucion127.pdf), «Régimen de previaturas»), sin calcular si se cumplen, debajo de cada materia. Inglés, Utec Innova, Vinculación y Optativa no llevan previas. Están en el campo `previas` de `js/plan.js`. El porcentaje es de créditos aprobados sobre el total (360). Cada cambio se guarda solo en `localStorage` (clave `carrera`, solo en ese navegador). Debajo de la barra de avance, el texto lleva los enlaces para descargar un backup (un `.json`) e importarlo, por si se pierden los datos del navegador o para pasar el progreso a otro dispositivo. Si cambia el plan, se edita `PLAN` (cada semestre suma 45 créditos).

## Formato del banco

- `# Título`: el primer H1 es el nombre de la materia.
- `## Pregunta N`: empieza una pregunta. El número se toma del encabezado y debe ser único en el archivo. Nunca se repite una pregunta: antes de agregar una, comprobar que no esté ya en el banco. Las preguntas nuevas van al final con el siguiente número libre; no hace falta agruparlas por tipo, porque el examen las sortea.
- `**Enunciado:**`: primera línea del enunciado (el rótulo no se muestra). El enunciado puede seguir en varios párrafos, listas, `> citas` y bloques de código.
- `✅` marca lo correcto.
- Por convención, las subsecciones del enunciado van en negrita (`**Requisitos**`), no como `###`: en las CodeRunner, `###` queda reservado para las secciones del código.

El tipo de pregunta se deduce de la forma:

### Opción única y múltiple

```markdown
## Pregunta 5

**Enunciado:** ¿Cómo se garantiza que el patrón Singleton solo permita una instancia?

- a. Implementando una lista de instancias en una clase base.
- ✅ b. Usando un constructor protegido y un método estático.
- c. Utilizando una fábrica abstracta para crear la instancia.
```

- Las alternativas son viñetas `- ` de nivel 0; la letra (`a.` o `a)`) es opcional.
- Con una ✅ es de opción única; con varias es múltiple, y se acierta solo si se marcan exactamente las correctas.
- Una alternativa puede llevar líneas indentadas o un bloque de código debajo.
- Las alternativas se mezclan y se vuelven a rotular a, b, c… Si alguna menciona a otras («todas las anteriores», «(a y c)», «opción b»), se deja el orden original.
- Después de las alternativas, un texto opcional se muestra como explicación al responder; las líneas `> ...` se muestran como nota.

### Emparejar

```markdown
- **Cadena de caracteres:**
  - ✅ `'cadena'`
  - `123`
- **Número entero:**
  - ✅ `123`
  - `'cadena'`
```

Cada viñeta de nivel 0 es un término y sus viñetas indentadas son las opciones; cada término lleva exactamente una ✅. Se acierta si todos los términos quedan bien emparejados.

### Autocorrección

Si ninguna alternativa tiene ✅ pero el texto que sigue sí, la pregunta es de autocorrección: se muestra ese texto como respuesta y el estudiante marca si acertó.

```markdown
- **Opción 1:** `INSERT` | `SELECT`
- **Opción 2:** `INTO` | `FROM`

✅ **Resultado completo:** `INSERT INTO MI_TABLA VALUES (3, 'hola');`
```

### CodeRunner (Java)

Pregunta de código al estilo del CodeRunner de Moodle: el estudiante completa el código base en un editor (Ace) y lo comprueba contra las pruebas.

````markdown
## Pregunta 1

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Singleton** en Java.

**Requisitos**

- Dos llamadas a `getInstance()` deben devolver el mismo objeto.

> **Pista:** ...

### Código base

```java
public class Singleton {
    public static Singleton getInstance() {
        // Agregue las instrucciones correctas
    }
}
```

### Prueba

```java
Singleton s1 = Singleton.getInstance();
Singleton s2 = Singleton.getInstance();
System.out.println(s1 == s2);
```

```
true
```

### Solución

```java
public class Singleton { ... código completo ... }
```
````

| Sección | ¿Obligatoria? | Uso |
|---|---|---|
| `**Tipo:** CodeRunner (Java)` | sí, o al menos una sección `###` de las de abajo | marca la pregunta como CodeRunner |
| Enunciado | sí | todo lo anterior a la primera sección `###` |
| `### Código base` | no | primer bloque de código: con lo que arranca el editor |
| `### Prueba` (una o más) | **sí, para corregir** | primer bloque: código de la prueba; segundo bloque: salida esperada |
| `### Solución` | no | solo se muestra como respuesta correcta en los resultados; nunca se ejecuta |

Solo se reconocen esos tres encabezados `###` (con o sin tilde). Cualquier otro `###` queda como texto del enunciado.

**Cómo se ejecuta** (`js/coderunner.js` y `vendor/java/runner/CodeRunner.java`):

- El código del estudiante es un solo archivo. Si tiene una clase o interfaz `public`, el archivo se llama como ella; si no, `Solucion.java`. Puede traer varias clases no públicas (Abstract Factory, por ejemplo).
- Cada prueba se envuelve en `public class __PruebaN { public static void main(String[] args) throws Exception { <código de la prueba> } }`, con los `import` del código del estudiante. La prueba son sentencias sueltas, no una clase.
- Todo se compila junto con javac de Java 8 (`tools.jar`) dentro de CheerpJ. Cada prueba corre en un class loader propio, así el estado estático no pasa de una prueba a otra (importa para Singleton).
- Se compara la salida estándar con la esperada tras quitar espacios al final de cada línea y líneas vacías al final. El resto debe coincidir exacto, incluidos tildes y mayúsculas.
- Cada prueba tiene 4 s. Los `while`/`for`/`do` del estudiante llevan un chequeo de tiempo insertado para cortar bucles infinitos.
- Puntaje: 1 si pasa todas las pruebas, menos 0,1 por cada comprobación fallida antes de acertar (mínimo 0).

**Para escribir buenas pruebas:**

- El código base normalmente no compila (métodos sin `return`), y eso está bien: el estudiante lo completa.
- Tiene que haber al menos una prueba por cada parte que el estudiante completa. Si una fábrica, un setter o una rama nunca se llama en ninguna prueba, un error ahí pasa sin detectarse.
- Conviene que la solución sea el código completo (base + lo que falta), así `tools/check-bank.js` puede compilarla y verificar las salidas esperadas.
- El runner es Java 8: nada de `var`, `record`, text blocks ni `switch` con flechas, ni en el código base ni en las pruebas.

Si se cambia `CodeRunner.java`, hay que recompilar el jar (instrucciones en el comentario del archivo):

```sh
cd vendor/java/runner && javac --release 8 -d build CodeRunner.java && jar cf ../ltiexam-runner.jar -C build .
```

## Extraer preguntas con Claude en Chrome

[`prompts/extraer-preguntas.md`](prompts/extraer-preguntas.md) es un prompt para la extensión de Claude en Chrome: con la revisión del cuestionario abierta, devuelve las preguntas en este formato, listas para pegar al final del banco. Después hay que correr el verificador.

## Verificar un banco

```sh
node tools/check-bank.js bank/semestre-2/AYPD.md
```

Parsea el banco con `js/parser.js` y avisa de números repetidos, preguntas repetidas (mismo enunciado y mismas alternativas, sin importar orden, letras, mayúsculas, tildes ni puntuación; en las CodeRunner, mismo código base), opciones únicas sin ✅ y emparejamientos sin exactamente una ✅ por término. En las CodeRunner con `### Solución`, compila la solución con cada prueba en el JDK local y compara la salida con la esperada. El JDK local puede ser más nuevo que Java 8, así que no detecta sintaxis moderna. Hay que correrlo después de agregar o editar preguntas.

## Licencia

El código está bajo la [licencia MIT](LICENSE). La licencia no cubre las preguntas de los bancos (`bank/`): salen de evaluaciones y materiales de UTEC, se comparten solo para practicar y se quitan si la facultad o un docente lo pide. Para contribuir, ver [CONTRIBUTING.md](CONTRIBUTING.md), el [código de conducta](CODE_OF_CONDUCT.md) y cómo reportar problemas de seguridad en [SECURITY.md](SECURITY.md).

Lo de terceros mantiene su licencia: `vendor/java/tools.jar` es del OpenJDK (GPL v2 con la excepción de `vendor/java/ASSEMBLY_EXCEPTION`, texto en `vendor/java/LICENSE`), y Ace y CheerpJ se cargan desde sus CDN con las suyas.
