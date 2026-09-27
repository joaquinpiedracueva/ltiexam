# Algoritmos y Patrones de Diseño

## Pregunta 1

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Singleton** en Java.

La clase debe mantener una única instancia de `Singleton` y gestionar un contador compartido a través de los siguientes métodos:

- `getInstance()`: obtiene la única instancia de la clase. Si todavía no existe, debe crearla.
- `incrementCounter()`: incrementa el contador en 1.
- `getCounter()`: devuelve el valor actual del contador.

**Requisitos**

- Completa únicamente las instrucciones faltantes en los métodos indicados.
- Dos llamadas a `getInstance()` deben devolver el mismo objeto.
- El contador debe ser compartido por todas las referencias obtenidas mediante `getInstance()`.

> **Pista:** cuando la instancia se crea por primera vez, piensa dónde debería quedar almacenada para poder reutilizarla en las siguientes llamadas.

### Código base

```java
public class Singleton {
    private static Singleton instance;
    private int counter;

    // Constructor privado
    private Singleton() {
        counter = 0;
    }

    // Método para obtener la única instancia de la clase
    public static Singleton getInstance() {
        // Agregue las instrucciones correctas
    }

    // Método para incrementar el contador
    public void incrementCounter() {
        // Agregue la instrucción correcta
    }

    // Método para obtener el valor del contador
    public int getCounter() {
        // Agregue la instrucción correcta
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

### Prueba

```java
Singleton s1 = Singleton.getInstance();
Singleton s2 = Singleton.getInstance();
s1.incrementCounter();
s2.incrementCounter();
System.out.println(s1.getCounter());
```

```
2
```

### Solución

```java
public class Singleton {
    private static Singleton instance;
    private int counter;

    // Constructor privado
    private Singleton() {
        counter = 0;
    }

    // Método para obtener la única instancia de la clase
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    // Método para incrementar el contador
    public void incrementCounter() {
        counter = counter + 1;
    }

    // Método para obtener el valor del contador
    public int getCounter() {
        return counter;
    }
}
```

## Pregunta 2

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Singleton** en una clase llamada `Logger`.

La clase debe mantener una única instancia y almacenar los mensajes registrados en un historial compartido.

- `getInstance()`: obtiene la única instancia de `Logger`. Si todavía no existe, debe crearla.
- `logMessage(String message)`: agrega el mensaje recibido al historial.
- `getLog()`: devuelve todos los mensajes registrados. Este método ya se encuentra implementado.

**Requisitos**

- Completa únicamente las instrucciones faltantes en los métodos indicados.
- Dos llamadas a `getInstance()` deben devolver el mismo objeto.
- Los mensajes registrados desde distintas referencias deben quedar almacenados en el mismo historial.

> **Pista:** recuerda que todas las referencias obtenidas mediante `getInstance()` deben trabajar sobre el mismo `Logger` y, por lo tanto, sobre la misma lista de mensajes.

### Código base

```java
import java.util.ArrayList;

public class Logger {
    private static Logger instance;
    private ArrayList<String> logMessages;

    // Constructor privado
    private Logger() {
        logMessages = new ArrayList<>();
    }

    // Método para obtener la única instancia de la clase
    public static Logger getInstance() {
        // Agregue las instrucciones correctas
    }

    // Método para registrar un nuevo mensaje
    public void logMessage(String message) {
        // Agregue la instrucción correcta
    }

    // Método para obtener todos los mensajes registrados
    public String getLog() {
        String resultado = "";
        for (String mensaje : logMessages) {
            resultado += mensaje + "\n";
        }
        return resultado;
    }
}
```

### Prueba

```java
Logger logger1 = Logger.getInstance();
Logger logger2 = Logger.getInstance();
System.out.println(logger1 == logger2);
```

```
true
```

### Prueba

```java
Logger logger1 = Logger.getInstance();
Logger logger2 = Logger.getInstance();
logger1.logMessage("Mensaje A");
logger2.logMessage("Mensaje B");
System.out.println(logger2.getLog());
```

```
Mensaje A
Mensaje B
```

### Solución

```java
import java.util.ArrayList;

public class Logger {
    private static Logger instance;
    private ArrayList<String> logMessages;

    // Constructor privado
    private Logger() {
        logMessages = new ArrayList<>();
    }

    // Método para obtener la única instancia de la clase
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Método para registrar un nuevo mensaje
    public void logMessage(String message) {
        logMessages.add(message);
    }

    // Método para obtener todos los mensajes registrados
    public String getLog() {
        String resultado = "";
        for (String mensaje : logMessages) {
            resultado += mensaje + "\n";
        }
        return resultado;
    }
}
```

## Pregunta 3

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Factory Method** en Java.

La aplicación trabaja con distintos tipos de animales. Cada animal puede emitir su propio sonido, pero la creación de los objetos debe realizarse a través de la clase `AnimalFactory`.

- `Animal`: clase abstracta que define el método `hacerSonido()`.
- `Perro` y `Gato`: clases concretas que implementan su propio sonido.
- `AnimalFactory`: debe decidir qué objeto crear según el valor recibido.

**Requisitos**

- Completa únicamente el método `crearAnimal(String tipo)`.
- Si el tipo recibido es `"Perro"`, debe devolver un objeto `Perro`.
- Si el tipo recibido es `"Gato"`, debe devolver un objeto `Gato`.
- Si el tipo no corresponde a ninguno de los anteriores, debe devolver `null`.

> **Pista:** dentro de la fábrica debes evaluar el valor recibido y decidir qué clase concreta instanciar.

### Código base

```java
// Clase abstracta Animal
abstract class Animal {
    public abstract String hacerSonido();
}

// Clase concreta Perro
class Perro extends Animal {
    @Override
    public String hacerSonido() {
        return "Guau";
    }
}

// Clase concreta Gato
class Gato extends Animal {
    @Override
    public String hacerSonido() {
        return "Miau";
    }
}

// Clase encargada de crear los animales
class AnimalFactory {
    public Animal crearAnimal(String tipo) {
        // Si el tipo es "Perro", devolver un nuevo Perro

        // Si el tipo es "Gato", devolver un nuevo Gato

        // Si no corresponde a ninguno de los anteriores,
        // devolver null
    }
}
```

### Prueba

```java
AnimalFactory factory = new AnimalFactory();
Animal perro = factory.crearAnimal("Perro");
System.out.println(perro.hacerSonido());
```

```
Guau
```

### Prueba

```java
AnimalFactory factory = new AnimalFactory();
Animal gato = factory.crearAnimal("Gato");
System.out.println(gato.hacerSonido());
```

```
Miau
```

### Prueba

```java
AnimalFactory factory = new AnimalFactory();
Animal animal = factory.crearAnimal("Caballo");
System.out.println(animal == null);
```

```
true
```

### Solución

```java
// Clase abstracta Animal
abstract class Animal {
    public abstract String hacerSonido();
}

// Clase concreta Perro
class Perro extends Animal {
    @Override
    public String hacerSonido() {
        return "Guau";
    }
}

// Clase concreta Gato
class Gato extends Animal {
    @Override
    public String hacerSonido() {
        return "Miau";
    }
}

// Clase encargada de crear los animales
class AnimalFactory {
    public Animal crearAnimal(String tipo) {
        if (tipo.equals("Perro")) {
            return new Perro();
        } else if (tipo.equals("Gato")) {
            return new Gato();
        } else {
            return null;
        }
    }
}
```

## Pregunta 4

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Factory Method** en Java.

La aplicación trabaja con distintos tipos de vehículos. Cada vehículo puede indicar su tipo, pero la creación de los objetos debe realizarse a través de la clase `VehiculoFactory`.

- `Vehiculo`: clase abstracta que define el método `tipoVehiculo()`.
- `Auto` y `Moto`: clases concretas que indican su propio tipo (`"Soy un Auto"` y `"Soy una Moto"`).
- `VehiculoFactory`: debe decidir qué objeto crear según el valor recibido.

**Requisitos**

- Completa las instrucciones faltantes en el método `crearVehiculo(String tipo)` y los métodos `tipoVehiculo()` de `Auto` y `Moto`.
- Si el tipo recibido es `"Auto"`, debe devolver un objeto `Auto`.
- Si el tipo recibido es `"Moto"`, debe devolver un objeto `Moto`.
- Si el tipo no corresponde a ninguno de los anteriores, debe devolver `null`.

> **Pista:** la fábrica recibe un tipo de vehículo. Evalúa ese valor para decidir qué clase concreta debe instanciar y devolver.

### Código base

```java
// Clase abstracta Vehiculo
abstract class Vehiculo {

    public abstract String tipoVehiculo();
}

// Clase concreta Auto
class Auto extends Vehiculo {

    @Override

}

// Clase concreta Moto
class Moto extends Vehiculo {

    @Override

}

// Clase encargada de crear los vehículos
class VehiculoFactory {
    public Vehiculo crearVehiculo(String tipo) {
        // Si el tipo es "Auto", devolver un nuevo Auto

        // Si el tipo es "Moto", devolver una nueva Moto

        // Si no corresponde a ninguno de los anteriores,
        // devolver null
    }
}
```

### Prueba

```java
VehiculoFactory factory = new VehiculoFactory();
Vehiculo auto = factory.crearVehiculo("Auto");
System.out.println(auto.tipoVehiculo());
```

```
Soy un Auto
```

### Prueba

```java
VehiculoFactory factory = new VehiculoFactory();
Vehiculo moto = factory.crearVehiculo("Moto");
System.out.println(moto.tipoVehiculo());
```

```
Soy una Moto
```

### Prueba

```java
VehiculoFactory factory = new VehiculoFactory();
Vehiculo vehiculo = factory.crearVehiculo("Camion");
System.out.println(vehiculo == null);
```

```
true
```

### Solución

```java
// Clase abstracta Vehiculo
abstract class Vehiculo {

    public abstract String tipoVehiculo();
}

// Clase concreta Auto
class Auto extends Vehiculo {

    @Override
    public String tipoVehiculo() {
        return "Soy un Auto";
    }
}

// Clase concreta Moto
class Moto extends Vehiculo {

    @Override
    public String tipoVehiculo() {
        return "Soy una Moto";
    }
}

// Clase encargada de crear los vehículos
class VehiculoFactory {
    public Vehiculo crearVehiculo(String tipo) {
        if (tipo.equals("Auto")) {
            return new Auto();
        } else if (tipo.equals("Moto")) {
            return new Moto();
        } else {
            return null;
        }
    }
}
```

## Pregunta 5

**Enunciado:** ¿Cómo se garantiza que el patrón Singleton solo permita una instancia?

- a. Implementando una lista de instancias en una clase base.
- ✅ b. Usando un constructor protegido y un método estático para obtener la instancia.
- c. Utilizando una fábrica abstracta para crear la instancia.
- d. Usando un constructor público para crear la instancia.

## Pregunta 6

**Enunciado:** ¿Cuál es la función principal del patrón Factory Method?

- a. Garantizar que una clase solo tenga una única instancia.
- b. Controlar la concurrencia en la creación de objetos.
- ✅ c. Permitir la creación de objetos sin especificar la clase exacta del objeto a crear.
- d. Facilitar la clonación de objetos a partir de una instancia base.

## Pregunta 7

**Enunciado:** ¿Cuál es la principal característica del patrón Singleton?

- a. Asegura que una clase tenga múltiples puntos de acceso.
- b. Facilita la creación de objetos complejos paso a paso.
- ✅ c. Garantiza que solo haya una única instancia de una clase en todo el sistema.
- d. Permite la creación de múltiples instancias de una clase.

## Pregunta 8

**Enunciado:** ¿Cuál es la principal ventaja del patrón Factory Method frente a la creación directa de objetos?

- a. Mejora la eficiencia de la creación de objetos, reduciendo el tiempo de ejecución.
- ✅ b. Proporciona un nivel adicional de abstracción, lo que facilita la extensión del sistema sin modificar el código cliente.
- c. Permite una única instancia de una clase en todo el sistema.
- d. Facilita la implementación de objetos que no pueden ser clonados.

## Pregunta 9

**Enunciado:** ¿Cuál es un caso típico donde se debe utilizar el patrón Singleton?

- ✅ a. Manejar una conexión única a una base de datos compartida por múltiples usuarios.
- b. Definir una clase abstracta para gestionar la creación de objetos relacionados.
- c. Implementar un sistema de eventos basado en un solo observador.
- d. Crear múltiples objetos complejos que requieren diferentes configuraciones.

## Pregunta 10

**Enunciado:** ¿Cuál es un ejemplo práctico del uso del patrón Factory Method?

- ✅ a. Crear diferentes tipos de documentos (PDF, Word, etc.) sin especificar la clase concreta.
- b. Controlar el acceso a una base de datos en un sistema distribuido.
- c. Administrar la creación de un único objeto en todo el sistema.
- d. Garantizar que solo una instancia de un objeto esté disponible en todo el sistema.

## Pregunta 11

**Enunciado:** ¿Cuál es una aplicación común del patrón Factory Method?

- a. Proporcionar acceso a una instancia global en un sistema distribuido.
- ✅ b. Creación de interfaces gráficas personalizadas para diferentes sistemas operativos.
- c. Crear copias idénticas de un objeto a partir de un prototipo.
- d. Crear una única instancia de un recurso compartido entre varios módulos.

## Pregunta 12

**Enunciado:** ¿Cuál es una desventaja del patrón Factory Method?

- ✅ a. Incrementa la complejidad del código al introducir múltiples subclases de fábricas.
- b. No es compatible con otros patrones de creación de objetos.
- c. Impide la creación de nuevos tipos de productos sin modificar el código existente.
- d. Limita la posibilidad de reutilización de código en grandes sistemas.

## Pregunta 13

**Enunciado:** ¿Cuál es una diferencia clave entre el patrón Factory Method y el patrón Singleton?

- a. Singleton utiliza métodos estáticos, mientras que Factory Method utiliza interfaces.
- ✅ b. Singleton garantiza una única instancia, mientras que Factory Method permite crear múltiples instancias de diferentes clases.
- c. Factory Method crea instancias compartidas, mientras que Singleton crea objetos complejos.
- d. Factory Method asegura la creación de objetos únicos en sistemas multihilo, mientras que Singleton no lo hace.

## Pregunta 14

**Enunciado:** ¿Cuál es una implementación común del patrón Singleton para asegurar que la instancia se cree solo cuando sea necesaria?

- a. Crear la instancia en el constructor de la clase.
- ✅ b. Cargar perezosamente (lazy loading).
- c. Implementar un patrón Factory Method dentro del Singleton.
- d. Utilizar métodos abstractos.

## Pregunta 15

**Enunciado:** ¿Cuál es una posible complicación al usar el patrón Singleton en aplicaciones distribuidas?

- a. Facilita la creación de múltiples instancias no deseadas.
- ✅ b. Puede ser difícil mantener una única instancia en múltiples entornos o servidores.
- c. Requiere más memoria debido a la creación de múltiples instancias.
- d. Hace que el código sea difícil de extender con nuevas funcionalidades.

## Pregunta 16

**Enunciado:** ¿Cuál es una posible desventaja del patrón Singleton en aplicaciones concurrentes?

- ✅ a. Se crean múltiples instancias en hilos diferentes si no se maneja correctamente.
- b. Facilita la creación de demasiadas instancias, lo que causa errores de memoria.
- c. No permite la creación de objetos en sistemas distribuidos.
- d. Hace imposible compartir recursos entre instancias.

## Pregunta 17

**Enunciado:** ¿Cuál es una situación en la que el patrón Factory Method sería útil?

- ✅ a. Cuando necesitas permitir que las subclases decidan qué tipo de objeto crear.
- b. Cuando se requiere gestionar la clonación de objetos.
- c. Cuando solo se necesita una única instancia de una clase.
- d. Cuando se necesita compartir una única instancia entre múltiples hilos.

## Pregunta 18

**Enunciado:** ¿Cuál es una situación en la que NO se debe usar el patrón Singleton?

- ✅ a. Cuando se requieren múltiples instancias del mismo tipo de objeto en diferentes partes del sistema.
- b. Cuando se necesita controlar el acceso a recursos compartidos.
- c. Cuando se desea tener una única conexión a una base de datos centralizada.
- d. Cuando se necesita una instancia única para manejar la configuración global del sistema.

## Pregunta 19

**Enunciado:** ¿Cuál es una técnica común para manejar problemas de concurrencia en el patrón Singleton?

- a. Implementar el patrón Singleton en una clase abstracta.
- ✅ b. Usar sincronización en el método que retorna la instancia única.
- c. Usar métodos de clase estática para asegurar la creación de instancias.
- d. Crear múltiples instancias y elegir la primera disponible.

## Pregunta 20

**Enunciado:** ¿Cuál es una variación del patrón Singleton para mejorar el rendimiento en aplicaciones multihilo?

- a. Singleton utilizando el patrón Observer.
- ✅ b. Singleton con sincronización doble (double-checked locking).
- c. Singleton con herencia múltiple.
- d. Singleton de carga temprana (eager loading).

## Pregunta 21

**Enunciado:** ¿Cuál es una ventaja del patrón Factory Method?

- a. Elimina la necesidad de usar interfaces en la creación de objetos.
- b. Permite la creación de una única instancia en todo el sistema.
- c. Facilita la creación de objetos relacionados sin herencia.
- ✅ d. Desacopla el código cliente de la lógica de creación de objetos.

## Pregunta 22

**Enunciado:** ¿Cuál es una ventaja del patrón Factory Method en comparación con la creación directa de objetos?

- ✅ a. Permite a las subclases decidir qué clase concreta de objetos crear.
- b. Elimina la necesidad de utilizar patrones estructurales.
- c. Siempre mejora el rendimiento del sistema en términos de tiempo de creación de objetos.
- d. Facilita la creación de múltiples instancias de Singleton.

## Pregunta 23

**Enunciado:** ¿Qué característica distingue al patrón Factory Method de otros patrones de creación?

- a. Utiliza la herencia para compartir una única instancia entre todas las subclases.
- b. Asegura que solo una instancia de una clase pueda ser creada en todo el sistema.
- ✅ c. Permite la creación de objetos sin especificar la clase concreta, delegando la creación a subclases.
- d. Permite la creación de objetos clonados a partir de una instancia base.

## Pregunta 24

**Enunciado:** ¿Qué método se usa comúnmente para obtener la instancia de un Singleton?

- a. Un método de clase que recibe parámetros.
- b. Un constructor público que crea nuevas instancias.
- c. Un constructor protegido.
- ✅ d. Un método estático que retorna la instancia única.
