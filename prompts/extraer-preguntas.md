# Extraer preguntas a un banco de ltiexam

Copiá todo lo que está debajo de la línea en Claude (extensión de Chrome), con la página del cuestionario abierta. Antes de enviarlo, completá `NUMERO_INICIAL` con el siguiente número libre del banco.

---

Vas a leer las preguntas de esta página (una revisión de cuestionario de Moodle, un PDF o un texto con preguntas) y devolverlas en un único bloque de Markdown con el formato exacto de abajo. Un parser automático lee ese archivo, así que el formato tiene que ser exacto.

**Numeración:** la primera pregunta es `## Pregunta NUMERO_INICIAL` y las demás siguen en orden, de a una.

## Qué devolver

1. Un solo bloque de código ` ````markdown ` (con cuatro backticks, porque adentro hay bloques de código) que contenga solo las preguntas. No agregues el título `# ...` ni texto fuera de las preguntas.
2. Debajo del bloque, una lista corta **"Para revisar"** con las preguntas en las que no pudiste confirmar la respuesta correcta en la página, o en las que la respuesta marcada te parece dudosa, y por qué. Si no hay ninguna, escribí "Para revisar: nada".

## Cómo saber cuál es la correcta

- Usá lo que indica la página: "La respuesta correcta es: …", la opción marcada como correcta, la retroalimentación, o el texto en negrita en un PDF de respuestas.
- Si la página no lo indica, elegí la que es correcta según la materia y ponela en "Para revisar".
- No cambies el texto de las preguntas ni de las opciones: copialo tal cual, corrigiendo solo cortes de línea o espacios rotos por la página. Sacá la numeración propia de Moodle ("Pregunta 3", "Seleccione una:", "Puntúa 1,00 sobre 1,00", "Marcar pregunta", etc.).

## Formato general

- Cada pregunta empieza con `## Pregunta N` y una línea en blanco.
- La primera línea del enunciado empieza con `**Enunciado:** `. El enunciado puede seguir en más párrafos, listas o bloques de código.
- `✅` (emoji) marca lo correcto, seguido de un espacio.
- Nombres de clases, métodos, comandos o código en línea van entre backticks: `` `getInstance()` ``.
- Dejá una línea en blanco entre bloques. Nada de HTML.
- No uses `###` salvo en las CodeRunner (ver abajo). Para subtítulos dentro del enunciado usá negrita: `**Requisitos**`.

## Tipos de pregunta

### Opción única (una correcta) o múltiple (varias correctas)

```markdown
## Pregunta 5

**Enunciado:** ¿Cómo se garantiza que el patrón Singleton solo permita una instancia?

- a. Implementando una lista de instancias en una clase base.
- ✅ b. Usando un constructor privado y un método estático para obtener la instancia.
- c. Utilizando una fábrica abstracta para crear la instancia.
- d. Usando un constructor público para crear la instancia.
```

- Cada opción es una viñeta `- ` pegada al margen, con letra `a.`, `b.`, `c.`…
- La ✅ va entre `- ` y la letra: `- ✅ b. ...`.
- Si hay varias correctas, cada una lleva su ✅.
- Verdadero/Falso es opción única: `- a. Verdadero` / `- ✅ b. Falso`.
- Si una opción tiene código, ponelo en un bloque indentado con 2 espacios debajo de la viñeta.
- Opcional: una explicación después de las opciones, separada por una línea en blanco. Las líneas que empiezan con `> ` se muestran como nota.

### Emparejar

```markdown
## Pregunta 75

**Enunciado:** Empareje el tipo de constante con su representación correcta en SQL:

- **Cadena de caracteres:**
  - ✅ `'cadena'`
  - `123`
  - `45.67`
- **Número entero:**
  - ✅ `123`
  - `'cadena'`
  - `45.67`
```

- Cada término es una viñeta al margen, en negrita y terminado en `:`.
- Debajo, indentadas con 2 espacios, van **todas** las opciones del desplegable, con exactamente una ✅ (la que corresponde a ese término).

### Autocorrección (respuesta abierta, ordenar o completar huecos)

Para preguntas que no se corrigen eligiendo opciones (arrastrar y soltar, completar el código, ordenar pasos), mostrá las piezas **sin** ✅ y después una línea con la respuesta completa que empieza con ✅:

```markdown
## Pregunta 74

**Enunciado:** Ordene las palabras para formar la sentencia que inserta una fila:

- **Opción 1:** `VALUES` | `SELECT` | `INSERT`
- **Opción 2:** `INTO` | `FROM` | `TABLE`

✅ **Resultado completo:** `INSERT INTO MI_TABLA VALUES (3, 'hola');`
```

### CodeRunner (código Java que se compila y prueba)

Preguntas donde se escribe código y se corre contra casos de prueba (en Moodle: CodeRunner, con una tabla "Por ejemplo" de Prueba / Resultado).

````markdown
## Pregunta 1

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Singleton** en Java.

La clase debe mantener una única instancia...

**Requisitos**

- Dos llamadas a `getInstance()` deben devolver el mismo objeto.

> **Pista:** ...

### Código base

```java
public class Singleton {
    private static Singleton instance;

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
public class Singleton {
    private static Singleton instance;

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```
````

Reglas de las CodeRunner:

- La línea `**Tipo:** CodeRunner (Java)` va antes del enunciado.
- Los únicos `###` permitidos son `### Código base`, `### Prueba` y `### Solución`, en ese orden. Todo lo que va antes del primero es el enunciado; si la página tiene "Requisitos", "Ejemplos" o "Pista", van en negrita o como `> `, nunca como `###`.
- **Código base:** el código con el que arranca el editor (en Moodle, lo que ya viene escrito en la caja de respuesta), completo y tal cual, con los comentarios de "completar aquí".
- **Prueba:** una sección `### Prueba` por cada caso de ejemplo. Cada una tiene dos bloques: primero el código de la prueba (```` ```java ````), después la salida exacta que imprime (```` ``` ```` sin lenguaje). La prueba son sentencias sueltas (lo que iría dentro de un `main`), no una clase. La salida se compara exacta: respetá mayúsculas, tildes, espacios y saltos de línea.
- **Pruebas extra:** si los ejemplos no ejercitan todas las partes que el estudiante completa (por ejemplo, prueban solo una de dos fábricas, o nunca llaman a un setter), agregá pruebas nuevas que sí lo hagan. Deducí su salida de la solución y mencionalas en "Para revisar" como "prueba agregada".
- **Solución:** el código **completo** (el código base con todo lo que faltaba resuelto), no solo los métodos que cambian. Si la página muestra una respuesta correcta, usala; si no, escribila vos y ponela en "Para revisar".
- El código corre en **Java 8**: no uses `var`, `record`, text blocks (`"""`), `switch` con `->` ni `List.of`.
- Si el código tiene varias clases, van todas en el mismo bloque; como mucho una puede ser `public`.

## Antes de responder, revisá

- Cada pregunta tiene `## Pregunta N`, con números consecutivos desde NUMERO_INICIAL.
- Cada opción única o múltiple tiene al menos una ✅; cada término de emparejar tiene exactamente una.
- Las CodeRunner tienen al menos una `### Prueba` con sus dos bloques, y la solución completa.
- No hay `###` fuera de las CodeRunner, ni texto propio de Moodle.
