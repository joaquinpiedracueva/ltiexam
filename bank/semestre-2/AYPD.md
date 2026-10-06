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

## Pregunta 25

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Abstract Factory** en Java.

La aplicación debe trabajar con dos familias de dispositivos electrónicos: **Apple** y **Samsung**. Cada familia puede crear dos tipos de productos: un **Móvil** y una **Tablet**.

- `Movil` y `Tablet`: definen los tipos de productos que pueden crearse.
- `DispositivoFactory`: define qué productos debe poder crear cualquier fábrica.
- `AppleFactory`: crea dispositivos de la familia Apple.
- `SamsungFactory`: crea dispositivos de la familia Samsung.

**Requisitos**

- Completa únicamente las instrucciones faltantes en las fábricas concretas.
- `AppleFactory` debe crear un `AppleMovil` y un `AppleTablet`.
- `SamsungFactory` debe crear un `SamsungMovil` y un `SamsungTablet`.
- Cada fábrica debe devolver productos pertenecientes a la misma familia o marca.

> **Pista:** piensa en cada fábrica como una fábrica completa de una marca. Si utilizas `AppleFactory`, todos los productos creados deben ser Apple; si utilizas `SamsungFactory`, todos deben ser Samsung.

### Código base

```java
// Producto: Movil
interface Movil {
    String getMarca();
}

// Producto: Tablet
interface Tablet {
    String getMarca();
}

// Fábrica abstracta:
// todas las fábricas deben poder crear un Movil y una Tablet
interface DispositivoFactory {
    Movil crearMovil();
    Tablet crearTablet();
}


// ----- Familia Apple -----

class AppleMovil implements Movil {

    public String getMarca() {
        return "Apple Movil";
    }
}

class AppleTablet implements Tablet {

    public String getMarca() {
        return "Apple Tablet";
    }
}


// ----- Familia Samsung -----

class SamsungMovil implements Movil {

    public String getMarca() {
        return "Samsung Movil";
    }
}

class SamsungTablet implements Tablet {

    public String getMarca() {
        return "Samsung Tablet";
    }
}


// Fábrica Apple
class AppleFactory implements DispositivoFactory {

    public Movil crearMovil() {
        // Devolver un móvil de la familia Apple
    }

    public Tablet crearTablet() {
        // Devolver una tablet de la familia Apple
    }
}


// Fábrica Samsung
class SamsungFactory implements DispositivoFactory {

    public Movil crearMovil() {
        // Devolver un móvil de la familia Samsung
    }

    public Tablet crearTablet() {
        // Devolver una tablet de la familia Samsung
    }
}
```

### Prueba

```java
DispositivoFactory factory = new AppleFactory();
Movil movil = factory.crearMovil();
System.out.println(movil.getMarca());
```

```
Apple Movil
```

### Prueba

```java
DispositivoFactory factory = new AppleFactory();
Movil movil = factory.crearMovil();
Tablet tablet = factory.crearTablet();
System.out.println(movil.getMarca());
System.out.println(tablet.getMarca());
```

```
Apple Movil
Apple Tablet
```

### Prueba

```java
DispositivoFactory factory = new SamsungFactory();
Movil movil = factory.crearMovil();
Tablet tablet = factory.crearTablet();
System.out.println(movil.getMarca());
System.out.println(tablet.getMarca());
```

```
Samsung Movil
Samsung Tablet
```

### Solución

```java
// Producto: Movil
interface Movil {
    String getMarca();
}

// Producto: Tablet
interface Tablet {
    String getMarca();
}

// Fábrica abstracta:
// todas las fábricas deben poder crear un Movil y una Tablet
interface DispositivoFactory {
    Movil crearMovil();
    Tablet crearTablet();
}


// ----- Familia Apple -----

class AppleMovil implements Movil {

    public String getMarca() {
        return "Apple Movil";
    }
}

class AppleTablet implements Tablet {

    public String getMarca() {
        return "Apple Tablet";
    }
}


// ----- Familia Samsung -----

class SamsungMovil implements Movil {

    public String getMarca() {
        return "Samsung Movil";
    }
}

class SamsungTablet implements Tablet {

    public String getMarca() {
        return "Samsung Tablet";
    }
}


// Fábrica Apple
class AppleFactory implements DispositivoFactory {

    public Movil crearMovil() {
        return new AppleMovil();
    }

    public Tablet crearTablet() {
        return new AppleTablet();
    }
}


// Fábrica Samsung
class SamsungFactory implements DispositivoFactory {

    public Movil crearMovil() {
        return new SamsungMovil();
    }

    public Tablet crearTablet() {
        return new SamsungTablet();
    }
}
```

## Pregunta 26

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Abstract Factory** en Java.

La aplicación trabaja con dos familias de vehículos según su tipo de energía: **Eléctricos** y **Gasolina**. Cada familia puede crear dos tipos de vehículos: un **Auto** y una **Moto**.

- `Auto` y `Moto`: definen los tipos de vehículos que pueden crearse.
- `VehiculoFactory`: define qué vehículos debe poder crear cualquier fábrica.
- `ElectricoFactory`: crea vehículos de la familia eléctrica.
- `GasolinaFactory`: crea vehículos de la familia a gasolina.

**Requisitos**

- Completa únicamente las instrucciones faltantes en las fábricas concretas.
- `ElectricoFactory` debe crear un `AutoElectrico` y una `MotoElectrica`.
- `GasolinaFactory` debe crear un `AutoGasolina` y una `MotoGasolina`.
- Los vehículos creados por una misma fábrica deben pertenecer a la misma familia.

> **Pista:** identifica primero qué familia representa cada fábrica y luego devuelve el vehículo correspondiente en cada método.

### Código base

```java
// Producto: Auto
interface Auto {
    String getTipo();
}

// Producto: Moto
interface Moto {
    String getTipo();
}

// Fábrica abstracta:
// todas las fábricas deben poder crear un Auto y una Moto
interface VehiculoFactory {
    Auto crearAuto();
    Moto crearMoto();
}


// ----- Familia Eléctrica -----

class AutoElectrico implements Auto {

    public String getTipo() {
        return "Auto Eléctrico";
    }
}

class MotoElectrica implements Moto {

    public String getTipo() {
        return "Moto Eléctrica";
    }
}


// ----- Familia Gasolina -----

class AutoGasolina implements Auto {

    public String getTipo() {
        return "Auto de Gasolina";
    }
}

class MotoGasolina implements Moto {

    public String getTipo() {
        return "Moto de Gasolina";
    }
}


// Fábrica de vehículos eléctricos
class ElectricoFactory implements VehiculoFactory {

    public Auto crearAuto() {
        // Devolver un Auto de la familia eléctrica
    }

    public Moto crearMoto() {
        // Devolver una Moto de la familia eléctrica
    }
}


// Fábrica de vehículos a gasolina
class GasolinaFactory implements VehiculoFactory {

    public Auto crearAuto() {
        // Devolver un Auto de la familia gasolina
    }

    public Moto crearMoto() {
        // Devolver una Moto de la familia gasolina
    }
}
```

### Prueba

```java
VehiculoFactory factory = new ElectricoFactory();
Auto auto = factory.crearAuto();
Moto moto = factory.crearMoto();
System.out.println(auto.getTipo());
System.out.println(moto.getTipo());
```

```
Auto Eléctrico
Moto Eléctrica
```

### Prueba

```java
VehiculoFactory factory = new GasolinaFactory();
Auto auto = factory.crearAuto();
Moto moto = factory.crearMoto();
System.out.println(auto.getTipo());
System.out.println(moto.getTipo());
```

```
Auto de Gasolina
Moto de Gasolina
```

### Solución

```java
// Producto: Auto
interface Auto {
    String getTipo();
}

// Producto: Moto
interface Moto {
    String getTipo();
}

// Fábrica abstracta:
// todas las fábricas deben poder crear un Auto y una Moto
interface VehiculoFactory {
    Auto crearAuto();
    Moto crearMoto();
}


// ----- Familia Eléctrica -----

class AutoElectrico implements Auto {

    public String getTipo() {
        return "Auto Eléctrico";
    }
}

class MotoElectrica implements Moto {

    public String getTipo() {
        return "Moto Eléctrica";
    }
}


// ----- Familia Gasolina -----

class AutoGasolina implements Auto {

    public String getTipo() {
        return "Auto de Gasolina";
    }
}

class MotoGasolina implements Moto {

    public String getTipo() {
        return "Moto de Gasolina";
    }
}


// Fábrica de vehículos eléctricos
class ElectricoFactory implements VehiculoFactory {

    public Auto crearAuto() {
        return new AutoElectrico();
    }

    public Moto crearMoto() {
        return new MotoElectrica();
    }
}


// Fábrica de vehículos a gasolina
class GasolinaFactory implements VehiculoFactory {

    public Auto crearAuto() {
        return new AutoGasolina();
    }

    public Moto crearMoto() {
        return new MotoGasolina();
    }
}
```

## Pregunta 27

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Builder** en Java.

La aplicación debe permitir construir objetos **Computadora** paso a paso, definiendo distintas características como procesador, RAM, almacenamiento y tarjeta gráfica.

- `Computadora`: representa el objeto final que se quiere construir.
- `ComputadoraBuilder`: permite configurar sus características antes de crear la computadora.
- `build()`: genera finalmente el objeto `Computadora` con los valores definidos.

**Requisitos**

- Completa las asignaciones faltantes en el constructor de `Computadora`.
- Completa los métodos `setAlmacenamiento()` y `setTarjetaGrafica()`.
- Cada método de configuración del Builder debe guardar el valor recibido y devolver el propio Builder.
- El método `build()` debe devolver una computadora con los valores configurados.

> **Pista:** el Builder guarda temporalmente los valores. Cuando se llama a `build()`, esos valores deben copiarse al nuevo objeto `Computadora`.

### Código base

```java
public class Computadora {

    private String procesador;
    private int ram;
    private int almacenamiento;
    private String tarjetaGrafica;

    // Construye la computadora utilizando los valores almacenados en el Builder
    private Computadora(ComputadoraBuilder builder) {
        this.procesador = builder.procesador;

        // Copiar el valor de RAM desde el builder

        // Copiar el valor de almacenamiento desde el builder

        // Copiar el valor de tarjeta gráfica desde el builder
    }

    @Override
    public String toString() {
        return "Computadora [Procesador=" + procesador
                + ", RAM=" + ram + "GB"
                + ", Almacenamiento=" + almacenamiento + "GB"
                + ", Tarjeta Gráfica=" + tarjetaGrafica + "]";
    }

    public static class ComputadoraBuilder {

        private String procesador;
        private int ram;
        private int almacenamiento;
        private String tarjetaGrafica;

        public ComputadoraBuilder setProcesador(String procesador) {
            this.procesador = procesador;
            return this;
        }

        public ComputadoraBuilder setRam(int ram) {
            this.ram = ram;
            return this;
        }

        public ComputadoraBuilder setAlmacenamiento(int almacenamiento) {

            // Guardar el almacenamiento recibido

            // Devolver el propio Builder

        }

        public ComputadoraBuilder setTarjetaGrafica(String tarjetaGrafica) {

            // Guardar la tarjeta gráfica recibida

            // Devolver el propio Builder

        }

        public Computadora build() {
            return new Computadora(this);
        }
    }
}
```

### Prueba

```java
Computadora computadora = new Computadora.ComputadoraBuilder()
        .setProcesador("Intel i5")
        .setRam(8)
        .setAlmacenamiento(256)
        .build();
System.out.println(computadora);
```

```
Computadora [Procesador=Intel i5, RAM=8GB, Almacenamiento=256GB, Tarjeta Gráfica=null]
```

### Prueba

```java
Computadora computadora = new Computadora.ComputadoraBuilder()
        .setProcesador("AMD Ryzen 7")
        .setRam(32)
        .setAlmacenamiento(1024)
        .setTarjetaGrafica("RTX 4070")
        .build();
System.out.println(computadora);
```

```
Computadora [Procesador=AMD Ryzen 7, RAM=32GB, Almacenamiento=1024GB, Tarjeta Gráfica=RTX 4070]
```

### Solución

```java
public class Computadora {

    private String procesador;
    private int ram;
    private int almacenamiento;
    private String tarjetaGrafica;

    // Construye la computadora utilizando los valores almacenados en el Builder
    private Computadora(ComputadoraBuilder builder) {
        this.procesador = builder.procesador;
        this.ram = builder.ram;
        this.almacenamiento = builder.almacenamiento;
        this.tarjetaGrafica = builder.tarjetaGrafica;
    }

    @Override
    public String toString() {
        return "Computadora [Procesador=" + procesador
                + ", RAM=" + ram + "GB"
                + ", Almacenamiento=" + almacenamiento + "GB"
                + ", Tarjeta Gráfica=" + tarjetaGrafica + "]";
    }

    public static class ComputadoraBuilder {

        private String procesador;
        private int ram;
        private int almacenamiento;
        private String tarjetaGrafica;

        public ComputadoraBuilder setProcesador(String procesador) {
            this.procesador = procesador;
            return this;
        }

        public ComputadoraBuilder setRam(int ram) {
            this.ram = ram;
            return this;
        }

        public ComputadoraBuilder setAlmacenamiento(int almacenamiento) {
            this.almacenamiento = almacenamiento;
            return this;
        }

        public ComputadoraBuilder setTarjetaGrafica(String tarjetaGrafica) {
            this.tarjetaGrafica = tarjetaGrafica;
            return this;
        }

        public Computadora build() {
            return new Computadora(this);
        }
    }
}
```

## Pregunta 28

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Builder** en Java.

La aplicación debe permitir construir una **Pizza** paso a paso, indicando qué ingredientes tendrá.

- `Pizza`: representa el objeto final que se quiere construir.
- `PizzaBuilder`: permite seleccionar los ingredientes antes de crear la pizza.
- `build()`: crea finalmente la `Pizza` con la configuración elegida.

**Requisitos**

- Completa las instrucciones faltantes en el `PizzaBuilder`.
- Cada ingrediente se representa mediante un valor `boolean`: `true` si se agrega y `false` si no se agrega.
- Cada método de configuración debe guardar el valor recibido y devolver el propio Builder.
- El método `build()` debe devolver una pizza con los ingredientes seleccionados.

> **Pista:** el Builder va guardando las elecciones realizadas. Al llamar a `build()`, esas elecciones se utilizan para crear la pizza final.

### Código base

```java
public class Pizza {

    private boolean queso;
    private boolean pepperoni;
    private boolean pina;
    private boolean aceitunas;

    private Pizza(PizzaBuilder builder) {
        this.queso = builder.queso;
        this.pepperoni = builder.pepperoni;
        this.pina = builder.pina;
        this.aceitunas = builder.aceitunas;
    }

    @Override
    public String toString() {
        return "Pizza [Queso=" + queso
                + ", Pepperoni=" + pepperoni
                + ", Piña=" + pina
                + ", Aceitunas=" + aceitunas + "]";
    }

    public static class PizzaBuilder {

        private boolean queso;
        private boolean pepperoni;
        private boolean pina;
        private boolean aceitunas;

        public PizzaBuilder setQueso(boolean queso) {
            this.queso = queso;
            return this;
        }

        public PizzaBuilder setPepperoni(boolean pepperoni) {
            this.pepperoni = pepperoni;
            return this;
        }

        public PizzaBuilder setPina(boolean pina) {

            // Guardar el valor recibido en el atributo correspondiente

            // Devolver el propio Builder

        }

        public PizzaBuilder setAceitunas(boolean aceitunas) {

            // Guardar el valor recibido en el atributo correspondiente

            // Devolver el propio Builder

        }

        public Pizza build() {
            return new Pizza(this);
        }
    }
}
```

### Prueba

```java
Pizza pizza = new Pizza.PizzaBuilder()
        .setQueso(true)
        .setPepperoni(true)
        .build();
System.out.println(pizza);
```

```
Pizza [Queso=true, Pepperoni=true, Piña=false, Aceitunas=false]
```

### Prueba

```java
Pizza pizza = new Pizza.PizzaBuilder()
        .setQueso(true)
        .setPina(true)
        .setAceitunas(true)
        .build();
System.out.println(pizza);
```

```
Pizza [Queso=true, Pepperoni=false, Piña=true, Aceitunas=true]
```

### Solución

```java
public class Pizza {

    private boolean queso;
    private boolean pepperoni;
    private boolean pina;
    private boolean aceitunas;

    private Pizza(PizzaBuilder builder) {
        this.queso = builder.queso;
        this.pepperoni = builder.pepperoni;
        this.pina = builder.pina;
        this.aceitunas = builder.aceitunas;
    }

    @Override
    public String toString() {
        return "Pizza [Queso=" + queso
                + ", Pepperoni=" + pepperoni
                + ", Piña=" + pina
                + ", Aceitunas=" + aceitunas + "]";
    }

    public static class PizzaBuilder {

        private boolean queso;
        private boolean pepperoni;
        private boolean pina;
        private boolean aceitunas;

        public PizzaBuilder setQueso(boolean queso) {
            this.queso = queso;
            return this;
        }

        public PizzaBuilder setPepperoni(boolean pepperoni) {
            this.pepperoni = pepperoni;
            return this;
        }

        public PizzaBuilder setPina(boolean pina) {
            this.pina = pina;
            return this;
        }

        public PizzaBuilder setAceitunas(boolean aceitunas) {
            this.aceitunas = aceitunas;
            return this;
        }

        public Pizza build() {
            return new Pizza(this);
        }
    }
}
```

## Pregunta 29

**Enunciado:** Una aplicación tiene una configuración general utilizada por varios módulos. Se necesita que todos consulten el mismo objeto y que los cambios se vean desde cualquiera de ellos. ¿Qué solución aporta Singleton?

- a. Copiar la configuración cada vez que un módulo quiera usarla.
- ✅ b. Ofrecer una única instancia compartida por todos los módulos.
- c. Crear una configuración independiente para cada nuevo módulo.
- d. Añadir una subclase de configuración para cada módulo creado.

## Pregunta 30

**Enunciado:** Un contador debe ser compartido por toda la aplicación mediante Singleton. Un estudiante deja público su constructor, aunque también ofrece un método para obtener la instancia compartida. ¿Qué problema permite esta decisión?

- ✅ a. Los módulos pueden crear contadores fuera del acceso previsto.
- b. Los módulos quedan obligados a compartir siempre el contador.
- c. El método de acceso deja de devolver la instancia almacenada.
- d. El contador pierde la posibilidad de modificar su valor actual.

## Pregunta 31

**Enunciado:** Un sistema envía notificaciones por correo. Su clase base define el proceso de envío y delega la creación de la notificación en un método que las subclases pueden redefinir. Se quiere agregar WhatsApp. ¿Cómo se aprovecha Factory Method?

- a. Repetir el proceso completo de envío para cada canal agregado.
- ✅ b. Añadir un creador concreto que produzca notificaciones WhatsApp.
- c. Agregar dentro del proceso común todos los canales disponibles.
- d. Transformar cada notificación enviada en una instancia global.

## Pregunta 32

**Enunciado:** En un ejemplo de transporte, el proceso general de entrega trabaja con la interfaz `Transporte`. Una subclase creadora produce camiones y otra produce barcos. ¿Qué decisión queda a cargo de esas subclases?

- a. Determinar cuántos objetos puede almacenar toda la aplicación.
- b. Determinar qué permisos necesita el usuario para cada entrega.
- c. Determinar cómo se agrupan las entregas dentro de una carpeta.
- ✅ d. Determinar qué transporte concreto utilizará el proceso común.

## Pregunta 33

**Enunciado:** Una tienda utiliza una fábrica Apple para crear teléfonos y relojes de esa marca, y una fábrica Samsung para crear los equivalentes. Al incorporar una nueva marca con ambos productos, ¿qué extensión representa mejor Abstract Factory?

- ✅ a. Añadir una fábrica de la marca que cree los dos tipos de producto.
- b. Añadir un único teléfono que también actúe como reloj de la marca.
- c. Añadir una copia del cliente para cada dispositivo de esa marca.
- d. Añadir todos los dispositivos a una única instancia compartida.

## Pregunta 34

**Enunciado:** Una aplicación necesita un teléfono y un reloj de la misma marca. Ya existen fábricas concretas que producen correctamente los dispositivos de cada marca. ¿Cómo conviene obtener los dos objetos?

- a. Crear cada dispositivo desde una marca elegida por separado.
- b. Crear un dispositivo y utilizarlo también como el otro tipo.
- ✅ c. Crear ambos dispositivos mediante la misma fábrica concreta.
- d. Crear ambos dispositivos copiando siempre el mismo prototipo.

## Pregunta 35

**Enunciado:** Una aplicación permite armar computadoras eligiendo memoria, almacenamiento y otros componentes opcionales. A medida que crecen las combinaciones, aparecen muchos constructores difíciles de utilizar. ¿Qué aporta Builder?

- a. Compartir una computadora única entre todos los compradores.
- ✅ b. Configurar la computadora por pasos antes de obtener el objeto.
- c. Crear una subclase diferente por cada combinación disponible.
- d. Exigir que todas las computadoras tengan iguales componentes.

## Pregunta 36

**Enunciado:** En un ejemplo de pizzas, el Builder permite elegir tamaño e ingredientes y luego obtener la pizza terminada. Se quiere agregar una opción de borde relleno. ¿Dónde encaja mejor esa nueva elección?

- a. En una copia obligatoria de todas las pizzas ya construidas.
- b. En una instancia global que cambie todas las pizzas del local.
- c. En una clase cliente distinta para cada combinación de pizza.
- ✅ d. En un paso de configuración previo a construir la pizza final.

## Pregunta 37

**Enunciado:** Un sistema crea frecuentemente documentos con el mismo encabezado y estructura inicial, pero con distinto contenido. Se dispone de un documento modelo que puede copiarse. ¿Cómo ayuda Prototype?

- ✅ a. Crear documentos copiando el modelo y ajustar luego cada copia.
- b. Crear todos los documentos modificando siempre el mismo objeto.
- c. Crear una subclase nueva por cada contenido que escriba el usuario.
- d. Crear cada documento repitiendo manualmente toda su preparación.

## Pregunta 38

**Enunciado:** Un estudiante afirma que implementó Prototype, pero su método devuelve el propio documento original en lugar de crear una copia. ¿Qué ocurrirá si modifica el título del objeto recibido?

- a. Se modificará una copia creada automáticamente por el lenguaje.
- b. Se impedirá cualquier cambio porque el objeto funciona de modelo.
- ✅ c. Se modificará el original porque recibió exactamente ese objeto.
- d. Se modificará solamente el título de una nueva clase de documento.

## Pregunta 39

**Enunciado:** Una aplicación espera un sensor que entregue grados Celsius, pero se incorpora un termómetro externo que informa Fahrenheit. Se quiere conservar el funcionamiento de los clientes existentes. ¿Qué aporta Adapter?

- a. Guardar una única lectura para compartirla con todos los sensores.
- ✅ b. Presentar el contrato esperado y convertir la lectura del sensor.
- c. Copiar el termómetro externo cada vez que se consulte su lectura.
- d. Añadir una subclase cliente por cada temperatura que se registre.

## Pregunta 40

**Enunciado:** Después de integrar un termómetro externo, se incorpora otro fabricante con métodos diferentes. Ambos deben utilizarse desde la misma interfaz `SensorTemperatura`. ¿Qué cambio mantiene estable el uso desde los clientes?

- a. Modificar los clientes para reconocer los métodos de cada marca.
- b. Reemplazar la interfaz común por las dos interfaces de fabricantes.
- c. Crear una instancia global que contenga las lecturas de las marcas.
- ✅ d. Añadir otro adaptador que implemente la interfaz común de sensores.

## Pregunta 41

**Enunciado:** Una cafetería vende café solo, con leche, con chocolate o con ambos agregados. Se espera incorporar más extras sin crear una clase por cada combinación posible. ¿Qué permite Decorator?

- ✅ a. Envolver el café con objetos que añadan cada extra seleccionado.
- b. Construir una única clase distinta por cada combinación de extras.
- c. Compartir el mismo café mutable entre todos los pedidos del local.
- d. Modificar la clase base cada vez que aparezca un extra disponible.

## Pregunta 42

**Enunciado:** Un decorador de leche envuelve un café y debe sumar su costo al precio que ya tenga el objeto envuelto, incluso si este incluye otros extras. ¿Cómo debe calcular el total?

- a. Devolver solamente el costo de la leche agregada en ese nivel.
- b. Devolver el precio base ignorando los decoradores anteriores.
- ✅ c. Consultar el precio del objeto envuelto y sumar el costo propio.
- d. Consultar siempre una lista global con todos los extras del local.

## Pregunta 43

**Enunciado:** Una organización contiene empleados y equipos. Un equipo puede contener empleados u otros equipos. Se quiere calcular el costo total de cualquier elemento sin que el cliente distinga todos los casos. ¿Qué diseño propone Composite?

- a. Crear un método cliente diferente para cada profundidad del equipo.
- ✅ b. Ofrecer una operación común para empleados individuales y equipos.
- c. Convertir cada equipo completo en un empleado sin componentes hijos.
- d. Guardar todos los equipos dentro de una única instancia obligatoria.

## Pregunta 44

**Enunciado:** Un sistema representa archivos y carpetas mediante una interfaz común. Cada carpeta calcula su tamaño sumando el tamaño de sus hijos. Se agrega una subcarpeta que contiene más archivos. ¿Qué debería ocurrir con el cálculo existente?

- a. El cliente debe sumar por separado cada nuevo nivel incorporado.
- b. La carpeta principal debe conocer las clases de todos los archivos.
- c. Los archivos deben convertirse en carpetas para entrar en la suma.
- ✅ d. La suma debe incluirla mediante la misma operación de sus hijos.

## Pregunta 45

**Enunciado:** Para retirar dinero, un cliente debe validar la tarjeta, verificar la seguridad, consultar la cuenta y generar un comprobante. Se quiere ofrecer una operación sencilla que coordine esos servicios. ¿Qué aporta Facade?

- ✅ a. Ofrecer una entrada simple que coordine los servicios necesarios.
- b. Eliminar todos los servicios y trasladar sus datos al cliente final.
- c. Crear una copia completa del cajero antes de realizar cada retiro.
- d. Obligar al cliente a conocer el orden interno de todos los servicios.

## Pregunta 46

**Enunciado:** Una fachada permite reservar un turno médico mediante una sola operación. Ahora se incorpora un servicio de confirmación que debe ejecutarse después de una reserva exitosa. ¿Qué cambio conserva el acceso sencillo del cliente?

- a. Pedir a cada cliente que invoque también el servicio incorporado.
- b. Crear una copia del cliente para cada medio de confirmación nuevo.
- ✅ c. Añadir la llamada al servicio dentro de la operación de la fachada.
- d. Reemplazar la reserva por una llamada exclusiva a la confirmación.

## Pregunta 47

**Enunciado:** Un aula virtual permite acceder a un recurso mediante una interfaz común. Se necesita comprobar el rol del usuario antes de mostrarlo, conservando la clase que contiene el recurso. ¿Qué función cumple un Proxy de protección?

- a. Copiar el recurso para que cada usuario tenga permisos automáticos.
- ✅ b. Comprobar el permiso y delegar el acceso cuando esté autorizado.
- c. Cambiar el contenido del recurso para reemplazar la comprobación.
- d. Construir una familia de recursos distintos para cada asignatura.

## Pregunta 48

**Enunciado:** Un sistema gestiona estudiantes mediante un DAO que inicialmente utiliza una lista en memoria. Se quiere guardar los datos en PostgreSQL conservando las operaciones de agregar, listar y eliminar. ¿Qué cambio aprovecha mejor esta separación?

- a. Distribuir las consultas SQL entre todas las pantallas del sistema.
- b. Modificar cada estudiante para que controle todas las conexiones.
- c. Reemplazar las operaciones del negocio por instrucciones SQL públicas.
- ✅ d. Implementar otro DAO con el mismo contrato y acceso a PostgreSQL.

## Pregunta 49

**Enunciado:** ¿Cuál de las siguientes opciones describe un caso de uso común del patrón Builder?

- ✅ a. Construir un menú de restaurante, agregando paso a paso los elementos que lo componen.
- b. Generar un único punto de acceso a un recurso compartido.
- c. Crear diferentes tipos de bases de datos según el sistema operativo.
- d. Implementar un sistema de eventos distribuido.

## Pregunta 50

**Enunciado:** ¿Cuál de los siguientes es un caso típico para usar el patrón Abstract Factory?

- a. Construir objetos complejos como autos, paso a paso.
- ✅ b. Crear diferentes tipos de ventanas y botones para una interfaz gráfica sin especificar las clases concretas.
- c. Facilitar el acceso a un objeto compartido entre múltiples instancias.
- d. Garantizar que solo una instancia de una clase exista en el sistema.

## Pregunta 51

**Enunciado:** ¿Cuál es el propósito del patrón Builder?

- a. Crear una familia de objetos relacionados mediante una fábrica abstracta.
- ✅ b. Construir objetos complejos paso a paso, permitiendo su personalización.
- c. Facilitar la creación de una única instancia de un objeto.
- d. Proporcionar una interfaz única para todas las clases de un sistema.

## Pregunta 52

**Enunciado:** ¿Cuál es el propósito principal del patrón Abstract Factory?

- ✅ a. Crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.
- b. Facilitar la creación de objetos mediante la clonación.
- c. Crear objetos complejos a partir de componentes ya existentes.
- d. Garantizar que una clase solo tenga una instancia.

## Pregunta 53

**Enunciado:** ¿Cuál es la característica principal del patrón Abstract Factory?

- a. Permitir la creación de objetos complejos paso a paso.
- ✅ b. Proveer una interfaz para crear familias de objetos relacionados o dependientes.
- c. Facilitar la clonación de objetos sin conocer su clase concreta.
- d. Garantizar que una clase tenga solo una instancia.

## Pregunta 54

**Enunciado:** ¿Cuál es la diferencia entre el patrón Builder y el patrón Factory Method?

- a. Builder utiliza una instancia única, mientras que Factory Method crea múltiples instancias.
- b. Factory Method es más adecuado para la creación de familias de objetos relacionados.
- ✅ c. Builder crea objetos paso a paso, mientras que Factory Method se enfoca en la creación de un objeto específico sin especificar su clase concreta.
- d. Factory Method es utilizado en la creación de objetos complejos, mientras que Builder solo trabaja con objetos simples.

## Pregunta 55

**Enunciado:** ¿Cuál es la principal diferencia entre el patrón Builder y el patrón Abstract Factory?

- a. Builder requiere el uso de interfaces, mientras que Abstract Factory no.
- b. Abstract Factory crea una sola instancia de un objeto, mientras que Builder genera múltiples instancias.
- c. Abstract Factory se enfoca en la construcción de objetos complejos, mientras que Builder solo genera objetos simples.
- ✅ d. Builder se usa para construir objetos paso a paso, mientras que Abstract Factory crea familias de objetos relacionados.

## Pregunta 56

**Enunciado:** ¿Cuál es la principal diferencia entre los patrones Abstract Factory y Builder?

- a. Abstract Factory solo funciona con objetos simples, mientras que Builder trabaja con objetos complejos.
- b. Builder garantiza una única instancia de un objeto, mientras que Abstract Factory permite la creación de múltiples instancias.
- ✅ c. Abstract Factory crea familias de objetos relacionados, mientras que Builder construye objetos complejos paso a paso.
- d. Builder se utiliza en sistemas multihilo, mientras que Abstract Factory no.

## Pregunta 57

**Enunciado:** ¿Cuál es un caso práctico de uso del patrón Builder?

- a. Generar una interfaz gráfica que se ajuste a múltiples plataformas.
- ✅ b. Construir un objeto como una casa, con diferentes partes como puertas, ventanas y techos, de manera personalizada.
- c. Crear un solo objeto que será compartido por múltiples sistemas.
- d. Crear diferentes tipos de productos en una fábrica sin conocer sus clases concretas.

## Pregunta 58

**Enunciado:** ¿Cuál es un ejemplo típico del uso del patrón Abstract Factory?

- a. Construir una casa con múltiples configuraciones.
- ✅ b. Crear diferentes tipos de formularios para diferentes sistemas operativos.
- c. Crear un único objeto compartido entre todas las instancias de un sistema.
- d. Administrar el acceso a una base de datos en sistemas distribuidos.

## Pregunta 59

**Enunciado:** ¿Cuál es una de las ventajas del patrón Abstract Factory?

- a. Simplifica la creación de objetos en entornos multihilo.
- b. Permite crear una única instancia de una clase en todo el sistema.
- c. Reduce el tiempo de ejecución de los programas.
- ✅ d. Permite intercambiar fácilmente familias de productos relacionadas sin cambiar el código cliente.

## Pregunta 60

**Enunciado:** ¿Cuál es una ventaja clave del patrón Abstract Factory?

- a. Facilita la herencia múltiple entre las clases creadas.
- b. Simplifica la creación de objetos únicos en todo el sistema.
- ✅ c. Permite cambiar las familias de productos que se crean sin modificar el código cliente.
- d. Elimina la necesidad de sincronización en entornos concurrentes.

## Pregunta 61

**Enunciado:** ¿Cuál es una ventaja clave del patrón Builder?

- a. Elimina la necesidad de crear objetos en varias etapas.
- b. Simplifica la creación de familias de objetos dependientes.
- c. Facilita la clonación de objetos en sistemas distribuidos.
- ✅ d. Se puede construir un objeto complejo sin necesidad de que el cliente conozca los detalles de su construcción.

## Pregunta 62

**Enunciado:** ¿Cuál es una ventaja del patrón Builder?

- a. Facilita la creación de familias de objetos relacionados.
- b. Facilita la clonación de objetos en entornos distribuidos.
- c. Garantiza que solo una instancia del objeto sea creada.
- ✅ d. Permite variar la representación interna del objeto mientras se construye.

## Pregunta 63

**Enunciado:** ¿Cuándo es preferible usar el patrón Builder sobre otros patrones de creación?

- ✅ a. Cuando se necesita construir un objeto con muchas configuraciones y representaciones diferentes.
- b. Cuando se requiere compartir una instancia única entre varios módulos de un sistema.
- c. Cuando se quiere evitar la creación de múltiples instancias de una misma clase.
- d. Cuando se trabaja con objetos que dependen de otras clases.

## Pregunta 64

**Enunciado:** ¿Cuándo es recomendable utilizar el patrón Abstract Factory?

- ✅ a. Cuando se necesitan crear familias de objetos relacionados sin especificar las clases concretas.
- b. Cuando se desea optimizar la memoria en sistemas de bajo rendimiento.
- c. Cuando se desea construir objetos complejos de manera incremental.
- d. Cuando se requiere compartir una instancia única entre diferentes módulos.

## Pregunta 65

**Enunciado:** ¿Qué diferencia principal existe entre el patrón Abstract Factory y el patrón Factory Method?

- a. Factory Method crea objetos complejos paso a paso, mientras que Abstract Factory los crea directamente.
- b. Abstract Factory usa métodos estáticos para crear objetos, mientras que Factory Method no.
- ✅ c. Factory Method se usa para crear un solo producto, mientras que Abstract Factory crea familias de productos relacionados.
- d. Abstract Factory crea una sola instancia de un objeto, mientras que Factory Method crea múltiples.

## Pregunta 66

**Enunciado:** ¿Qué problema resuelve el patrón Builder?

- a. La creación de una única instancia de un objeto a lo largo de todo el sistema.
- b. La eliminación de dependencias entre las clases concretas y el código cliente.
- ✅ c. La creación de objetos complejos, permitiendo su construcción paso a paso.
- d. La implementación de un sistema de concurrencia seguro.

## Pregunta 67

**Enunciado:** ¿Qué se debe hacer para agregar una nueva familia de productos en un sistema basado en Abstract Factory?

- a. Modificar todas las clases concretas existentes.
- ✅ b. Implementar una nueva fábrica concreta que genere los nuevos productos.
- c. Reemplazar la fábrica abstracta por una nueva.
- d. Cambiar la lógica de todas las subclases de la fábrica.

## Pregunta 68

**Enunciado:** ¿Qué ventaja proporciona el patrón Builder sobre otros patrones de creación?

- a. Elimina la necesidad de herencia para la creación de objetos.
- b. Garantiza que solo exista una instancia de cada objeto creado.
- ✅ c. Permite la creación de objetos con múltiples configuraciones y representaciones complejas.
- d. Facilita la creación de objetos sin necesidad de sincronización en entornos concurrentes.

## Pregunta 69

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Prototype** en Java.

La aplicación trabaja con vehículos que pueden utilizarse como prototipos. A partir de un vehículo existente se debe poder crear un nuevo objeto con las mismas características.

- `VehiculoClonable`: define la operación `clonar()` que deben implementar los vehículos.
- `Auto` y `Motocicleta`: representan los objetos que pueden ser clonados.
- `VehiculoCache`: almacena los vehículos originales y permite solicitar una copia de ellos.

**Requisitos**

- Completa las instrucciones faltantes en los métodos `clonar()`.
- El objeto clonado debe conservar las características del vehículo original.
- `obtenerVehiculo()` debe devolver un nuevo objeto obtenido a partir del vehículo almacenado.
- El objeto original y su clon deben ser objetos diferentes.

> **Pista:** clonar no significa devolver el mismo objeto. Debes crear uno nuevo utilizando los datos que ya posee el objeto original.

### Código base

```java
import java.util.HashMap;
import java.util.Map;

interface VehiculoClonable {

    VehiculoClonable clonar();

    void mostrar();
}


// ----- Auto -----

class Auto implements VehiculoClonable {

    private String marca;

    public Auto(String marca) {
        this.marca = marca;
    }

    @Override
    public VehiculoClonable clonar() {

        // Crear y devolver un nuevo Auto
        // utilizando la misma marca

    }

    @Override
    public void mostrar() {
        System.out.println("Auto - Marca: " + marca);
    }
}


// ----- Motocicleta -----

class Motocicleta implements VehiculoClonable {

    private String marca;

    public Motocicleta(String marca) {
        this.marca = marca;
    }

    @Override
    public VehiculoClonable clonar() {

        // Crear y devolver una nueva Motocicleta
        // utilizando la misma marca

    }

    @Override
    public void mostrar() {
        System.out.println("Motocicleta - Marca: " + marca);
    }
}


// Almacena los objetos que se utilizarán como prototipos
class VehiculoCache {

    private static Map<String, VehiculoClonable> mapaVehiculos = new HashMap<>();

    public static void cargarCache() {
        mapaVehiculos.put("auto", new Auto("Toyota"));
        mapaVehiculos.put("motocicleta", new Motocicleta("Honda"));
    }

    public static VehiculoClonable obtenerVehiculo(String tipoVehiculo) {
        VehiculoClonable vehiculo = mapaVehiculos.get(tipoVehiculo);

        // Devuelve una copia del vehículo almacenado
        return vehiculo.clonar();
    }
}
```

### Prueba

```java
VehiculoCache.cargarCache();

VehiculoClonable vehiculo1 = VehiculoCache.obtenerVehiculo("auto");
vehiculo1.mostrar();

VehiculoClonable vehiculo2 = VehiculoCache.obtenerVehiculo("motocicleta");
vehiculo2.mostrar();
```

```
Auto - Marca: Toyota
Motocicleta - Marca: Honda
```

### Prueba

```java
VehiculoCache.cargarCache();

VehiculoClonable auto1 = VehiculoCache.obtenerVehiculo("auto");
VehiculoClonable auto2 = VehiculoCache.obtenerVehiculo("auto");
System.out.println(auto1 != auto2);

VehiculoClonable moto1 = VehiculoCache.obtenerVehiculo("motocicleta");
VehiculoClonable moto2 = VehiculoCache.obtenerVehiculo("motocicleta");
System.out.println(moto1 != moto2);
```

```
true
true
```

### Prueba

```java
VehiculoClonable auto = new Auto("Fiat");
VehiculoClonable moto = new Motocicleta("Yamaha");
auto.clonar().mostrar();
moto.clonar().mostrar();
```

```
Auto - Marca: Fiat
Motocicleta - Marca: Yamaha
```

### Solución

```java
import java.util.HashMap;
import java.util.Map;

interface VehiculoClonable {

    VehiculoClonable clonar();

    void mostrar();
}


// ----- Auto -----

class Auto implements VehiculoClonable {

    private String marca;

    public Auto(String marca) {
        this.marca = marca;
    }

    @Override
    public VehiculoClonable clonar() {
        return new Auto(this.marca);
    }

    @Override
    public void mostrar() {
        System.out.println("Auto - Marca: " + marca);
    }
}


// ----- Motocicleta -----

class Motocicleta implements VehiculoClonable {

    private String marca;

    public Motocicleta(String marca) {
        this.marca = marca;
    }

    @Override
    public VehiculoClonable clonar() {
        return new Motocicleta(this.marca);
    }

    @Override
    public void mostrar() {
        System.out.println("Motocicleta - Marca: " + marca);
    }
}


// Almacena los objetos que se utilizarán como prototipos
class VehiculoCache {

    private static Map<String, VehiculoClonable> mapaVehiculos = new HashMap<>();

    public static void cargarCache() {
        mapaVehiculos.put("auto", new Auto("Toyota"));
        mapaVehiculos.put("motocicleta", new Motocicleta("Honda"));
    }

    public static VehiculoClonable obtenerVehiculo(String tipoVehiculo) {
        VehiculoClonable vehiculo = mapaVehiculos.get(tipoVehiculo);

        // Devuelve una copia del vehículo almacenado
        return vehiculo.clonar();
    }
}
```

## Pregunta 70

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Prototype** en Java.

La aplicación trabaja con `Auto` y `Camioneta`, que pueden utilizarse como prototipos. Cada vehículo posee una marca y un color, y debe ser posible crear nuevos objetos copiando estas características.

- `VehiculoClonable`: define la operación `clonar()`.
- `Auto` y `Camioneta`: representan los vehículos que pueden ser clonados.
- `VehiculoCache`: almacena los vehículos originales y permite solicitar copias de ellos.

**Requisitos**

- Completa las instrucciones faltantes en los métodos `clonar()`.
- El clon debe conservar la marca y el color del vehículo original.
- El clon debe ser un objeto diferente al original.
- Los vehículos deben permitir modificar posteriormente su marca y color.

> **Pista:** crear un objeto nuevo no es suficiente. Antes de devolverlo, asegúrate de copiar en él las características del objeto original.

### Código base

```java
import java.util.HashMap;
import java.util.Map;

interface VehiculoClonable {

    VehiculoClonable clonar();

    void mostrar();
}


// ----- Auto -----

class Auto implements VehiculoClonable {

    private String marca;
    private String color;

    @Override
    public VehiculoClonable clonar() {

        // Crear un nuevo Auto

        // Copiar la marca y el color del objeto original

        // Devolver el clon

    }

    @Override
    public void mostrar() {
        System.out.println("Auto: " + marca + ", Color: " + color);
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public void setColor(String color) {
        this.color = color;
    }
}


// ----- Camioneta -----

class Camioneta implements VehiculoClonable {

    private String marca;
    private String color;

    @Override
    public VehiculoClonable clonar() {

        // Crear una nueva Camioneta

        // Copiar la marca y el color del objeto original

        // Devolver el clon

    }

    @Override
    public void mostrar() {
        System.out.println("Camioneta: " + marca + ", Color: " + color);
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public void setColor(String color) {
        this.color = color;
    }
}


// Almacena los objetos que se utilizarán como prototipos
class VehiculoCache {

    private static Map<String, VehiculoClonable> mapaVehiculos = new HashMap<>();

    public static void cargarCache() {

        Auto auto = new Auto();
        auto.setMarca("Toyota");
        auto.setColor("Rojo");
        mapaVehiculos.put("auto", auto);

        Camioneta camioneta = new Camioneta();
        camioneta.setMarca("Ford");
        camioneta.setColor("Azul");
        mapaVehiculos.put("camioneta", camioneta);
    }

    public static VehiculoClonable obtenerVehiculo(String tipoVehiculo) {

        VehiculoClonable vehiculo = mapaVehiculos.get(tipoVehiculo);

        // Devolver un clon del vehículo encontrado
        return vehiculo.clonar();
    }
}
```

### Prueba

```java
VehiculoCache.cargarCache();

Auto auto1 = (Auto) VehiculoCache.obtenerVehiculo("auto");
Auto auto2 = (Auto) VehiculoCache.obtenerVehiculo("auto");

auto2.setColor("Negro");

auto1.mostrar();
auto2.mostrar();
```

```
Auto: Toyota, Color: Rojo
Auto: Toyota, Color: Negro
```

### Prueba

```java
VehiculoCache.cargarCache();

Camioneta camioneta1 = (Camioneta) VehiculoCache.obtenerVehiculo("camioneta");
Camioneta camioneta2 = (Camioneta) VehiculoCache.obtenerVehiculo("camioneta");

camioneta2.setColor("Blanco");

camioneta1.mostrar();
camioneta2.mostrar();
```

```
Camioneta: Ford, Color: Azul
Camioneta: Ford, Color: Blanco
```

### Solución

```java
import java.util.HashMap;
import java.util.Map;

interface VehiculoClonable {

    VehiculoClonable clonar();

    void mostrar();
}


// ----- Auto -----

class Auto implements VehiculoClonable {

    private String marca;
    private String color;

    @Override
    public VehiculoClonable clonar() {
        Auto clon = new Auto();
        clon.setMarca(this.marca);
        clon.setColor(this.color);
        return clon;
    }

    @Override
    public void mostrar() {
        System.out.println("Auto: " + marca + ", Color: " + color);
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public void setColor(String color) {
        this.color = color;
    }
}


// ----- Camioneta -----

class Camioneta implements VehiculoClonable {

    private String marca;
    private String color;

    @Override
    public VehiculoClonable clonar() {
        Camioneta clon = new Camioneta();
        clon.setMarca(this.marca);
        clon.setColor(this.color);
        return clon;
    }

    @Override
    public void mostrar() {
        System.out.println("Camioneta: " + marca + ", Color: " + color);
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public void setColor(String color) {
        this.color = color;
    }
}


// Almacena los objetos que se utilizarán como prototipos
class VehiculoCache {

    private static Map<String, VehiculoClonable> mapaVehiculos = new HashMap<>();

    public static void cargarCache() {

        Auto auto = new Auto();
        auto.setMarca("Toyota");
        auto.setColor("Rojo");
        mapaVehiculos.put("auto", auto);

        Camioneta camioneta = new Camioneta();
        camioneta.setMarca("Ford");
        camioneta.setColor("Azul");
        mapaVehiculos.put("camioneta", camioneta);
    }

    public static VehiculoClonable obtenerVehiculo(String tipoVehiculo) {

        VehiculoClonable vehiculo = mapaVehiculos.get(tipoVehiculo);

        // Devolver un clon del vehículo encontrado
        return vehiculo.clonar();
    }
}
```

## Pregunta 71

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Prototype** en Java.

La aplicación trabaja con dos tipos de productos: `ProductoA` y `ProductoB`. Cada producto posee un nombre y debe poder crear una copia de sí mismo conservando ese valor.

- `ProductoClonable`: define la operación `clonar()`.
- `ProductoA` y `ProductoB`: representan los productos que pueden ser clonados.
- `ProductoCache`: almacena productos originales y permite obtener copias de ellos.

**Requisitos**

- Completa las instrucciones faltantes en los métodos `clonar()`.
- Cada clon debe conservar el nombre del producto original.
- El clon debe ser un objeto diferente al original.
- `obtenerProducto()` debe devolver un clon del producto almacenado.

> **Pista:** utiliza los datos del objeto actual para crear y devolver un nuevo producto con las mismas características.

### Código base

```java
import java.util.HashMap;
import java.util.Map;

interface ProductoClonable {

    ProductoClonable clonar();

    void mostrar();
}


// ----- Producto A -----

class ProductoA implements ProductoClonable {

    private String nombre;

    public ProductoA(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public ProductoClonable clonar() {

        // Crear y devolver un nuevo ProductoA
        // conservando el nombre del producto original

    }

    @Override
    public void mostrar() {
        System.out.println("Producto A: " + nombre);
    }
}


// ----- Producto B -----

class ProductoB implements ProductoClonable {

    private String nombre;

    public ProductoB(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public ProductoClonable clonar() {

        // Crear y devolver un nuevo ProductoB
        // conservando el nombre del producto original

    }

    @Override
    public void mostrar() {
        System.out.println("Producto B: " + nombre);
    }
}


// Almacena los productos que se utilizarán como prototipos
class ProductoCache {

    private static Map<String, ProductoClonable> mapaProductos = new HashMap<>();

    public static void cargarCache() {
        mapaProductos.put("productoA", new ProductoA("Producto Básico"));
        mapaProductos.put("productoB", new ProductoB("Producto Premium"));
    }

    public static ProductoClonable obtenerProducto(String tipoProducto) {

        ProductoClonable producto = mapaProductos.get(tipoProducto);

        // Devuelve una copia del producto almacenado
        return producto.clonar();
    }
}
```

### Prueba

```java
ProductoCache.cargarCache();
ProductoClonable producto1 = ProductoCache.obtenerProducto("productoA");
producto1.mostrar();
ProductoClonable producto2 = ProductoCache.obtenerProducto("productoB");
producto2.mostrar();
```

```
Producto A: Producto Básico
Producto B: Producto Premium
```

### Prueba

```java
ProductoCache.cargarCache();

ProductoClonable a1 = ProductoCache.obtenerProducto("productoA");
ProductoClonable a2 = ProductoCache.obtenerProducto("productoA");
System.out.println(a1 != a2);

ProductoClonable b1 = ProductoCache.obtenerProducto("productoB");
ProductoClonable b2 = ProductoCache.obtenerProducto("productoB");
System.out.println(b1 != b2);
```

```
true
true
```

### Prueba

```java
ProductoClonable a = new ProductoA("Oferta");
ProductoClonable b = new ProductoB("Edición Limitada");
a.clonar().mostrar();
b.clonar().mostrar();
```

```
Producto A: Oferta
Producto B: Edición Limitada
```

### Solución

```java
import java.util.HashMap;
import java.util.Map;

interface ProductoClonable {

    ProductoClonable clonar();

    void mostrar();
}


// ----- Producto A -----

class ProductoA implements ProductoClonable {

    private String nombre;

    public ProductoA(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public ProductoClonable clonar() {
        return new ProductoA(this.nombre);
    }

    @Override
    public void mostrar() {
        System.out.println("Producto A: " + nombre);
    }
}


// ----- Producto B -----

class ProductoB implements ProductoClonable {

    private String nombre;

    public ProductoB(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public ProductoClonable clonar() {
        return new ProductoB(this.nombre);
    }

    @Override
    public void mostrar() {
        System.out.println("Producto B: " + nombre);
    }
}


// Almacena los productos que se utilizarán como prototipos
class ProductoCache {

    private static Map<String, ProductoClonable> mapaProductos = new HashMap<>();

    public static void cargarCache() {
        mapaProductos.put("productoA", new ProductoA("Producto Básico"));
        mapaProductos.put("productoB", new ProductoB("Producto Premium"));
    }

    public static ProductoClonable obtenerProducto(String tipoProducto) {

        ProductoClonable producto = mapaProductos.get(tipoProducto);

        // Devuelve una copia del producto almacenado
        return producto.clonar();
    }
}
```

## Pregunta 72

**Enunciado:** ¿Cuál es el propósito principal del patrón Prototype?

- a. Facilitar la creación de familias de objetos relacionados.
- b. Crear nuevos objetos a partir de una clase base abstracta.
- c. Garantizar que una clase solo tenga una única instancia.
- ✅ d. Crear nuevos objetos copiando instancias existentes en lugar de construirlas desde cero.

## Pregunta 73

**Enunciado:** ¿Cuál es la diferencia clave entre el patrón Prototype y otros patrones de creación?

- a. Prototype es un patrón estructural, mientras que otros son patrones creacionales.
- b. Prototype solo se aplica a objetos simples, mientras que otros patrones se aplican a objetos complejos.
- c. Prototype crea una única instancia, mientras que otros patrones permiten múltiples instancias.
- ✅ d. Prototype se basa en la clonación de objetos, mientras que otros patrones crean nuevas instancias desde cero.

## Pregunta 74

**Enunciado:** ¿Cuál es la diferencia entre clonación superficial y clonación profunda en el patrón Prototype?

- a. La clonación profunda copia solo las propiedades públicas del objeto, mientras que la clonación superficial copia todas las propiedades.
- b. La clonación superficial es más lenta que la clonación profunda debido al uso de memoria.
- ✅ c. La clonación superficial copia las referencias de los objetos, mientras que la clonación profunda duplica los objetos referenciados.
- d. La clonación superficial crea un nuevo objeto desde cero, mientras que la clonación profunda solo reutiliza el objeto existente.

## Pregunta 75

**Enunciado:** ¿Cuál es la principal característica del patrón Prototype?

- a. Permite crear nuevas clases sin necesidad de especificar el tipo de objeto.
- ✅ b. Facilita la clonación de objetos existentes en lugar de instanciarlos desde cero.
- c. Proporciona una única instancia compartida entre todas las clases.
- d. Permite crear objetos complejos paso a paso.

## Pregunta 76

**Enunciado:** ¿Cuál es un caso típico donde se puede aplicar el patrón Prototype?

- a. Cuando se necesita gestionar la creación de diferentes familias de objetos.
- ✅ b. Cuando se necesita crear un gran número de objetos similares y no es eficiente construir cada uno desde cero.
- c. Cuando los objetos son muy simples y no requieren un proceso de clonación.
- d. Cuando se debe crear una única instancia compartida en un sistema distribuido.

## Pregunta 77

**Enunciado:** ¿Cuál es un ejemplo práctico del uso del patrón Prototype?

- a. Construir un sistema que maneje múltiples tipos de productos con diferentes configuraciones.
- b. Crear una interfaz gráfica que funcione en diferentes plataformas sin cambiar el código subyacente.
- ✅ c. Crear un documento que se utiliza como base para generar múltiples copias con ligeras modificaciones.
- d. Crear una conexión única a una base de datos para compartir entre varios usuarios.

## Pregunta 78

**Enunciado:** ¿Cuál es una implementación típica del patrón Prototype?

- a. Utilizar un singleton para almacenar una instancia única del prototipo.
- b. Implementar una fábrica abstracta para crear familias de objetos clonados.
- c. Utilizar constructores estáticos para crear nuevas instancias.
- ✅ d. Definir un método `clone()` en una clase base que permita copiar las instancias de la clase.

## Pregunta 79

**Enunciado:** ¿Cuál es una limitación de la clonación superficial?

- a. No puede clonar atributos primitivos del objeto original.
- ✅ b. Los objetos referenciados no se duplican, por lo que los cambios en ellos afectan al objeto original.
- c. Solo puede duplicar objetos si estos no tienen referencias a otros objetos.
- d. Requiere demasiado tiempo para ejecutarse en sistemas grandes.

## Pregunta 80

**Enunciado:** ¿Cuál es una limitación de la clonación superficial en el patrón Prototype?

- ✅ a. Los cambios realizados en los objetos referenciados en la copia afectan también al objeto original.
- b. Requiere que el objeto clonado implemente una interfaz de fábrica.
- c. No permite copiar atributos primitivos del objeto original.
- d. Es más lenta que la clonación profunda debido al uso de mayor cantidad de memoria.

## Pregunta 81

**Enunciado:** ¿Cuál es una situación en la que es recomendable usar el patrón Prototype?

- a. Cuando se requiere acceso simultáneo a una única instancia desde varios hilos.
- ✅ b. Cuando la creación de objetos es costosa en términos de tiempo o recursos.
- c. Cuando solo se necesita una instancia de una clase en todo el sistema.
- d. Cuando los objetos deben ser creados y destruidos rápidamente.

## Pregunta 82

**Enunciado:** ¿Cuál es una técnica común para implementar clonación profunda en el patrón Prototype?

- a. Implementar el patrón Singleton en lugar de Prototype.
- b. Usar constructores estáticos para duplicar las referencias de los objetos.
- c. Definir una fábrica que controle la clonación de objetos.
- ✅ d. Implementar el método `clone()` que copia tanto los atributos primitivos como los objetos referenciados.

## Pregunta 83

**Enunciado:** ¿Cuál es una ventaja clave del patrón Prototype?

- a. Proporciona una única instancia de una clase en todo el sistema.
- b. Permite la creación de objetos complejos paso a paso.
- c. Simplifica la sincronización en entornos multihilo.
- ✅ d. Facilita la creación de objetos mediante clonación sin conocer las clases exactas.

## Pregunta 84

**Enunciado:** ¿Cuál es una ventaja de usar clonación profunda (deep copy) en el patrón Prototype?

- ✅ a. Asegura que las modificaciones en el objeto clonado no afecten al objeto original.
- b. Permite copiar objetos primitivos sin duplicar las referencias.
- c. Hace más eficiente el uso de memoria en entornos concurrentes.
- d. Mejora el rendimiento al evitar la creación de nuevas instancias.

## Pregunta 85

**Enunciado:** ¿Cuándo es recomendable utilizar clonación profunda en lugar de clonación superficial en el patrón Prototype?

- ✅ a. Cuando el objeto contiene referencias a otros objetos y se quiere duplicar completamente toda la estructura.
- b. Cuando se necesita una copia rápida del objeto para mejorar el rendimiento.
- c. Cuando se busca crear una copia temporal del objeto.
- d. Cuando el objeto no tiene referencias a otros objetos.

## Pregunta 86

**Enunciado:** ¿Por qué es útil el patrón Prototype en sistemas que manejan objetos grandes o costosos de crear?

- ✅ a. Permite la creación de objetos mediante la clonación, lo que es más eficiente que instanciarlos desde cero.
- b. Reduce el uso de memoria al compartir referencias entre los objetos originales y clonados.
- c. Garantiza que los objetos clonados sean únicos en todo el sistema.
- d. Facilita la implementación de objetos complejos sin necesidad de instancias adicionales.

## Pregunta 87

**Enunciado:** ¿Qué debe hacer un objeto para ser clonado en el patrón Prototype?

- a. Definir un constructor estático que cree nuevas instancias del objeto.
- b. Usar el patrón Singleton para compartir la instancia.
- ✅ c. Implementar una interfaz o método que permita la clonación, como `clone()`.
- d. Almacenar una única referencia a sí mismo para ser clonada.

## Pregunta 88

**Enunciado:** ¿Qué significa clonación superficial (shallow copy) en el contexto del patrón Prototype?

- a. Crear una nueva instancia del objeto sin ningún dato de la instancia original.
- b. Crear una copia exacta del objeto, incluyendo todos los objetos referenciados.
- c. Crear una copia del objeto original con todos los valores duplicados en profundidad.
- ✅ d. Copiar únicamente las referencias de los objetos contenidos, sin duplicar los objetos referenciados.

## Pregunta 89

**Enunciado:** ¿Qué tipo de clonación realiza la clonación superficial (shallow copy)?

- a. Duplica todos los objetos referenciados junto con el objeto original.
- b. No copia nada, solo hace referencia al objeto original.
- c. Crea nuevas instancias de los objetos referenciados y las reemplaza en el objeto clonado.
- ✅ d. Copia las referencias de los objetos, pero no los objetos en sí.

## Pregunta 90

**Enunciado:** ¿Qué tipo de copia realiza la clonación profunda en el patrón Prototype?

- a. Solo copia las referencias de los objetos, sin duplicar los atributos primitivos.
- ✅ b. Copia todos los atributos primitivos y objetos referenciados del objeto original, creando nuevas instancias de los objetos referenciados.
- c. Reutiliza el objeto original sin copiar ninguna de sus propiedades.
- d. Copia solo los atributos primitivos del objeto y reutiliza los objetos referenciados.

## Pregunta 91

**Enunciado:** ¿Qué ventaja proporciona el patrón Prototype sobre otros patrones de creación como Factory Method?

- a. Garantiza que solo se cree una única instancia del objeto.
- b. Permite la construcción de objetos complejos paso a paso.
- c. Facilita la creación de objetos relacionados o dependientes sin especificar sus clases.
- ✅ d. Permite la creación rápida de objetos mediante la clonación de instancias ya existentes.

## Pregunta 92

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Adapter** en Java.

La aplicación utiliza la interfaz `Vehicle`, que define el método `charge()`. Los autos eléctricos ya cumplen con esta interfaz, pero los vehículos a gasolina y etanol utilizan métodos diferentes para realizar su carga.

El objetivo es crear adaptadores que permitan utilizar esos vehículos a través de la misma interfaz `Vehicle`.

- `ElectricCar`: ya implementa directamente `Vehicle`.
- `GasolineCar`: utiliza el método `fillTank()`.
- `EthanolCar`: utiliza el método `fillWithEthanol()`.

Los adaptadores deben convertir la llamada a `charge()` en la operación correspondiente de cada vehículo.

**Requisitos**

- Completa los métodos `charge()` de los adaptadores.
- `GasolineCarAdapter` debe utilizar el método de carga propio de `GasolineCar`.
- `EthanolCarAdapter` debe utilizar el método de carga propio de `EthanolCar`.
- Ambos adaptadores deben permitir tratar estos vehículos como objetos de tipo `Vehicle`.

> **Pista:** el adaptador recibe una llamada a `charge()`, pero internamente debe ejecutar el método que realmente entiende el vehículo adaptado.

### Código base

```java
interface Vehicle {
    void charge();
}

// Auto eléctrico: ya implementa Vehicle
class ElectricCar implements Vehicle {
    @Override
    public void charge() {
        System.out.println("Cargando la batería del auto eléctrico.");
    }
}

// Vehículo que posee una forma diferente de carga
class EthanolCar {
    public void fillWithEthanol() {
        System.out.println("Llenando el tanque con etanol.");
    }
}

// Vehículo que posee una forma diferente de carga
class GasolineCar {
    public void fillTank() {
        System.out.println("Llenando el tanque de gasolina.");
    }
}

// Adaptador para EthanolCar
class EthanolCarAdapter implements Vehicle {
    private EthanolCar ethanolCar;

    public EthanolCarAdapter(EthanolCar ethanolCar) {
        this.ethanolCar = ethanolCar;
    }

    @Override
    public void charge() {
        // Utilizar el método correspondiente de EthanolCar
    }
}

// Adaptador para GasolineCar
class GasolineCarAdapter implements Vehicle {
    private GasolineCar gasolineCar;

    public GasolineCarAdapter(GasolineCar gasolineCar) {
        this.gasolineCar = gasolineCar;
    }

    @Override
    public void charge() {
        // Utilizar el método correspondiente de GasolineCar
    }
}
```

### Prueba

```java
ElectricCar electricCar = new ElectricCar();
electricCar.charge();
```

```
Cargando la batería del auto eléctrico.
```

### Prueba

```java
Vehicle[] vehicles = new Vehicle[]{
    new ElectricCar(),
    new GasolineCarAdapter(new GasolineCar()),
    new EthanolCarAdapter(new EthanolCar())
};
for (Vehicle vehicle : vehicles) {
    vehicle.charge();
}
```

```
Cargando la batería del auto eléctrico.
Llenando el tanque de gasolina.
Llenando el tanque con etanol.
```

### Solución

```java
interface Vehicle {
    void charge();
}

// Auto eléctrico: ya implementa Vehicle
class ElectricCar implements Vehicle {
    @Override
    public void charge() {
        System.out.println("Cargando la batería del auto eléctrico.");
    }
}

// Vehículo que posee una forma diferente de carga
class EthanolCar {
    public void fillWithEthanol() {
        System.out.println("Llenando el tanque con etanol.");
    }
}

// Vehículo que posee una forma diferente de carga
class GasolineCar {
    public void fillTank() {
        System.out.println("Llenando el tanque de gasolina.");
    }
}

// Adaptador para EthanolCar
class EthanolCarAdapter implements Vehicle {
    private EthanolCar ethanolCar;

    public EthanolCarAdapter(EthanolCar ethanolCar) {
        this.ethanolCar = ethanolCar;
    }

    @Override
    public void charge() {
        ethanolCar.fillWithEthanol();
    }
}

// Adaptador para GasolineCar
class GasolineCarAdapter implements Vehicle {
    private GasolineCar gasolineCar;

    public GasolineCarAdapter(GasolineCar gasolineCar) {
        this.gasolineCar = gasolineCar;
    }

    @Override
    public void charge() {
        gasolineCar.fillTank();
    }
}
```

## Pregunta 93

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Adapter** en Java.

La aplicación utiliza la interfaz `Charger`, que define el método `charge()`. Sin embargo, cada dispositivo posee su propio método de carga.

- `Laptop`: utiliza `chargeWithPowerCord()`.
- `Tablet`: utiliza `chargeWithTypeC()`.
- `Smartphone`: utiliza `chargeWithUSB()`.

El objetivo es crear adaptadores que permitan utilizar todos estos dispositivos a través de la misma interfaz `Charger`.

**Requisitos**

- Completa los métodos `charge()` de los adaptadores.
- `PowerCordAdapter` debe utilizar el método de carga propio de `Laptop`.
- `TypeCAdapter` debe utilizar el método de carga propio de `Tablet`.
- `USBAdapter` debe utilizar el método de carga propio de `Smartphone`.
- Los tres adaptadores deben permitir tratar los dispositivos como objetos de tipo `Charger`.

> **Pista:** cada adaptador debe traducir la llamada a `charge()` al método que entiende el dispositivo correspondiente.

### Código base

```java
interface Charger {
    void charge();
}

// Dispositivo con carga mediante cable de corriente
class Laptop {
    public void chargeWithPowerCord() {
        System.out.println("Cargando la laptop con cable de corriente.");
    }
}

// Dispositivo con carga mediante Type-C
class Tablet {
    public void chargeWithTypeC() {
        System.out.println("Cargando la tablet con Type-C.");
    }
}

// Dispositivo con carga mediante USB
class Smartphone {
    public void chargeWithUSB() {
        System.out.println("Cargando el smartphone con USB.");
    }
}

// Adaptador para Laptop
class PowerCordAdapter implements Charger {
    private Laptop laptop;

    public PowerCordAdapter(Laptop laptop) {
        this.laptop = laptop;
    }

    @Override
    public void charge() {
        // Utilizar el método correspondiente de Laptop
    }
}

// Adaptador para Tablet
class TypeCAdapter implements Charger {
    private Tablet tablet;

    public TypeCAdapter(Tablet tablet) {
        this.tablet = tablet;
    }

    @Override
    public void charge() {
        // Utilizar el método correspondiente de Tablet
    }
}

// Adaptador para Smartphone
class USBAdapter implements Charger {
    private Smartphone smartphone;

    public USBAdapter(Smartphone smartphone) {
        this.smartphone = smartphone;
    }

    @Override
    public void charge() {
        // Utilizar el método correspondiente de Smartphone
    }
}
```

### Prueba

```java
Smartphone smartphone = new Smartphone();
Charger usbAdapter = new USBAdapter(smartphone);
usbAdapter.charge();
```

```
Cargando el smartphone con USB.
```

### Prueba

```java
Laptop laptop = new Laptop();
Charger powerCordAdapter = new PowerCordAdapter(laptop);
powerCordAdapter.charge();
```

```
Cargando la laptop con cable de corriente.
```

### Prueba

```java
Tablet tablet = new Tablet();
Charger typeCAdapter = new TypeCAdapter(tablet);
typeCAdapter.charge();
```

```
Cargando la tablet con Type-C.
```

### Solución

```java
interface Charger {
    void charge();
}

// Dispositivo con carga mediante cable de corriente
class Laptop {
    public void chargeWithPowerCord() {
        System.out.println("Cargando la laptop con cable de corriente.");
    }
}

// Dispositivo con carga mediante Type-C
class Tablet {
    public void chargeWithTypeC() {
        System.out.println("Cargando la tablet con Type-C.");
    }
}

// Dispositivo con carga mediante USB
class Smartphone {
    public void chargeWithUSB() {
        System.out.println("Cargando el smartphone con USB.");
    }
}

// Adaptador para Laptop
class PowerCordAdapter implements Charger {
    private Laptop laptop;

    public PowerCordAdapter(Laptop laptop) {
        this.laptop = laptop;
    }

    @Override
    public void charge() {
        laptop.chargeWithPowerCord();
    }
}

// Adaptador para Tablet
class TypeCAdapter implements Charger {
    private Tablet tablet;

    public TypeCAdapter(Tablet tablet) {
        this.tablet = tablet;
    }

    @Override
    public void charge() {
        tablet.chargeWithTypeC();
    }
}

// Adaptador para Smartphone
class USBAdapter implements Charger {
    private Smartphone smartphone;

    public USBAdapter(Smartphone smartphone) {
        this.smartphone = smartphone;
    }

    @Override
    public void charge() {
        smartphone.chargeWithUSB();
    }
}
```

## Pregunta 94

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Decorator** en Java.

La aplicación parte de un `CafeSimple` con un precio base. A este café se le pueden agregar ingredientes que modifican su descripción y aumentan su costo.

- `CafeSimple`: representa el café base.
- `CafeDecorator`: permite agregar nuevas características a un café existente.
- `LecheDecorator`: ya se encuentra implementado y puedes utilizarlo como referencia.
- `AzucarDecorator` y `ChocolateDecorator`: deben completar el comportamiento de los nuevos ingredientes.

**Requisitos**

- Completa los métodos `getDescripcion()` y `getCosto()` de `AzucarDecorator` y `ChocolateDecorator`.
- El azúcar debe agregar `", Azúcar"` a la descripción y `0.5` al costo.
- El chocolate debe agregar `", Chocolate"` a la descripción y `2.0` al costo.
- Los nuevos valores deben agregarse a la descripción y al costo que el café ya posee.

> **Pista:** observa cómo está implementado `LecheDecorator`. Cada decorador toma el resultado anterior y le agrega su propia característica.

### Código base

```java
interface Cafe {

    String getDescripcion();

    double getCosto();
}


// Café base
class CafeSimple implements Cafe {

    @Override
    public String getDescripcion() {
        return "Café";
    }

    @Override
    public double getCosto() {
        return 5.0;
    }
}


// Decorador base
abstract class CafeDecorator implements Cafe {

    protected Cafe cafe;

    public CafeDecorator(Cafe cafe) {
        this.cafe = cafe;
    }

    @Override
    public String getDescripcion() {
        return cafe.getDescripcion();
    }

    @Override
    public double getCosto() {
        return cafe.getCosto();
    }
}


// Ejemplo de decorador ya implementado
class LecheDecorator extends CafeDecorator {

    public LecheDecorator(Cafe cafe) {
        super(cafe);
    }

    @Override
    public String getDescripcion() {
        return cafe.getDescripcion() + ", Leche";
    }

    @Override
    public double getCosto() {
        return cafe.getCosto() + 1.5;
    }
}


// Decorador de azúcar
class AzucarDecorator extends CafeDecorator {

    public AzucarDecorator(Cafe cafe) {
        super(cafe);
    }

    @Override
    public String getDescripcion() {

        // Agregar "Azúcar" a la descripción actual

    }

    @Override
    public double getCosto() {

        // Agregar 0.5 al costo actual

    }
}


// Decorador de chocolate
class ChocolateDecorator extends CafeDecorator {

    public ChocolateDecorator(Cafe cafe) {
        super(cafe);
    }

    @Override
    public String getDescripcion() {

        // Agregar "Chocolate" a la descripción actual

    }

    @Override
    public double getCosto() {

        // Agregar 2.0 al costo actual

    }
}
```

### Prueba

```java
Cafe cafe = new CafeSimple();
System.out.println(cafe.getDescripcion());
System.out.println(cafe.getCosto());
```

```
Café
5.0
```

### Prueba

```java
Cafe cafe = new CafeSimple();
cafe = new AzucarDecorator(cafe);
cafe = new ChocolateDecorator(cafe);
System.out.println(cafe.getDescripcion());
System.out.println(cafe.getCosto());
```

```
Café, Azúcar, Chocolate
7.5
```

### Prueba

```java
Cafe cafe = new CafeSimple();
cafe = new LecheDecorator(cafe);
cafe = new AzucarDecorator(cafe);
cafe = new ChocolateDecorator(cafe);
System.out.println(cafe.getDescripcion());
System.out.println(cafe.getCosto());
```

```
Café, Leche, Azúcar, Chocolate
9.0
```

### Solución

```java
interface Cafe {

    String getDescripcion();

    double getCosto();
}


// Café base
class CafeSimple implements Cafe {

    @Override
    public String getDescripcion() {
        return "Café";
    }

    @Override
    public double getCosto() {
        return 5.0;
    }
}


// Decorador base
abstract class CafeDecorator implements Cafe {

    protected Cafe cafe;

    public CafeDecorator(Cafe cafe) {
        this.cafe = cafe;
    }

    @Override
    public String getDescripcion() {
        return cafe.getDescripcion();
    }

    @Override
    public double getCosto() {
        return cafe.getCosto();
    }
}


// Ejemplo de decorador ya implementado
class LecheDecorator extends CafeDecorator {

    public LecheDecorator(Cafe cafe) {
        super(cafe);
    }

    @Override
    public String getDescripcion() {
        return cafe.getDescripcion() + ", Leche";
    }

    @Override
    public double getCosto() {
        return cafe.getCosto() + 1.5;
    }
}


// Decorador de azúcar
class AzucarDecorator extends CafeDecorator {

    public AzucarDecorator(Cafe cafe) {
        super(cafe);
    }

    @Override
    public String getDescripcion() {
        return cafe.getDescripcion() + ", Azúcar";
    }

    @Override
    public double getCosto() {
        return cafe.getCosto() + 0.5;
    }
}


// Decorador de chocolate
class ChocolateDecorator extends CafeDecorator {

    public ChocolateDecorator(Cafe cafe) {
        super(cafe);
    }

    @Override
    public String getDescripcion() {
        return cafe.getDescripcion() + ", Chocolate";
    }

    @Override
    public double getCosto() {
        return cafe.getCosto() + 2.0;
    }
}
```

## Pregunta 95

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Decorator** en Java.

La aplicación parte de una `CamisetaBase` con un precio inicial. A esta camiseta se le pueden agregar distintas personalizaciones que modifican su descripción y aumentan su costo.

- `CamisetaBase`: representa la camiseta sin personalizaciones.
- `CamisetaDecorator`: permite agregar nuevas características a una camiseta existente.
- `EstampadoDecorator`: ya se encuentra implementado y puede utilizarse como referencia.
- `BordadoDecorator`, `ColorEspecialDecorator` y `ParchesDecorator`: deben completar las personalizaciones restantes.

**Requisitos**

- Completa los métodos `getDescripcion()` y `getCosto()` de los decoradores indicados.
- `BordadoDecorator` debe agregar `", Bordado"` y aumentar el costo en `7.0`.
- `ColorEspecialDecorator` debe agregar `", Color Especial"` y aumentar el costo en `4.0`.
- `ParchesDecorator` debe agregar `", Parches"` y aumentar el costo en `6.0`.
- Las personalizaciones deben acumularse sobre la camiseta recibida.

> **Pista:** observa cómo está implementado `EstampadoDecorator`. Cada decorador toma la descripción y el costo actuales y les agrega su propia personalización.

### Código base

```java
interface Camiseta {
    String getDescripcion();
    double getCosto();
}

// Camiseta base
class CamisetaBase implements Camiseta {
    @Override
    public String getDescripcion() {
        return "Camiseta Básica";
    }

    @Override
    public double getCosto() {
        return 10.0;
    }
}

// Decorador base
abstract class CamisetaDecorator implements Camiseta {
    protected Camiseta camiseta;

    public CamisetaDecorator(Camiseta camiseta) {
        this.camiseta = camiseta;
    }

    @Override
    public String getDescripcion() {
        return camiseta.getDescripcion();
    }

    @Override
    public double getCosto() {
        return camiseta.getCosto();
    }
}

// Ejemplo ya implementado
class EstampadoDecorator extends CamisetaDecorator {
    public EstampadoDecorator(Camiseta camiseta) {
        super(camiseta);
    }

    @Override
    public String getDescripcion() {
        return camiseta.getDescripcion() + ", Estampado";
    }

    @Override
    public double getCosto() {
        return camiseta.getCosto() + 5.0;
    }
}

// Decorador de bordado
class BordadoDecorator extends CamisetaDecorator {
    public BordadoDecorator(Camiseta camiseta) {
        super(camiseta);
    }

    @Override
    public String getDescripcion() {
        // Agregar "Bordado" a la descripción actual
    }

    @Override
    public double getCosto() {
        // Agregar 7.0 al costo actual
    }
}

// Decorador de color especial
class ColorEspecialDecorator extends CamisetaDecorator {
    public ColorEspecialDecorator(Camiseta camiseta) {
        super(camiseta);
    }

    @Override
    public String getDescripcion() {
        // Agregar "Color Especial" a la descripción actual
    }

    @Override
    public double getCosto() {
        // Agregar 4.0 al costo actual
    }
}

// Decorador de parches
class ParchesDecorator extends CamisetaDecorator {
    public ParchesDecorator(Camiseta camiseta) {
        super(camiseta);
    }

    @Override
    public String getDescripcion() {
        // Agregar "Parches" a la descripción actual
    }

    @Override
    public double getCosto() {
        // Agregar 6.0 al costo actual
    }
}
```

### Prueba

```java
Camiseta camiseta = new CamisetaBase();
System.out.println(camiseta.getDescripcion() + " $" + camiseta.getCosto());
```

```
Camiseta Básica $10.0
```

### Prueba

```java
Camiseta camiseta = new CamisetaBase();
camiseta = new ParchesDecorator(camiseta);
System.out.println(camiseta.getDescripcion() + " $" + camiseta.getCosto());
```

```
Camiseta Básica, Parches $16.0
```

### Prueba

```java
Camiseta camiseta = new CamisetaBase();
camiseta = new BordadoDecorator(camiseta);
System.out.println(camiseta.getDescripcion() + " $" + camiseta.getCosto());
```

```
Camiseta Básica, Bordado $17.0
```

### Prueba

```java
Camiseta camiseta = new CamisetaBase();
camiseta = new ColorEspecialDecorator(camiseta);
System.out.println(camiseta.getDescripcion() + " $" + camiseta.getCosto());
```

```
Camiseta Básica, Color Especial $14.0
```

### Prueba

```java
Camiseta camiseta = new CamisetaBase();
camiseta = new EstampadoDecorator(camiseta);
camiseta = new BordadoDecorator(camiseta);
camiseta = new ColorEspecialDecorator(camiseta);
camiseta = new ParchesDecorator(camiseta);
System.out.println(camiseta.getDescripcion() + " $" + camiseta.getCosto());
```

```
Camiseta Básica, Estampado, Bordado, Color Especial, Parches $32.0
```

### Solución

```java
interface Camiseta {
    String getDescripcion();
    double getCosto();
}

// Camiseta base
class CamisetaBase implements Camiseta {
    @Override
    public String getDescripcion() {
        return "Camiseta Básica";
    }

    @Override
    public double getCosto() {
        return 10.0;
    }
}

// Decorador base
abstract class CamisetaDecorator implements Camiseta {
    protected Camiseta camiseta;

    public CamisetaDecorator(Camiseta camiseta) {
        this.camiseta = camiseta;
    }

    @Override
    public String getDescripcion() {
        return camiseta.getDescripcion();
    }

    @Override
    public double getCosto() {
        return camiseta.getCosto();
    }
}

// Ejemplo ya implementado
class EstampadoDecorator extends CamisetaDecorator {
    public EstampadoDecorator(Camiseta camiseta) {
        super(camiseta);
    }

    @Override
    public String getDescripcion() {
        return camiseta.getDescripcion() + ", Estampado";
    }

    @Override
    public double getCosto() {
        return camiseta.getCosto() + 5.0;
    }
}

// Decorador de bordado
class BordadoDecorator extends CamisetaDecorator {
    public BordadoDecorator(Camiseta camiseta) {
        super(camiseta);
    }

    @Override
    public String getDescripcion() {
        return camiseta.getDescripcion() + ", Bordado";
    }

    @Override
    public double getCosto() {
        return camiseta.getCosto() + 7.0;
    }
}

// Decorador de color especial
class ColorEspecialDecorator extends CamisetaDecorator {
    public ColorEspecialDecorator(Camiseta camiseta) {
        super(camiseta);
    }

    @Override
    public String getDescripcion() {
        return camiseta.getDescripcion() + ", Color Especial";
    }

    @Override
    public double getCosto() {
        return camiseta.getCosto() + 4.0;
    }
}

// Decorador de parches
class ParchesDecorator extends CamisetaDecorator {
    public ParchesDecorator(Camiseta camiseta) {
        super(camiseta);
    }

    @Override
    public String getDescripcion() {
        return camiseta.getDescripcion() + ", Parches";
    }

    @Override
    public double getCosto() {
        return camiseta.getCosto() + 6.0;
    }
}
```

## Pregunta 96

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Composite** en Java.

La aplicación debe permitir trabajar de la misma forma con empleados individuales y con grupos de empleados.

- `Empleado`: representa un elemento individual y su costo corresponde a su salario.
- `Departamento`: puede contener empleados u otros departamentos. Ya se encuentra implementado y puede utilizarse como referencia.
- `Proyecto`: puede contener empleados o departamentos asignados.
- `ElementoOrganizacional`: define la operación común `calcularCosteTotal()`.

**Requisitos**

- Completa los métodos indicados de la clase `Proyecto`.
- `agregarParticipante()` debe agregar un elemento al proyecto.
- `eliminarParticipante()` debe eliminar un elemento del proyecto.
- `calcularCosteTotal()` debe recorrer los participantes y sumar el costo de cada uno.
- Un participante puede ser tanto un `Empleado` como un `Departamento`.

> **Pista:** observa cómo `Departamento` calcula su costo. El proyecto debe aplicar la misma idea: pedir a cada participante su propio costo y acumular los resultados.

### Código base

```java
import java.util.ArrayList;
import java.util.List;

interface ElementoOrganizacional {
    double calcularCosteTotal();
}

// Elemento individual
class Empleado implements ElementoOrganizacional {
    private String nombre;
    private double salario;

    public Empleado(String nombre, double salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    @Override
    public double calcularCosteTotal() {
        return salario;
    }

    @Override
    public String toString() {
        return nombre + " (Salario: $" + salario + ")";
    }
}

// Grupo de elementos
// Se proporciona como ejemplo del patrón Composite
class Departamento implements ElementoOrganizacional {
    private String nombre;
    private List<ElementoOrganizacional> elementos = new ArrayList<>();

    public Departamento(String nombre) {
        this.nombre = nombre;
    }

    public void agregarElemento(ElementoOrganizacional elemento) {
        elementos.add(elemento);
    }

    public void eliminarElemento(ElementoOrganizacional elemento) {
        elementos.remove(elemento);
    }

    @Override
    public double calcularCosteTotal() {
        double costeTotal = 0;
        for (ElementoOrganizacional elemento : elementos) {
            costeTotal += elemento.calcularCosteTotal();
        }
        return costeTotal;
    }

    @Override
    public String toString() {
        return nombre;
    }
}

// Proyecto compuesto por empleados y/o departamentos
class Proyecto implements ElementoOrganizacional {
    private String nombre;
    private List<ElementoOrganizacional> participantes = new ArrayList<>();

    public Proyecto(String nombre) {
        this.nombre = nombre;
    }

    public void agregarParticipante(ElementoOrganizacional participante) {
        // Agregar el participante a la lista
    }

    public void eliminarParticipante(ElementoOrganizacional participante) {
        // Eliminar el participante de la lista
    }

    @Override
    public double calcularCosteTotal() {
        double costeTotal = 0;
        // Recorrer los participantes
        // y sumar el costo de cada uno
        return costeTotal;
    }

    @Override
    public String toString() {
        return nombre;
    }
}
```

### Prueba

```java
Empleado empleado = new Empleado("Juan", 5000);
System.out.println("Coste total del empleado: $" + empleado.calcularCosteTotal());
```

```
Coste total del empleado: $5000.0
```

### Prueba

```java
Empleado empleado1 = new Empleado("Ana", 6000);
Empleado empleado2 = new Empleado("Luis", 4000);
Departamento departamento = new Departamento("Recursos Humanos");
departamento.agregarElemento(empleado1);
departamento.agregarElemento(empleado2);
System.out.println("Coste total del departamento con múltiples empleados: $" + departamento.calcularCosteTotal());
```

```
Coste total del departamento con múltiples empleados: $10000.0
```

### Prueba

```java
Empleado empleado1 = new Empleado("Ana", 5000);
Empleado empleado2 = new Empleado("Luis", 3000);
Departamento departamento1 = new Departamento("Recursos Humanos");
Departamento departamento2 = new Departamento("Tecnología");
departamento1.agregarElemento(empleado1);
departamento2.agregarElemento(empleado2);
Proyecto proyecto = new Proyecto("Proyecto C");
proyecto.agregarParticipante(departamento1);
proyecto.agregarParticipante(departamento2);
System.out.println("Coste total del proyecto con múltiples departamentos: $" + proyecto.calcularCosteTotal());
```

```
Coste total del proyecto con múltiples departamentos: $8000.0
```

### Prueba

```java
Empleado empleado1 = new Empleado("Ana", 5000);
Empleado empleado2 = new Empleado("Luis", 3000);
Departamento departamento = new Departamento("Recursos Humanos");
departamento.agregarElemento(empleado2);
Proyecto proyecto = new Proyecto("Proyecto D");
proyecto.agregarParticipante(empleado1);
proyecto.agregarParticipante(departamento);
proyecto.eliminarParticipante(empleado1);
System.out.println("Coste total después de eliminar un empleado del proyecto con múltiples participantes: $" + proyecto.calcularCosteTotal());
```

```
Coste total después de eliminar un empleado del proyecto con múltiples participantes: $3000.0
```

### Solución

```java
import java.util.ArrayList;
import java.util.List;

interface ElementoOrganizacional {
    double calcularCosteTotal();
}

// Elemento individual
class Empleado implements ElementoOrganizacional {
    private String nombre;
    private double salario;

    public Empleado(String nombre, double salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    @Override
    public double calcularCosteTotal() {
        return salario;
    }

    @Override
    public String toString() {
        return nombre + " (Salario: $" + salario + ")";
    }
}

// Grupo de elementos
// Se proporciona como ejemplo del patrón Composite
class Departamento implements ElementoOrganizacional {
    private String nombre;
    private List<ElementoOrganizacional> elementos = new ArrayList<>();

    public Departamento(String nombre) {
        this.nombre = nombre;
    }

    public void agregarElemento(ElementoOrganizacional elemento) {
        elementos.add(elemento);
    }

    public void eliminarElemento(ElementoOrganizacional elemento) {
        elementos.remove(elemento);
    }

    @Override
    public double calcularCosteTotal() {
        double costeTotal = 0;
        for (ElementoOrganizacional elemento : elementos) {
            costeTotal += elemento.calcularCosteTotal();
        }
        return costeTotal;
    }

    @Override
    public String toString() {
        return nombre;
    }
}

// Proyecto compuesto por empleados y/o departamentos
class Proyecto implements ElementoOrganizacional {
    private String nombre;
    private List<ElementoOrganizacional> participantes = new ArrayList<>();

    public Proyecto(String nombre) {
        this.nombre = nombre;
    }

    public void agregarParticipante(ElementoOrganizacional participante) {
        participantes.add(participante);
    }

    public void eliminarParticipante(ElementoOrganizacional participante) {
        participantes.remove(participante);
    }

    @Override
    public double calcularCosteTotal() {
        double costeTotal = 0;
        for (ElementoOrganizacional participante : participantes) {
            costeTotal += participante.calcularCosteTotal();
        }
        return costeTotal;
    }

    @Override
    public String toString() {
        return nombre;
    }
}
```

## Pregunta 97

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el código proporcionado para implementar el patrón **Composite** en Java.

La aplicación representa un sistema de archivos formado por archivos y carpetas. Una carpeta puede contener distintos componentes, incluyendo otros archivos o carpetas, y debe poder calcular el tamaño total de todo su contenido.

- `Archivo`: representa un elemento individual y posee un tamaño propio.
- `ArchivoEjecutable`: es un tipo especial de archivo que también posee una extensión.
- `Carpeta`: puede contener varios componentes y debe sumar sus tamaños.
- `EnlaceSimbolico`: representa un acceso a otro componente y utiliza el tamaño del elemento al que apunta.

**Requisitos**

- Completa los métodos indicados de la clase `Carpeta`.
- `agregarComponente()` debe agregar un elemento a la carpeta.
- `eliminarComponente()` debe eliminar un elemento de la carpeta.
- `calcularTamanoTotal()` debe recorrer todos los componentes y sumar sus tamaños.
- Una carpeta puede contener tanto archivos como otras carpetas.

> **Pista:** una carpeta no necesita saber si contiene un archivo u otra carpeta. Simplemente debe pedir a cada componente que calcule su propio tamaño total.

### Código base

```java
import java.util.ArrayList;
import java.util.List;

interface Componente {
    String getNombre();
    int calcularTamanoTotal();
}

// Elemento individual
class Archivo implements Componente {
    private String nombre;
    private int tamano;

    public Archivo(String nombre, int tamano) {
        this.nombre = nombre;
        this.tamano = tamano;
    }

    @Override
    public String getNombre() {
        return nombre;
    }

    @Override
    public int calcularTamanoTotal() {
        return tamano;
    }
}

// Tipo especial de archivo
class ArchivoEjecutable extends Archivo {
    private String extension;

    public ArchivoEjecutable(String nombre, int tamano, String extension) {
        super(nombre, tamano);
        this.extension = extension;
    }

    @Override
    public String getNombre() {
        return super.getNombre() + "." + extension;
    }
}

// Componente que puede contener otros componentes
class Carpeta implements Componente {
    private String nombre;
    private List<Componente> componentes = new ArrayList<>();

    public Carpeta(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String getNombre() {
        return nombre;
    }

    public void agregarComponente(Componente componente) {
        // Agregar el componente a la carpeta
    }

    public void eliminarComponente(Componente componente) {
        // Eliminar el componente de la carpeta
    }

    @Override
    public int calcularTamanoTotal() {
        int tamanoTotal = 0;
        // Recorrer los componentes de la carpeta
        // y sumar el tamaño total de cada uno
        return tamanoTotal;
    }
}

// Enlace hacia otro componente
class EnlaceSimbolico implements Componente {
    private String nombre;
    private Componente objetivo;

    public EnlaceSimbolico(String nombre, Componente objetivo) {
        this.nombre = nombre;
        this.objetivo = objetivo;
    }

    @Override
    public String getNombre() {
        return nombre;
    }

    @Override
    public int calcularTamanoTotal() {
        return objetivo.calcularTamanoTotal();
    }
}
```

### Prueba

```java
Archivo archivo1 = new Archivo("Archivo1.txt", 100);
Archivo archivo2 = new Archivo("Archivo2.txt", 200);

Carpeta carpeta = new Carpeta("Carpeta");
carpeta.agregarComponente(archivo1);
carpeta.agregarComponente(archivo2);

System.out.println("Tamaño total de Carpeta con archivos: " + carpeta.calcularTamanoTotal() + " bytes");
```

```
Tamaño total de Carpeta con archivos: 300 bytes
```

### Prueba

```java
Archivo archivo1 = new Archivo("Archivo1.txt", 100);
EnlaceSimbolico enlace = new EnlaceSimbolico("EnlaceA", archivo1);

Carpeta carpeta = new Carpeta("Carpeta");
carpeta.agregarComponente(enlace);

System.out.println("Tamaño total de Carpeta con enlace a archivo: " + carpeta.calcularTamanoTotal() + " bytes");
```

```
Tamaño total de Carpeta con enlace a archivo: 100 bytes
```

### Prueba

```java
Archivo archivo1 = new Archivo("Archivo1.txt", 100);
Archivo archivo2 = new Archivo("Archivo2.txt", 200);

Carpeta carpeta = new Carpeta("Carpeta");
carpeta.agregarComponente(archivo1);
carpeta.agregarComponente(archivo2);

carpeta.eliminarComponente(archivo1);
System.out.println("Tamaño total de Carpeta después de eliminar Archivo1: " + carpeta.calcularTamanoTotal() + " bytes");
```

```
Tamaño total de Carpeta después de eliminar Archivo1: 200 bytes
```

### Prueba

```java
Archivo archivo1 = new Archivo("Archivo1.txt", 100);
Archivo archivo2 = new Archivo("Archivo2.txt", 200);
ArchivoEjecutable archivoEjecutable = new ArchivoEjecutable("ArchivoEjecutable", 300, "exe");

Carpeta subcarpeta = new Carpeta("Subcarpeta");
subcarpeta.agregarComponente(archivo1);

EnlaceSimbolico enlace = new EnlaceSimbolico("EnlaceA", archivoEjecutable);

Carpeta carpetaRaiz = new Carpeta("CarpetaRaiz");
carpetaRaiz.agregarComponente(subcarpeta);
carpetaRaiz.agregarComponente(archivo2);
carpetaRaiz.agregarComponente(enlace);

System.out.println("Tamaño total de CarpetaRaiz con archivos y enlace: " + carpetaRaiz.calcularTamanoTotal() + " bytes");
```

```
Tamaño total de CarpetaRaiz con archivos y enlace: 600 bytes
```

### Solución

```java
import java.util.ArrayList;
import java.util.List;

interface Componente {
    String getNombre();
    int calcularTamanoTotal();
}

// Elemento individual
class Archivo implements Componente {
    private String nombre;
    private int tamano;

    public Archivo(String nombre, int tamano) {
        this.nombre = nombre;
        this.tamano = tamano;
    }

    @Override
    public String getNombre() {
        return nombre;
    }

    @Override
    public int calcularTamanoTotal() {
        return tamano;
    }
}

// Tipo especial de archivo
class ArchivoEjecutable extends Archivo {
    private String extension;

    public ArchivoEjecutable(String nombre, int tamano, String extension) {
        super(nombre, tamano);
        this.extension = extension;
    }

    @Override
    public String getNombre() {
        return super.getNombre() + "." + extension;
    }
}

// Componente que puede contener otros componentes
class Carpeta implements Componente {
    private String nombre;
    private List<Componente> componentes = new ArrayList<>();

    public Carpeta(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String getNombre() {
        return nombre;
    }

    public void agregarComponente(Componente componente) {
        componentes.add(componente);
    }

    public void eliminarComponente(Componente componente) {
        componentes.remove(componente);
    }

    @Override
    public int calcularTamanoTotal() {
        int tamanoTotal = 0;
        for (Componente componente : componentes) {
            tamanoTotal += componente.calcularTamanoTotal();
        }
        return tamanoTotal;
    }
}

// Enlace hacia otro componente
class EnlaceSimbolico implements Componente {
    private String nombre;
    private Componente objetivo;

    public EnlaceSimbolico(String nombre, Componente objetivo) {
        this.nombre = nombre;
        this.objetivo = objetivo;
    }

    @Override
    public String getNombre() {
        return nombre;
    }

    @Override
    public int calcularTamanoTotal() {
        return objetivo.calcularTamanoTotal();
    }
}
```

## Pregunta 98

**Enunciado:** ¿Cómo afecta el patrón Composite la simplicidad del diseño de una aplicación?

- a. Reduce la escalabilidad de la aplicación
- b. Hace el código menos flexible
- ✅ c. Simplifica el tratamiento de objetos complejos
- d. Introduce una mayor complejidad estructural

## Pregunta 99

**Enunciado:** ¿Cómo se extiende el comportamiento de una entidad de software sin violar el Principio de Abierto/Cerrado?

- a. Usando herencia para sobrescribir todos los métodos de la clase base.
- b. Modificando el código existente directamente.
- c. Reescribiendo completamente la clase original.
- ✅ d. Utilizando interfaces o clases abstractas para permitir extensiones.

## Pregunta 100

**Enunciado:** ¿Cuál de las siguientes es una ventaja clave del patrón Composite?

- ✅ a. Facilitar el tratamiento uniforme de hojas y compuestos
- b. Simplificar la gestión de recursos de hardware
- c. Reducir la cantidad de clases en una aplicación
- d. Aumentar el rendimiento del sistema

## Pregunta 101

**Enunciado:** ¿Cuál de los siguientes aspectos es clave para usar el Patrón Decorator de manera efectiva?

- a. Aplicar el mayor número de decoradores posibles para obtener un comportamiento más complejo.
- b. Usar la herencia junto con el Patrón Decorator para mayor flexibilidad.
- ✅ c. Mantener los decoradores independientes y modulares para una mayor reutilización de código.
- d. Asegurarse de que los decoradores se aplican en un orden fijo e inmutable.

## Pregunta 102

**Enunciado:** ¿Cuál de los siguientes escenarios es una aplicación típica del patrón Composite?

- a. Implementación de un algoritmo de ordenamiento
- b. Comunicación en redes de datos
- ✅ c. Manipulación de archivos en un sistema de archivos
- d. Modelo relacional en bases de datos

## Pregunta 103

**Enunciado:** ¿Cuál de los siguientes NO es un beneficio de seguir el Principio de Abierto/Cerrado?

- a. Mejora la mantenibilidad del código.
- ✅ b. Reduce la necesidad de documentar el código existente.
- c. Facilita la escalabilidad del sistema.
- d. Permite reutilizar el código fácilmente.

## Pregunta 104

**Enunciado:** ¿Cuál de los siguientes no es un uso común del Patrón Adapter?

- a. Compatibilidad de APIs.
- b. Integración de librerías o sistemas antiguos.
- c. Comunicación entre componentes nuevos y sistemas antiguos.
- ✅ d. Mejora de la velocidad de ejecución en sistemas distribuidos.

## Pregunta 105

**Enunciado:** ¿Cuál de los siguientes no es una ventaja del Patrón Decorator?

- a. Facilita la creación de combinaciones únicas de funcionalidades.
- ✅ b. Simplifica el código, haciéndolo más fácil de seguir, incluso con múltiples decoradores.
- c. Permite agregar responsabilidades sin afectar otros objetos de la misma clase.
- d. Permite dividir responsabilidades entre diferentes decoradores.

## Pregunta 106

**Enunciado:** ¿Cuál es el objetivo principal del Patrón Adapter?

- a. Reducir la complejidad del código existente.
- b. Simplificar la interfaz de las clases antiguas.
- ✅ c. Adaptar clases con interfaces incompatibles para que trabajen juntas.
- d. Mejorar la performance de las aplicaciones heredadas.

## Pregunta 107

**Enunciado:** ¿Cuál es la diferencia principal entre el Patrón Adapter y el Patrón Facade?

- a. Adapter simplifica la interfaz, mientras que Facade convierte una interfaz en otra.
- b. Facade agrega funcionalidades nuevas, mientras que Adapter convierte una interfaz en otra.
- c. Ambos patrones tienen el mismo propósito.
- ✅ d. Facade simplifica la interfaz, mientras que Adapter convierte una interfaz en otra.

## Pregunta 108

**Enunciado:** ¿Cuál es la función del Componente Concreto en el Patrón Decorator?

- ✅ a. Proveer una implementación del Componente que puede ser decorada.
- b. Implementar la interfaz del Componente y agregar funcionalidades adicionales.
- c. Definir las operaciones que pueden ser decoradas.
- d. Gestionar la referencia a un objeto del tipo Componente.

## Pregunta 109

**Enunciado:** ¿Cuál es la principal diferencia entre el Patrón Decorator y la herencia?

- a. El Patrón Decorator no puede ser reversible, a diferencia de la herencia.
- b. El Patrón Decorator agrega comportamiento a una clase completa, mientras que la herencia solo afecta a un objeto individual.
- ✅ c. La herencia agrega comportamiento a una clase completa, mientras que el Patrón Decorator lo hace de manera selectiva a un objeto individual.
- d. La herencia permite modificar dinámicamente el comportamiento de un objeto, mientras que el Patrón Decorator es estático.

## Pregunta 110

**Enunciado:** ¿Cuál es una desventaja importante del Patrón Decorator?

- a. No es posible combinar decoradores para crear nuevas funcionalidades.
- b. No es flexible para agregar responsabilidades a los objetos.
- c. Es difícil aplicar múltiples decoradores a un objeto individual.
- ✅ d. Puede aumentar la complejidad del código al usar múltiples decoradores.

## Pregunta 111

**Enunciado:** ¿Cuál es una ventaja clave del Patrón Adapter?

- a. Permite cambiar el comportamiento de las clases sin alterar su estructura interna.
- b. Simplifica la interfaz de múltiples clases para el cliente.
- c. Modifica el código original para adaptarlo a nuevas interfaces.
- ✅ d. Facilita la interoperabilidad entre clases sin modificar el código original.

## Pregunta 112

**Enunciado:** ¿Cuándo es más adecuado usar el Patrón Decorator en lugar de la herencia?

- ✅ a. Cuando necesitas agregar responsabilidades adicionales a los objetos de manera flexible y reversible.
- b. Cuando solo se necesita modificar el comportamiento en tiempo de compilación.
- c. Cuando quieres agregar funcionalidades de manera rígida y permanente.
- d. Cuando necesitas modificar el comportamiento de toda una clase de objetos.

## Pregunta 113

**Enunciado:** El patrón Composite es especialmente útil en sistemas que...

- ✅ a. Deben gestionar estructuras jerárquicas complejas
- b. Están enfocados en la concurrencia y el paralelismo
- c. No tienen jerarquías
- d. Necesitan optimización para grandes cantidades de datos

## Pregunta 114

**Enunciado:** El patrón Composite permite que una estructura jerárquica trate tanto a objetos individuales como a compuestos de manera...

- ✅ a. Uniforme
- b. Secuencial
- c. Independiente
- d. Jerárquica

## Pregunta 115

**Enunciado:** El patrón Composite pertenece a la categoría de patrones...

- a. De comportamiento
- b. Creacionales
- ✅ c. Estructurales
- d. Operacionales

## Pregunta 116

**Enunciado:** El patrón Composite simplifica el manejo de estructuras complejas al...

- a. Eliminar la jerarquía de la estructura
- b. Tratar componentes individuales y compuestos de forma distinta
- ✅ c. Tratar componentes individuales y compuestos de forma uniforme
- d. Agregar reglas adicionales para cada componente

## Pregunta 117

**Enunciado:** En el Patrón Adapter, ¿qué tipo de adaptador utiliza herencia para adaptar una clase a la interfaz objetivo?

- ✅ a. Adapter de Clase.
- b. Adapter de Interface.
- c. Adapter de Composición.
- d. Adapter de Objeto.

## Pregunta 118

**Enunciado:** En el patrón Composite, los componentes individuales y los compuestos comparten...

- ✅ a. Una interfaz o clase abstracta común
- b. Un sistema de almacenamiento común
- c. Una estructura de datos interna
- d. Un ciclo de vida de ejecución idéntico

## Pregunta 119

**Enunciado:** En una aplicación gráfica, el patrón Composite puede usarse para...

- ✅ a. Tratar a componentes gráficos y contenedores de manera similar
- b. Crear gráficos en 3D
- c. Renderizar gráficos más rápidamente
- d. Mejorar la respuesta a eventos del sistema

## Pregunta 120

**Enunciado:** ¿Por qué el orden de los decoradores es importante en el Patrón Decorator?

- a. Porque el último decorador siempre anula los anteriores.
- ✅ b. Porque el orden afecta el comportamiento y la salida final del objeto decorado.
- c. Porque los decoradores deben aplicarse secuencialmente para evitar errores de compilación.
- d. Porque el orden determina si el objeto puede decorarse o no.

## Pregunta 121

**Enunciado:** ¿Qué clase en el Patrón Decorator define las operaciones que pueden ser decoradas?

- a. Decorador Concreto
- ✅ b. Componente
- c. Decorador
- d. Componente Concreto

## Pregunta 122

**Enunciado:** ¿Qué componente del Patrón Adapter es responsable de transformar las llamadas del cliente en algo que el adaptado pueda entender?

- a. Adaptado (Adaptee).
- ✅ b. Adaptador (Adapter).
- c. Cliente.
- d. Interfaz Objetivo (Target).

## Pregunta 123

**Enunciado:** ¿Qué estructura de datos es más adecuada para representar el patrón Composite?

- a. Lista
- b. Grafo
- ✅ c. Árbol
- d. Cola

## Pregunta 124

**Enunciado:** ¿Qué principio de SOLID respeta el Patrón Adapter al no modificar la clase original?

- a. Principio de Inversión de Dependencias.
- ✅ b. Principio de Abierto/Cerrado.
- c. Principio de Responsabilidad Única.
- d. Principio de Sustitución de Liskov.

## Pregunta 125

**Enunciado:** ¿Qué significa "cerrado para la modificación" en el Principio de Abierto/Cerrado?

- a. Que el comportamiento de una entidad no puede extenderse.
- ✅ b. Que el código existente no debe ser modificado para evitar errores.
- c. Que la clase solo puede ser modificada por el desarrollador original.
- d. Que la clase está bloqueada para nuevas funcionalidades.

## Pregunta 126

**Enunciado:** ¿Qué sucede cuando se decoran múltiples veces los mismos objetos en el Patrón Decorator?

- a. Los objetos solo mantienen la última decoración aplicada.
- b. Los objetos pierden las funcionalidades originales al ser decorados.
- c. Se sobreescriben las decoraciones previas sin afectar el comportamiento final.
- ✅ d. Cada decorador añade su funcionalidad en el orden en que se aplica.

## Pregunta 127

**Enunciado:** ¿Qué tipo de relaciones jerárquicas modela el patrón Composite?

- a. Relaciones many-to-many
- ✅ b. Parte-todo
- c. Herencia múltiple
- d. Delegación

## Pregunta 128

**Enunciado:** Una de las principales diferencias entre hojas y compuestos en el patrón Composite es que...

- a. Ninguno puede contener otros componentes
- ✅ b. Los compuestos pueden contener otros componentes, mientras que las hojas no
- c. Las hojas pueden contener otros componentes, pero los compuestos no
- d. Ambos pueden contener otros componentes

## Pregunta 129

**Tipo:** CodeRunner (Java)

**Enunciado:** Imagina que estás desarrollando un sistema para un cine que permite a los usuarios realizar varias operaciones como seleccionar una película, reservar asientos y procesar pagos. Este sistema interactúa con varios subsistemas internos que gestionan películas, pagos y reservas. Para simplificar la interacción con estos subsistemas, vamos a utilizar el Patrón **Facade**. Este patrón proporcionará una interfaz simplificada para que los usuarios realicen operaciones complejas sin tener que interactuar directamente con cada subsistema.

**Requisitos**

- **Subsistemas:** se tiene ya listos los siguientes subsistemas:
  - `GestorPeliculas`: maneja las películas disponibles en el cine.
  - `SistemaPago`: se encarga del procesamiento de pagos.
  - `ReservaAsientos`: gestiona la reserva de asientos en la sala.
- **Facade:** completa el código de la clase `FacadeCine` para que proporcione una interfaz sencilla para interactuar con los subsistemas. Esta clase debe ofrecer métodos para seleccionar una película, reservar asientos y procesar el pago, en un único método llamado: `void reservarBoleto(String nombrePelicula, int numeroDeAsientos, double montoPago)`. La salida del método debe tener el siguiente formato al final de la ejecución de todos los subsistemas involucrados: `"Reserva completada para x asientos para la película x"`

### Código base

```java
class GestorPeliculas {
    public void listarPeliculasDisponibles() {
        System.out.println("Listado de películas disponibles...");
        // Lógica para listar las películas disponibles
    }

    public void seleccionarPelicula(String nombrePelicula) {
        System.out.println("Seleccionando película: " + nombrePelicula);
        // Lógica para seleccionar una película
    }
}

class SistemaPago {
    public void procesarPago(double monto) {
        System.out.println("Procesando pago de: $" + monto);
        // Lógica para procesar el pago
    }
}

class ReservaAsientos {
    public void reservarAsientos(int numeroDeAsientos) {
        System.out.println("Reservando " + numeroDeAsientos + " asientos.");
        // Lógica para reservar los asientos
    }
}

public class FacadeCine {
//Completa la clase, siguiendo la pauta dada, aquí.
}
```

### Prueba

```java
FacadeCine facadeCine = new FacadeCine();
facadeCine.reservarBoleto("Inception", 3, 30.0);
```

```
Seleccionando película: Inception
Reservando 3 asientos.
Procesando pago de: $30.0
Reserva completada para 3 asientos para la película Inception
```

### Prueba

```java
FacadeCine facadeCine = new FacadeCine();
facadeCine.reservarBoleto("Joker", 2, 20.0);
facadeCine.reservarBoleto("Parasite", 4, 40.0);
facadeCine.reservarBoleto("Pulp Fiction", 1, 10.0);
```

```
Seleccionando película: Joker
Reservando 2 asientos.
Procesando pago de: $20.0
Reserva completada para 2 asientos para la película Joker
Seleccionando película: Parasite
Reservando 4 asientos.
Procesando pago de: $40.0
Reserva completada para 4 asientos para la película Parasite
Seleccionando película: Pulp Fiction
Reservando 1 asientos.
Procesando pago de: $10.0
Reserva completada para 1 asientos para la película Pulp Fiction
```

### Solución

```java
class GestorPeliculas {
    public void listarPeliculasDisponibles() {
        System.out.println("Listado de películas disponibles...");
        // Lógica para listar las películas disponibles
    }

    public void seleccionarPelicula(String nombrePelicula) {
        System.out.println("Seleccionando película: " + nombrePelicula);
        // Lógica para seleccionar una película
    }
}

class SistemaPago {
    public void procesarPago(double monto) {
        System.out.println("Procesando pago de: $" + monto);
        // Lógica para procesar el pago
    }
}

class ReservaAsientos {
    public void reservarAsientos(int numeroDeAsientos) {
        System.out.println("Reservando " + numeroDeAsientos + " asientos.");
        // Lógica para reservar los asientos
    }
}

public class FacadeCine {
    private GestorPeliculas gestorPeliculas = new GestorPeliculas();
    private SistemaPago sistemaPago = new SistemaPago();
    private ReservaAsientos reservaAsientos = new ReservaAsientos();

    public void reservarBoleto(String nombrePelicula, int numeroDeAsientos, double montoPago) {
        gestorPeliculas.seleccionarPelicula(nombrePelicula);
        reservaAsientos.reservarAsientos(numeroDeAsientos);
        sistemaPago.procesarPago(montoPago);
        System.out.println("Reserva completada para " + numeroDeAsientos + " asientos para la película " + nombrePelicula);
    }
}
```

## Pregunta 130

**Tipo:** CodeRunner (Java)

**Enunciado:** Imagina que estás desarrollando un sistema integral para gestionar conferencias y eventos grandes, como una conferencia tecnológica o una convención empresarial. El sistema debe coordinar varios aspectos logísticos para asegurar el éxito del evento. Los aspectos a gestionar incluyen la inscripción de participantes, la organización de sesiones y conferencias, la emisión de boletos, la administración de servicios de catering, y la coordinación de equipos audiovisuales.

Para simplificar la interacción con estos aspectos complejos, implementarás el Patrón **Facade**. Este patrón, como ya sabemos, proporciona una interfaz simplificada a un conjunto de interfaces en un subsistema, lo que facilita la interacción con el sistema sin necesidad de conocer todos los detalles internos de cada subsistema.

Tu tarea es tomando en cuenta los subsistemas ya realizados, dar implementación a las clases Facade siguiendo el patrón Facade. Cada facade debe encapsular una o más operaciones de los subsistemas para proporcionar una interfaz simple y coherente que facilite la realización de tareas complejas sin necesidad de interactuar directamente con cada subsistema.

**Consideraciones**

- **Subsistemas:** se tiene ya listos los siguientes subsistemas:
  - `GestionParticipantes`: maneja la inscripción de los participantes en el evento y mantiene la información relevante sobre ellos.
  - `OrganizacionSesiones`: se encarga de programar y organizar las sesiones del evento, incluyendo la gestión de horarios y temas de las sesiones.
  - `EmisionBoletos`: emite boletos para los participantes después de su inscripción. Gestiona la emisión de boletos para las sesiones.
  - `ServiciosCatering`: administra las solicitudes de catering, incluyendo la selección de menús y la gestión de la cantidad de alimentos y bebidas requeridos.
  - `CoordinacionAudiovisual`: coordina los equipos audiovisuales necesarios para las sesiones del evento, como proyectores, micrófonos, y otros equipos técnicos.
- **Facade:** completa el código de las clases `FacadeEvento` y `FacadeComidaAudiovisual` para que proporcione una interfaz sencilla para interactuar con los subsistemas.
  - `FacadeEvento` debe ofrecer una interfaz simplificada para manejar inscripciones, emisión de boletos y organización de sesiones. Encapsula las operaciones de los subsistemas de gestión de participantes, organización de sesiones y emisión de boletos. Métodos de este Facade: `void registrarParticipanteYEmitirBoleto(String nombre, String sesion)`: inscribe a un participante y emite un boleto para la sesión especificada. Y `void organizarSesion(String tema, String hora)`: programa una sesión con un tema y una hora específica.
  - `FacadeComidaAudiovisual` debe ofrecer una interfaz simplificada para gestionar los servicios de catering y la coordinación de equipos audiovisuales. Encapsula las operaciones de los subsistemas de servicios de catering y coordinación audiovisual. Métodos de este Facade: `void prepararEvento(String menu, int cantidad, String equipo)`: solicita catering para el evento y coordina los equipos audiovisuales necesarios.

### Código base

```java
// Subsistema de Gestión de Participantes
class GestionParticipantes {
    void inscribirParticipante(String nombre) {
        System.out.println("Inscribiendo participante: " + nombre);
    }
}

// Subsistema de Organización de Sesiones
class OrganizacionSesiones {
    void programarSesion(String tema, String hora) {
        System.out.println("Programando sesión sobre: " + tema + " a las " + hora);
    }
}

// Subsistema de Emisión de Boletos
class EmisionBoletos {
    void emitirBoleto(String nombre, String sesion) {
        System.out.println("Emitiendo boleto para " + nombre + " para la sesión: " + sesion);
    }
}

// Subsistema de Servicios de Catering
class ServiciosCatering {
    void solicitarCatering(String menu, int cantidad) {
        System.out.println("Solicitando catering: " + menu + " para " + cantidad + " personas.");
    }
}

// Subsistema de Coordinación Audiovisual
class CoordinacionAudiovisual {
    void coordinarEquipos(String tipoEquipo) {
        System.out.println("Coordinando equipos: " + tipoEquipo);
    }
}

// Facade principal que maneja inscripciones, emisión de boletos y organización de sesiones
class FacadeEvento {
//Completa la clase, siguiendo la pauta dada, aquí.
}

// Facade especializado en catering y audiovisual
class FacadeComidaAudiovisual {
//Completa la clase, siguiendo la pauta dada, aquí.
}
```

### Prueba

```java
FacadeEvento facadeEvento = new FacadeEvento();
facadeEvento.registrarParticipanteYEmitirBoleto("Ana Gómez", "Innovación en Tecnología");
```

```
Inscribiendo participante: Ana Gómez
Emitiendo boleto para Ana Gómez para la sesión: Innovación en Tecnología
```

### Prueba

```java
FacadeEvento facadeEvento = new FacadeEvento();
facadeEvento.organizarSesion("Innovación en Tecnología", "14:00");
```

```
Programando sesión sobre: Innovación en Tecnología a las 14:00
```

### Prueba

```java
FacadeComidaAudiovisual facadeComidaAudiovisual = new FacadeComidaAudiovisual();
facadeComidaAudiovisual.prepararEvento("Menú Gourmet", 150, "Proyector y Micrófonos");
```

```
Solicitando catering: Menú Gourmet para 150 personas.
Coordinando equipos: Proyector y Micrófonos
```

### Solución

```java
// Subsistema de Gestión de Participantes
class GestionParticipantes {
    void inscribirParticipante(String nombre) {
        System.out.println("Inscribiendo participante: " + nombre);
    }
}

// Subsistema de Organización de Sesiones
class OrganizacionSesiones {
    void programarSesion(String tema, String hora) {
        System.out.println("Programando sesión sobre: " + tema + " a las " + hora);
    }
}

// Subsistema de Emisión de Boletos
class EmisionBoletos {
    void emitirBoleto(String nombre, String sesion) {
        System.out.println("Emitiendo boleto para " + nombre + " para la sesión: " + sesion);
    }
}

// Subsistema de Servicios de Catering
class ServiciosCatering {
    void solicitarCatering(String menu, int cantidad) {
        System.out.println("Solicitando catering: " + menu + " para " + cantidad + " personas.");
    }
}

// Subsistema de Coordinación Audiovisual
class CoordinacionAudiovisual {
    void coordinarEquipos(String tipoEquipo) {
        System.out.println("Coordinando equipos: " + tipoEquipo);
    }
}

// Facade principal que maneja inscripciones, emisión de boletos y organización de sesiones
class FacadeEvento {
    private GestionParticipantes gestionParticipantes = new GestionParticipantes();
    private OrganizacionSesiones organizacionSesiones = new OrganizacionSesiones();
    private EmisionBoletos emisionBoletos = new EmisionBoletos();

    void registrarParticipanteYEmitirBoleto(String nombre, String sesion) {
        gestionParticipantes.inscribirParticipante(nombre);
        emisionBoletos.emitirBoleto(nombre, sesion);
    }

    void organizarSesion(String tema, String hora) {
        organizacionSesiones.programarSesion(tema, hora);
    }
}

// Facade especializado en catering y audiovisual
class FacadeComidaAudiovisual {
    private ServiciosCatering serviciosCatering = new ServiciosCatering();
    private CoordinacionAudiovisual coordinacionAudiovisual = new CoordinacionAudiovisual();

    void prepararEvento(String menu, int cantidad, String equipo) {
        serviciosCatering.solicitarCatering(menu, cantidad);
        coordinacionAudiovisual.coordinarEquipos(equipo);
    }
}
```

## Pregunta 131

**Tipo:** CodeRunner (Java)

**Enunciado:** Una empresa tiene una serie de documentos confidenciales que solo pueden ser consultados por ciertos empleados. Pero debido a la naturaleza delicada de estos documentos, no se permite el acceso directo sin registrar quién los consulta. Además, si un empleado no tiene autorización, el sistema debe denegar el acceso y registrar el intento fallido.

En este contexto, utilizarás el Patrón **Proxy** para controlar el acceso a los documentos. El Proxy actuará como un intermediario entre el empleado y el documento real, verificando si el empleado tiene los permisos necesarios antes de mostrar el documento. También registrará los intentos exitosos y fallidos de acceso.

**Consideraciones**

- **Interfaz `Documento`:** define el contrato para visualizar documentos. Tiene método `mostrar()` que simula la visualización del documento.
- **Clase `DocumentoReal`:** implementa la interfaz `Documento` y representa el documento confidencial real. Esta clase tiene el método `mostrar()`, que imprime un mensaje indicando que el documento está siendo visualizado.
- **Clase `ProxyDocumento`:** implementa la interfaz `Documento` y actúa como un intermediario. Controla el acceso verificando los permisos del empleado antes de permitir la visualización del documento. Si el empleado tiene los permisos necesarios, el proxy permitirá acceder al documento; si no, denegará el acceso y registrará el intento fallido.
- **Clase `Empleado`:** representa a un empleado de la organización. Cada empleado tiene un nombre y un nivel de acceso. El nivel de acceso es un número entero que define qué tan confidencial es la información a la que puede acceder.

Tu tarea es tomando en cuenta los componentes ya realizados, dar implementación a la clase `ProxyDocumento`, siguiendo los requerimientos de funcionamiento para la misma, implementando los métodos: `void mostrar()` y `void registrarIntentoFallido()`, así como el resto de la clase.

Para el caso de `void mostrar()`, la salida debe ser `"Acceso concedido a nombreEmpleado"` en caso positivo, en caso negativo deberá ser `"Acceso denegado a nombreEmpleado para el documento nombreDocumento"`:

Para el caso de `void registrarIntentoFallido()` simplemente la salida será `"Intento de acceso fallido registrado para nombreEmpleado"`

Tomar en cuenta que para ambos casos, `nombreEmpleado` o `nombreDocumento` son valores variables.

### Código base

```java
interface Documento {
    void mostrar();
}

class DocumentoReal implements Documento {
    private String nombre;

    public DocumentoReal(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public void mostrar() {
        System.out.println("Mostrando el documento confidencial: " + nombre);
    }
}

class Empleado {
    private String nombre;
    private int nivelAcceso;

    public Empleado(String nombre, int nivelAcceso) {
        this.nombre = nombre;
        this.nivelAcceso = nivelAcceso;
    }

    public String getNombre() {
        return nombre;
    }

    public int getNivelAcceso() {
        return nivelAcceso;
    }
}

public class ProxyDocumento implements Documento {
    //Completa la clase, siguiendo la pauta dada, aquí.
}
```

### Prueba

```java
Empleado empleado = new Empleado("Juan", 5);
Documento documento = new ProxyDocumento("Reporte Financiero", 4, empleado);
documento.mostrar();
```

```
Acceso concedido a Juan
Mostrando el documento confidencial: Reporte Financiero
```

### Prueba

```java
Empleado empleado = new Empleado("Maria", 2);
Documento documento = new ProxyDocumento("Plan de Estrategia", 4, empleado);
documento.mostrar();
```

```
Acceso denegado a Maria para el documento: Plan de Estrategia
Intento de acceso fallido registrado para: Maria
```

### Prueba

```java
Empleado empleado1 = new Empleado("Pedro", 5);
Empleado empleado2 = new Empleado("Ana", 2);
Documento documento1 = new ProxyDocumento("Reporte Ventas", 4, empleado1);
Documento documento2 = new ProxyDocumento("Reporte Ventas", 4, empleado2);
documento1.mostrar();
documento2.mostrar();
```

```
Acceso concedido a Pedro
Mostrando el documento confidencial: Reporte Ventas
Acceso denegado a Ana para el documento: Reporte Ventas
Intento de acceso fallido registrado para: Ana
```

### Solución

```java
interface Documento {
    void mostrar();
}

class DocumentoReal implements Documento {
    private String nombre;

    public DocumentoReal(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public void mostrar() {
        System.out.println("Mostrando el documento confidencial: " + nombre);
    }
}

class Empleado {
    private String nombre;
    private int nivelAcceso;

    public Empleado(String nombre, int nivelAcceso) {
        this.nombre = nombre;
        this.nivelAcceso = nivelAcceso;
    }

    public String getNombre() {
        return nombre;
    }

    public int getNivelAcceso() {
        return nivelAcceso;
    }
}

public class ProxyDocumento implements Documento {
    private DocumentoReal documentoReal;
    private String nombreDocumento;
    private int nivelRequerido;
    private Empleado empleado;

    public ProxyDocumento(String nombreDocumento, int nivelRequerido, Empleado empleado) {
        this.nombreDocumento = nombreDocumento;
        this.nivelRequerido = nivelRequerido;
        this.empleado = empleado;
    }

    @Override
    public void mostrar() {
        if (empleado.getNivelAcceso() >= nivelRequerido) {
            System.out.println("Acceso concedido a " + empleado.getNombre());
            if (documentoReal == null) {
                documentoReal = new DocumentoReal(nombreDocumento);
            }
            documentoReal.mostrar();
        } else {
            System.out.println("Acceso denegado a " + empleado.getNombre() + " para el documento: " + nombreDocumento);
            registrarIntentoFallido();
        }
    }

    public void registrarIntentoFallido() {
        System.out.println("Intento de acceso fallido registrado para: " + empleado.getNombre());
    }
}
```

## Pregunta 132

**Tipo:** CodeRunner (Java)

**Enunciado:** Eres el desarrollador de una plataforma de streaming de películas similar a Netflix, donde los usuarios pueden ver una amplia variedad de contenidos. Pero, algunos de estos contenidos tienen restricciones de edad. Por ejemplo, ciertas películas pueden ser vistas solo por usuarios mayores de 13, 16 o 18 años, dependiendo de la clasificación de la película. Como parte del desarrollo, se te ha solicitado implementar un sistema que controle el acceso de los usuarios a las películas basándose en su edad, tus compañeros de trabajo ya realizaron parte de la estructura, menos el proxy en sí.

El sistema debe usar el Patrón **Proxy** para diferir la carga de la película hasta que se confirme que el usuario tiene permiso para verla. Si el usuario no cumple con los requisitos de edad, el sistema debe bloquear el acceso y evitar la reproducción de la película.

Tu tarea es tomando en cuenta los componentes ya realizados, dar implementación a la clase `ProxyPelicula`, siguiendo los requerimientos de funcionamiento para la misma, implementando toda su estructura, pero considerando el método: `ver()` el cual es quien realiza el filtro del proxy.

Para el caso de `void ver()`, la salida debe ser `"Acceso permitido a nombreUsuario"` en caso positivo, en caso negativo deberá ser `"Acceso denegado a nombreUsuario . Edad insuficiente para ver la película: tituloPelicula"`:

Tomar en cuenta que, `nombreUsuario` o `tituloPelicula` son valores variables.

### Código base

```java
interface Pelicula {
    void ver();
}

class PeliculaReal implements Pelicula {
    private String titulo;
    private int edadMinima;

    public PeliculaReal(String titulo, int edadMinima) {
        this.titulo = titulo;
        this.edadMinima = edadMinima;
        cargarPelicula();
    }

    private void cargarPelicula() {
        System.out.println("Cargando la película: " + titulo);
    }

    @Override
    public void ver() {
        System.out.println("Reproduciendo la película: " + titulo);
    }

    public int getEdadMinima() {
        return edadMinima;
    }
}

class Usuario {
    private String nombre;
    private int edad;

    public Usuario(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }
}

public class ProxyPelicula implements Pelicula {
    private PeliculaReal peliculaReal;
    private String titulo;
    private int edadMinima;
    private Usuario usuario;
    //Completa la clase, siguiendo la pauta dada, aquí.
}
```

### Prueba

```java
Usuario usuario1 = new Usuario("Juan", 25);
Pelicula pelicula1 = new ProxyPelicula("Película A", 0, usuario1);
pelicula1.ver();
```

```
Cargando la película: Película A
Acceso permitido a Juan
Reproduciendo la película: Película A
```

### Prueba

```java
Usuario usuario2 = new Usuario("Carla", 16);
Pelicula pelicula2 = new ProxyPelicula("Película B", 18, usuario2);
pelicula2.ver();
```

```
Acceso denegado a Carla. Edad insuficiente para ver la película: Película B
```

### Prueba

```java
Usuario usuario3 = new Usuario("Pedro", 18);
Pelicula pelicula3 = new ProxyPelicula("Película C", 18, usuario3);
pelicula3.ver();
```

```
Cargando la película: Película C
Acceso permitido a Pedro
Reproduciendo la película: Película C
```

### Solución

```java
interface Pelicula {
    void ver();
}

class PeliculaReal implements Pelicula {
    private String titulo;
    private int edadMinima;

    public PeliculaReal(String titulo, int edadMinima) {
        this.titulo = titulo;
        this.edadMinima = edadMinima;
        cargarPelicula();
    }

    private void cargarPelicula() {
        System.out.println("Cargando la película: " + titulo);
    }

    @Override
    public void ver() {
        System.out.println("Reproduciendo la película: " + titulo);
    }

    public int getEdadMinima() {
        return edadMinima;
    }
}

class Usuario {
    private String nombre;
    private int edad;

    public Usuario(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }
}

public class ProxyPelicula implements Pelicula {
    private PeliculaReal peliculaReal;
    private String titulo;
    private int edadMinima;
    private Usuario usuario;

    public ProxyPelicula(String titulo, int edadMinima, Usuario usuario) {
        this.titulo = titulo;
        this.edadMinima = edadMinima;
        this.usuario = usuario;
    }

    @Override
    public void ver() {
        if (usuario.getEdad() >= edadMinima) {
            if (peliculaReal == null) {
                peliculaReal = new PeliculaReal(titulo, edadMinima);
            }
            System.out.println("Acceso permitido a " + usuario.getNombre());
            peliculaReal.ver();
        } else {
            System.out.println("Acceso denegado a " + usuario.getNombre() + ". Edad insuficiente para ver la película: " + titulo);
        }
    }
}
```

## Pregunta 133

**Tipo:** CodeRunner (Java)

**Enunciado:** Estás desarrollando una aplicación de gestión de empleados para una pequeña empresa que necesita almacenar y manipular información sobre sus empleados. Para mantener el sistema modular y fácil de mantener, utilizarás el Patrón **DAO** (Data Access Object). Este patrón te ayudará a separar la lógica de acceso a datos de la lógica de negocio de la aplicación, permitiendo que los cambios en la fuente de datos (por ejemplo, cambiar de una base de datos a un archivo de texto) no afecten a la lógica de negocio.

**Consideraciones**

- **Interfaz `EmpleadoDAO`:** se tiene una interfaz `EmpleadoDAO` que declara los métodos necesarios para interactuar con los datos de los empleados:
  - `List<Empleado> obtenerTodosLosEmpleados()`: devuelve una lista con todos los empleados.
  - `Empleado obtenerEmpleadoPorId(int id)`: devuelve un empleado específico basado en su ID.
  - `void agregarEmpleado(Empleado empleado)`: añade un nuevo empleado a la base de datos.
  - `void actualizarEmpleado(Empleado empleado)`: actualiza la información de un empleado existente.
  - `void eliminarEmpleado(int id)`: elimina un empleado de la base de datos basado en su ID.
- **Clase `Empleado`:** se tiene una clase `Empleado` que representa a un empleado en la aplicación:
  - `int id`: identificador único del empleado.
  - `String nombre`: nombre del empleado.
  - `String cargo`: cargo del empleado en la empresa.
  - `double salario`: salario del empleado.

Debes completar la clase `EmpleadoDAOImpl`: implementa la interfaz `EmpleadoDAO` en una clase llamada `EmpleadoDAOImpl`. Esta implementación debe simular una base de datos utilizando una lista interna (atributo de tipo `List<Empleado>`). Los métodos deben realizar las siguientes operaciones:

- `List<Empleado> obtenerTodosLosEmpleados()`: retorna la lista completa de empleados almacenados.
- `Empleado obtenerEmpleadoPorId(int id)`: busca y retorna el empleado cuyo ID coincida con el proporcionado.
- `void agregarEmpleado(Empleado empleado)`: añade un nuevo empleado a la lista.
- `void actualizarEmpleado(Empleado empleado)`: busca un empleado por su ID y actualiza sus datos con la información proporcionada.
- `void eliminarEmpleado(int id)`: busca y elimina un empleado de la lista basado en su ID.

### Código base

```java
import java.util.ArrayList;
import java.util.List;

interface EmpleadoDAO {
    List<Empleado> obtenerTodosLosEmpleados();
    Empleado obtenerEmpleadoPorId(int id);
    void agregarEmpleado(Empleado empleado);
    void actualizarEmpleado(Empleado empleado);
    void eliminarEmpleado(int id);
}

class Empleado {
    private int id;
    private String nombre;
    private String cargo;
    private double salario;

    // Constructor
    public Empleado(int id, String nombre, String cargo, double salario) {
        this.id = id;
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
    }

    // Getters y Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    @Override
    public String toString() {
        return "Empleado{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", cargo='" + cargo + '\'' +
                ", salario=" + salario +
                '}';
    }
}

public class EmpleadoDAOImpl implements EmpleadoDAO {
    //Completa la clase, siguiendo la pauta dada, aquí.
}
```

### Prueba

```java
EmpleadoDAO dao = new EmpleadoDAOImpl();
Empleado empleado = new Empleado(4, "Carlos Ruiz", "Diseñador", 40000);
dao.agregarEmpleado(empleado);
List<Empleado> empleados = dao.obtenerTodosLosEmpleados();
boolean empleadoAgregado = empleados.contains(empleado);
System.out.println("Empleado agregado correctamente: " + empleadoAgregado);
```

```
Empleado agregado correctamente: true
```

### Prueba

```java
EmpleadoDAO dao = new EmpleadoDAOImpl();
Empleado empleado = new Empleado(6, "Pedro Díaz", "Programador", 55000);
dao.agregarEmpleado(empleado);
Empleado empleadoActualizado = new Empleado(6, "Pedro Díaz", "Programador Senior", 60000);
dao.actualizarEmpleado(empleadoActualizado);
Empleado empleadoObtenido = dao.obtenerEmpleadoPorId(6);
boolean salarioActualizado = empleadoObtenido.getSalario() == 60000;
System.out.println("Empleado actualizado correctamente: " + salarioActualizado);
```

```
Empleado actualizado correctamente: true
```

### Prueba

```java
EmpleadoDAO dao = new EmpleadoDAOImpl();
Empleado empleado = new Empleado(7, "Ana Gómez", "Auxiliar", 30000);
dao.agregarEmpleado(empleado);
dao.eliminarEmpleado(7);
Empleado empleadoObtenido = dao.obtenerEmpleadoPorId(7);
boolean empleadoEliminado = empleadoObtenido == null;
System.out.println("Empleado eliminado correctamente: " + empleadoEliminado);
```

```
Empleado eliminado correctamente: true
```

### Solución

```java
import java.util.ArrayList;
import java.util.List;

interface EmpleadoDAO {
    List<Empleado> obtenerTodosLosEmpleados();
    Empleado obtenerEmpleadoPorId(int id);
    void agregarEmpleado(Empleado empleado);
    void actualizarEmpleado(Empleado empleado);
    void eliminarEmpleado(int id);
}

class Empleado {
    private int id;
    private String nombre;
    private String cargo;
    private double salario;

    // Constructor
    public Empleado(int id, String nombre, String cargo, double salario) {
        this.id = id;
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
    }

    // Getters y Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    @Override
    public String toString() {
        return "Empleado{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", cargo='" + cargo + '\'' +
                ", salario=" + salario +
                '}';
    }
}

public class EmpleadoDAOImpl implements EmpleadoDAO {
    private List<Empleado> empleados = new ArrayList<>();

    @Override
    public List<Empleado> obtenerTodosLosEmpleados() {
        return empleados;
    }

    @Override
    public Empleado obtenerEmpleadoPorId(int id) {
        for (Empleado e : empleados) {
            if (e.getId() == id) {
                return e;
            }
        }
        return null;
    }

    @Override
    public void agregarEmpleado(Empleado empleado) {
        empleados.add(empleado);
    }

    @Override
    public void actualizarEmpleado(Empleado empleado) {
        for (int i = 0; i < empleados.size(); i++) {
            if (empleados.get(i).getId() == empleado.getId()) {
                empleados.set(i, empleado);
                return;
            }
        }
    }

    @Override
    public void eliminarEmpleado(int id) {
        for (int i = 0; i < empleados.size(); i++) {
            if (empleados.get(i).getId() == id) {
                empleados.remove(i);
                return;
            }
        }
    }
}
```

## Pregunta 134

**Tipo:** CodeRunner (Java)

**Enunciado:** Imagina que estás desarrollando un sistema para gestionar una biblioteca en una aplicación de software. El sistema debe ser capaz de manejar una colección de libros y realizar operaciones básicas como agregar, consultar, actualizar y eliminar libros. Para lograr esto de manera eficiente y organizada, se utilizará el Patrón **DAO** (Data Access Object). El patrón DAO ayuda a separar la lógica de acceso a datos de la lógica de negocio, promoviendo una arquitectura más limpia y mantenible.

**Consideraciones**

- **`Libro`:** se tiene la clase `Libro` que representa un libro en la biblioteca. Cada libro tiene un identificador único (`id`), un título (`titulo`), un autor (`autor`) y un año de publicación (`anioPublicacion`).
- **`LibroDAO`:** se tiene una interfaz `LibroDAO` que declara los métodos necesarios para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la entidad `Libro`.

Debes completar la clase `LibroDAOImpl`: implementa la interfaz `LibroDAO` en una clase llamada `LibroDAOImpl`. Esta implementación debe simular una base de datos utilizando una lista interna (atributo de tipo `List<Libro>`). Los métodos deben realizar las siguientes operaciones:

- `List<Libro> obtenerTodosLosLibros()`: retorna la lista completa de libros almacenados.
- `Libro obtenerLibroPorId(int id)`: busca y retorna el libro cuyo ID coincida con el proporcionado.
- `void agregarLibro(Libro libro)`: añade un nuevo libro a la lista. Si ya existe un libro con el mismo ID, debe actualizarse.
- `void actualizarLibro(Libro libro)`: busca un libro por su ID y actualiza sus datos con la información proporcionada.
- `void eliminarLibro(int id)`: busca y elimina un libro de la lista basado en su ID.

### Código base

```java
import java.util.ArrayList;
import java.util.List;

class Libro {
    private int id;
    private String titulo;
    private String autor;
    private int anioPublicacion;

    public Libro(int id, String titulo, String autor, int anioPublicacion) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }

    // Getters y setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public int getAnioPublicacion() {
        return anioPublicacion;
    }

    public void setAnioPublicacion(int anioPublicacion) {
        this.anioPublicacion = anioPublicacion;
    }

    @Override
    public String toString() {
        return "Libro{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", autor='" + autor + '\'' +
                ", anioPublicacion=" + anioPublicacion +
                '}';
    }
}

interface LibroDAO {
    void agregarLibro(Libro libro);
    Libro obtenerLibroPorId(int id);
    void actualizarLibro(Libro libro);
    void eliminarLibro(int id);
    List<Libro> obtenerTodosLosLibros();
}

public class LibroDAOImpl implements LibroDAO {
//Completa la clase, siguiendo la pauta dada, aquí.
}
```

### Prueba

```java
LibroDAO dao = new LibroDAOImpl();
Libro libro1 = new Libro(1, "Cien Años de Soledad", "Gabriel García Márquez", 1967);
dao.agregarLibro(libro1);
List<Libro> libros = dao.obtenerTodosLosLibros();
System.out.println("Número de libros después de agregar uno: " + libros.size());
```

```
Número de libros después de agregar uno: 1
```

### Prueba

```java
LibroDAO dao = new LibroDAOImpl();
Libro libroNoExistente = new Libro(99, "Libro No Existente", "Autor Desconocido", 2024);
dao.actualizarLibro(libroNoExistente);
Libro libroObtenido = dao.obtenerLibroPorId(99);
System.out.println("Libro obtenido con ID 99: " + libroObtenido);
```

```
Libro obtenido con ID 99: Libro{id=99, titulo='Libro No Existente', autor='Autor Desconocido', anioPublicacion=2024}
```

### Prueba

```java
LibroDAO dao = new LibroDAOImpl();
Libro libro1 = new Libro(1, "Cien Años de Soledad", "Gabriel García Márquez", 1967);
dao.agregarLibro(libro1);
Libro libroNuevo = new Libro(1, "El Otoño del Patriarca", "Gabriel García Márquez", 1975);
dao.agregarLibro(libroNuevo);
Libro libroObtenido = dao.obtenerLibroPorId(1);
System.out.println("Título del libro con ID 1 después de actualizar: " + libroObtenido.getTitulo());
```

```
Título del libro con ID 1 después de actualizar: El Otoño del Patriarca
```

### Prueba

```java
LibroDAO dao = new LibroDAOImpl();
dao.agregarLibro(new Libro(1, "Cien Años de Soledad", "Gabriel García Márquez", 1967));
dao.agregarLibro(new Libro(2, "Rayuela", "Julio Cortázar", 1963));
dao.eliminarLibro(1);
System.out.println("Número de libros después de eliminar uno: " + dao.obtenerTodosLosLibros().size());
System.out.println("Libro con ID 1 después de eliminar: " + dao.obtenerLibroPorId(1));
```

```
Número de libros después de eliminar uno: 1
Libro con ID 1 después de eliminar: null
```

### Solución

```java
import java.util.ArrayList;
import java.util.List;

class Libro {
    private int id;
    private String titulo;
    private String autor;
    private int anioPublicacion;

    public Libro(int id, String titulo, String autor, int anioPublicacion) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }

    // Getters y setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public int getAnioPublicacion() {
        return anioPublicacion;
    }

    public void setAnioPublicacion(int anioPublicacion) {
        this.anioPublicacion = anioPublicacion;
    }

    @Override
    public String toString() {
        return "Libro{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", autor='" + autor + '\'' +
                ", anioPublicacion=" + anioPublicacion +
                '}';
    }
}

interface LibroDAO {
    void agregarLibro(Libro libro);
    Libro obtenerLibroPorId(int id);
    void actualizarLibro(Libro libro);
    void eliminarLibro(int id);
    List<Libro> obtenerTodosLosLibros();
}

public class LibroDAOImpl implements LibroDAO {
    private List<Libro> libros = new ArrayList<>();

    @Override
    public void agregarLibro(Libro libro) {
        for (int i = 0; i < libros.size(); i++) {
            if (libros.get(i).getId() == libro.getId()) {
                libros.set(i, libro);
                return;
            }
        }
        libros.add(libro);
    }

    @Override
    public Libro obtenerLibroPorId(int id) {
        for (Libro l : libros) {
            if (l.getId() == id) {
                return l;
            }
        }
        return null;
    }

    @Override
    public void actualizarLibro(Libro libro) {
        for (int i = 0; i < libros.size(); i++) {
            if (libros.get(i).getId() == libro.getId()) {
                libros.set(i, libro);
                return;
            }
        }
        libros.add(libro);
    }

    @Override
    public void eliminarLibro(int id) {
        for (int i = 0; i < libros.size(); i++) {
            if (libros.get(i).getId() == id) {
                libros.remove(i);
                return;
            }
        }
    }

    @Override
    public List<Libro> obtenerTodosLosLibros() {
        return libros;
    }
}
```

## Pregunta 135

**Enunciado:** ¿Cómo afecta el patrón Facade a la evolución de un sistema a largo plazo?

- a. Mejora la evolución eliminando la necesidad de actualizar los subsistemas
- b. Impide la evolución de los subsistemas debido a la centralización
- ✅ c. Facilita la evolución al centralizar las interacciones y desacoplar clientes de los subsistemas
- d. Dificulta la evolución del sistema al encapsular demasiada funcionalidad

## Pregunta 136

**Enunciado:** ¿Cómo ayuda el patrón Facade a mejorar el mantenimiento de un sistema?

- a. Al aumentar la cantidad de código cliente que accede a los subsistemas
- ✅ b. Al centralizar las interacciones comunes en un único lugar
- c. Al reducir la necesidad de actualizaciones en los subsistemas
- d. Al permitir que todos los subsistemas sean reemplazados sin modificar la interfaz

## Pregunta 137

**Enunciado:** ¿Cómo facilita el patrón DAO las pruebas unitarias en una aplicación?

- ✅ a. Facilita la prueba de la lógica de negocio al desacoplarla del acceso a los datos.
- b. Permite la reutilización del código en múltiples módulos de la aplicación.
- c. Permite probar toda la aplicación como una unidad.
- d. Simplifica la gestión de conexiones a la base de datos durante las pruebas.

## Pregunta 138

**Enunciado:** ¿Cómo mejora el rendimiento el Patrón Proxy cuando se utiliza un Proxy Virtual?

- a. Al ejecutar operaciones en paralelo en objetos remotos.
- ✅ b. Al retrasar la creación del objeto hasta que realmente se necesite, evitando operaciones innecesarias.
- c. Al permitir acceso remoto sin la necesidad de replicar el objeto.
- d. Al proporcionar múltiples niveles de acceso basados en permisos de usuario.

## Pregunta 139

**Enunciado:** ¿Cómo se desacopla a los clientes de los subsistemas en el patrón Facade?

- a. Al proporcionar a los clientes múltiples interfaces de acceso a los subsistemas
- b. Al permitir que los clientes accedan directamente a los métodos internos
- ✅ c. Al interponer una interfaz unificada que maneja las interacciones con los subsistemas
- d. Al evitar que los clientes interactúen con los subsistemas por completo

## Pregunta 140

**Enunciado:** ¿Cuál de las siguientes es una desventaja potencial del Patrón Proxy?

- ✅ a. Introduce sobrecarga innecesaria si no se utiliza adecuadamente.
- b. Disminuye la flexibilidad en el diseño del sistema.
- c. Aumenta la complejidad de las pruebas unitarias debido a la naturaleza abstracta del patrón.
- d. Limita la cantidad de objetos que pueden ser utilizados dentro del sistema.

## Pregunta 141

**Enunciado:** ¿Cuál de las siguientes es una ventaja clave del patrón Facade en el envío de correos electrónicos?

- a. Proporciona acceso directo a la configuración del servidor SMTP
- ✅ b. Oculta la complejidad de la configuración de JavaMail a través de una interfaz simplificada
- c. Mejora la velocidad de envío de correos
- d. Permite a los usuarios modificar el código interno de la API JavaMail

## Pregunta 142

**Enunciado:** ¿Cuál de las siguientes es una ventaja del patrón DAO?

- a. Elimina la necesidad de utilizar bases de datos relacionales.
- ✅ b. Permite cambiar la fuente de datos sin modificar la lógica de negocio.
- c. Facilita la creación de conexiones a la base de datos sin código adicional.
- d. Permite cambiar la fuente de datos sin modificar la lógica de acceso a datos.

## Pregunta 143

**Enunciado:** ¿Cuál de las siguientes es una ventaja del Patrón Proxy en términos de desacoplamiento?

- a. Reduce la cantidad de clases necesarias en el sistema.
- ✅ b. Permite cambiar la implementación interna del objeto real sin afectar al cliente.
- c. Elimina la necesidad de definir interfaces para los objetos.
- d. Facilita la ejecución de operaciones concurrentes en el cliente.

## Pregunta 144

**Enunciado:** ¿Cuál de los siguientes casos sería un uso típico de un Proxy de Registro?

- a. Representar objetos en memoria que se encuentran en otro servidor.
- b. Controlar quién puede acceder a ciertos recursos dentro de un sistema de autenticación.
- c. Aplazar la creación de objetos costosos hasta que sean necesarios.
- ✅ d. Auditar las operaciones realizadas sobre un objeto para monitorear su uso.

## Pregunta 145

**Enunciado:** ¿Cuál de los siguientes escenarios se beneficiaría más de un patrón Facade?

- ✅ a. Un sistema distribuido que requiere múltiples configuraciones en varios subsistemas
- b. Un sistema monolítico con pocas interacciones internas
- c. Un sistema de base de datos simple con consultas directas
- d. Una aplicación web estática con pocos componentes

## Pregunta 146

**Enunciado:** ¿Cuál de los siguientes no es un beneficio del patrón Facade?

- a. Facilitar el mantenimiento del sistema
- b. Simplificar la interacción con subsistemas
- ✅ c. Aumentar la complejidad del sistema
- d. Desacoplar clientes y subsistemas

## Pregunta 147

**Enunciado:** ¿Cuál de los siguientes no es un tipo de Proxy?

- a. Proxy Caché.
- b. Proxy Virtual.
- ✅ c. Proxy de Monitoreo.
- d. Proxy de Protección.

## Pregunta 148

**Enunciado:** ¿Cuál es el principal propósito del Patrón Proxy?

- a. Reducir el tamaño del código fuente.
- b. Simplificar la interfaz gráfica de usuario.
- ✅ c. Proporcionar un objeto que controle el acceso a otro y permita añadir funcionalidades adicionales.
- d. Facilitar el manejo de excepciones.

## Pregunta 149

**Enunciado:** ¿Cuál es el propósito principal del patrón Facade?

- a. Aumentar la seguridad de los sistemas mediante encapsulación
- b. Mejorar el rendimiento de las operaciones en sistemas
- c. Crear nuevas funcionalidades para los clientes
- ✅ d. Facilitar el uso de sistemas complejos a través de una interfaz simplificada

## Pregunta 150

**Enunciado:** ¿Cuál es la función principal del patrón DAO en una aplicación?

- a. Simplificar el código SQL dentro de la lógica de negocio.
- b. Gestionar la creación y eliminación de objetos en memoria.
- ✅ c. Abstraer y encapsular la lógica de acceso a datos, separándola de la lógica de negocio.
- d. Proveer una conexión directa entre la lógica de negocio y la base de datos.

## Pregunta 151

**Enunciado:** ¿Cuál es la principal diferencia entre un sistema que utiliza Facade y uno que no lo utiliza?

- ✅ a. El sistema con Facade ofrece una interfaz simplificada mientras que el otro no
- b. El sistema sin Facade no puede realizar las mismas operaciones que uno con Facade
- c. El sistema sin Facade tiene una mejor estructura de código
- d. El sistema con Facade es más rápido que el sistema sin Facade

## Pregunta 152

**Enunciado:** ¿Cuál es una de las principales ventajas de usar el patrón Facade?

- ✅ a. Reduce la dependencia entre clientes y subsistemas
- b. Permite a los clientes acceder directamente a los detalles de implementación
- c. Garantiza que el sistema nunca tendrá problemas de rendimiento
- d. Mejora el uso de memoria en grandes sistemas

## Pregunta 153

**Enunciado:** ¿Cuál es una de las ventajas de utilizar PreparedStatement frente a Statement en Java?

- a. Permite la inserción automática de registros sin necesidad de especificar consultas SQL.
- b. Mejora el rendimiento al no necesitar parámetros en las consultas.
- ✅ c. Evita la inyección de SQL al utilizar parámetros en lugar de concatenación de cadenas.
- d. Facilita la creación automática de tablas dentro de la base de datos.

## Pregunta 154

**Enunciado:** En el contexto del patrón DAO, ¿cuál es el propósito de la clase Service?

- a. Crear las conexiones a la base de datos para el DAO.
- ✅ b. Gestionar la lógica de negocio mientras delega el acceso a datos al DAO.
- c. Actuar como un intermediario entre el DAO y la base de datos.
- d. Ejecutar operaciones CRUD directamente sobre la base de datos.

## Pregunta 155

**Enunciado:** ¿En qué situación sería inapropiado utilizar un Proxy Virtual?

- a. Cuando el objeto está en un servidor remoto.
- ✅ b. Cuando la creación del objeto es rápida y sencilla.
- c. Cuando se necesita controlar el acceso a un objeto según los permisos de usuario.
- d. Cuando se requiere monitorear y auditar las operaciones realizadas sobre un objeto.

## Pregunta 156

**Enunciado:** ¿En qué situación sería más adecuado utilizar un Proxy Virtual?

- a. Cuando es necesario auditar el acceso a un objeto.
- b. Cuando se quiere restringir el acceso a un objeto según los permisos del usuario.
- c. Cuando el objeto reside en un servidor remoto y se necesita acceder a él.
- ✅ d. Cuando la creación de un objeto es costosa y queremos retrasarla hasta que sea necesaria.

## Pregunta 157

**Enunciado:** ¿En qué tipo de sistema es más comúnmente útil aplicar el patrón Facade?

- a. En sistemas distribuidos de pequeña escala
- ✅ b. En sistemas complejos con múltiples subsistemas
- c. En sistemas que ya tienen interfaces fáciles de usar
- d. En sistemas que no interactúan entre sí

## Pregunta 158

**Enunciado:** ¿Por qué es importante que PreparedStatement compile consultas SQL solo una vez?

- a. Facilita la creación de bases de datos relacionales desde el código.
- b. Reduce el uso de memoria al ejecutar consultas múltiples.
- ✅ c. Permite que las consultas se ejecuten más rápido cuando se reutilizan.
- d. Mejora la seguridad del sistema frente a usuarios no autorizados.

## Pregunta 159

**Enunciado:** ¿Qué aspecto clave diferencia al patrón DAO cuando se implementa usando JDBC en comparación con una implementación en memoria?

- ✅ a. En JDBC, el DAO interactúa directamente con la base de datos a través de consultas SQL.
- b. La implementación con JDBC omite el uso de PreparedStatement para mejorar el rendimiento.
- c. En JDBC, el patrón DAO almacena los objetos en una lista en memoria.
- d. La implementación con JDBC no requiere una capa de servicio adicional.

## Pregunta 160

**Enunciado:** ¿Qué característica define mejor al Proxy Remoto?

- a. Almacena en caché los resultados de operaciones costosas.
- b. Aplaza la creación de un objeto hasta que se necesite.
- c. Audita las operaciones realizadas sobre un objeto.
- ✅ d. Representa un objeto que reside en un servidor remoto.

## Pregunta 161

**Enunciado:** ¿Qué podría ser una desventaja de usar el patrón Facade en un sistema?

- a. Reducción de la seguridad del sistema
- b. Dificultad para añadir nuevas funcionalidades
- c. Aumento de la complejidad del código cliente
- ✅ d. Limitación de acceso a funciones específicas de los subsistemas

## Pregunta 162

**Enunciado:** ¿Qué responsabilidad tiene un DAO respecto a la fuente de datos?

- a. Crear la lógica de negocio necesaria para interactuar con los datos.
- ✅ b. Abstraer las operaciones CRUD para que la lógica de negocio no dependa de la fuente de datos.
- c. Controlar el almacenamiento físico de los datos en la aplicación.
- d. Mantener una copia de los datos en memoria para evitar acceso a la base de datos.

## Pregunta 163

**Enunciado:** ¿Qué tipo de Proxy es más adecuado cuando se necesita gestionar el acceso a recursos sensibles según los permisos del usuario?

- ✅ a. Proxy de Protección.
- b. Proxy Caché.
- c. Proxy Virtual.
- d. Proxy de Registro.

## Pregunta 164

**Enunciado:** ¿Qué ventaja específica ofrece el uso de un Proxy Caché?

- a. Reduce la complejidad del sistema eliminando la necesidad de acceso remoto.
- ✅ b. Mejora el rendimiento almacenando los resultados de operaciones costosas.
- c. Ayuda a registrar el acceso a un objeto para auditarlo posteriormente.
- d. Proporciona diferentes niveles de permisos de acceso a un objeto.

## Pregunta 165

**Enunciado:** ¿Qué ventaja NO es proporcionada por el uso del patrón DAO en el acceso a datos?

- a. Desacopla la lógica de negocio del almacenamiento de datos.
- b. Mejor rendimiento al gestionar consultas.
- ✅ c. Elimina la necesidad de una capa de servicio adicional en la aplicación.
- d. Facilita la integración de diferentes fuentes de datos sin modificar la lógica de negocio.

## Pregunta 166

**Tipo:** CodeRunner (Java)

**Enunciado:** En muchos sistemas de monitoreo y control, es crucial mantener a diferentes partes del sistema informadas sobre cambios en datos críticos, como la temperatura. Por ejemplo, en un sistema de climatización industrial, puede ser necesario mostrar la temperatura actual en una interfaz de usuario y, al mismo tiempo, emitir una alerta si la temperatura supera un límite seguro. Para este ejercicito te vamos a solicitar implementar un sistema de notificación de temperatura utilizando el Patrón **Observer**, que proporciona una forma eficiente y escalable de manejar estas actualizaciones.

La idea es utilizar el Patrón para diseñar un sistema que monitoree la temperatura y notifique a distintos componentes del sistema cuando la temperatura cambia. Este patrón nos permite que los componentes observadores se actualicen automáticamente en respuesta a los cambios del sujeto, en este caso, un sensor de temperatura.

**Se debe implementar**

- **Interfaz `Observador`:** define el método `actualizar(float temperatura)` que debe ser implementado por todos los observadores. Este método se invoca cuando el sujeto notifica un cambio.
- **Interfaz `Sujeto`:** define los métodos `agregarObservador(Observador observador)`, `eliminarObservador(Observador observador)` y `notificarObservadores()` para gestionar los observadores.
- **Clase `SensorTemperatura`:** implementa `Sujeto` y mantiene una lista de observadores (atributo), así como la temperatura en `float` (atributo).
  - El método `setTemperatura(float temperatura)` actualiza la temperatura y llama a `notificarObservadores()` para informar a todos los observadores sobre el cambio.
  - `getTemperatura()` devuelve la temperatura actual.
  - Se debe dar implementación a todos los métodos de `Sujeto`.

**Se tiene ya realizado**

- **Clase `PantallaTemperatura`:** implementa `Observador` y muestra la temperatura actual cuando recibe una notificación.
- **Clase `AlertaTemperatura`:** implementa `Observador` y emite una alerta si la temperatura supera un umbral definido al recibir una notificación.

### Código base

```java
import java.util.ArrayList;
import java.util.List;

interface Observador {
//Completa la interface, siguiendo la pauta dada, aquí.
}

interface Sujeto {
//Completa la interface, siguiendo la pauta dada, aquí.
}

class SensorTemperatura implements Sujeto {
//Completa la clase, siguiendo la pauta dada, aquí.
}

class PantallaTemperatura implements Observador {
    @Override
    public void actualizar(float temperatura) {
        System.out.println("Pantalla de Temperatura: La temperatura actual es " + temperatura + "°C");
    }
}

class AlertaTemperatura implements Observador {
    private float umbral;

    public AlertaTemperatura(float umbral) {
        this.umbral = umbral;
    }

    @Override
    public void actualizar(float temperatura) {
        if (temperatura > umbral) {
            System.out.println("Alerta de Temperatura: ¡La temperatura excede el umbral! La temperatura actual es " + temperatura + "°C");
        }
    }
}
```

### Prueba

```java
SensorTemperatura sensor = new SensorTemperatura();
PantallaTemperatura pantalla = new PantallaTemperatura();
sensor.agregarObservador(pantalla);
System.out.println("Configurando temperatura a 20°C...");
sensor.setTemperatura(20.0f);
```

```
Configurando temperatura a 20°C...
Pantalla de Temperatura: La temperatura actual es 20.0°C
```

### Prueba

```java
SensorTemperatura sensor = new SensorTemperatura();
PantallaTemperatura pantalla = new PantallaTemperatura();
AlertaTemperatura alerta = new AlertaTemperatura(25.0f);
sensor.agregarObservador(pantalla);
sensor.agregarObservador(alerta);
System.out.println("Configurando temperatura a 30°C...");
sensor.setTemperatura(30.0f);
```

```
Configurando temperatura a 30°C...
Pantalla de Temperatura: La temperatura actual es 30.0°C
Alerta de Temperatura: ¡La temperatura excede el umbral! La temperatura actual es 30.0°C
```

### Prueba

```java
SensorTemperatura sensor = new SensorTemperatura();
PantallaTemperatura pantalla = new PantallaTemperatura();
AlertaTemperatura alerta = new AlertaTemperatura(25.0f);
sensor.agregarObservador(pantalla);
sensor.agregarObservador(alerta);
sensor.eliminarObservador(pantalla);
sensor.setTemperatura(28.5f);
System.out.println("Temperatura registrada: " + sensor.getTemperatura());
```

```
Alerta de Temperatura: ¡La temperatura excede el umbral! La temperatura actual es 28.5°C
Temperatura registrada: 28.5
```

### Solución

```java
import java.util.ArrayList;
import java.util.List;

interface Observador {
    void actualizar(float temperatura);
}

interface Sujeto {
    void agregarObservador(Observador observador);
    void eliminarObservador(Observador observador);
    void notificarObservadores();
}

class SensorTemperatura implements Sujeto {
    private List<Observador> observadores = new ArrayList<>();
    private float temperatura;

    @Override
    public void agregarObservador(Observador observador) {
        observadores.add(observador);
    }

    @Override
    public void eliminarObservador(Observador observador) {
        observadores.remove(observador);
    }

    @Override
    public void notificarObservadores() {
        for (Observador observador : observadores) {
            observador.actualizar(temperatura);
        }
    }

    public void setTemperatura(float temperatura) {
        this.temperatura = temperatura;
        notificarObservadores();
    }

    public float getTemperatura() {
        return temperatura;
    }
}

class PantallaTemperatura implements Observador {
    @Override
    public void actualizar(float temperatura) {
        System.out.println("Pantalla de Temperatura: La temperatura actual es " + temperatura + "°C");
    }
}

class AlertaTemperatura implements Observador {
    private float umbral;

    public AlertaTemperatura(float umbral) {
        this.umbral = umbral;
    }

    @Override
    public void actualizar(float temperatura) {
        if (temperatura > umbral) {
            System.out.println("Alerta de Temperatura: ¡La temperatura excede el umbral! La temperatura actual es " + temperatura + "°C");
        }
    }
}
```

## Pregunta 167

**Tipo:** CodeRunner (Java)

**Enunciado:** Imagina que estás desarrollando un sistema de notificación para un blog. Los usuarios pueden suscribirse a un blog para recibir notificaciones cuando se publiquen nuevos artículos. Bajo esta realidad y para este ejercicio utilizaremos el Patrón **Observer** para gestionar las notificaciones a los suscriptores cuando se publiquen nuevos artículos en el blog. La idea es implementar un sistema donde los usuarios pueden suscribirse a un blog para recibir notificaciones de nuevos artículos. Cuando un nuevo artículo se publica, todos los suscriptores deben ser notificados.

**Se debe implementar**

- **Interfaz `Suscriptor`:** define el método que se llama para notificar al suscriptor (`void notificar(String articulo)`).
- **Clase `Blog`:** actúa como el sujeto, mantiene una lista de suscriptores (atributo), así como el artículo actual (atributo). Permite a los suscriptores registrarse, eliminarse y notifica a todos los suscriptores cuando se publica un nuevo artículo. Define los métodos `agregarSuscriptor(Suscriptor suscriptor)`, `eliminarSuscriptor(Suscriptor suscriptor)`, `publicarArticulo(String articulo)` y `notificarObservadores()` para gestionar los observadores.

**Se tiene**

- **Clase `SuscriptorEmail`:** implementa la interfaz `Suscriptor` y representa un suscriptor que recibe notificaciones por correo electrónico.
- **Clase `SuscriptorSMS`:** implementa la interfaz `Suscriptor` y representa un suscriptor que recibe notificaciones por mensaje de texto.

### Código base

```java
import java.util.ArrayList;
import java.util.List;

interface Suscriptor {
    //Completa la interface, siguiendo la pauta dada, aquí.
}

public class Blog {
    private List<Suscriptor> suscriptores = new ArrayList<>();
    private String articuloActual;

    //Completa la clase, siguiendo la pauta dada, aquí.
}

class SuscriptorEmail implements Suscriptor {
    private String email;

    public SuscriptorEmail(String email) {
        this.email = email;
    }

    @Override
    public void notificar(String articulo) {
        System.out.println("Enviando correo a " + email + ": Nuevo artículo publicado - " + articulo);
    }
}

class SuscriptorSMS implements Suscriptor {
    private String numeroTelefono;

    public SuscriptorSMS(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
    }

    @Override
    public void notificar(String articulo) {
        System.out.println("Enviando SMS a " + numeroTelefono + ": Nuevo artículo publicado - " + articulo);
    }
}
```

### Prueba

```java
Blog blog = new Blog();
SuscriptorEmail suscriptor = new SuscriptorEmail("usuario1@ejemplo.com");
blog.agregarSuscriptor(suscriptor);
blog.publicarArticulo("Introducción a Java");
```

```
Enviando correo a usuario1@ejemplo.com: Nuevo artículo publicado - Introducción a Java
```

### Prueba

```java
Blog blog = new Blog();
SuscriptorEmail suscriptor1 = new SuscriptorEmail("usuario1@ejemplo.com");
SuscriptorEmail suscriptor2 = new SuscriptorEmail("usuario2@ejemplo.com");
blog.agregarSuscriptor(suscriptor1);
blog.agregarSuscriptor(suscriptor2);
blog.publicarArticulo("Patrón Observer en Java");
```

```
Enviando correo a usuario1@ejemplo.com: Nuevo artículo publicado - Patrón Observer en Java
Enviando correo a usuario2@ejemplo.com: Nuevo artículo publicado - Patrón Observer en Java
```

### Prueba

```java
Blog blog = new Blog();
SuscriptorEmail suscriptorEmail = new SuscriptorEmail("usuario1@ejemplo.com");
blog.agregarSuscriptor(suscriptorEmail);
blog.eliminarSuscriptor(suscriptorEmail);
blog.publicarArticulo("Programación Funcional en Java");
```

```
```

### Solución

```java
import java.util.ArrayList;
import java.util.List;

interface Suscriptor {
    void notificar(String articulo);
}

public class Blog {
    private List<Suscriptor> suscriptores = new ArrayList<>();
    private String articuloActual;

    public void agregarSuscriptor(Suscriptor suscriptor) {
        suscriptores.add(suscriptor);
    }

    public void eliminarSuscriptor(Suscriptor suscriptor) {
        suscriptores.remove(suscriptor);
    }

    public void publicarArticulo(String articulo) {
        this.articuloActual = articulo;
        notificarObservadores();
    }

    public void notificarObservadores() {
        for (Suscriptor suscriptor : suscriptores) {
            suscriptor.notificar(articuloActual);
        }
    }
}

class SuscriptorEmail implements Suscriptor {
    private String email;

    public SuscriptorEmail(String email) {
        this.email = email;
    }

    @Override
    public void notificar(String articulo) {
        System.out.println("Enviando correo a " + email + ": Nuevo artículo publicado - " + articulo);
    }
}

class SuscriptorSMS implements Suscriptor {
    private String numeroTelefono;

    public SuscriptorSMS(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
    }

    @Override
    public void notificar(String articulo) {
        System.out.println("Enviando SMS a " + numeroTelefono + ": Nuevo artículo publicado - " + articulo);
    }
}
```

## Pregunta 168

**Tipo:** CodeRunner (Java)

**Enunciado:** Imagina que trabajas en una empresa que gestiona una gran cadena de tiendas. Como parte del equipo de desarrollo de sistemas, se te ha encargado implementar un sistema de monitoreo de inventario que mantenga informados a varios departamentos de la tienda sobre cualquier actualización en los productos. Para garantizar que todos los actores relevantes reciban la información correcta en tiempo real, se debe implementar este sistema utilizando el Patrón **Observer**.

El Patrón Observer permitirá que el `Inventario` (el sujeto observado) notifique automáticamente a una serie de suscriptores (observadores) cada vez que ocurra una actualización en el stock de un producto. Esto evitará que los diferentes departamentos tengan que consultar manualmente el sistema para verificar los cambios.

Los tipos de notificaciones (suscriptores) que se deben implementar son:

- **Notificación por Correo Electrónico:** envía un correo al administrador de la tienda cuando un producto se actualiza.
- **Notificación por SMS:** envía un mensaje SMS a los gerentes sobre los cambios en el stock.
- **Notificación en Pantalla de la Tienda:** muestra un mensaje en las pantallas dentro de la tienda para que el personal esté al tanto.
- **Notificación de Alerta de Stock Bajo:** dispara una alerta cuando un producto tiene menos de 5 unidades en stock.
- **Notificación de Reporte de Inventario:** genera un reporte que documenta cada actualización en el inventario para su posterior análisis.

**Se debe implementar**

**Clase `Inventario` (Sujeto)**

La clase `Inventario` actúa como el sujeto en el Patrón Observer:

- **Atributos:**
  - `List<Notificacion>`: lista de observadores suscritos.
  - `List<Producto>`: mapa de productos y sus cantidades en stock.
- **Métodos:**
  - `void agregarProducto(Producto producto)`: agrega un producto al inventario y notifica a los suscriptores. Llama al método notificar después de agregar el producto.
  - `void actualizarProducto(String nombre, int nuevaCantidad)`: actualiza la cantidad de un producto y notifica a los suscriptores. Llama al método notificar después de actualizar el producto.
  - `void agregarSuscriptor(Notificacion suscriptor)`: agrega un suscriptor a la lista de notificaciones.
  - `void eliminarSuscriptor(Notificacion suscriptor)`: elimina un suscriptor de la lista de notificaciones.
  - `private void notificar(Producto producto)`: recorre la lista de suscriptores y llama al método `actualizar` en cada uno de ellos para informarles sobre el cambio en el producto.

**Interfaz `Notificacion` (Observador)**

La interfaz `Notificacion` define el contrato para los suscriptores (observadores). Cualquier clase que implemente esta interfaz debe proporcionar su propia implementación del método `actualizar()`.

Se tiene ya realizado todos los observers específicos.

### Código base

```java
import java.util.ArrayList;
import java.util.List;

interface Notificacion {
//Completa la interface, siguiendo la pauta dada, aquí.
}

class Producto {
    private String nombre;
    private int cantidad;

    public Producto(String nombre, int cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

    public String getNombre() {
        return nombre;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
}

public class Inventario {
//Completa la clase, siguiendo la pauta dada, aquí.
}

class NotificacionCorreo implements Notificacion {
    private String email;

    public NotificacionCorreo(String email) {
        this.email = email;
    }

    @Override
    public void actualizar(Producto producto) {
        System.out.println("Enviando correo a " + email + ": El producto " + producto.getNombre() +
                " tiene una nueva cantidad de " + producto.getCantidad() + " unidades.");
    }
}

class NotificacionSMS implements Notificacion {
    private String numeroTelefono;

    public NotificacionSMS(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
    }

    @Override
    public void actualizar(Producto producto) {
        System.out.println("Enviando SMS a " + numeroTelefono + ": El producto " + producto.getNombre() +
                " tiene una nueva cantidad de " + producto.getCantidad() + " unidades.");
    }
}

class NotificacionPantallaTienda implements Notificacion {
    @Override
    public void actualizar(Producto producto) {
        System.out.println("Pantalla tienda: El producto " + producto.getNombre() +
                " se ha actualizado con " + producto.getCantidad() + " unidades.");
    }
}

class NotificacionAlertaStockBajo implements Notificacion {
    @Override
    public void actualizar(Producto producto) {
        if (producto.getCantidad() < 5) {
            System.out.println("¡Alerta! El producto " + producto.getNombre() +
                    " tiene un stock bajo de " + producto.getCantidad() + " unidades.");
        }
    }
}

class NotificacionReporte implements Notificacion {
    @Override
    public void actualizar(Producto producto) {
        System.out.println("Generando reporte: Producto " + producto.getNombre() +
                " actualizado a " + producto.getCantidad() + " unidades.");
    }
}
```

### Prueba

```java
Inventario inventario = new Inventario();
NotificacionCorreo correo = new NotificacionCorreo("correo@ejemplo.com");
NotificacionSMS sms = new NotificacionSMS("123456789");
NotificacionPantallaTienda pantalla = new NotificacionPantallaTienda();
NotificacionAlertaStockBajo alertaStock = new NotificacionAlertaStockBajo();
NotificacionReporte reporte = new NotificacionReporte();
inventario.agregarSuscriptor(correo);
inventario.agregarSuscriptor(sms);
inventario.agregarSuscriptor(pantalla);
inventario.agregarSuscriptor(alertaStock);
inventario.agregarSuscriptor(reporte);
Producto producto = new Producto("Café", 10);
inventario.agregarProducto(producto);
```

```
Enviando correo a correo@ejemplo.com: El producto Café tiene una nueva cantidad de 10 unidades.
Enviando SMS a 123456789: El producto Café tiene una nueva cantidad de 10 unidades.
Pantalla tienda: El producto Café se ha actualizado con 10 unidades.
Generando reporte: Producto Café actualizado a 10 unidades.
```

### Prueba

```java
Inventario inventario = new Inventario();
NotificacionAlertaStockBajo alertaStock = new NotificacionAlertaStockBajo();
inventario.agregarSuscriptor(alertaStock);
Producto producto = new Producto("Leche", 10);
inventario.agregarProducto(producto);
inventario.actualizarProducto("Leche", 3);
```

```
¡Alerta! El producto Leche tiene un stock bajo de 3 unidades.
```

### Prueba

```java
Inventario inventario = new Inventario();
NotificacionPantallaTienda pantalla = new NotificacionPantallaTienda();
NotificacionReporte reporte = new NotificacionReporte();
inventario.agregarSuscriptor(pantalla);
inventario.agregarSuscriptor(reporte);
inventario.agregarProducto(new Producto("Pan", 20));
inventario.eliminarSuscriptor(pantalla);
inventario.actualizarProducto("Pan", 15);
```

```
Pantalla tienda: El producto Pan se ha actualizado con 20 unidades.
Generando reporte: Producto Pan actualizado a 20 unidades.
Generando reporte: Producto Pan actualizado a 15 unidades.
```

### Solución

```java
import java.util.ArrayList;
import java.util.List;

interface Notificacion {
    void actualizar(Producto producto);
}

class Producto {
    private String nombre;
    private int cantidad;

    public Producto(String nombre, int cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

    public String getNombre() {
        return nombre;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
}

public class Inventario {
    private List<Notificacion> suscriptores = new ArrayList<>();
    private List<Producto> productos = new ArrayList<>();

    public void agregarProducto(Producto producto) {
        productos.add(producto);
        notificar(producto);
    }

    public void actualizarProducto(String nombre, int nuevaCantidad) {
        for (Producto producto : productos) {
            if (producto.getNombre().equals(nombre)) {
                producto.setCantidad(nuevaCantidad);
                notificar(producto);
                return;
            }
        }
    }

    public void agregarSuscriptor(Notificacion suscriptor) {
        suscriptores.add(suscriptor);
    }

    public void eliminarSuscriptor(Notificacion suscriptor) {
        suscriptores.remove(suscriptor);
    }

    private void notificar(Producto producto) {
        for (Notificacion suscriptor : suscriptores) {
            suscriptor.actualizar(producto);
        }
    }
}

class NotificacionCorreo implements Notificacion {
    private String email;

    public NotificacionCorreo(String email) {
        this.email = email;
    }

    @Override
    public void actualizar(Producto producto) {
        System.out.println("Enviando correo a " + email + ": El producto " + producto.getNombre() +
                " tiene una nueva cantidad de " + producto.getCantidad() + " unidades.");
    }
}

class NotificacionSMS implements Notificacion {
    private String numeroTelefono;

    public NotificacionSMS(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
    }

    @Override
    public void actualizar(Producto producto) {
        System.out.println("Enviando SMS a " + numeroTelefono + ": El producto " + producto.getNombre() +
                " tiene una nueva cantidad de " + producto.getCantidad() + " unidades.");
    }
}

class NotificacionPantallaTienda implements Notificacion {
    @Override
    public void actualizar(Producto producto) {
        System.out.println("Pantalla tienda: El producto " + producto.getNombre() +
                " se ha actualizado con " + producto.getCantidad() + " unidades.");
    }
}

class NotificacionAlertaStockBajo implements Notificacion {
    @Override
    public void actualizar(Producto producto) {
        if (producto.getCantidad() < 5) {
            System.out.println("¡Alerta! El producto " + producto.getNombre() +
                    " tiene un stock bajo de " + producto.getCantidad() + " unidades.");
        }
    }
}

class NotificacionReporte implements Notificacion {
    @Override
    public void actualizar(Producto producto) {
        System.out.println("Generando reporte: Producto " + producto.getNombre() +
                " actualizado a " + producto.getCantidad() + " unidades.");
    }
}
```

## Pregunta 169

**Tipo:** CodeRunner (Java)

**Enunciado:** Imagina que trabajas como desarrollador para una gran empresa de logística internacional llamada FastShip. Esta empresa se dedica a enviar paquetes a todo el mundo y ofrece diferentes tipos de envío a sus clientes, cada uno con un costo diferente según la urgencia y el método utilizado.

Tu equipo de desarrollo ha recibido la tarea de mejorar el sistema de cálculo de costos de envío, ya que el actual es muy rígido y requiere modificar el código cada vez que se introduce un nuevo tipo de envío. La empresa quiere ser más flexible y estar preparada para implementar futuros métodos de envío de forma rápida y sin afectar las demás funcionalidades del sistema.

El equipo ha decidido implementar el Patrón **Strategy** para resolver este problema. Con este patrón, podrán cambiar dinámicamente la forma en que se calcula el costo de envío sin alterar el código existente. De esta manera, el sistema será más flexible y escalable, permitiendo a la empresa adaptarse a nuevas demandas del mercado.

**Consideraciones**

La idea es desarrollar un sistema que permita calcular el costo de envío de un paquete en función de diferentes estrategias, las cuales ya tus compañeros implementaron y son:

- **Envío por tierra:** un método más económico, pero más lento.
- **Envío por aire:** más rápido, pero con un costo mayor.
- **Envío express:** el más rápido de todos, pero con un costo muy elevado.

Ya implementadas las tres estrategias de envío usando el patrón Strategy, debes:

- Completa el código de la interfaz `EstrategiaEnvio` que defina un método `calcularCosto(double peso)`.
- Completa el código de la clase `EnvioPaquete` que permita configurar dinámicamente la estrategia de envío y calcular el costo de un paquete según el peso y el tipo de envío elegido, esta clase tiene un atributo que controla la `estrategiaEnvio` y luego dos métodos: `void setEstrategia(EstrategiaEnvio estrategiaEnvio)` y `double calcularCosto(double peso)`

### Código base

```java
interface EstrategiaEnvio {
//Completa la interface, siguiendo la pauta dada, aquí.
}

class EnvioPorAire implements EstrategiaEnvio {
    @Override
    public double calcularCosto(double peso) {
        return peso * 3.0; // Costo por aire
    }
}

class EnvioExpress implements EstrategiaEnvio {
    @Override
    public double calcularCosto(double peso) {
        return peso * 5.0; // Costo express
    }
}

class EnvioPorTierra implements EstrategiaEnvio {
    @Override
    public double calcularCosto(double peso) {
        return peso * 1.5; // Costo por tierra
    }
}

public class EnvioPaquete {
 //Completa la clase, siguiendo la pauta dada, aquí.
 //para el método calcularCosto, en caso de que la estrategiaEnvio sea null, utiliza esta linea: throw new IllegalStateException("No se ha seleccionado una estrategia de envío");
}
```

### Prueba

```java
EnvioPaquete envio = new EnvioPaquete();
envio.setEstrategia(new EnvioPorTierra());
System.out.println("Costo esperado: 15.0, Costo calculado: " + envio.calcularCosto(10));
```

```
Costo esperado: 15.0, Costo calculado: 15.0
```

### Prueba

```java
EnvioPaquete envio = new EnvioPaquete();
envio.setEstrategia(new EnvioPorAire());
System.out.println("Costo esperado: 30.0, Costo calculado: " + envio.calcularCosto(10));
```

```
Costo esperado: 30.0, Costo calculado: 30.0
```

### Prueba

```java
EnvioPaquete envio = new EnvioPaquete();
envio.setEstrategia(new EnvioExpress());
System.out.println("Costo esperado: 50.0, Costo calculado: " + envio.calcularCosto(10));
```

```
Costo esperado: 50.0, Costo calculado: 50.0
```

### Prueba

```java
EnvioPaquete envio = new EnvioPaquete();
try {
    envio.calcularCosto(10);
} catch (IllegalStateException e) {
    System.out.println(e.getMessage());
}
```

```
No se ha seleccionado una estrategia de envío
```

### Solución

```java
interface EstrategiaEnvio {
    double calcularCosto(double peso);
}

class EnvioPorAire implements EstrategiaEnvio {
    @Override
    public double calcularCosto(double peso) {
        return peso * 3.0; // Costo por aire
    }
}

class EnvioExpress implements EstrategiaEnvio {
    @Override
    public double calcularCosto(double peso) {
        return peso * 5.0; // Costo express
    }
}

class EnvioPorTierra implements EstrategiaEnvio {
    @Override
    public double calcularCosto(double peso) {
        return peso * 1.5; // Costo por tierra
    }
}

public class EnvioPaquete {
    private EstrategiaEnvio estrategiaEnvio;

    public void setEstrategia(EstrategiaEnvio estrategiaEnvio) {
        this.estrategiaEnvio = estrategiaEnvio;
    }

    public double calcularCosto(double peso) {
        if (estrategiaEnvio == null) {
            throw new IllegalStateException("No se ha seleccionado una estrategia de envío");
        }
        return estrategiaEnvio.calcularCosto(peso);
    }
}
```

## Pregunta 170

**Tipo:** CodeRunner (Java)

**Enunciado:** Imagina que trabajas como desarrollador en una empresa de finanzas llamada FinTechPro. Esta empresa se especializa en ofrecer distintos tipos de cuentas bancarias y préstamos a sus clientes. Los clientes pueden optar por diferentes formas de inversión y recibir asesoramiento financiero personalizado basado en varios factores.

La empresa quiere desarrollar un sistema flexible y adaptable que permita calcular dos cosas:

- El interés generado por diferentes tipos de inversiones.
- El monto total a pagar por diferentes tipos de préstamos.

Tu tarea como integrante dele quipo de desarrollo es implementar este sistema usando el Patrón **Strategy** para poder cambiar dinámicamente las estrategias de cálculo de intereses e inversiones para adaptarse a las necesidades del cliente.

**Consideraciones**

Implementa el patrón Strategy para los dos contextos:

- **Contexto de Inversión:** debe permitir cambiar la estrategia de cálculo de intereses en diferentes inversiones.
- **Contexto de Préstamo:** debe permitir cambiar la estrategia de cálculo de pagos totales para diferentes tipos de préstamos.

Se debe completar el código de la interfaz `EstrategiaInversion` con el método `calcularInteres(double capitalInvertido)`.

Se debe completar el código de la la interfaz `EstrategiaPrestamo` con el método `calcularMontoAPagar(double montoPrestado, int anos)`.

Las clases necesarias para representar cada uno de los préstamos con su debida lógica (estrategias concretas) ya están realizadas por tus compañeros del equipo de desarrollo, luego de completar el código de las interfaces debes completar el código de las dos clases de contexto: `ContextoInversion` y `ContextoPrestamo`.

- `ContextoPrestamo`: tiene un atributo que controla la estrategia y luego dos métodos: `void setEstrategia(EstrategiaPrestamo estrategia)` y `double calcularMontoAPagar(double montoPrestado, int anos)`
- `ContextoInversion`: tiene un atributo que controla la estrategia y luego dos métodos: `void setEstrategia(EstrategiaInversion estrategia)` y `double calcularInteres(double capitalInvertido)`

### Código base

```java
interface EstrategiaInversion {
 //Completa la interface, siguiendo la pauta dada, aquí.
}

class InversionCriptomonedas implements EstrategiaInversion {
    private boolean mercadoInestable = true; // Simula inestabilidad

    public double calcularInteres(double capitalInvertido) {
        if (mercadoInestable) {
            return capitalInvertido * 0.05; // Penalización por inestabilidad
        }
        return capitalInvertido * 0.15;
    }
}

class InversionBienesRaices implements EstrategiaInversion {
    public double calcularInteres(double capitalInvertido) {
        return capitalInvertido * 0.06;
    }
}

class InversionPlazoFijo implements EstrategiaInversion {
    public double calcularInteres(double capitalInvertido) {
        return capitalInvertido * 0.02;
    }
}

class InversionBonosEstado implements EstrategiaInversion {
    public double calcularInteres(double capitalInvertido) {
        return capitalInvertido * 0.03;
    }
}

class InversionAcciones implements EstrategiaInversion {
    private boolean crisis = false; // Simula una crisis en el mercado

    public double calcularInteres(double capitalInvertido) {
        if (crisis) {
            return capitalInvertido * 0.05; // Penalización por crisis
        }
        return capitalInvertido * 0.10;
    }
}

interface EstrategiaPrestamo {
 //Completa la interface, siguiendo la pauta dada, aquí.
}

class PrestamoPersonal implements EstrategiaPrestamo {
    public double calcularMontoAPagar(double montoPrestado, int anos) {
        return montoPrestado * Math.pow(1.12, anos);
    }
}

class PrestamoEmpresarial implements EstrategiaPrestamo {
    public double calcularMontoAPagar(double montoPrestado, int anos) {
        return montoPrestado * Math.pow(1.08, anos);
    }
}

class PrestamoAutomotriz implements EstrategiaPrestamo {
    public double calcularMontoAPagar(double montoPrestado, int anos) {
        return montoPrestado * Math.pow(1.07, anos);
    }
}

class PrestamoHipotecario implements EstrategiaPrestamo {
    public double calcularMontoAPagar(double montoPrestado, int anos) {
        return montoPrestado * Math.pow(1.05, anos);
    }
}

class PrestamoEstudiantil implements EstrategiaPrestamo {
    public double calcularMontoAPagar(double montoPrestado, int anos) {
        return montoPrestado * Math.pow(1.03, anos);
    }
}

class ContextoInversion {
   //Completa la clase, siguiendo la pauta dada, aquí.
  //para el método calcularInteres, en caso de que la estrategiasea null, utiliza esta linea: throw new IllegalStateException("No se ha seleccionado ninguna estrategia de inversión.");
}

class ContextoPrestamo {
  //Completa la clase, siguiendo la pauta dada, aquí.
  //para el método calcularMontoAPagar, en caso de que la estrategia sea null, utiliza esta linea: throw new IllegalStateException("No se ha seleccionado ninguna estrategia de préstamo.");
}
```

### Prueba

```java
ContextoInversion inversion = new ContextoInversion();
inversion.setEstrategia(new InversionPlazoFijo());
double interes = inversion.calcularInteres(10000);
System.out.println("Interés plazo fijo: " + interes);
```

```
Interés plazo fijo: 200.0
```

### Prueba

```java
ContextoInversion inversion = new ContextoInversion();
inversion.setEstrategia(new InversionAcciones());
double interes = inversion.calcularInteres(10000);
System.out.println("Interés acciones (sin crisis): " + interes);
```

```
Interés acciones (sin crisis): 1000.0
```

### Prueba

```java
ContextoInversion inversion = new ContextoInversion();
inversion.setEstrategia(new InversionBienesRaices());
double interes = inversion.calcularInteres(10000);
System.out.println("Interés bienes raíces: " + interes);
```

```
Interés bienes raíces: 600.0
```

### Prueba

```java
ContextoPrestamo prestamo = new ContextoPrestamo();
prestamo.setEstrategia(new PrestamoHipotecario());
System.out.println("Monto hipotecario a 2 años: " + prestamo.calcularMontoAPagar(10000, 2));
prestamo.setEstrategia(new PrestamoEmpresarial());
System.out.println("Monto empresarial a 1 año: " + prestamo.calcularMontoAPagar(10000, 1));
```

```
Monto hipotecario a 2 años: 11025.0
Monto empresarial a 1 año: 10800.0
```

### Prueba

```java
ContextoInversion inversion = new ContextoInversion();
ContextoPrestamo prestamo = new ContextoPrestamo();
try {
    inversion.calcularInteres(10000);
} catch (IllegalStateException e) {
    System.out.println(e.getMessage());
}
try {
    prestamo.calcularMontoAPagar(10000, 1);
} catch (IllegalStateException e) {
    System.out.println(e.getMessage());
}
```

```
No se ha seleccionado ninguna estrategia de inversión.
No se ha seleccionado ninguna estrategia de préstamo.
```

### Solución

```java
interface EstrategiaInversion {
    double calcularInteres(double capitalInvertido);
}

class InversionCriptomonedas implements EstrategiaInversion {
    private boolean mercadoInestable = true; // Simula inestabilidad

    public double calcularInteres(double capitalInvertido) {
        if (mercadoInestable) {
            return capitalInvertido * 0.05; // Penalización por inestabilidad
        }
        return capitalInvertido * 0.15;
    }
}

class InversionBienesRaices implements EstrategiaInversion {
    public double calcularInteres(double capitalInvertido) {
        return capitalInvertido * 0.06;
    }
}

class InversionPlazoFijo implements EstrategiaInversion {
    public double calcularInteres(double capitalInvertido) {
        return capitalInvertido * 0.02;
    }
}

class InversionBonosEstado implements EstrategiaInversion {
    public double calcularInteres(double capitalInvertido) {
        return capitalInvertido * 0.03;
    }
}

class InversionAcciones implements EstrategiaInversion {
    private boolean crisis = false; // Simula una crisis en el mercado

    public double calcularInteres(double capitalInvertido) {
        if (crisis) {
            return capitalInvertido * 0.05; // Penalización por crisis
        }
        return capitalInvertido * 0.10;
    }
}

interface EstrategiaPrestamo {
    double calcularMontoAPagar(double montoPrestado, int anos);
}

class PrestamoPersonal implements EstrategiaPrestamo {
    public double calcularMontoAPagar(double montoPrestado, int anos) {
        return montoPrestado * Math.pow(1.12, anos);
    }
}

class PrestamoEmpresarial implements EstrategiaPrestamo {
    public double calcularMontoAPagar(double montoPrestado, int anos) {
        return montoPrestado * Math.pow(1.08, anos);
    }
}

class PrestamoAutomotriz implements EstrategiaPrestamo {
    public double calcularMontoAPagar(double montoPrestado, int anos) {
        return montoPrestado * Math.pow(1.07, anos);
    }
}

class PrestamoHipotecario implements EstrategiaPrestamo {
    public double calcularMontoAPagar(double montoPrestado, int anos) {
        return montoPrestado * Math.pow(1.05, anos);
    }
}

class PrestamoEstudiantil implements EstrategiaPrestamo {
    public double calcularMontoAPagar(double montoPrestado, int anos) {
        return montoPrestado * Math.pow(1.03, anos);
    }
}

class ContextoInversion {
    private EstrategiaInversion estrategia;

    public void setEstrategia(EstrategiaInversion estrategia) {
        this.estrategia = estrategia;
    }

    public double calcularInteres(double capitalInvertido) {
        if (estrategia == null) {
            throw new IllegalStateException("No se ha seleccionado ninguna estrategia de inversión.");
        }
        return estrategia.calcularInteres(capitalInvertido);
    }
}

class ContextoPrestamo {
    private EstrategiaPrestamo estrategia;

    public void setEstrategia(EstrategiaPrestamo estrategia) {
        this.estrategia = estrategia;
    }

    public double calcularMontoAPagar(double montoPrestado, int anos) {
        if (estrategia == null) {
            throw new IllegalStateException("No se ha seleccionado ninguna estrategia de préstamo.");
        }
        return estrategia.calcularMontoAPagar(montoPrestado, anos);
    }
}
```

## Pregunta 171

**Tipo:** CodeRunner (Java)

**Enunciado:** Imagina que estás desarrollando una aplicación para la tienda en línea TiendasGlobal, que ofrece varios métodos de envío para sus clientes. La tienda necesita un sistema flexible para calcular el costo de envío basado en el método seleccionado. Implementa el Patrón **Strategy** para lograr esto, de manera que el sistema sea fácil de extender en el futuro para agregar nuevos métodos de envío.

**Consideraciones**

Implementa las siguientes clases y estrategias para calcular el costo de envío:

- **Interfaz `EstrategiaEnvío`:** define un método `calcularCosto(double peso, double distancia)` que será implementado por las estrategias concretas.
- **Estrategias de Envío:** implementa tres estrategias concretas para calcular el costo de envío según el método elegido: `EnvíoEstándar`, `EnvíoExprés` y `EnvíoInternacional`.
- **`ContextoEnvío`:** esta clase utilizará una instancia de `EstrategiaEnvío` para calcular el costo del envío. Debe proporcionar métodos para establecer la estrategia de cálculo (`void setEstrategia(EstrategiaEnvío estrategia)`) y para realizar el cálculo del costo (`double calcularCosto(double peso, double distancia)`).

**¿Cómo se calculan los envíos?**

Los tres envíos usan la fórmula `Costo = Tarifa Base + (Costo por kg * Peso) + (Costo por km * Distancia)`:

- **Envío Estándar:** tarifa base $5.00, costo por kg $0.10, costo por km $0.05. Ejemplo: para un paquete que pesa 10 kg y se envía a 100 km, `Costo = 5.0 + (0.1 * 10) + (0.05 * 100) = 11.00`.
- **Envío Exprés:** tarifa base $15.00, costo por kg $0.20, costo por km $0.10. Ejemplo: para 10 kg y 100 km, `Costo = 15.0 + (0.2 * 10) + (0.10 * 100) = 27.00`.
- **Envío Internacional:** tarifa base $30.00, costo por kg $0.30, costo por km $0.15. Ejemplo: para 10 kg y 100 km, `Costo = 30.0 + (0.3 * 10) + (0.15 * 100) = 48.00`.

### Código base

```java
interface EstrategiaEnvío {
    //Completa la interface, siguiendo la pauta dada, aquí.
}

class EnvíoEstandar implements EstrategiaEnvío {
    //Completa la clase, siguiendo la pauta dada, aquí.
}

class EnvíoExpress implements EstrategiaEnvío {
    //Completa la clase, siguiendo la pauta dada, aquí.
}


class EnvíoInternacional implements EstrategiaEnvío {
    //Completa la clase, siguiendo la pauta dada, aquí.
}

class ContextoEnvío {
    //Completa la clase, siguiendo la pauta dada, aquí.
}
```

### Prueba

```java
ContextoEnvío contexto = new ContextoEnvío();
contexto.setEstrategia(new EnvíoEstandar());
double costo1 = contexto.calcularCosto(5, 20);
System.out.println("Caso 1 - Costo de envío estándar con peso 5 kg y distancia 20 km: " + costo1);
```

```
Caso 1 - Costo de envío estándar con peso 5 kg y distancia 20 km: 6.5
```

### Prueba

```java
ContextoEnvío contexto = new ContextoEnvío();
contexto.setEstrategia(new EnvíoExpress());
double costo2 = contexto.calcularCosto(5, 20);
System.out.println("Caso 2 - Costo de envío exprés con peso 5 kg y distancia 20 km: " + costo2);
```

```
Caso 2 - Costo de envío exprés con peso 5 kg y distancia 20 km: 18.0
```

### Prueba

```java
ContextoEnvío contexto = new ContextoEnvío();
contexto.setEstrategia(new EnvíoInternacional());
double costo3 = contexto.calcularCosto(5, 20);
System.out.println("Caso 3 - Costo de envío internacional con peso 5 kg y distancia 20 km: " + costo3);
```

```
Caso 3 - Costo de envío internacional con peso 5 kg y distancia 20 km: 34.5
```

### Solución

```java
interface EstrategiaEnvío {
    double calcularCosto(double peso, double distancia);
}

class EnvíoEstandar implements EstrategiaEnvío {
    @Override
    public double calcularCosto(double peso, double distancia) {
        return 5.0 + (0.10 * peso) + (0.05 * distancia);
    }
}

class EnvíoExpress implements EstrategiaEnvío {
    @Override
    public double calcularCosto(double peso, double distancia) {
        return 15.0 + (0.20 * peso) + (0.10 * distancia);
    }
}


class EnvíoInternacional implements EstrategiaEnvío {
    @Override
    public double calcularCosto(double peso, double distancia) {
        return 30.0 + (0.30 * peso) + (0.15 * distancia);
    }
}

class ContextoEnvío {
    private EstrategiaEnvío estrategia;

    public void setEstrategia(EstrategiaEnvío estrategia) {
        this.estrategia = estrategia;
    }

    public double calcularCosto(double peso, double distancia) {
        return estrategia.calcularCosto(peso, distancia);
    }
}
```

## Pregunta 172

**Enunciado:** ¿Cómo afecta el patrón Strategy al mantenimiento del sistema?

- a. El patrón no afecta el mantenimiento.
- ✅ b. Hace el mantenimiento más difícil si hay muchas estrategias.
- c. Facilita el mantenimiento al reducir la cantidad de clases.
- d. Simplifica el mantenimiento eliminando el acoplamiento entre clases.

## Pregunta 173

**Enunciado:** ¿Cuál de las siguientes es una desventaja del patrón Observer?

- ✅ a. Introduce complejidad adicional en sistemas con muchos observadores.
- b. Permite añadir o eliminar observadores en tiempo de ejecución.
- c. Desacopla el sujeto del observador.
- d. Facilita la reutilización de componentes.

## Pregunta 174

**Enunciado:** ¿Cuál de las siguientes es una ventaja del patrón Strategy?

- a. Evita la necesidad de interfaces.
- b. Reduce la cantidad de clases en el sistema.
- ✅ c. Facilita la adición de nuevas estrategias sin alterar las existentes.
- d. Simplifica la comprensión de todas las estrategias.

## Pregunta 175

**Enunciado:** ¿Cuál de las siguientes situaciones es un uso común del patrón Strategy?

- a. Manejo de excepciones.
- b. Serialización de objetos.
- ✅ c. Compresión de archivos.
- d. Generación de interfaces de usuario.

## Pregunta 176

**Enunciado:** ¿Cuál de los siguientes es un componente principal del patrón Strategy?

- a. Algoritmo.
- b. Observador.
- ✅ c. Contexto.
- d. Controlador.

## Pregunta 177

**Enunciado:** ¿Cuál de los siguientes es un ejemplo común del uso del patrón Observer?

- a. Mejorar la seguridad en el acceso a datos.
- b. Implementar el modelo de base de datos en una aplicación.
- ✅ c. Reaccionar a eventos en una interfaz gráfica.
- d. Crear una red de objetos completamente independientes.

## Pregunta 178

**Enunciado:** ¿Cuál de los siguientes es un método común en la interfaz del Sujeto?

- a. actualizar()
- b. cambiarEstadoClima()
- c. notificarClima()
- ✅ d. agregarObservador()

## Pregunta 179

**Enunciado:** ¿Cuál de los siguientes es un uso común del patrón Observer?

- a. Para gestionar conexiones a una base de datos.
- ✅ b. Para la publicación/suscripción en sistemas de eventos.
- c. Para diseñar algoritmos de búsqueda.
- d. Para mejorar la seguridad de la autenticación.

## Pregunta 180

**Enunciado:** ¿Cuál es el principal beneficio de permitir que los observadores se añadan o eliminen en tiempo de ejecución?

- a. Mejora el rendimiento del sistema.
- b. Mejora la seguridad del sistema.
- c. Reduce la complejidad de las dependencias.
- ✅ d. Aumenta la flexibilidad del sistema.

## Pregunta 181

**Enunciado:** ¿Cuál es el propósito del patrón Observer?

- a. Evitar que un objeto dependa de otros objetos.
- b. Acoplar fuertemente los objetos para una mejor comunicación.
- ✅ c. Notificar cambios en el estado de un objeto a otros objetos dependientes.
- d. Mejorar el rendimiento del sistema al eliminar dependencias.

## Pregunta 182

**Enunciado:** ¿Cuál es el propósito principal del patrón Strategy?

- a. Definir todas las posibles implementaciones de un algoritmo.
- b. Eliminar las clases concretas en tiempo de ejecución.
- ✅ c. Permitir que un algoritmo varíe independientemente de los clientes que lo utilizan.
- d. Reducir el número de algoritmos en el sistema.

## Pregunta 183

**Enunciado:** ¿Cuál es una de las características principales del patrón Strategy?

- a. Permite eliminar todas las interfaces.
- ✅ b. Permite encapsular múltiples algoritmos.
- c. Permite eliminar la necesidad de un contexto.
- d. Permite modificar el código cliente.

## Pregunta 184

**Enunciado:** ¿Cuál es una desventaja del patrón Strategy?

- a. No permite modificar el algoritmo en tiempo de ejecución.
- b. Impide agregar nuevas estrategias.
- ✅ c. Puede aumentar la complejidad del sistema al agregar más clases.
- d. Aumenta el acoplamiento entre el cliente y las estrategias.

## Pregunta 185

**Enunciado:** ¿Qué beneficio tiene utilizar el patrón Strategy en una aplicación?

- a. Se elimina la necesidad de una clase contexto.
- ✅ b. Facilita cambiar el algoritmo utilizado sin modificar el código cliente.
- c. Simplifica la creación de algoritmos.
- d. No se necesita crear nuevas clases para nuevas estrategias.

## Pregunta 186

**Enunciado:** ¿Qué componente del patrón Observer mantiene una lista de observadores?

- ✅ a. Sujeto.
- b. Observador.
- c. Observador Concreto.
- d. Sujeto Concreto.

## Pregunta 187

**Enunciado:** ¿Qué define el método update() en el patrón Observer?

- a. Agrega un nuevo observador a la lista.
- b. Cambia el estado del sujeto.
- c. Almacena el estado que los observadores necesitan conocer.
- ✅ d. Notifica a los observadores que el estado del sujeto ha cambiado.

## Pregunta 188

**Enunciado:** ¿Qué define el patrón Observer?

- a. Una relación muchos-a-muchos entre objetos.
- b. Una relación muchos-a-uno entre objetos.
- c. Una relación uno-a-uno entre objetos.
- ✅ d. Una relación uno-a-muchos entre objetos.

## Pregunta 189

**Enunciado:** ¿Qué es el Observador en el patrón Observer?

- a. Un objeto que gestiona una lista de observadores.
- b. Una clase que almacena el estado que necesitan conocer los observadores.
- c. Un objeto que notifica a otros objetos sobre cambios en su estado.
- ✅ d. Una interfaz que define el método para recibir notificaciones de cambio de estado.

## Pregunta 190

**Enunciado:** ¿Qué es el patrón Strategy?

- a. Un patrón de diseño creacional.
- ✅ b. Un patrón de diseño de comportamiento.
- c. Un patrón de diseño estructural.
- d. Un patrón de diseño de interacción.

## Pregunta 191

**Enunciado:** ¿Qué ocurre cuando un observador es eliminado del sujeto?

- a. El estado del sujeto se reinicia.
- ✅ b. Ya no recibe notificaciones del sujeto.
- c. Recibe una notificación final antes de ser eliminado.
- d. Sigue recibiendo notificaciones.

## Pregunta 192

**Enunciado:** ¿Qué parte del patrón Strategy define los métodos que serán implementados por las estrategias concretas?

- a. Las estrategias concretas.
- ✅ b. La interfaz estrategia.
- c. La clase principal.
- d. El contexto.

## Pregunta 193

**Enunciado:** ¿Qué principio de diseño SOLID cumple el patrón Strategy?

- a. Principio de Inversión de Dependencias.
- ✅ b. Principio de Abierto/Cerrado.
- c. Principio de Responsabilidad Única.
- d. Principio de Sustitución de Liskov.

## Pregunta 194

**Enunciado:** ¿Qué responsabilidad tiene la clase Contexto en el patrón Strategy?

- a. Implementar los algoritmos directamente.
- ✅ b. Delegar la ejecución del algoritmo a una estrategia concreta.
- c. Elegir el algoritmo sin ayuda del cliente.
- d. Modificar las estrategias concretas.

## Pregunta 195

**Enunciado:** ¿Qué sucede cuando el estado de un Sujeto Concreto cambia?

- a. Los observadores deben solicitar manualmente el nuevo estado.
- b. El estado se restaura a su valor inicial.
- c. Los observadores se eliminan automáticamente de la lista.
- ✅ d. Los observadores son notificados automáticamente.

## Pregunta 196

**Enunciado:** ¿Qué tipo de patrón es el Observer?

- a. Patrón estructural.
- b. Patrón creacional.
- ✅ c. Patrón de comportamiento.
- d. Patrón de compilación.

## Pregunta 197

**Enunciado:** ¿Qué ventaja ofrece el patrón Observer?

- a. Mejora la complejidad del sistema.
- ✅ b. Desacoplamiento entre sujetos y observadores.
- c. Facilita la eliminación de observadores solo al inicio de la ejecución.
- d. Acoplamiento fuerte entre observadores y sujetos.

## Pregunta 198

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa la clase `ListaEnlazada` para administrar una lista de números enteros.

La lista ya está creada mediante `ArrayList<Integer>`. Tu tarea consiste en implementar los métodos indicados utilizando los métodos de `ArrayList` y validando los índices cuando corresponda.

**Métodos a implementar**

- `addFirst(int elemento)`: agrega un elemento al inicio de la lista.
- `add(int index, int elemento)`: inserta un elemento en la posición indicada.
- `remove(int index)`: elimina el elemento ubicado en la posición indicada.
- `get(int index)`: devuelve el elemento ubicado en la posición indicada.

**Validación de índices**

Antes de insertar, eliminar u obtener un elemento, verifica que el índice sea válido.

- Para `add(index, elemento)`, el índice debe estar entre 0 y el tamaño de la lista, inclusive. De esta forma, también se puede insertar un elemento al final.
- Para `remove(index)` y `get(index)`, el índice debe estar entre 0 y el último índice existente.
- Si el índice no es válido, lanza la siguiente excepción: `throw new IndexOutOfBoundsException("Índice fuera de rango");`

**Ejemplo esperado**

```
addFirst(10); // Lista: [10]
add(1, 20); // Lista: [10, 20]
add(1, 15); // Lista: [10, 15, 20]
get(1); // Devuelve: 15
remove(0); // Lista: [15, 20]
```

### Código base

```java
import java.util.ArrayList;

public class ListaEnlazada {
    private ArrayList<Integer> lista;

    public ListaEnlazada() {
        lista = new ArrayList<>();
    }

    public void addFirst(int elemento) {
        // Agrega el elemento al inicio de la lista.
    }

    public void add(int index, int elemento) {
        // Valida el índice e inserta el elemento en la posición indicada.
    }

    public void remove(int index) {
        // Valida el índice y elimina el elemento en esa posición.
    }

    public int get(int index) {
        // Valida el índice y devuelve el elemento en esa posición.
        return 0;
    }
}
```

### Prueba

```java
ListaEnlazada lista1 = new ListaEnlazada();
lista1.addFirst(20);
lista1.addFirst(10);
lista1.add(2, 30);
System.out.println("Caso 1");
System.out.println(lista1.get(0));
System.out.println(lista1.get(1));
System.out.println(lista1.get(2));
```

```
Caso 1
10
20
30
```

### Prueba

```java
ListaEnlazada lista2 = new ListaEnlazada();
lista2.addFirst(10);
lista2.add(1, 30);
lista2.add(1, 20);
lista2.remove(0);
System.out.println("Caso 2");
System.out.println(lista2.get(0));
System.out.println(lista2.get(1));
```

```
Caso 2
20
30
```

### Prueba

```java
ListaEnlazada lista3 = new ListaEnlazada();
lista3.addFirst(50);

System.out.println("Caso 3");
try {
    System.out.println(lista3.get(2));
} catch (IndexOutOfBoundsException e) {
    System.out.println(e.getMessage());
}
```

```
Caso 3
Índice fuera de rango
```

### Prueba

```java
ListaEnlazada lista4 = new ListaEnlazada();
lista4.addFirst(10);
System.out.println("Caso 4");
try {
    lista4.add(3, 20);
} catch (IndexOutOfBoundsException e) {
    System.out.println(e.getMessage());
}
try {
    lista4.remove(1);
} catch (IndexOutOfBoundsException e) {
    System.out.println(e.getMessage());
}
System.out.println(lista4.get(0));
```

```
Caso 4
Índice fuera de rango
Índice fuera de rango
10
```

### Solución

```java
import java.util.ArrayList;

public class ListaEnlazada {
    private ArrayList<Integer> lista;

    public ListaEnlazada() {
        lista = new ArrayList<>();
    }

    public void addFirst(int elemento) {
        lista.add(0, elemento);
    }

    public void add(int index, int elemento) {
        if (index < 0 || index > lista.size()) {
            throw new IndexOutOfBoundsException("Índice fuera de rango");
        }
        lista.add(index, elemento);
    }

    public void remove(int index) {
        if (index < 0 || index >= lista.size()) {
            throw new IndexOutOfBoundsException("Índice fuera de rango");
        }
        lista.remove(index);
    }

    public int get(int index) {
        if (index < 0 || index >= lista.size()) {
            throw new IndexOutOfBoundsException("Índice fuera de rango");
        }
        return lista.get(index);
    }
}
```

## Pregunta 199

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa la clase `ListaDeTareas` para administrar tareas mediante una `LinkedList`.

Cada tarea tiene un nombre y una prioridad. Cuanto mayor sea el número de prioridad, más importante será la tarea.

La clase interna `Tarea` ya está implementada. No es necesario modificarla. Tu tarea consiste en completar los métodos de `ListaDeTareas`.

**1. Agregar tareas ordenadas por prioridad**

Completa el método `addTask(String nombre, int prioridad)`.

Este método debe agregar una tarea en la posición que corresponda según su prioridad:

- Las tareas con mayor prioridad deben aparecer antes en la lista.
- Si dos tareas tienen la misma prioridad, la nueva tarea debe ubicarse después de las que ya estaban agregadas con esa prioridad.

Por ejemplo, si la lista contiene:

- Estudiar (Prioridad: 3)
- Enviar informe (Prioridad: 1)

Al ejecutar `addTask("Preparar examen", 2)`, la lista debe quedar:

- Estudiar (Prioridad: 3)
- Preparar examen (Prioridad: 2)
- Enviar informe (Prioridad: 1)

**2. Agregar una tarea en una posición específica**

Completa el método `addTaskAt(int index, String nombre, int prioridad)`.

Este método inserta una tarea exactamente en la posición indicada, sin tener en cuenta su prioridad.

- El índice puede ir desde 0 hasta el tamaño actual de la lista, inclusive.
- Si el índice no es válido, lanza la excepción: `throw new IndexOutOfBoundsException("Índice fuera de rango");`

**3. Eliminar tareas**

- `removeTask(int index)`: elimina la tarea ubicada en la posición indicada.
- `removeTaskByName(String nombre)`: elimina la primera tarea cuyo nombre coincida con el recibido.

Si el índice no es válido, lanza `IndexOutOfBoundsException` con el mensaje "Índice fuera de rango".

Si no existe una tarea con ese nombre, lanza `NoSuchElementException` con el mensaje "Tarea no encontrada".

**4. Obtener tareas**

- `getTask(int index)`: devuelve la tarea ubicada en la posición indicada.
- `getTaskByName(String nombre)`: devuelve la primera tarea cuyo nombre coincida con el recibido.

Los métodos deben devolver la tarea como texto, por ejemplo: `Estudiar (Prioridad: 3)`

Aplica las mismas validaciones de índice y nombre indicadas anteriormente.

### Código base

```java
import java.util.LinkedList;
import java.util.NoSuchElementException;

public class ListaDeTareas {
    private LinkedList<Tarea> listaDeTareas;

    private class Tarea {
        String nombre;
        int prioridad;

        public Tarea(String nombre, int prioridad) {
            this.nombre = nombre;
            this.prioridad = prioridad;
        }

        @Override
        public String toString() {
            return nombre + " (Prioridad: " + prioridad + ")";
        }
    }

    public ListaDeTareas() {
        listaDeTareas = new LinkedList<>();
    }

    public void addTask(String nombre, int prioridad) {
        // Crea una nueva tarea.
        // Busca la primera posición donde la prioridad sea menor.
        // Inserta la tarea en esa posición.
    }

    public void addTaskAt(int index, String nombre, int prioridad) {
        // Valida el índice.
        // Inserta la tarea en la posición indicada.
    }

    public void removeTask(int index) {
        // Valida el índice.
        // Elimina la tarea en la posición indicada.
    }

    public void removeTaskByName(String nombre) {
        // Recorre la lista.
        // Elimina la primera tarea cuyo nombre coincida.
        // Si no existe, lanza NoSuchElementException.
    }

    public String getTask(int index) {
        // Valida el índice.
        // Devuelve la tarea en la posición indicada como texto.
        return "";
    }

    public String getTaskByName(String nombre) {
        // Recorre la lista.
        // Devuelve la primera tarea cuyo nombre coincida como texto.
        // Si no existe, lanza NoSuchElementException.
        return "";
    }
}
```

### Prueba

```java
ListaDeTareas lista1 = new ListaDeTareas();
lista1.addTask("Enviar informe", 1);
lista1.addTask("Estudiar", 3);
lista1.addTask("Preparar examen", 2);
System.out.println(lista1.getTask(0));
System.out.println(lista1.getTask(1));
System.out.println(lista1.getTask(2));
```

```
Estudiar (Prioridad: 3)
Preparar examen (Prioridad: 2)
Enviar informe (Prioridad: 1)
```

### Prueba

```java
ListaDeTareas lista2 = new ListaDeTareas();
lista2.addTask("Tarea baja", 1);
lista2.addTask("Tarea alta", 3);
lista2.addTaskAt(1, "Tarea manual", 0);
lista2.removeTaskByName("Tarea alta");
System.out.println(lista2.getTask(0));
System.out.println(lista2.getTask(1));
```

```
Tarea manual (Prioridad: 0)
Tarea baja (Prioridad: 1)
```

### Prueba

```java
ListaDeTareas lista3 = new ListaDeTareas();
lista3.addTask("Estudiar Java", 2);
try {
    System.out.println(lista3.getTaskByName("Hacer ejercicio"));
} catch (NoSuchElementException e) {
    System.out.println(e.getMessage());
}
```

```
Tarea no encontrada
```

### Prueba

```java
ListaDeTareas lista4 = new ListaDeTareas();
lista4.addTask("Leer", 2);
lista4.addTask("Escribir", 2);
lista4.addTask("Urgente", 5);
lista4.addTask("Repasar", 2);
System.out.println(lista4.getTask(0));
System.out.println(lista4.getTask(1));
System.out.println(lista4.getTask(2));
System.out.println(lista4.getTask(3));
lista4.removeTask(0);
System.out.println(lista4.getTaskByName("Escribir"));
System.out.println(lista4.getTask(0));
```

```
Urgente (Prioridad: 5)
Leer (Prioridad: 2)
Escribir (Prioridad: 2)
Repasar (Prioridad: 2)
Escribir (Prioridad: 2)
Leer (Prioridad: 2)
```

### Prueba

```java
ListaDeTareas lista5 = new ListaDeTareas();
lista5.addTask("Única", 1);
try {
    lista5.addTaskAt(3, "Otra", 1);
} catch (IndexOutOfBoundsException e) {
    System.out.println(e.getMessage());
}
try {
    lista5.removeTask(1);
} catch (IndexOutOfBoundsException e) {
    System.out.println(e.getMessage());
}
try {
    lista5.getTask(-1);
} catch (IndexOutOfBoundsException e) {
    System.out.println(e.getMessage());
}
try {
    lista5.removeTaskByName("Otra");
} catch (NoSuchElementException e) {
    System.out.println(e.getMessage());
}
```

```
Índice fuera de rango
Índice fuera de rango
Índice fuera de rango
Tarea no encontrada
```

### Solución

```java
import java.util.LinkedList;
import java.util.NoSuchElementException;

public class ListaDeTareas {
    private LinkedList<Tarea> listaDeTareas;

    private class Tarea {
        String nombre;
        int prioridad;

        public Tarea(String nombre, int prioridad) {
            this.nombre = nombre;
            this.prioridad = prioridad;
        }

        @Override
        public String toString() {
            return nombre + " (Prioridad: " + prioridad + ")";
        }
    }

    public ListaDeTareas() {
        listaDeTareas = new LinkedList<>();
    }

    public void addTask(String nombre, int prioridad) {
        Tarea nueva = new Tarea(nombre, prioridad);
        int pos = listaDeTareas.size();
        for (int i = 0; i < listaDeTareas.size(); i++) {
            if (listaDeTareas.get(i).prioridad < prioridad) {
                pos = i;
                break;
            }
        }
        listaDeTareas.add(pos, nueva);
    }

    public void addTaskAt(int index, String nombre, int prioridad) {
        if (index < 0 || index > listaDeTareas.size()) {
            throw new IndexOutOfBoundsException("Índice fuera de rango");
        }
        listaDeTareas.add(index, new Tarea(nombre, prioridad));
    }

    public void removeTask(int index) {
        if (index < 0 || index >= listaDeTareas.size()) {
            throw new IndexOutOfBoundsException("Índice fuera de rango");
        }
        listaDeTareas.remove(index);
    }

    public void removeTaskByName(String nombre) {
        for (int i = 0; i < listaDeTareas.size(); i++) {
            if (listaDeTareas.get(i).nombre.equals(nombre)) {
                listaDeTareas.remove(i);
                return;
            }
        }
        throw new NoSuchElementException("Tarea no encontrada");
    }

    public String getTask(int index) {
        if (index < 0 || index >= listaDeTareas.size()) {
            throw new IndexOutOfBoundsException("Índice fuera de rango");
        }
        return listaDeTareas.get(index).toString();
    }

    public String getTaskByName(String nombre) {
        for (Tarea t : listaDeTareas) {
            if (t.nombre.equals(nombre)) {
                return t.toString();
            }
        }
        throw new NoSuchElementException("Tarea no encontrada");
    }
}
```

## Pregunta 200

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa la clase `ColaDePedidos` para administrar los pedidos de una cafetería mediante una `Queue`.

Una cola funciona con la regla FIFO (First In, First Out): el primer pedido que se agrega es el primero que debe ser atendido.

La clase interna `Pedido` ya está implementada. No es necesario modificarla. Tu tarea consiste en completar los métodos de `ColaDePedidos`.

**1. Agregar un pedido**

Completa el método `agregarPedido(String nombreCliente, String detallePedido)`.

Este método debe crear un nuevo pedido y agregarlo al final de la cola.

**2. Atender el próximo pedido**

Completa el método `atenderPedido()`.

Este método debe:

- Verificar si hay pedidos en la cola.
- Eliminar el pedido que lleva más tiempo esperando.
- Devolver ese pedido.

Si la cola está vacía, debe lanzar la siguiente excepción: `throw new NoSuchElementException("No hay pedidos en la cola");`

**3. Consultar el próximo pedido**

Completa el método `verProximoPedido()`.

Este método debe devolver el próximo pedido que será atendido, pero sin eliminarlo de la cola.

Si la cola está vacía, debe lanzar la siguiente excepción: `throw new NoSuchElementException("No hay pedidos en la cola");`

**4. Ver todos los pedidos**

Completa el método `verTodosLosPedidos()`.

Este método debe devolver todos los pedidos que están esperando, desde el próximo pedido a atender hasta el último que fue agregado. El texto empieza con la línea `Pedidos en la cola:` y sigue con un pedido por línea:

```
Pedidos en la cola:
Cliente: Ana, Pedido: Café con leche
Cliente: Bruno, Pedido: Té y tostadas
```

Si no hay pedidos en la cola, debe devolver el siguiente texto: `No hay pedidos en la cola`

**Ejemplo esperado**

```
agregarPedido("Ana", "Café con leche");
agregarPedido("Bruno", "Té y tostadas");

verProximoPedido();
// Devuelve: Cliente: Ana, Pedido: Café con leche

atenderPedido();
// Devuelve: Cliente: Ana, Pedido: Café con leche

verProximoPedido();
// Devuelve: Cliente: Bruno, Pedido: Té y tostadas
```

### Código base

```java
import java.util.LinkedList;
import java.util.NoSuchElementException;
import java.util.Queue;

public class ColaDePedidos {
    private Queue<Pedido> colaPedidos;

    private static class Pedido {
        private String nombreCliente;
        private String detallePedido;

        public Pedido(String nombreCliente, String detallePedido) {
            this.nombreCliente = nombreCliente;
            this.detallePedido = detallePedido;
        }

        @Override
        public String toString() {
            return "Cliente: " + nombreCliente + ", Pedido: " + detallePedido;
        }
    }

    public ColaDePedidos() {
        colaPedidos = new LinkedList<>();
    }

    public void agregarPedido(String nombreCliente, String detallePedido) {
        // Crea un nuevo pedido y agrégalo al final de la cola.
    }

    public Pedido atenderPedido() {
        // Verifica si la cola está vacía.
        // Elimina y devuelve el primer pedido de la cola.
        return null;
    }

    public Pedido verProximoPedido() {
        // Verifica si la cola está vacía.
        // Devuelve el primer pedido sin eliminarlo.
        return null;
    }

    public String verTodosLosPedidos() {
        // Si la cola está vacía, devuelve:
        // "No hay pedidos en la cola"
        // De lo contrario, recorre la cola y devuelve todos los pedidos.
        return "";
    }
}
```

### Prueba

```java
ColaDePedidos cola3 = new ColaDePedidos();
System.out.println("Caso 3");
try {
    cola3.atenderPedido();
} catch (NoSuchElementException e) {
    System.out.println(e.getMessage());
}
```

```
Caso 3
No hay pedidos en la cola
```

### Prueba

```java
ColaDePedidos cola1 = new ColaDePedidos();
cola1.agregarPedido("Ana", "Café con leche");
cola1.agregarPedido("Bruno", "Té y tostadas");
cola1.agregarPedido("Carla", "Capuchino");
System.out.println("Caso 1");
System.out.println(cola1.verTodosLosPedidos());
```

```
Caso 1
Pedidos en la cola:
Cliente: Ana, Pedido: Café con leche
Cliente: Bruno, Pedido: Té y tostadas
Cliente: Carla, Pedido: Capuchino
```

### Prueba

```java
ColaDePedidos cola2 = new ColaDePedidos();
cola2.agregarPedido("Diego", "Café americano");
cola2.agregarPedido("Elena", "Jugo de naranja");
System.out.println("Caso 2");
System.out.println("Próximo: " + cola2.verProximoPedido());
System.out.println("Atendido: " + cola2.atenderPedido());
System.out.println("Próximo ahora: " + cola2.verProximoPedido());
```

```
Caso 2
Próximo: Cliente: Diego, Pedido: Café americano
Atendido: Cliente: Diego, Pedido: Café americano
Próximo ahora: Cliente: Elena, Pedido: Jugo de naranja
```

### Prueba

```java
ColaDePedidos cola4 = new ColaDePedidos();
System.out.println("Caso 4");
System.out.println(cola4.verTodosLosPedidos());
try {
    cola4.verProximoPedido();
} catch (NoSuchElementException e) {
    System.out.println(e.getMessage());
}
cola4.agregarPedido("Fede", "Medialunas");
cola4.atenderPedido();
System.out.println(cola4.verTodosLosPedidos());
```

```
Caso 4
No hay pedidos en la cola
No hay pedidos en la cola
No hay pedidos en la cola
```

### Solución

```java
import java.util.LinkedList;
import java.util.NoSuchElementException;
import java.util.Queue;

public class ColaDePedidos {
    private Queue<Pedido> colaPedidos;

    private static class Pedido {
        private String nombreCliente;
        private String detallePedido;

        public Pedido(String nombreCliente, String detallePedido) {
            this.nombreCliente = nombreCliente;
            this.detallePedido = detallePedido;
        }

        @Override
        public String toString() {
            return "Cliente: " + nombreCliente + ", Pedido: " + detallePedido;
        }
    }

    public ColaDePedidos() {
        colaPedidos = new LinkedList<>();
    }

    public void agregarPedido(String nombreCliente, String detallePedido) {
        colaPedidos.add(new Pedido(nombreCliente, detallePedido));
    }

    public Pedido atenderPedido() {
        if (colaPedidos.isEmpty()) {
            throw new NoSuchElementException("No hay pedidos en la cola");
        }
        return colaPedidos.poll();
    }

    public Pedido verProximoPedido() {
        if (colaPedidos.isEmpty()) {
            throw new NoSuchElementException("No hay pedidos en la cola");
        }
        return colaPedidos.peek();
    }

    public String verTodosLosPedidos() {
        if (colaPedidos.isEmpty()) {
            return "No hay pedidos en la cola";
        }
        StringBuilder sb = new StringBuilder("Pedidos en la cola:");
        for (Pedido p : colaPedidos) {
            sb.append("\n");
            sb.append(p.toString());
        }
        return sb.toString();
    }
}
```

## Pregunta 201

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa la clase `HistorialNavegador` para simular el historial de navegación de un navegador web mediante una pila (`Stack`).

Una pila funciona con la regla LIFO (Last In, First Out): la última página que se agrega es la primera que se consulta o se elimina.

Por ejemplo, si se visitan las páginas:

- https://google.com
- https://youtube.com
- https://utec.edu.uy

La última página visitada será https://utec.edu.uy.

**1. Visitar una página**

Completa el método `visitarPagina(String url)`.

Este método debe agregar una nueva URL al historial.

**2. Retroceder**

Completa el método `retroceder()`.

Este método debe eliminar y devolver la última URL visitada.

Si el historial está vacío, debe lanzar la siguiente excepción: `throw new NoSuchElementException("No hay páginas en el historial");`

**3. Consultar la última página**

Completa el método `verUltimaPagina()`.

Este método debe devolver la última URL visitada, pero sin eliminarla del historial.

Si el historial está vacío, debe lanzar la siguiente excepción: `throw new NoSuchElementException("No hay páginas en el historial");`

**4. Ver el historial completo**

Completa el método `verHistorialCompleto()`.

Este método debe devolver todas las URLs almacenadas, desde la más reciente hasta la más antigua.

Si el historial está vacío, debe devolver: `El historial está vacío`

**Restricción**

Utiliza únicamente la pila `Stack` para almacenar y recorrer las URLs. No crees listas u otras estructuras auxiliares.

### Código base

```java
import java.util.NoSuchElementException;
import java.util.Stack;

public class HistorialNavegador {

    private Stack<String> pilaHistorial;

    public HistorialNavegador() {
        // Crea la pila vacía.
    }

    public void visitarPagina(String url) {
        // Agrega la URL al historial.
    }

    public String retroceder() {
        // Si el historial está vacío, lanza la excepción.
        // De lo contrario, elimina y devuelve la última URL.
        return "";
    }

    public String verUltimaPagina() {
        // Si el historial está vacío, lanza la excepción.
        // De lo contrario, devuelve la última URL sin eliminarla.
        return "";
    }

    public String verHistorialCompleto() {
        if (pilaHistorial.empty()) {
            return "El historial está vacío";
        }

        String resultado = "Historial de navegación:\n";

        // Recorre la pila desde la última URL agregada
        // hasta la primera y agrega cada una al resultado.

        return resultado;
    }
}
```

### Prueba

```java
HistorialNavegador historial1 = new HistorialNavegador();
historial1.visitarPagina("https://google.com");
historial1.visitarPagina("https://youtube.com");
historial1.visitarPagina("https://utec.edu.uy");
System.out.println("Caso 1");
System.out.println(historial1.verHistorialCompleto());
```

```
Caso 1
Historial de navegación:
https://utec.edu.uy
https://youtube.com
https://google.com
```

### Prueba

```java
HistorialNavegador historial2 = new HistorialNavegador();
historial2.visitarPagina("https://google.com");
historial2.visitarPagina("https://utec.edu.uy");
System.out.println("Caso 2");
System.out.println("Última: " + historial2.verUltimaPagina());
System.out.println("Retroceder: " + historial2.retroceder());
System.out.println("Última ahora: " + historial2.verUltimaPagina());
System.out.println(historial2.verHistorialCompleto());
```

```
Caso 2
Última: https://utec.edu.uy
Retroceder: https://utec.edu.uy
Última ahora: https://google.com
Historial de navegación:
https://google.com
```

### Prueba

```java
HistorialNavegador historial3 = new HistorialNavegador();
System.out.println("Caso 3");
System.out.println(historial3.verHistorialCompleto());
try {
    historial3.retroceder();
} catch (NoSuchElementException e) {
    System.out.println(e.getMessage());
}
try {
    historial3.verUltimaPagina();
} catch (NoSuchElementException e) {
    System.out.println(e.getMessage());
}
```

```
Caso 3
El historial está vacío
No hay páginas en el historial
No hay páginas en el historial
```

### Solución

```java
import java.util.NoSuchElementException;
import java.util.Stack;

public class HistorialNavegador {

    private Stack<String> pilaHistorial;

    public HistorialNavegador() {
        pilaHistorial = new Stack<>();
    }

    public void visitarPagina(String url) {
        pilaHistorial.push(url);
    }

    public String retroceder() {
        if (pilaHistorial.empty()) {
            throw new NoSuchElementException("No hay páginas en el historial");
        }
        return pilaHistorial.pop();
    }

    public String verUltimaPagina() {
        if (pilaHistorial.empty()) {
            throw new NoSuchElementException("No hay páginas en el historial");
        }
        return pilaHistorial.peek();
    }

    public String verHistorialCompleto() {
        if (pilaHistorial.empty()) {
            return "El historial está vacío";
        }

        String resultado = "Historial de navegación:\n";

        for (int i = pilaHistorial.size() - 1; i >= 0; i--) {
            resultado += pilaHistorial.get(i);
            if (i > 0) {
                resultado += "\n";
            }
        }

        return resultado;
    }
}
```

## Pregunta 202

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa la clase `ListaNumeros` para administrar una lista de números enteros mediante un `ArrayList<Integer>`.

La lista ya está creada en el constructor. Tu tarea consiste en completar los tres métodos indicados.

**1. Agregar un número al inicio**

Completa el método `agregarAlInicio(int numero)`.

Este método debe agregar el número en la primera posición de la lista, es decir, en el índice 0.

Por ejemplo:

```
agregarAlInicio(20); // Lista: [20]
agregarAlInicio(10); // Lista: [10, 20]
```

**2. Eliminar un número**

Completa el método `eliminar(int index)`.

Este método debe eliminar el número ubicado en la posición indicada.

Antes de eliminar, verifica que el índice sea válido. Un índice es válido si está entre 0 y el último índice existente en la lista.

Si el índice no es válido, lanza la siguiente excepción: `throw new IndexOutOfBoundsException("Índice inválido");`

**3. Obtener un número**

Completa el método `obtener(int index)`.

Este método debe devolver el número ubicado en la posición indicada, sin eliminarlo de la lista.

Antes de obtener el número, verifica que el índice sea válido. Si no lo es, lanza la siguiente excepción: `throw new IndexOutOfBoundsException("Índice inválido");`

### Código base

```java
import java.util.ArrayList;

public class ListaNumeros {
    private ArrayList<Integer> lista;

    public ListaNumeros() {
        lista = new ArrayList<>();
    }

    public void agregarAlInicio(int numero) {
        // Agrega el número en la posición 0 de la lista.
    }

    public void eliminar(int index) {
        // Verifica que el índice sea válido.
        // Luego elimina el número ubicado en esa posición.
    }

    public int obtener(int index) {
        // Verifica que el índice sea válido.
        // Luego devuelve el número ubicado en esa posición.
        return 0;
    }
}
```

### Prueba

```java
ListaNumeros lista1 = new ListaNumeros();
lista1.agregarAlInicio(30);
lista1.agregarAlInicio(20);
lista1.agregarAlInicio(10);

System.out.println("Caso 1");
System.out.println(lista1.obtener(0));
System.out.println(lista1.obtener(1));
System.out.println(lista1.obtener(2));
```

```
Caso 1
10
20
30
```

### Prueba

```java
ListaNumeros lista2 = new ListaNumeros();
lista2.agregarAlInicio(30);
lista2.agregarAlInicio(20);
lista2.agregarAlInicio(10);
lista2.eliminar(1);
System.out.println("Caso 2");
System.out.println(lista2.obtener(0));
System.out.println(lista2.obtener(1));
try {
    lista2.eliminar(2);
} catch (IndexOutOfBoundsException e) {
    System.out.println(e.getMessage());
}
try {
    lista2.obtener(-1);
} catch (IndexOutOfBoundsException e) {
    System.out.println(e.getMessage());
}
```

```
Caso 2
10
30
Índice inválido
Índice inválido
```

### Solución

```java
import java.util.ArrayList;

public class ListaNumeros {
    private ArrayList<Integer> lista;

    public ListaNumeros() {
        lista = new ArrayList<>();
    }

    public void agregarAlInicio(int numero) {
        lista.add(0, numero);
    }

    public void eliminar(int index) {
        if (index < 0 || index >= lista.size()) {
            throw new IndexOutOfBoundsException("Índice inválido");
        }
        lista.remove(index);
    }

    public int obtener(int index) {
        if (index < 0 || index >= lista.size()) {
            throw new IndexOutOfBoundsException("Índice inválido");
        }
        return lista.get(index);
    }
}
```

## Pregunta 203

**Enunciado:** ¿Cuál de las siguientes es una característica de las listas enlazadas simples?

- a. No permiten insertar elementos en posiciones arbitrarias.
- ✅ b. Cada nodo contiene un puntero al siguiente nodo únicamente.
- c. Los nodos están almacenados de forma contigua en memoria.
- d. Cada nodo tiene un puntero al nodo anterior y al siguiente.

## Pregunta 204

**Enunciado:** ¿Cuál de las siguientes estructuras sigue el principio FIFO (First In, First Out)?

- ✅ a. Cola.
- b. Pila.
- c. Lista enlazada doble.
- d. Árbol.

## Pregunta 205

**Enunciado:** ¿Cuál de las siguientes NO es una estructura de datos lineal?

- a. Pila.
- b. Lista enlazada.
- c. Cola.
- ✅ d. Árbol binario.

## Pregunta 206

**Enunciado:** ¿Cuál de las siguientes opciones describe correctamente una estructura de datos?

- ✅ a. Una forma organizada de almacenar y organizar datos para facilitar su uso.
- b. Un conjunto de valores que pueden ser accedidos de manera secuencial.
- c. Un sistema de numeración utilizado para representar datos.
- d. Un modelo de programación orientado a objetos.

## Pregunta 207

**Enunciado:** ¿Cuál de las siguientes operaciones corresponde a una pila?

- ✅ a. Pop: eliminar el último elemento añadido.
- b. Push: agregar un elemento al final de la lista.
- c. Enqueue: agregar un elemento al frente de la lista.
- d. Peek: eliminar el primer elemento de la lista.

## Pregunta 208

**Enunciado:** ¿Cuál es la clasificación más general de las estructuras de datos?

- a. Fijas y móviles.
- b. Estáticas y dinámicas.
- c. Secuenciales y aleatorias.
- ✅ d. Lineales y no lineales.

## Pregunta 209

**Enunciado:** ¿Cuál es la principal diferencia entre una lista enlazada doble y una lista enlazada simple?

- a. Las listas simples no pueden realizar operaciones de búsqueda.
- b. Las listas simples no permiten eliminar nodos.
- c. Las listas dobles tienen nodos que almacenan más datos que las listas simples.
- ✅ d. Las listas dobles permiten recorrer los elementos en ambas direcciones.

## Pregunta 210

**Enunciado:** ¿Cuál es una de las principales aplicaciones de una pila?

- ✅ a. Evaluar expresiones matemáticas.
- b. Simular recorridos en grafos.
- c. Procesar colas de espera.
- d. Implementar algoritmos de ordenamiento.

## Pregunta 211

**Enunciado:** ¿Cuál es una de las principales características de una cola (queue)?

- a. Sigue el principio LIFO (Last In, First Out).
- b. Los elementos se eliminan en orden aleatorio.
- c. Los elementos se organizan automáticamente al insertarlos.
- ✅ d. Sigue el principio FIFO (First In, First Out).

## Pregunta 212

**Enunciado:** ¿Cuál es una forma común de implementar una pila?

- a. Usando grafos y colas.
- b. Usando tablas hash y árboles.
- ✅ c. Usando matrices y listas enlazadas.
- d. Usando variables simples y constantes.

## Pregunta 213

**Enunciado:** ¿Cuál es una operación común en una cola de prioridad?

- a. Los elementos se organizan en una lista enlazada circular.
- b. El último elemento insertado se procesa primero.
- c. La inserción se realiza en orden arbitrario.
- ✅ d. Los elementos se eliminan de acuerdo con su prioridad.

## Pregunta 214

**Enunciado:** ¿Cuál es una variante de las colas que permite insertar y eliminar elementos desde ambos extremos?

- a. Cola circular.
- b. Cola de prioridad.
- ✅ c. Cola doble (deque).
- d. Cola dinámica.

## Pregunta 215

**Enunciado:** ¿Cuál es una ventaja de usar una lista enlazada sobre un array?

- a. Uso eficiente de memoria cuando se conocen los tamaños de los datos.
- b. Almacenamiento secuencial en memoria.
- ✅ c. Inserción y eliminación de elementos en cualquier posición con menor coste.
- d. Acceso rápido a cualquier posición.

## Pregunta 216

**Enunciado:** ¿Por qué es importante elegir la estructura de datos adecuada?

- a. Para minimizar el número de clases en un proyecto.
- b. Para asegurar la integridad de los datos.
- c. Para mejorar la legibilidad del código.
- ✅ d. Para optimizar el rendimiento y el uso de memoria.

## Pregunta 217

**Enunciado:** ¿Qué característica define una lista circular?

- a. Cada nodo apunta a dos nodos sucesivos.
- ✅ b. El último nodo apunta al primero.
- c. Solo permite insertar al inicio de la lista.
- d. Los nodos están organizados en forma de árbol.

## Pregunta 218

**Enunciado:** ¿Qué diferencia a una cola doble (deque) de una cola normal?

- a. Los elementos se agregan solo en el frente.
- b. Los elementos se eliminan en orden aleatorio.
- c. Solo permite eliminar elementos desde el frente.
- ✅ d. Permite insertar y eliminar elementos desde ambos extremos.

## Pregunta 219

**Enunciado:** ¿Qué es una pila (stack)?

- a. Una estructura donde los elementos se agregan en cualquier posición.
- ✅ b. Una estructura donde los datos se procesan de manera LIFO (Last In, First Out).
- c. Un conjunto desordenado de elementos.
- d. Una estructura que sigue el principio FIFO (First In, First Out).

## Pregunta 220

**Enunciado:** ¿Qué estructura de datos es más adecuada para realizar un seguimiento de las llamadas de funciones en un programa?

- a. Cola.
- b. Lista enlazada.
- ✅ c. Pila.
- d. Tabla hash.

## Pregunta 221

**Enunciado:** ¿Qué operación básica se utiliza para agregar un elemento a una cola?

- ✅ a. Enqueue.
- b. Peek.
- c. Pop.
- d. Push.

## Pregunta 222

**Enunciado:** ¿Qué operación es básica en las listas enlazadas?

- ✅ a. Eliminación de nodos.
- b. Copia de nodos.
- c. Ordenamiento de nodos.
- d. Compresión de nodos.

## Pregunta 223

**Enunciado:** ¿Qué operación realiza la pila cuando se elimina el último elemento agregado?

- a. Push.
- ✅ b. Pop.
- c. Enqueue.
- d. Peek.

## Pregunta 224

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el programa `InventarioTienda` para administrar los productos de una tienda utilizando un `HashMap<String, Integer>`.

En el mapa:

- La clave representa el nombre del producto.
- El valor representa la cantidad disponible.

Los nombres de los productos se ingresarán como una única palabra, por ejemplo: `manzanas`, `arroz` o `leche`.

**Orden de las entradas**

El programa recibirá los datos en el siguiente orden:

- Un número entero `n`: cantidad inicial de productos.
- `n` pares de datos: nombre del producto y cantidad disponible.
- Nombre de un producto a actualizar y cantidad a sumar o restar.
- Nombre de un producto cuya cantidad se desea consultar.
- Nombre de un producto que se desea eliminar.

**Pasos a implementar**

- Declara e inicializa un `HashMap` llamado `inventario`, con claves de tipo `String` y valores de tipo `Integer`.
- Agrega al mapa los `n` productos iniciales mediante `put()`.
- Verifica si el producto a actualizar existe mediante `containsKey()`. Si existe, actualiza su cantidad sumando el valor recibido. La cantidad puede ser negativa para restar unidades.
- Consulta la cantidad de un producto. Si existe, muestra el mensaje `Cantidad de producto: cantidad`. Si no existe, muestra `El producto 'producto' no está en el inventario.`
- Elimina el producto indicado mediante `remove()`.
- Recorre el inventario y muestra cada producto con su cantidad.

**Importante**

Un `HashMap` no garantiza el orden en que se muestran sus elementos. Por lo tanto, al imprimir el inventario completo, los productos pueden aparecer en un orden diferente al de ingreso.

### Código base

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class InventarioTienda {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Paso 1: crea el HashMap inventario.

        int n = scanner.nextInt();

        // Paso 2: agrega los productos iniciales al inventario.
        for (int i = 0; i < n; i++) {
            String producto = scanner.next();
            int cantidad = scanner.nextInt();

            // Agrega producto y cantidad al inventario.
        }

        // Paso 3: actualiza la cantidad de un producto si existe.
        String productoActualizar = scanner.next();
        int cantidadActualizar = scanner.nextInt();

        // Usa containsKey() y put().

        // Paso 4: muestra la cantidad de un producto.
        String productoMostrar = scanner.next();

        // Si existe, muestra su cantidad.
        // Si no existe, muestra el mensaje indicado.

        // Paso 5: elimina un producto.
        String productoEliminar = scanner.next();

        // Elimina el producto del inventario.

        // Paso 6: muestra todos los productos restantes.
        System.out.println("Inventario completo:");

        // Recorre las entradas del mapa e imprime:
        // producto: cantidad
    }
}
```

### Prueba

```java
System.setIn(new java.io.ByteArrayInputStream("3\nmanzanas 10\nleche 5\narroz 8\nmanzanas 5\nmanzanas\nleche\n".getBytes("UTF-8")));
InventarioTienda.main(new String[0]);
```

```
Cantidad de manzanas: 15
Inventario completo:
arroz: 8
manzanas: 15
```

### Prueba

```java
System.setIn(new java.io.ByteArrayInputStream("2\npan 12\njugo 6\npan -4\npan\njugo\n".getBytes("UTF-8")));
InventarioTienda.main(new String[0]);
```

```
Cantidad de pan: 8
Inventario completo:
pan: 8
```

### Prueba

```java
System.setIn(new java.io.ByteArrayInputStream("2\ncafe 7\nte 4\ncafe 3\nazucar\nte\n".getBytes("UTF-8")));
InventarioTienda.main(new String[0]);
```

```
El producto 'azucar' no está en el inventario.
Inventario completo:
cafe: 10
```

### Prueba

```java
System.setIn(new java.io.ByteArrayInputStream("1\nsal 3\npimienta 2\nsal\npimienta\n".getBytes("UTF-8")));
InventarioTienda.main(new String[0]);
```

```
Cantidad de sal: 3
Inventario completo:
sal: 3
```

### Solución

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class InventarioTienda {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Paso 1: crea el HashMap inventario.
        Map<String, Integer> inventario = new HashMap<>();

        int n = scanner.nextInt();

        // Paso 2: agrega los productos iniciales al inventario.
        for (int i = 0; i < n; i++) {
            String producto = scanner.next();
            int cantidad = scanner.nextInt();

            // Agrega producto y cantidad al inventario.
            inventario.put(producto, cantidad);
        }

        // Paso 3: actualiza la cantidad de un producto si existe.
        String productoActualizar = scanner.next();
        int cantidadActualizar = scanner.nextInt();

        // Usa containsKey() y put().
        if (inventario.containsKey(productoActualizar)) {
            inventario.put(productoActualizar, inventario.get(productoActualizar) + cantidadActualizar);
        }

        // Paso 4: muestra la cantidad de un producto.
        String productoMostrar = scanner.next();

        // Si existe, muestra su cantidad.
        // Si no existe, muestra el mensaje indicado.
        if (inventario.containsKey(productoMostrar)) {
            System.out.println("Cantidad de " + productoMostrar + ": " + inventario.get(productoMostrar));
        } else {
            System.out.println("El producto '" + productoMostrar + "' no está en el inventario.");
        }

        // Paso 5: elimina un producto.
        String productoEliminar = scanner.next();

        // Elimina el producto del inventario.
        inventario.remove(productoEliminar);

        // Paso 6: muestra todos los productos restantes.
        System.out.println("Inventario completo:");

        // Recorre las entradas del mapa e imprime:
        // producto: cantidad
        for (Map.Entry<String, Integer> entrada : inventario.entrySet()) {
            System.out.println(entrada.getKey() + ": " + entrada.getValue());
        }
    }
}
```

## Pregunta 225

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el programa `ListaEstudiantes` para administrar estudiantes y sus calificaciones mediante un `HashMap<String, Integer>`.

En el mapa:

- La clave es el nombre del estudiante.
- El valor es su calificación.

Los nombres se ingresarán como una única palabra, por ejemplo: `Ana`, `Bruno` o `Carla`.

**Orden de las entradas**

- Un número entero `n`: cantidad inicial de estudiantes.
- `n` pares de datos: nombre y calificación de cada estudiante.
- Nombre del estudiante a actualizar y su nueva calificación.
- Nombre del estudiante cuya calificación se desea consultar.
- Nombre del estudiante que se desea eliminar.

**Pasos a implementar**

- Declara e inicializa un `HashMap` llamado `estudiantes`, con claves de tipo `String` y valores de tipo `Integer`.
- Agrega los `n` estudiantes iniciales mediante `put()`.
- Verifica con `containsKey()` si existe el estudiante a actualizar. Si existe, reemplaza su calificación anterior por la nueva calificación recibida.
- Busca al estudiante solicitado. Si existe, muestra su calificación. Si no existe, muestra `El estudiante 'nombre' no está en la lista.`
- Elimina al estudiante indicado mediante `remove()`.
- Recorre el mapa y muestra los estudiantes que permanecen en la lista junto con sus calificaciones.

**Importante**

Un `HashMap` no garantiza el orden en que se muestran sus elementos. Por lo tanto, los estudiantes pueden aparecer en un orden diferente al de ingreso al imprimir la lista completa.

### Código base

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class ListaEstudiantes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Paso 1: crea el HashMap estudiantes.

        int n = scanner.nextInt();

        // Paso 2: agrega los estudiantes iniciales.
        for (int i = 0; i < n; i++) {
            String nombre = scanner.next();
            int calificacion = scanner.nextInt();

            // Agrega el nombre y la calificación al mapa.
        }

        // Paso 3: actualiza la calificación de un estudiante.
        String estudianteActualizar = scanner.next();
        int nuevaCalificacion = scanner.nextInt();

        // Si existe el estudiante, reemplaza su calificación.

        // Paso 4: consulta una calificación.
        String estudianteMostrar = scanner.next();

        // Si existe, muestra su calificación.
        // Si no existe, muestra el mensaje indicado.

        // Paso 5: elimina a un estudiante.
        String estudianteEliminar = scanner.next();

        // Elimina al estudiante del mapa.

        // Paso 6: muestra todos los estudiantes restantes.
        System.out.println("Lista completa de estudiantes y sus calificaciones:");

        // Recorre las entradas e imprime:
        // nombre: calificación
    }
}
```

### Prueba

```java
System.setIn(new java.io.ByteArrayInputStream("3\nAna 8\nBruno 6\nCarla 9\nBruno 10\nBruno\nAna\n".getBytes("UTF-8")));
ListaEstudiantes.main(new String[0]);
```

```
Calificación de Bruno: 10
Lista completa de estudiantes y sus calificaciones:
Bruno: 10
Carla: 9
```

### Prueba

```java
System.setIn(new java.io.ByteArrayInputStream("2\nDiego 7\nElena 9\nDiego 8\nFederico\nElena\n".getBytes("UTF-8")));
ListaEstudiantes.main(new String[0]);
```

```
El estudiante 'Federico' no está en la lista.
Lista completa de estudiantes y sus calificaciones:
Diego: 8
```

### Prueba

```java
System.setIn(new java.io.ByteArrayInputStream("2\nGabriel 5\nHelena 8\nHelena 10\nHelena\nGabriel\n".getBytes("UTF-8")));
ListaEstudiantes.main(new String[0]);
```

```
Calificación de Helena: 10
Lista completa de estudiantes y sus calificaciones:
Helena: 10
```

### Prueba

```java
System.setIn(new java.io.ByteArrayInputStream("1\nIvan 7\nJuan 9\nIvan\nJuan\n".getBytes("UTF-8")));
ListaEstudiantes.main(new String[0]);
```

```
Calificación de Ivan: 7
Lista completa de estudiantes y sus calificaciones:
Ivan: 7
```

### Solución

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class ListaEstudiantes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Paso 1: crea el HashMap estudiantes.
        Map<String, Integer> estudiantes = new HashMap<>();

        int n = scanner.nextInt();

        // Paso 2: agrega los estudiantes iniciales.
        for (int i = 0; i < n; i++) {
            String nombre = scanner.next();
            int calificacion = scanner.nextInt();

            // Agrega el nombre y la calificación al mapa.
            estudiantes.put(nombre, calificacion);
        }

        // Paso 3: actualiza la calificación de un estudiante.
        String estudianteActualizar = scanner.next();
        int nuevaCalificacion = scanner.nextInt();

        // Si existe el estudiante, reemplaza su calificación.
        if (estudiantes.containsKey(estudianteActualizar)) {
            estudiantes.put(estudianteActualizar, nuevaCalificacion);
        }

        // Paso 4: consulta una calificación.
        String estudianteMostrar = scanner.next();

        // Si existe, muestra su calificación.
        // Si no existe, muestra el mensaje indicado.
        if (estudiantes.containsKey(estudianteMostrar)) {
            System.out.println("Calificación de " + estudianteMostrar + ": " + estudiantes.get(estudianteMostrar));
        } else {
            System.out.println("El estudiante '" + estudianteMostrar + "' no está en la lista.");
        }

        // Paso 5: elimina a un estudiante.
        String estudianteEliminar = scanner.next();

        // Elimina al estudiante del mapa.
        estudiantes.remove(estudianteEliminar);

        // Paso 6: muestra todos los estudiantes restantes.
        System.out.println("Lista completa de estudiantes y sus calificaciones:");

        // Recorre las entradas e imprime:
        // nombre: calificación
        for (Map.Entry<String, Integer> entrada : estudiantes.entrySet()) {
            System.out.println(entrada.getKey() + ": " + entrada.getValue());
        }
    }
}
```

## Pregunta 226

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa la clase `AgendaContactos` para administrar una agenda de contactos mediante un `HashMap<String, String>`.

En el mapa:

- La clave es el nombre del contacto.
- El valor es su número de teléfono.

Cada nombre identifica a un único contacto. Por eso, si se agrega nuevamente un nombre existente, su teléfono anterior debe ser reemplazado por el nuevo.

**1. Crear la agenda**

Completa el constructor `AgendaContactos()` para inicializar el `HashMap` que almacenará los contactos.

**2. Agregar o actualizar un contacto**

Completa el método `agregarContacto(String nombre, String telefono)`.

Este método debe:

- Validar que el nombre no sea `null` ni una cadena vacía.
- Agregar el contacto a la agenda.
- Si el nombre ya existe, actualizar su teléfono.

**3. Eliminar un contacto**

Completa el método `eliminarContacto(String nombre)`.

Este método debe eliminar el contacto asociado al nombre recibido. Si el contacto no existe, no debe realizar ninguna acción.

**4. Buscar un contacto**

Completa el método `buscarContacto(String nombre)`.

Este método debe devolver el teléfono asociado al nombre recibido. Si el contacto no existe, debe devolver `null`.

**5. Listar contactos**

Completa el método `listarContactos()`.

Este método debe devolver un `Set<String>` con los nombres de todos los contactos almacenados en la agenda.

**Validación obligatoria**

En los métodos `agregarContacto`, `eliminarContacto` y `buscarContacto`, si el nombre es `null` o está vacío, se debe lanzar la excepción: `throw new IllegalArgumentException("El nombre no puede ser nulo o vacío");`

**Importante:** un `HashMap` no garantiza el orden de los contactos al listarlos.

### Código base

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class AgendaContactos {

    private Map<String, String> contactos;

    public AgendaContactos() {
        // Inicializa el HashMap contactos.
    }

    public void agregarContacto(String nombre, String telefono) {
        // Valida el nombre.
        // Agrega el contacto o actualiza su teléfono si ya existe.
    }

    public void eliminarContacto(String nombre) {
        // Valida el nombre.
        // Elimina el contacto. Si no existe, no realiza ninguna acción.
    }

    public String buscarContacto(String nombre) {
        // Valida el nombre.
        // Devuelve el teléfono o null si el contacto no existe.
        return "";
    }

    public Set<String> listarContactos() {
        // Devuelve los nombres de todos los contactos.
        return null;
    }
}
```

### Prueba

```java
AgendaContactos agenda1 = new AgendaContactos();
agenda1.agregarContacto("Ana", "099123456");
agenda1.agregarContacto("Bruno", "098987654");
System.out.println("Caso 1");
System.out.println(agenda1.buscarContacto("Ana"));
```

```
Caso 1
099123456
```

### Prueba

```java
AgendaContactos agenda2 = new AgendaContactos();
agenda2.agregarContacto("Carla", "091111111");
agenda2.agregarContacto("Carla", "092222222");
agenda2.agregarContacto("Diego", "093333333");
agenda2.eliminarContacto("Diego");
System.out.println("Caso 2");
System.out.println(agenda2.buscarContacto("Carla"));
System.out.println(agenda2.buscarContacto("Diego"));
```

```
Caso 2
092222222
null
```

### Prueba

```java
AgendaContactos agenda3 = new AgendaContactos();
System.out.println("Caso 3");
try {
    agenda3.buscarContacto("");
} catch (IllegalArgumentException e) {
    System.out.println(e.getMessage());
}
```

```
Caso 3
El nombre no puede ser nulo o vacío
```

### Prueba

```java
AgendaContactos agenda4 = new AgendaContactos();
agenda4.agregarContacto("Elena", "094444444");
agenda4.agregarContacto("Bruno", "095555555");
agenda4.agregarContacto("Elena", "096666666");
agenda4.eliminarContacto("Zoe");
System.out.println("Caso 4");
System.out.println(new java.util.TreeSet<String>(agenda4.listarContactos()));
try {
    agenda4.agregarContacto(null, "097777777");
} catch (IllegalArgumentException e) {
    System.out.println(e.getMessage());
}
try {
    agenda4.eliminarContacto("");
} catch (IllegalArgumentException e) {
    System.out.println(e.getMessage());
}
```

```
Caso 4
[Bruno, Elena]
El nombre no puede ser nulo o vacío
El nombre no puede ser nulo o vacío
```

### Solución

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class AgendaContactos {

    private Map<String, String> contactos;

    public AgendaContactos() {
        contactos = new HashMap<>();
    }

    public void agregarContacto(String nombre, String telefono) {
        if (nombre == null || nombre.trim().isEmpty()) {
            throw new IllegalArgumentException("El nombre no puede ser nulo o vacío");
        }
        contactos.put(nombre, telefono);
    }

    public void eliminarContacto(String nombre) {
        if (nombre == null || nombre.trim().isEmpty()) {
            throw new IllegalArgumentException("El nombre no puede ser nulo o vacío");
        }
        contactos.remove(nombre);
    }

    public String buscarContacto(String nombre) {
        if (nombre == null || nombre.trim().isEmpty()) {
            throw new IllegalArgumentException("El nombre no puede ser nulo o vacío");
        }
        return contactos.get(nombre);
    }

    public Set<String> listarContactos() {
        return contactos.keySet();
    }
}
```

## Pregunta 227

**Enunciado:** ¿Cuál es el propósito de una función hash en una tabla hash?

- a. Eliminar colisiones en la tabla.
- b. Transformar datos de una estructura de árbol a una lista.
- c. Ordenar los elementos de la tabla en orden ascendente.
- ✅ d. Generar un índice a partir de una clave para ubicar un valor.

## Pregunta 228

**Enunciado:** ¿Cuál es el resultado de aplicar una operación bit a bit AND entre los números 5 y 3?

- ✅ a. 1
- b. 2
- c. 5
- d. 3

En binario, `5 = 101` y `3 = 011`. AND deja en 1 solo los bits que están en 1 en ambos: `101 AND 011 = 001`, es decir, 1.

## Pregunta 229

**Enunciado:** ¿Cuál es un caso de uso común de las tablas hash?

- a. Ordenar listas de forma rápida.
- b. Realizar operaciones aritméticas complejas.
- ✅ c. Almacenar y buscar contraseñas.
- d. Implementar pilas y colas.

## Pregunta 230

**Enunciado:** ¿Cuál es un método común para manejar colisiones en una tabla hash?

- a. Redimensionamiento de la tabla.
- ✅ b. Encadenamiento.
- c. Desbordamiento de búfer.
- d. Ordenamiento rápido.

## Pregunta 231

**Enunciado:** ¿Cuál es una aplicación común de las operaciones bit a bit?

- ✅ a. Manipular máscaras de bits para controlar permisos.
- b. Ordenar listas de forma eficiente.
- c. Redimensionar estructuras de datos.
- d. Realizar búsquedas en bases de datos.

## Pregunta 232

**Enunciado:** ¿Cuál es una técnica para resolver colisiones en tablas hash?

- ✅ a. Direccionamiento abierto.
- b. Uso de árboles binarios.
- c. Recursión.
- d. Uso de variables temporales.

## Pregunta 233

**Enunciado:** ¿Qué es una tabla hash (hash table)?

- ✅ a. Una estructura de datos que almacena claves y valores.
- b. Un algoritmo para recorrer grafos en profundidad.
- c. Un método de ordenamiento basado en comparaciones.
- d. Un tipo de árbol binario que permite búsquedas rápidas.

## Pregunta 234

**Enunciado:** ¿Qué función principal cumple una tabla hash?

- a. Realizar búsquedas en tiempo lineal.
- ✅ b. Almacenar claves y valores de manera eficiente.
- c. Convertir datos en valores numéricos.
- d. Ordenar los datos de forma secuencial.

## Pregunta 235

**Enunciado:** ¿Qué ocurre cuando dos claves distintas generan el mismo índice en una tabla hash?

- a. Se reordena la tabla para evitar el conflicto.
- b. Se crea una copia de la clave.
- ✅ c. Se produce una colisión.
- d. Los datos se eliminan automáticamente.

## Pregunta 236

**Enunciado:** ¿Qué operación bit a bit se utiliza para invertir todos los bits de un número?

- a. OR
- ✅ b. NOT
- c. AND
- d. XOR

## Pregunta 237

**Enunciado:** ¿Qué problema surge cuando dos claves generan el mismo índice en una tabla hash?

- a. Se reordenan los valores automáticamente.
- b. Los datos se sobrescriben.
- ✅ c. Ocurre una colisión.
- d. Se produce un error de tipo.

## Pregunta 238

**Enunciado:** ¿Qué valor se obtiene al aplicar la operación OR bit a bit entre los números 6 y 3?

- a. 9
- b. 4
- c. 5
- ✅ d. 7

## Pregunta 239

**Tipo:** CodeRunner (Java)

**Enunciado:** En una biblioteca, se necesita ordenar una lista de libros utilizando dos algoritmos de ordenamiento: **Selection Sort** e **Insertion Sort**. Cada libro tiene un título y un año de publicación. El ejercicio consiste en implementar estos dos algoritmos para organizar los libros por año de publicación y comparar los resultados.

Para ello te pedimos des implementación a la clase `GestorBiblioteca` que implementa en dos métodos, ambos algoritmos de ordenamiento.

**Estructura:**

**Clase `Libro`:**

La clase `Libro` tiene los siguientes atributos:

- `titulo` (`String`): El título del libro.
- `anoPublicacion` (`int`): El año en que se publicó el libro.

Constructor para inicializar ambos atributos y un método `toString()` para representar el libro como una cadena de texto en el formato "Título (Año)".

**Clase `GestorBiblioteca`:**

Implementa los siguientes métodos para ordenar la lista de libros:

- `selectionSort(List<Libro> libros)`: Ordena la lista usando el algoritmo Selection Sort.
- `insertionSort(List<Libro> libros)`: Ordena la lista usando el algoritmo Insertion Sort.

Cada método debe ordenar la lista de libros por año de publicación en orden ascendente.

### Código base

```java
import java.util.*;

class Libro {
    private String titulo;
    private int anoPublicacion;

    public Libro(String titulo, int anoPublicacion) {
        this.titulo = titulo;
        this.anoPublicacion = anoPublicacion;
    }

    public String getTitulo() {
        return titulo;
    }

    public int getAnoPublicacion() {
        return anoPublicacion;
    }

    @Override
    public String toString() {
        return titulo + " (" + anoPublicacion + ")";
    }
}

class GestorBiblioteca {

    public List<Libro> selectionSort(List<Libro> libros) {
    //Completa el método, siguiendo la pauta dada, aquí.
    }

    public List<Libro> insertionSort(List<Libro> libros) {
    //Completa el método, siguiendo la pauta dada, aquí.
    }
}
```

### Prueba

```java
GestorBiblioteca gestor = new GestorBiblioteca();
List<Libro> libros = Arrays.asList(
    new Libro("A", 1900),
    new Libro("B", 1950),
    new Libro("C", 2000)
);
List<Libro> sortedBySelection = gestor.selectionSort(libros);
List<Libro> sortedByInsertion = gestor.insertionSort(libros);
System.out.println("Lista ordenada ascendentemente:");
System.out.println("Selection Sort: " + sortedBySelection);
System.out.println("Insertion Sort: " + sortedByInsertion);
```

```
Lista ordenada ascendentemente:
Selection Sort: [A (1900), B (1950), C (2000)]
Insertion Sort: [A (1900), B (1950), C (2000)]
```

### Prueba

```java
GestorBiblioteca gestor = new GestorBiblioteca();
List<Libro> libros = Arrays.asList(new Libro("Solo", 2000));
List<Libro> sortedBySelection = gestor.selectionSort(libros);
List<Libro> sortedByInsertion = gestor.insertionSort(libros);
System.out.println("Lista con un solo elemento:");
System.out.println("Selection Sort: " + sortedBySelection);
System.out.println("Insertion Sort: " + sortedByInsertion);
```

```
Lista con un solo elemento:
Selection Sort: [Solo (2000)]
Insertion Sort: [Solo (2000)]
```

### Prueba

```java
GestorBiblioteca gestor = new GestorBiblioteca();
List<Libro> libros = Arrays.asList(
    new Libro("C", 2000),
    new Libro("B", 1950),
    new Libro("A", 1900)
);
List<Libro> sortedBySelection = gestor.selectionSort(libros);
List<Libro> sortedByInsertion = gestor.insertionSort(libros);
System.out.println("Lista ordenada descendentemente:");
System.out.println("Selection Sort: " + sortedBySelection);
System.out.println("Insertion Sort: " + sortedByInsertion);
```

```
Lista ordenada descendentemente:
Selection Sort: [A (1900), B (1950), C (2000)]
Insertion Sort: [A (1900), B (1950), C (2000)]
```

### Prueba

```java
GestorBiblioteca gestor = new GestorBiblioteca();
List<Libro> paraSelection = new ArrayList<>(Arrays.asList(
    new Libro("D", 1985),
    new Libro("A", 1605),
    new Libro("C", 1967),
    new Libro("B", 1813)
));
List<Libro> paraInsertion = new ArrayList<>(paraSelection);
System.out.println("Lista desordenada:");
System.out.println("Selection Sort: " + gestor.selectionSort(paraSelection));
System.out.println("Insertion Sort: " + gestor.insertionSort(paraInsertion));
```

```
Lista desordenada:
Selection Sort: [A (1605), B (1813), C (1967), D (1985)]
Insertion Sort: [A (1605), B (1813), C (1967), D (1985)]
```

### Solución

```java
import java.util.*;

class Libro {
    private String titulo;
    private int anoPublicacion;

    public Libro(String titulo, int anoPublicacion) {
        this.titulo = titulo;
        this.anoPublicacion = anoPublicacion;
    }

    public String getTitulo() {
        return titulo;
    }

    public int getAnoPublicacion() {
        return anoPublicacion;
    }

    @Override
    public String toString() {
        return titulo + " (" + anoPublicacion + ")";
    }
}

class GestorBiblioteca {

    public List<Libro> selectionSort(List<Libro> libros) {
        List<Libro> lista = new ArrayList<>(libros);
        for (int i = 0; i < lista.size() - 1; i++) {
            int min = i;
            for (int j = i + 1; j < lista.size(); j++) {
                if (lista.get(j).getAnoPublicacion() < lista.get(min).getAnoPublicacion()) {
                    min = j;
                }
            }
            Libro temp = lista.get(i);
            lista.set(i, lista.get(min));
            lista.set(min, temp);
        }
        return lista;
    }

    public List<Libro> insertionSort(List<Libro> libros) {
        List<Libro> lista = new ArrayList<>(libros);
        for (int i = 1; i < lista.size(); i++) {
            Libro actual = lista.get(i);
            int j = i - 1;
            while (j >= 0 && lista.get(j).getAnoPublicacion() > actual.getAnoPublicacion()) {
                lista.set(j + 1, lista.get(j));
                j--;
            }
            lista.set(j + 1, actual);
        }
        return lista;
    }
}
```

## Pregunta 240

**Enunciado:** ¿Cuál es la principal desventaja del algoritmo de ordenamiento por selección (selection sort)?

- a. Depende de la recursión para su implementación.
- b. Necesita mucha memoria adicional.
- ✅ c. Tiene una complejidad de O(n²) en todos los casos.
- d. Es ineficiente para ordenar pequeñas listas.

## Pregunta 241

**Enunciado:** ¿Cuál es una característica clave del algoritmo Mergesort?

- a. Requiere una lista auxiliar para ordenar.
- b. Es un algoritmo ineficiente para grandes volúmenes de datos.
- ✅ c. Divide el arreglo en mitades y luego las combina en orden.
- d. Tiene una complejidad O(n²) en el peor de los casos.

## Pregunta 242

**Enunciado:** ¿Cuál es una característica clave del algoritmo Mergesort?

- a. Utiliza un pivote para dividir el arreglo.
- b. No utiliza memoria adicional.
- c. Tiene una complejidad de O(n²).
- ✅ d. Es un algoritmo estable.

## Pregunta 243

**Enunciado:** ¿Cuál es una ventaja del algoritmo Heapsort?

- a. Tiene un tiempo de ejecución constante.
- b. Es un algoritmo estable.
- c. Utiliza recursión para dividir el arreglo en mitades.
- ✅ d. Siempre tiene una complejidad de O(n log n).

## Pregunta 244

**Enunciado:** ¿Cuál es una ventaja del algoritmo Quicksort?

- a. Es un algoritmo estable.
- b. No utiliza recursión.
- ✅ c. Tiene una complejidad promedio de O(n log n).
- d. Siempre es más rápido que otros algoritmos.

## Pregunta 245

**Enunciado:** ¿Qué caracteriza al algoritmo de ordenamiento por inserción (insertion sort)?

- a. Se selecciona el menor elemento y se coloca al principio.
- b. Se construye un montón para organizar los elementos.
- ✅ c. Los elementos se insertan uno a uno en su posición correcta.
- d. Se divide el arreglo en subarreglos y luego se combinan.

## Pregunta 246

**Enunciado:** ¿Qué caracteriza al algoritmo de ordenamiento por inserción (insertion sort)?

- ✅ a. Funciona bien en listas casi ordenadas.
- b. Utiliza un pivote para dividir el arreglo en dos partes.
- c. Tiene una complejidad de O(n log n) en todos los casos.
- d. Necesita más memoria adicional que otros algoritmos de ordenamiento.

## Pregunta 247

**Enunciado:** ¿Qué técnica utiliza el algoritmo Quicksort para ordenar un arreglo?

- a. Insertar los elementos en su posición correcta uno por uno.
- ✅ b. Seleccionar un pivote y dividir el arreglo en dos partes.
- c. Construir un montón y extraer los elementos en orden.
- d. Seleccionar el elemento más pequeño y colocarlo al inicio.

## Pregunta 248

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa la clase `ArbolBinario` para gestionar un árbol binario de búsqueda.

La clase `Nodo` ya está implementada. Cada nodo almacena:

- Un valor entero.
- Una referencia al nodo izquierdo.
- Una referencia al nodo derecho.

En un árbol binario de búsqueda:

- Los valores menores que un nodo se ubican a su izquierda.
- Los valores mayores que un nodo se ubican a su derecha.
- Los valores repetidos no se agregan al árbol.

**1. Crear el árbol**

El constructor de `ArbolBinario` debe inicializar la raíz del árbol en `null`, ya que al comienzo no existen nodos.

**2. Insertar valores**

Completa el método `insertar(int valor)` y el método auxiliar `insertarRec(Nodo nodo, int valor)`.

Para insertar un valor:

- Si el nodo recibido es `null`, crea y devuelve un nuevo nodo con el valor recibido.
- Si el valor es menor que el valor del nodo actual, continúa la búsqueda por la izquierda.
- Si el valor es mayor que el valor del nodo actual, continúa la búsqueda por la derecha.
- Finalmente, devuelve el nodo actual.

Por ejemplo, al insertar los valores 50, 30, 70, 20 y 40, el árbol queda organizado de acuerdo con esas reglas.

**3. Recorrido en preorden**

Completa el método `preOrden(Nodo nodo)`.

El recorrido en preorden se realiza siempre en este orden:

- Mostrar el valor del nodo actual.
- Recorrer el subárbol izquierdo.
- Recorrer el subárbol derecho.

Para el árbol del ejemplo, la salida esperada es: `50 30 20 40 70`

No agregues una clase `main`. La corrección utilizará casos de prueba externos.

### Código base

```java
class Nodo {
    int valor;
    Nodo izquierdo;
    Nodo derecho;

    public Nodo(int valor) {
        this.valor = valor;
        izquierdo = null;
        derecho = null;
    }
}

class ArbolBinario {
    Nodo raiz;

    public ArbolBinario() {
        // Inicializa la raíz del árbol en null.
    }

    public void insertar(int valor) {
        // Actualiza la raíz utilizando insertarRec().
    }

    Nodo insertarRec(Nodo nodo, int valor) {
        // Si el nodo es null, crea un nuevo Nodo y devuélvelo.

        // Si valor es menor, continúa por la izquierda.
        // Si valor es mayor, continúa por la derecha.

        // Devuelve el nodo actual.
        return null;
    }

    public void preOrden(Nodo nodo) {
        // Si el nodo no es null:
        // 1. Muestra su valor.
        // 2. Recorre el subárbol izquierdo.
        // 3. Recorre el subárbol derecho.
    }
}
```

### Prueba

```java
ArbolBinario arbol1 = new ArbolBinario();
arbol1.insertar(50);
arbol1.insertar(30);
arbol1.insertar(70);
arbol1.insertar(20);
arbol1.insertar(40);

System.out.print("Caso 1: ");
arbol1.preOrden(arbol1.raiz);
System.out.println();
```

```
Caso 1: 50 30 20 40 70
```

### Prueba

```java
ArbolBinario arbol2 = new ArbolBinario();
arbol2.insertar(10);
arbol2.insertar(5);
arbol2.insertar(15);
arbol2.insertar(10);

System.out.print("Caso 2: ");
arbol2.preOrden(arbol2.raiz);
System.out.println();
```

```
Caso 2: 10 5 15
```

### Prueba

```java
ArbolBinario arbol3 = new ArbolBinario();
arbol3.insertar(25);

System.out.print("Caso 3: ");
arbol3.preOrden(arbol3.raiz);
```

```
Caso 3: 25
```

### Solución

```java
class Nodo {
    int valor;
    Nodo izquierdo;
    Nodo derecho;

    public Nodo(int valor) {
        this.valor = valor;
        izquierdo = null;
        derecho = null;
    }
}

class ArbolBinario {
    Nodo raiz;

    public ArbolBinario() {
        raiz = null;
    }

    public void insertar(int valor) {
        raiz = insertarRec(raiz, valor);
    }

    Nodo insertarRec(Nodo nodo, int valor) {
        if (nodo == null) {
            return new Nodo(valor);
        }

        if (valor < nodo.valor) {
            nodo.izquierdo = insertarRec(nodo.izquierdo, valor);
        } else if (valor > nodo.valor) {
            nodo.derecho = insertarRec(nodo.derecho, valor);
        }

        return nodo;
    }

    public void preOrden(Nodo nodo) {
        if (nodo != null) {
            System.out.print(nodo.valor + " ");
            preOrden(nodo.izquierdo);
            preOrden(nodo.derecho);
        }
    }
}
```

## Pregunta 249

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa la clase `InventarioProductos` para administrar productos mediante un Árbol Binario de Búsqueda (BST).

Cada producto tiene:

- Un código entero único.
- Un nombre.

El árbol se organiza según el código del producto:

- Los códigos menores se ubican a la izquierda.
- Los códigos mayores se ubican a la derecha.

La clase interna `NodoProducto` ya está implementada. No es necesario modificarla.

**1. Agregar un producto**

Completa el método `agregarProducto(int codigo, String nombre)`.

Este método debe:

- Validar que el código no sea negativo y que el nombre no sea `null` ni vacío.
- Agregar el producto respetando las reglas del árbol binario de búsqueda.
- Si ya existe un producto con el mismo código, actualizar únicamente su nombre.

Si el código es negativo o el nombre es nulo o vacío, lanza la excepción: `throw new IllegalArgumentException("Código inválido o nombre vacío.");`

**2. Buscar un producto**

Completa el método `buscarProducto(int codigo)`.

Este método debe devolver el nombre asociado al código recibido. Si no existe un producto con ese código, debe devolver `null`.

**3. Listar productos ordenados**

Completa el método `listarProductos()` y su método auxiliar.

El método debe mostrar todos los productos ordenados de menor a mayor código. Para lograrlo, realiza un recorrido en orden:

- Recorre el subárbol izquierdo.
- Muestra el nodo actual.
- Recorre el subárbol derecho.

Cada producto debe mostrarse con el formato: `Código: 10, Nombre: Teclado`

Si el inventario está vacío, debe mostrar: `El inventario está vacío.`

**4. Obtener el producto con código mínimo y máximo**

- `productoConCodigoMinimo()`: devuelve el nombre del producto con el código más bajo.
- `productoConCodigoMaximo()`: devuelve el nombre del producto con el código más alto.

Si el inventario está vacío, ambos métodos deben devolver `null`.

No agregues una clase `main`. La corrección utilizará casos de prueba externos.

### Código base

```java
public class InventarioProductos {

    private class NodoProducto {
        int codigo;
        String nombre;
        NodoProducto izquierdo;
        NodoProducto derecho;

        public NodoProducto(int codigo, String nombre) {
            this.codigo = codigo;
            this.nombre = nombre;
            izquierdo = null;
            derecho = null;
        }
    }

    private NodoProducto raiz;

    public InventarioProductos() {
        // Inicializa la raíz en null.
    }

    public void agregarProducto(int codigo, String nombre) {
        // Valida los datos.
        // Agrega el producto o actualiza su nombre si el código ya existe.
    }

    public String buscarProducto(int codigo) {
        // Busca el producto por código.
        // Devuelve el nombre o null si no existe.
        return "";
    }

    public void listarProductos() {
        // Si el inventario está vacío, muestra el mensaje indicado.
        // De lo contrario, llama al método auxiliar.
    }

    private void listarEnOrden(NodoProducto nodo) {
        // Recorre: izquierda, nodo actual, derecha.
    }

    public String productoConCodigoMinimo() {
        // Recorre hacia la izquierda hasta encontrar el código menor.
        return "";
    }

    public String productoConCodigoMaximo() {
        // Recorre hacia la derecha hasta encontrar el código mayor.
        return "";
    }
}
```

### Prueba

```java
InventarioProductos inventario1 = new InventarioProductos();

inventario1.agregarProducto(50, "Monitor");
inventario1.agregarProducto(20, "Teclado");
inventario1.agregarProducto(80, "Mouse");

System.out.println("Caso 1");
System.out.println(inventario1.buscarProducto(20));
System.out.println(inventario1.buscarProducto(10));
```

```
Caso 1
Teclado
null
```

### Prueba

```java
InventarioProductos inventario2 = new InventarioProductos();

inventario2.agregarProducto(10, "Teclado antiguo");
inventario2.agregarProducto(10, "Teclado mecánico");

System.out.println("Caso 2");
System.out.println(inventario2.buscarProducto(10));
```

```
Caso 2
Teclado mecánico
```

### Prueba

```java
InventarioProductos inventario3 = new InventarioProductos();

inventario3.agregarProducto(50, "Monitor");
inventario3.agregarProducto(20, "Teclado");
inventario3.agregarProducto(80, "Mouse");
inventario3.agregarProducto(10, "Cable");

System.out.println("Caso 3");
inventario3.listarProductos();
System.out.println("Mínimo: " + inventario3.productoConCodigoMinimo());
System.out.println("Máximo: " + inventario3.productoConCodigoMaximo());
```

```
Caso 3
Código: 10, Nombre: Cable
Código: 20, Nombre: Teclado
Código: 50, Nombre: Monitor
Código: 80, Nombre: Mouse
Mínimo: Cable
Máximo: Mouse
```

### Prueba

```java
InventarioProductos inventario4 = new InventarioProductos();

System.out.println("Caso 4");
inventario4.listarProductos();
System.out.println("Mínimo: " + inventario4.productoConCodigoMinimo());
System.out.println("Máximo: " + inventario4.productoConCodigoMaximo());
try {
    inventario4.agregarProducto(-1, "Parlante");
} catch (IllegalArgumentException e) {
    System.out.println(e.getMessage());
}
try {
    inventario4.agregarProducto(5, "");
} catch (IllegalArgumentException e) {
    System.out.println(e.getMessage());
}
inventario4.listarProductos();
```

```
Caso 4
El inventario está vacío.
Mínimo: null
Máximo: null
Código inválido o nombre vacío.
Código inválido o nombre vacío.
El inventario está vacío.
```

### Prueba

```java
InventarioProductos inventario5 = new InventarioProductos();

inventario5.agregarProducto(50, "Monitor");
inventario5.agregarProducto(80, "Mouse");
inventario5.agregarProducto(90, "Webcam");
inventario5.agregarProducto(60, "Parlante");
inventario5.agregarProducto(60, "Auriculares");

System.out.println("Caso 5");
inventario5.listarProductos();
System.out.println("Mínimo: " + inventario5.productoConCodigoMinimo());
System.out.println("Máximo: " + inventario5.productoConCodigoMaximo());
```

```
Caso 5
Código: 50, Nombre: Monitor
Código: 60, Nombre: Auriculares
Código: 80, Nombre: Mouse
Código: 90, Nombre: Webcam
Mínimo: Monitor
Máximo: Webcam
```

### Solución

```java
public class InventarioProductos {

    private class NodoProducto {
        int codigo;
        String nombre;
        NodoProducto izquierdo;
        NodoProducto derecho;

        public NodoProducto(int codigo, String nombre) {
            this.codigo = codigo;
            this.nombre = nombre;
            izquierdo = null;
            derecho = null;
        }
    }

    private NodoProducto raiz;

    public InventarioProductos() {
        raiz = null;
    }

    public void agregarProducto(int codigo, String nombre) {
        if (codigo < 0 || nombre == null || nombre.trim().isEmpty()) {
            throw new IllegalArgumentException("Código inválido o nombre vacío.");
        }
        if (raiz == null) {
            raiz = new NodoProducto(codigo, nombre);
            return;
        }
        NodoProducto actual = raiz;
        while (true) {
            if (codigo == actual.codigo) {
                actual.nombre = nombre;
                return;
            } else if (codigo < actual.codigo) {
                if (actual.izquierdo == null) {
                    actual.izquierdo = new NodoProducto(codigo, nombre);
                    return;
                }
                actual = actual.izquierdo;
            } else {
                if (actual.derecho == null) {
                    actual.derecho = new NodoProducto(codigo, nombre);
                    return;
                }
                actual = actual.derecho;
            }
        }
    }

    public String buscarProducto(int codigo) {
        NodoProducto actual = raiz;
        while (actual != null) {
            if (codigo == actual.codigo) {
                return actual.nombre;
            }
            actual = (codigo < actual.codigo) ? actual.izquierdo : actual.derecho;
        }
        return null;
    }

    public void listarProductos() {
        if (raiz == null) {
            System.out.println("El inventario está vacío.");
        } else {
            listarEnOrden(raiz);
        }
    }

    private void listarEnOrden(NodoProducto nodo) {
        if (nodo != null) {
            listarEnOrden(nodo.izquierdo);
            System.out.println("Código: " + nodo.codigo + ", Nombre: " + nodo.nombre);
            listarEnOrden(nodo.derecho);
        }
    }

    public String productoConCodigoMinimo() {
        if (raiz == null) {
            return null;
        }
        NodoProducto actual = raiz;
        while (actual.izquierdo != null) {
            actual = actual.izquierdo;
        }
        return actual.nombre;
    }

    public String productoConCodigoMaximo() {
        if (raiz == null) {
            return null;
        }
        NodoProducto actual = raiz;
        while (actual.derecho != null) {
            actual = actual.derecho;
        }
        return actual.nombre;
    }
}
```

## Pregunta 250

**Enunciado:** ¿Cuál de las siguientes es una característica de la búsqueda binaria?

- a. Siempre devuelve el primer elemento encontrado.
- b. Se aplica a cualquier tipo de estructura de datos.
- ✅ c. Requiere que los datos estén ordenados previamente.
- d. Realiza búsquedas en tiempo lineal.

## Pregunta 251

**Enunciado:** ¿Cuál de las siguientes operaciones NO es común en un árbol binario?

- ✅ a. Actualización.
- b. Inserción.
- c. Búsqueda.
- d. Eliminación.

## Pregunta 252

**Enunciado:** ¿Cuál es la característica principal de un Árbol de Búsqueda Binaria (BST)?

- a. Los nodos no tienen una relación de orden específica.
- b. Los valores de los nodos a la derecha son mayores que los del nodo raíz.
- ✅ c. Los valores de los nodos a la izquierda son menores que los del nodo raíz.
- d. Los valores de los nodos a la izquierda son mayores que los del nodo raíz.

## Pregunta 253

**Enunciado:** ¿Cuál es una característica de la búsqueda binaria?

- a. Es menos eficiente que la búsqueda secuencial.
- b. Funciona en listas no ordenadas.
- ✅ c. Divide el conjunto de datos en mitades.
- d. Requiere un árbol binario.

## Pregunta 254

**Enunciado:** ¿Cuál es una característica de un árbol binario?

- a. Todos los nodos están organizados en niveles iguales.
- b. Tiene exactamente tres hijos por nodo.
- c. Los nodos pueden tener cualquier número de hijos.
- ✅ d. Tiene un nodo raíz y un máximo de dos hijos por nodo.

## Pregunta 255

**Enunciado:** ¿Cuál es una definición adecuada de un árbol en estructuras de datos?

- a. Una pila con nodos jerárquicos.
- b. Un conjunto de nodos conectados en orden secuencial.
- c. Una lista enlazada con múltiples niveles de nodos.
- ✅ d. Una estructura jerárquica donde cada nodo tiene cero o más hijos.

## Pregunta 256

**Enunciado:** ¿Cuál es una ventaja de usar un árbol balanceado?

- a. Permite la eliminación de nodos de manera más eficiente.
- ✅ b. Reduce la profundidad del árbol, mejorando el tiempo de búsqueda.
- c. Simplifica la inserción de nodos.
- d. Aumenta el tamaño del árbol para manejar más datos.

## Pregunta 257

**Enunciado:** ¿Qué define un Árbol de Búsqueda Binaria (BST)?

- a. Cada nodo tiene una clave única.
- b. Los nodos se ordenan de forma secuencial.
- c. Los nodos se insertan en orden aleatorio.
- ✅ d. Los valores a la izquierda son menores que el nodo raíz.

## Pregunta 258

**Enunciado:** ¿Qué es un árbol binario?

- a. Un árbol que almacena datos en orden secuencial.
- b. Un árbol donde los nodos solo pueden almacenar números binarios.
- ✅ c. Un árbol donde cada nodo tiene como máximo dos hijos.
- d. Un árbol que no tiene nodos repetidos.

## Pregunta 259

**Enunciado:** ¿Qué operación NO es básica en un árbol binario?

- a. Eliminación.
- ✅ b. Ordenamiento por burbuja.
- c. Búsqueda.
- d. Inserción.

## Pregunta 260

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa los métodos de recorrido de un árbol binario en la clase `ArbolRecorridos`.

La clase `TreeNode` y el método `main` ya están implementados. No debes modificarlos. Tu tarea consiste únicamente en completar los métodos `preorder`, `inorder` y `postorder`.

**Árbol creado por el programa**

El programa solicita cinco valores y crea el siguiente árbol:

- Raíz
- Hijo izquierdo de la raíz
- Hijo derecho de la raíz
- Izquierdo del hijo izquierdo
- Derecho del hijo izquierdo

Por ejemplo, si se ingresan los valores `10 5 15 3 7`, el árbol queda de esta forma:

```
      10
     /  \
    5    15
   / \
  3   7
```

**Recorridos a implementar**

**Preorden:** `preorder(TreeNode node)`. Debe recorrer el árbol en este orden:

- Mostrar el nodo actual.
- Recorrer el subárbol izquierdo.
- Recorrer el subárbol derecho.

**En orden:** `inorder(TreeNode node)`. Debe recorrer el árbol en este orden:

- Recorrer el subárbol izquierdo.
- Mostrar el nodo actual.
- Recorrer el subárbol derecho.

**Posorden:** `postorder(TreeNode node)`. Debe recorrer el árbol en este orden:

- Recorrer el subárbol izquierdo.
- Recorrer el subárbol derecho.
- Mostrar el nodo actual.

En los tres métodos, si el nodo recibido es `null`, el método debe finalizar sin mostrar ningún valor.

**Resultado esperado para el ejemplo**

```
Preorden: 10 5 3 7 15
En orden: 3 5 7 10 15
Posorden: 3 7 5 15 10
```

### Código base

```java
import java.util.Scanner;

class TreeNode {
    int value;
    TreeNode left;
    TreeNode right;

    TreeNode(int value) {
        this.value = value;
        left = null;
        right = null;
    }
}

public class ArbolRecorridos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        TreeNode root = new TreeNode(scanner.nextInt());
        root.left = new TreeNode(scanner.nextInt());
        root.right = new TreeNode(scanner.nextInt());
        root.left.left = new TreeNode(scanner.nextInt());
        root.left.right = new TreeNode(scanner.nextInt());

        System.out.print("Preorden: ");
        preorder(root);
        System.out.println();

        System.out.print("En orden: ");
        inorder(root);
        System.out.println();

        System.out.print("Posorden: ");
        postorder(root);

        scanner.close();
    }

    public static void preorder(TreeNode node) {
        // Si el nodo es null, finaliza.
        // Muestra el nodo actual.
        // Recorre izquierda y luego derecha.
    }

    public static void inorder(TreeNode node) {
        // Si el nodo es null, finaliza.
        // Recorre izquierda, muestra el nodo y recorre derecha.
    }

    public static void postorder(TreeNode node) {
        // Si el nodo es null, finaliza.
        // Recorre izquierda, derecha y luego muestra el nodo.
    }
}
```

### Prueba

```java
System.setIn(new java.io.ByteArrayInputStream("10\n5\n15\n3\n7\n".getBytes("UTF-8")));
ArbolRecorridos.main(new String[0]);
```

```
Preorden: 10 5 3 7 15
En orden: 3 5 7 10 15
Posorden: 3 7 5 15 10
```

### Prueba

```java
System.setIn(new java.io.ByteArrayInputStream("20\n10\n30\n5\n15\n".getBytes("UTF-8")));
ArbolRecorridos.main(new String[0]);
```

```
Preorden: 20 10 5 15 30
En orden: 5 10 15 20 30
Posorden: 5 15 10 30 20
```

### Prueba

```java
System.setIn(new java.io.ByteArrayInputStream("8\n4\n12\n2\n6\n".getBytes("UTF-8")));
ArbolRecorridos.main(new String[0]);
```

```
Preorden: 8 4 2 6 12
En orden: 2 4 6 8 12
Posorden: 2 6 4 12 8
```

### Prueba

```java
System.setIn(new java.io.ByteArrayInputStream("1\n2\n3\n4\n5\n".getBytes("UTF-8")));
ArbolRecorridos.main(new String[0]);
```

```
Preorden: 1 2 4 5 3
En orden: 4 2 5 1 3
Posorden: 4 5 2 3 1
```

### Solución

```java
import java.util.Scanner;

class TreeNode {
    int value;
    TreeNode left;
    TreeNode right;

    TreeNode(int value) {
        this.value = value;
        left = null;
        right = null;
    }
}

public class ArbolRecorridos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        TreeNode root = new TreeNode(scanner.nextInt());
        root.left = new TreeNode(scanner.nextInt());
        root.right = new TreeNode(scanner.nextInt());
        root.left.left = new TreeNode(scanner.nextInt());
        root.left.right = new TreeNode(scanner.nextInt());

        System.out.print("Preorden: ");
        preorder(root);
        System.out.println();

        System.out.print("En orden: ");
        inorder(root);
        System.out.println();

        System.out.print("Posorden: ");
        postorder(root);

        scanner.close();
    }

    public static void preorder(TreeNode node) {
        if (node == null) {
            return;
        }
        System.out.print(node.value + " ");
        preorder(node.left);
        preorder(node.right);
    }

    public static void inorder(TreeNode node) {
        if (node == null) {
            return;
        }
        inorder(node.left);
        System.out.print(node.value + " ");
        inorder(node.right);
    }

    public static void postorder(TreeNode node) {
        if (node == null) {
            return;
        }
        postorder(node.left);
        postorder(node.right);
        System.out.print(node.value + " ");
    }
}
```

## Pregunta 261

**Enunciado:** ¿Cuál es el orden correcto de los nodos en un recorrido en profundidad (DFS) en un árbol binario?

- ✅ a. Visitar el nodo raíz, explorar los subárboles izquierdo y derecho en profundidad.
- b. Visitar los nodos nivel por nivel.
- c. Explorar todos los nodos en un nivel antes de avanzar al siguiente.
- d. Comenzar por los nodos hoja y moverse hacia la raíz.

## Pregunta 262

**Enunciado:** ¿Cuál es el orden correcto de los nodos en un recorrido preorden (preorder) de un árbol binario?

- a. Recorrer subárbol izquierdo, recorrer subárbol derecho, visitar nodo raíz.
- ✅ b. Visitar nodo raíz, recorrer subárbol izquierdo, recorrer subárbol derecho.
- c. Recorrer subárbol izquierdo, visitar nodo raíz, recorrer subárbol derecho.
- d. Visitar nodo raíz, recorrer subárbol derecho, recorrer subárbol izquierdo.

## Pregunta 263

**Enunciado:** ¿Cuál es la principal característica del recorrido en anchura (BFS)?

- a. Los nodos se visitan en profundidad antes de retroceder.
- b. Siempre se exploran primero los nodos más lejanos de la raíz.
- c. Solo funciona en árboles binarios.
- ✅ d. Se recorren los nodos nivel por nivel.

## Pregunta 264

**Enunciado:** ¿Cuál es la principal diferencia entre un recorrido en inorden (inorder) y uno en posorden (postorder)?

- a. En posorden, se visitan primero los nodos hoja, mientras que en inorden no.
- b. En posorden, se visitan los nodos por niveles, y en inorden, en profundidad.
- c. En inorden, se visita primero el subárbol izquierdo; en posorden, primero el derecho.
- ✅ d. En inorden, se visita primero el nodo raíz; en posorden, el nodo raíz es el último.

> Es la respuesta que marca Moodle, pero no es exacta: en inorden la raíz se visita entre los dos subárboles (izquierdo, raíz, derecho), no primero; primero es en preorden. Lo correcto es que en posorden la raíz es la última.

## Pregunta 265

**Enunciado:** ¿Cuál es una característica del recorrido en posorden (postorder) en un árbol?

- a. Se visitan los nodos raíz primero.
- b. Se recorren los nodos en orden de inserción.
- c. Se visitan todos los nodos desde el nivel superior al inferior.
- ✅ d. Los subárboles se recorren antes de visitar el nodo raíz.

## Pregunta 266

**Enunciado:** ¿Qué define un recorrido en orden (inorder) en un árbol binario?

- a. Se visita primero el nodo raíz y luego los subárboles.
- b. Se recorren los subárboles y luego se visita la raíz.
- ✅ c. Se visita el subárbol izquierdo, luego el nodo raíz y finalmente el subárbol derecho.
- d. Se recorre primero el subárbol derecho y luego el izquierdo.

## Pregunta 267

**Enunciado:** ¿Qué define un recorrido en preorden (preorder)?

- a. Se recorren los nodos nivel por nivel.
- b. Se recorren primero los subárboles antes de visitar el nodo raíz.
- c. Se visita primero el subárbol izquierdo, luego el nodo raíz y el subárbol derecho.
- ✅ d. Se visita primero el nodo raíz, luego los subárboles izquierdo y derecho.

## Pregunta 268

**Enunciado:** ¿Cuál es una diferencia clave entre el patrón Factory Method y Abstract Factory?

- a. Factory Method requiere clases concretas, mientras Abstract Factory no.
- b. Factory Method utiliza clonación de objetos, mientras Abstract Factory no.
- c. Factory Method es un patrón estructural, mientras Abstract Factory es creacional.
- ✅ d. Factory Method crea un único objeto, mientras Abstract Factory crea familias de objetos relacionados.

## Pregunta 269

**Enunciado:** ¿Cuál es la función principal del patrón Abstract Factory?

- ✅ a. Proveer una interfaz para crear familias de objetos relacionados o dependientes.
- b. Garantizar la existencia de una sola instancia de una clase.
- c. Proveer un mecanismo para clonar objetos existentes.
- d. Construir objetos complejos utilizando un proceso paso a paso.

## Pregunta 270

**Enunciado:** ¿Qué patrón de diseño se recomienda para sistemas de archivos jerárquicos?

- ✅ a. Composite
- b. Adapter
- c. Decorator
- d. Facade

## Pregunta 271

**Enunciado:** ¿Qué tipo de proxy retrasa la creación de un objeto hasta que sea necesario?

- a. Proxy de registro.
- b. Proxy remoto.
- ✅ c. Proxy virtual.
- d. Proxy de protección.

## Pregunta 272

**Enunciado:** Si una aplicación necesita generar múltiples configuraciones de un mismo objeto sin duplicar código, ¿qué patrón es más adecuado?

- a. Abstract Factory
- ✅ b. Builder
- c. Singleton
- d. Prototype

## Pregunta 273

**Enunciado:** ¿Cuál es una ventaja principal del patrón Builder?

- ✅ a. Separa el proceso de construcción de la representación del objeto.
- b. Permite crear múltiples instancias únicas.
- c. Aumenta la velocidad de clonación de objetos existentes.
- d. Simplifica la jerarquía de herencia en la creación de objetos.

## Pregunta 274

**Enunciado:** ¿Cuál es el propósito principal del patrón Adapter?

- a. Agregar funcionalidades adicionales a un objeto sin usar herencia.
- b. Gestionar estructuras jerárquicas como sistemas de archivos.
- ✅ c. Permitir que clases con interfaces incompatibles trabajen juntas.
- d. Simplificar una interfaz compleja para los clientes.

## Pregunta 275

**Enunciado:** ¿Cuál es una ventaja clave del patrón Proxy?

- a. Mejora el diseño solo en sistemas pequeños.
- b. Aumenta la dependencia entre cliente y objeto real.
- c. Incrementa la complejidad del sistema.
- ✅ d. Permite el acceso a funcionalidades adicionales sin cambios en el cliente.

## Pregunta 276

**Enunciado:** ¿Cuál es el propósito principal del patrón Singleton?

- a. Proporcionar una interfaz para construir objetos paso a paso.
- ✅ b. Garantizar que una clase tenga una única instancia.
- c. Crear instancias de diferentes subclases de manera dinámica.
- d. Permitir la creación de múltiples instancias de una clase.

## Pregunta 277

**Enunciado:** ¿Cuál es la operación permitida en una pila?

- a. Búsqueda binaria
- ✅ b. LIFO (Last In, First Out)
- c. Acceso aleatorio
- d. FIFO (First In, First Out)

## Pregunta 278

**Enunciado:** ¿Qué problema busca maximizar el valor total sin exceder una capacidad límite?

- ✅ a. Problema de la Mochila
- b. Problema del Clic Máximo
- c. Problema de Caminos Mínimos
- d. Problema del Viajante

## Pregunta 279

**Enunciado:** ¿Cuál es el requisito para usar la búsqueda binaria clásica?

- a. La lista debe ser circular
- b. La lista debe ser no ordenada
- ✅ c. La lista debe ser ordenada
- d. La lista debe contener números positivos

## Pregunta 280

**Enunciado:** ¿Cuál es un beneficio del patrón Facade al trabajar con sistemas legacy?

- ✅ a. Simplifica la interacción entre el sistema antiguo y nuevas aplicaciones.
- b. Aumenta la velocidad del sistema.
- c. Cambia completamente la lógica interna del sistema.
- d. Permite acceso directo a todos los subsistemas.

## Pregunta 281

**Enunciado:** ¿Cuál es un uso común del patrón DAO?

- a. Proveer representaciones virtuales de objetos costosos.
- b. Controlar el acceso remoto a un sistema.
- ✅ c. Abstraer la lógica de negocio de la interacción con bases de datos.
- d. Simplificar la integración de sistemas legacy.

## Pregunta 282

**Enunciado:** ¿Cuál es la característica de un árbol binario de búsqueda (BST)?

- a. Los valores se almacenan en orden descendente.
- b. Todos los nodos tienen exactamente dos hijos.
- ✅ c. Los valores en el subárbol izquierdo son menores que la raíz.
- d. No permite duplicados en ningún caso.

## Pregunta 283

**Enunciado:** ¿Cuál es una característica principal de una lista enlazada?

- a. Sus elementos tienen índices consecutivos.
- ✅ b. Cada nodo contiene un puntero al siguiente nodo.
- c. Solo puede contener elementos enteros.
- d. Los datos se almacenan en un arreglo contiguo.

## Pregunta 284

**Enunciado:** ¿Cuál de los siguientes no es un tipo de Proxy?

- ✅ a. Proxy de distribución.
- b. Proxy de registro.
- c. Proxy remoto.
- d. Proxy de protección.

## Pregunta 285

**Enunciado:** ¿Qué es el patrón Facade?

- a. Un patrón diseñado para sistemas distribuidos.
- ✅ b. Un patrón que proporciona una interfaz simplificada a sistemas complejos.
- c. Un patrón utilizado para asegurar el acceso a datos.
- d. Un patrón que mejora el rendimiento del sistema.

## Pregunta 286

**Enunciado:** En el patrón Decorator, ¿qué componente es responsable de implementar las operaciones decoradas?

- a. Decorador
- b. Componente
- ✅ c. Decorador concreto
- d. Componente concreto

## Pregunta 287

**Tipo:** CodeRunner (Java)

**Enunciado:** Implementa un **árbol binario de búsqueda** (ABB) que almacene valores enteros únicos.

**Requisitos**

- Clase `Nodo`: atributos `valor`, `izquierdo` y `derecho`, y un constructor que recibe el valor y deja ambos hijos en `null`.
- Clase `ArbolBinarioBusqueda`, con el atributo `raiz` **privado**.
- `insertar(int valor)`: agrega el valor usando un método recursivo privado. Los menores van a la izquierda, los mayores a la derecha y los repetidos no se agregan.
- `inOrder()`: sin parámetros. Recorre el árbol desde la raíz en orden (izquierdo → actual → derecho) e imprime los valores en una sola línea, separados por un espacio.

Por ejemplo, al insertar 50, 30, 70, 20, 40, 60 y 80, `inOrder()` imprime `20 30 40 50 60 70 80`.

### Código base

```java
class Nodo {
    int valor;
    Nodo izquierdo;
    Nodo derecho;

    public Nodo(int valor) {
        // Guarda el valor y deja ambos hijos en null.
    }
}

class ArbolBinarioBusqueda {
    private Nodo raiz;

    public ArbolBinarioBusqueda() {
        // Inicializa la raíz en null.
    }

    public void insertar(int valor) {
        // Actualiza la raíz usando insertarRecursivo().
    }

    private Nodo insertarRecursivo(Nodo nodo, int valor) {
        // Si el nodo es null, crea uno nuevo.
        // Si el valor es menor, continúa por la izquierda; si es mayor, por la derecha.
        // Los valores repetidos no se insertan.
        return nodo;
    }

    public void inOrder() {
        // Recorre el árbol desde la raíz: izquierdo, actual, derecho.
        // Imprime los valores en una sola línea, separados por un espacio.
    }
}
```

### Prueba

```java
ArbolBinarioBusqueda arbol = new ArbolBinarioBusqueda();
arbol.insertar(50);
arbol.insertar(30);
arbol.insertar(70);
arbol.insertar(20);
arbol.insertar(40);
arbol.insertar(60);
arbol.insertar(80);
arbol.inOrder();
```

```
20 30 40 50 60 70 80
```

### Prueba

```java
ArbolBinarioBusqueda arbol = new ArbolBinarioBusqueda();
arbol.insertar(15);
arbol.insertar(10);
arbol.insertar(20);
arbol.insertar(10);
arbol.insertar(25);
arbol.insertar(15);
arbol.insertar(8);
arbol.insertar(12);
arbol.inOrder();
```

```
8 10 12 15 20 25
```

### Prueba

```java
ArbolBinarioBusqueda arbol = new ArbolBinarioBusqueda();
arbol.insertar(1);
arbol.insertar(2);
arbol.insertar(3);
arbol.insertar(4);
arbol.inOrder();
```

```
1 2 3 4
```

### Solución

```java
class Nodo {
    int valor;
    Nodo izquierdo;
    Nodo derecho;

    public Nodo(int valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class ArbolBinarioBusqueda {
    private Nodo raiz;

    public ArbolBinarioBusqueda() {
        raiz = null;
    }

    public void insertar(int valor) {
        raiz = insertarRecursivo(raiz, valor);
    }

    private Nodo insertarRecursivo(Nodo nodo, int valor) {
        if (nodo == null) {
            return new Nodo(valor);
        }
        if (valor < nodo.valor) {
            nodo.izquierdo = insertarRecursivo(nodo.izquierdo, valor);
        } else if (valor > nodo.valor) {
            nodo.derecho = insertarRecursivo(nodo.derecho, valor);
        }
        return nodo;
    }

    public void inOrder() {
        StringBuilder sb = new StringBuilder();
        inOrderRecursivo(raiz, sb);
        System.out.println(sb.toString().trim());
    }

    private void inOrderRecursivo(Nodo nodo, StringBuilder sb) {
        if (nodo == null) return;
        inOrderRecursivo(nodo.izquierdo, sb);
        sb.append(nodo.valor).append(" ");
        inOrderRecursivo(nodo.derecho, sb);
    }
}
```

## Pregunta 288

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa el método `verContenido()` de la clase `ProxyDocumento` para controlar el acceso a un documento con el patrón **Proxy**.

`Documento` ya está implementada: guarda un texto y lo muestra con `verContenido()`. `ProxyDocumento` envuelve a un `Documento` y recibe en su constructor si el usuario tiene permiso.

**Requisitos**

- Si `tienePermiso` es verdadero, delega en el documento real llamando a su `verContenido()`.
- Si no, muestra exactamente: `Acceso denegado. No tienes permiso para ver este documento.`

### Código base

```java
interface IDocumento {
    void verContenido();
}

class Documento implements IDocumento {
    private String contenido;

    public Documento(String contenido) {
        this.contenido = contenido;
    }

    @Override
    public void verContenido() {
        System.out.println("Contenido del documento: " + contenido);
    }
}

class ProxyDocumento implements IDocumento {
    private Documento documento;
    private boolean tienePermiso;

    public ProxyDocumento(Documento documento, boolean tienePermiso) {
        this.documento = documento;
        this.tienePermiso = tienePermiso;
    }

    @Override
    public void verContenido() {
        // Si tiene permiso, delega en el documento real.
        // Si no, muestra el mensaje de acceso denegado.
    }
}
```

### Prueba

```java
IDocumento doc = new ProxyDocumento(new Documento("Este es el contenido del documento."), true);
doc.verContenido();
```

```
Contenido del documento: Este es el contenido del documento.
```

### Prueba

```java
IDocumento doc = new ProxyDocumento(new Documento("Este es el contenido del documento."), false);
doc.verContenido();
```

```
Acceso denegado. No tienes permiso para ver este documento.
```

### Prueba

```java
IDocumento doc = new ProxyDocumento(new Documento(""), true);
doc.verContenido();
```

```
Contenido del documento:
```

### Prueba

```java
IDocumento conPermiso = new ProxyDocumento(new Documento("Informe: ¡ventas +15%! (año 2024) & \"cierre\""), true);
IDocumento sinPermiso = new ProxyDocumento(new Documento("Este documento es muy largo y contiene información confidencial de la empresa que no debe mostrarse."), false);
conPermiso.verContenido();
sinPermiso.verContenido();
```

```
Contenido del documento: Informe: ¡ventas +15%! (año 2024) & "cierre"
Acceso denegado. No tienes permiso para ver este documento.
```

### Solución

```java
interface IDocumento {
    void verContenido();
}

class Documento implements IDocumento {
    private String contenido;

    public Documento(String contenido) {
        this.contenido = contenido;
    }

    @Override
    public void verContenido() {
        System.out.println("Contenido del documento: " + contenido);
    }
}

class ProxyDocumento implements IDocumento {
    private Documento documento;
    private boolean tienePermiso;

    public ProxyDocumento(Documento documento, boolean tienePermiso) {
        this.documento = documento;
        this.tienePermiso = tienePermiso;
    }

    @Override
    public void verContenido() {
        if (tienePermiso) {
            documento.verContenido();
        } else {
            System.out.println("Acceso denegado. No tienes permiso para ver este documento.");
        }
    }
}
```

## Pregunta 289

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa la clase `ConfiguracionSistema` aplicando el patrón **Singleton**.

**Requisitos**

- Constructor privado, que inicializa `hostUrl` en `"http://localhost"` y `puerto` en `8080`.
- Un atributo estático con la única instancia.
- `getInstancia()`: método estático que crea la instancia la primera vez que se llama (creación perezosa) y luego devuelve siempre la misma.
- Getters `getHostUrl()` y `getPuerto()`.

### Código base

```java
public class ConfiguracionSistema {
    // Declara el atributo estático con la única instancia.
    private String hostUrl;
    private int puerto;

    // Declara el constructor privado e inicializa hostUrl y puerto.

    public static ConfiguracionSistema getInstancia() {
        // Crea la instancia si todavía no existe y devuélvela.
        return null;
    }

    public String getHostUrl() {
        return null;
    }

    public int getPuerto() {
        return 0;
    }
}
```

### Prueba

```java
ConfiguracionSistema config = ConfiguracionSistema.getInstancia();
System.out.println(config.getHostUrl());
System.out.println(config.getPuerto());
```

```
http://localhost
8080
```

### Prueba

```java
ConfiguracionSistema config1 = ConfiguracionSistema.getInstancia();
ConfiguracionSistema config2 = ConfiguracionSistema.getInstancia();
System.out.println(config1 == config2);
```

```
true
```

### Prueba

```java
java.lang.reflect.Constructor<ConfiguracionSistema> constructor = ConfiguracionSistema.class.getDeclaredConstructor();
System.out.println("Constructor privado: " + java.lang.reflect.Modifier.isPrivate(constructor.getModifiers()));
```

```
Constructor privado: true
```

### Solución

```java
public class ConfiguracionSistema {
    private static ConfiguracionSistema instancia;
    private String hostUrl;
    private int puerto;

    private ConfiguracionSistema() {
        hostUrl = "http://localhost";
        puerto = 8080;
    }

    public static ConfiguracionSistema getInstancia() {
        if (instancia == null) {
            instancia = new ConfiguracionSistema();
        }
        return instancia;
    }

    public String getHostUrl() {
        return hostUrl;
    }

    public int getPuerto() {
        return puerto;
    }
}
```

## Pregunta 290

**Tipo:** CodeRunner (Java)

**Enunciado:** Completa la clase `ConfiguracionGlobal` aplicando el patrón **Singleton**, para que toda la aplicación comparta la misma configuración.

**Requisitos**

- Constructor privado, que inicializa `dbUrl` en `"jdbc:mysql://localhost:3306/empresa"` y `apiKey` en `"ABC123XYZ"`.
- Un atributo estático con la única instancia.
- `getInstancia()`: método estático que devuelve siempre la misma instancia.
- Getters y setters para `dbUrl` y `apiKey`. Un cambio hecho con un setter debe verse desde cualquier referencia obtenida con `getInstancia()`.

### Código base

```java
public class ConfiguracionGlobal {
    // Declara el atributo estático con la única instancia.
    private String dbUrl;
    private String apiKey;

    // Declara el constructor privado e inicializa dbUrl y apiKey.

    public static ConfiguracionGlobal getInstancia() {
        // Crea la instancia si todavía no existe y devuélvela.
        return null;
    }

    public String getDbUrl() {
        return null;
    }

    public String getApiKey() {
        return null;
    }

    public void setDbUrl(String dbUrl) {
        // Actualiza dbUrl.
    }

    public void setApiKey(String apiKey) {
        // Actualiza apiKey.
    }
}
```

### Prueba

```java
ConfiguracionGlobal config = ConfiguracionGlobal.getInstancia();
System.out.println(config.getDbUrl());
System.out.println(config.getApiKey());
```

```
jdbc:mysql://localhost:3306/empresa
ABC123XYZ
```

### Prueba

```java
ConfiguracionGlobal config1 = ConfiguracionGlobal.getInstancia();
config1.setDbUrl("jdbc:mysql://servidor:3306/ventas");
config1.setApiKey("NUEVA456");
ConfiguracionGlobal config2 = ConfiguracionGlobal.getInstancia();
System.out.println(config1 == config2);
System.out.println(config2.getDbUrl());
System.out.println(config2.getApiKey());
```

```
true
jdbc:mysql://servidor:3306/ventas
NUEVA456
```

### Prueba

```java
java.lang.reflect.Constructor<ConfiguracionGlobal> constructor = ConfiguracionGlobal.class.getDeclaredConstructor();
System.out.println("Constructor privado: " + java.lang.reflect.Modifier.isPrivate(constructor.getModifiers()));
```

```
Constructor privado: true
```

### Solución

```java
public class ConfiguracionGlobal {
    private static ConfiguracionGlobal instancia;
    private String dbUrl;
    private String apiKey;

    private ConfiguracionGlobal() {
        dbUrl = "jdbc:mysql://localhost:3306/empresa";
        apiKey = "ABC123XYZ";
    }

    public static ConfiguracionGlobal getInstancia() {
        if (instancia == null) {
            instancia = new ConfiguracionGlobal();
        }
        return instancia;
    }

    public String getDbUrl() {
        return dbUrl;
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setDbUrl(String dbUrl) {
        this.dbUrl = dbUrl;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }
}
```

## Pregunta 291

**Tipo:** CodeRunner (Java)

**Enunciado:** Implementa la gestión de estudiantes con el patrón **DAO**, guardando los datos en memoria.

**Requisitos**

- Clase `Estudiante`: atributos privados `id` (`int`) y `nombre` (`String`), un constructor que recibe ambos y los getters `getId()` y `getNombre()`.
- Interfaz `EstudianteDAO` con los métodos:
  - `List<Estudiante> obtenerEstudiantes()`
  - `void agregarEstudiante(Estudiante estudiante)`
  - `void eliminarEstudiante(int id)`
- Clase `EstudianteDAOImpl`, que implementa `EstudianteDAO` usando un `ArrayList<Estudiante>`. `eliminarEstudiante` quita al estudiante con ese ID; si no existe, no hace nada.

Ninguna de las tres lleva el modificador `public`.

### Código base

```java
import java.util.ArrayList;
import java.util.List;

class Estudiante {
    // Atributos id y nombre, constructor y getters.
}

interface EstudianteDAO {
    // Declara obtenerEstudiantes(), agregarEstudiante(Estudiante) y eliminarEstudiante(int).
}

class EstudianteDAOImpl implements EstudianteDAO {
    // Guarda los estudiantes en un ArrayList<Estudiante> e implementa los métodos.
}
```

### Prueba

```java
EstudianteDAO dao = new EstudianteDAOImpl();
dao.agregarEstudiante(new Estudiante(1, "Juan"));
dao.agregarEstudiante(new Estudiante(2, "María"));
for (Estudiante e : dao.obtenerEstudiantes()) {
    System.out.println("ID: " + e.getId() + ", Nombre: " + e.getNombre());
}
```

```
ID: 1, Nombre: Juan
ID: 2, Nombre: María
```

### Prueba

```java
EstudianteDAO dao = new EstudianteDAOImpl();
dao.agregarEstudiante(new Estudiante(1, "Juan"));
dao.agregarEstudiante(new Estudiante(2, "María"));
dao.agregarEstudiante(new Estudiante(3, "Lucía"));
dao.eliminarEstudiante(2);
for (Estudiante e : dao.obtenerEstudiantes()) {
    System.out.println("ID: " + e.getId() + ", Nombre: " + e.getNombre());
}
```

```
ID: 1, Nombre: Juan
ID: 3, Nombre: Lucía
```

### Prueba

```java
EstudianteDAO dao = new EstudianteDAOImpl();
System.out.println("Cantidad inicial: " + dao.obtenerEstudiantes().size());
dao.agregarEstudiante(new Estudiante(5, "Pedro"));
dao.eliminarEstudiante(9);
System.out.println("Cantidad después de eliminar un ID inexistente: " + dao.obtenerEstudiantes().size());
```

```
Cantidad inicial: 0
Cantidad después de eliminar un ID inexistente: 1
```

### Solución

```java
import java.util.ArrayList;
import java.util.List;

class Estudiante {
    private int id;
    private String nombre;

    public Estudiante(int id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }
}

interface EstudianteDAO {
    List<Estudiante> obtenerEstudiantes();
    void agregarEstudiante(Estudiante estudiante);
    void eliminarEstudiante(int id);
}

class EstudianteDAOImpl implements EstudianteDAO {
    private List<Estudiante> estudiantes = new ArrayList<>();

    @Override
    public List<Estudiante> obtenerEstudiantes() {
        return estudiantes;
    }

    @Override
    public void agregarEstudiante(Estudiante estudiante) {
        estudiantes.add(estudiante);
    }

    @Override
    public void eliminarEstudiante(int id) {
        estudiantes.removeIf(e -> e.getId() == id);
    }
}
```

## Pregunta 292

**Tipo:** CodeRunner (Java)

**Enunciado:** **Revisión · Preparación de un aula con Facade**

Los dispositivos ya saben encenderse y apagarse. Tu tarea es completar `AulaFacade` para coordinar esas acciones desde una única clase, permitiendo preparar o cerrar el aula con una sola llamada.

**¿Qué debías implementar?** La parte característica de Facade: reunir las llamadas a los distintos dispositivos dentro de los métodos `iniciarClase()` y `finalizarClase()`.

- **Constructor:** guardá los tres dispositivos recibidos en sus atributos correspondientes. Usá `this.` para distinguir los atributos de los parámetros. No crees dispositivos nuevos.
- **`iniciarClase()`:** mostrá `Preparando el aula...` y llamá a `encender()` de cada dispositivo, en este orden: luces, proyector y aire acondicionado.
- **`finalizarClase()`:** mostrá `Cerrando el aula...` y llamá a `apagar()` de cada dispositivo, en el mismo orden.

**Importante:** cada dispositivo ya imprime su propio mensaje. Debés invocar sus métodos, sin repetir esos mensajes en la fachada.

**Conclusión · ¿Para qué sirve Facade?** Facade simplifica el uso de varios objetos mediante una única clase. Lo fundamental era que `AulaFacade` coordinara los dispositivos. Así, si cambia la preparación del aula, podés ajustar esa secuencia en la fachada sin modificar las llamadas del `main`.

### Código base

```java
class Luces {
    public void encender() {
        System.out.println("Luces encendidas");
    }

    public void apagar() {
        System.out.println("Luces apagadas");
    }
}

class Proyector {
    public void encender() {
        System.out.println("Proyector encendido");
    }

    public void apagar() {
        System.out.println("Proyector apagado");
    }
}

class AireAcondicionado {
    public void encender() {
        System.out.println("Aire acondicionado encendido");
    }

    public void apagar() {
        System.out.println("Aire acondicionado apagado");
    }
}

class AulaFacade {
    private Luces luces;
    private Proyector proyector;
    private AireAcondicionado aire;

    public AulaFacade(Luces luces, Proyector proyector, AireAcondicionado aire) {
        // Guardá cada dispositivo recibido en el atributo correspondiente.
        // Como los parámetros y los atributos tienen el mismo nombre,
        // utilizá "this." para referirte al atributo del objeto.
        // No crees dispositivos nuevos: conservá los que recibís.
    }

    public void iniciarClase() {
        // 1. Mostrá exactamente: Preparando el aula...
        // 2. Invocá el método encender() del atributo luces.
        // 3. Invocá el método encender() del atributo proyector.
        // 4. Invocá el método encender() del atributo aire.
        //
        // Cada dispositivo ya imprime su propio mensaje.
        // Aquí debés llamar a sus métodos, no repetir esos mensajes.
    }

    public void finalizarClase() {
        // 1. Mostrá exactamente: Cerrando el aula...
        // 2. Invocá el método apagar() del atributo luces.
        // 3. Invocá el método apagar() del atributo proyector.
        // 4. Invocá el método apagar() del atributo aire.
    }
}
```

### Prueba

```java
Luces luces = new Luces();
Proyector proyector = new Proyector();
AireAcondicionado aire = new AireAcondicionado();
AulaFacade aula = new AulaFacade(luces, proyector, aire);
aula.iniciarClase();
System.out.println("--- Clase en desarrollo ---");
```

```
Preparando el aula...
Luces encendidas
Proyector encendido
Aire acondicionado encendido
--- Clase en desarrollo ---
```

### Prueba

```java
Luces luces = new Luces();
Proyector proyector = new Proyector();
AireAcondicionado aire = new AireAcondicionado();
AulaFacade aula = new AulaFacade(luces, proyector, aire);
aula.iniciarClase();
System.out.println("--- Clase en desarrollo ---");
aula.finalizarClase();
```

```
Preparando el aula...
Luces encendidas
Proyector encendido
Aire acondicionado encendido
--- Clase en desarrollo ---
Cerrando el aula...
Luces apagadas
Proyector apagado
Aire acondicionado apagado
```

### Solución

```java
class Luces {
    public void encender() {
        System.out.println("Luces encendidas");
    }

    public void apagar() {
        System.out.println("Luces apagadas");
    }
}

class Proyector {
    public void encender() {
        System.out.println("Proyector encendido");
    }

    public void apagar() {
        System.out.println("Proyector apagado");
    }
}

class AireAcondicionado {
    public void encender() {
        System.out.println("Aire acondicionado encendido");
    }

    public void apagar() {
        System.out.println("Aire acondicionado apagado");
    }
}

class AulaFacade {
    private Luces luces;
    private Proyector proyector;
    private AireAcondicionado aire;

    public AulaFacade(Luces luces, Proyector proyector, AireAcondicionado aire) {
        this.luces = luces;
        this.proyector = proyector;
        this.aire = aire;
    }

    public void iniciarClase() {
        System.out.println("Preparando el aula...");
        luces.encender();
        proyector.encender();
        aire.encender();
    }

    public void finalizarClase() {
        System.out.println("Cerrando el aula...");
        luces.apagar();
        proyector.apagar();
        aire.apagar();
    }
}
```

## Pregunta 293

**Tipo:** CodeRunner (Java)

**Enunciado:** **Revisión · Notificaciones con Factory Method**

El sistema ya cuenta con una interfaz común y clases para notificaciones por correo y SMS. Tu tarea es completar la creación y el envío, permitiendo que cada fábrica determine qué tipo de notificación crear.

**¿Qué debías implementar?** La parte característica de Factory Method: el método `enviarNotificacion()` solicita un objeto mediante `crearNotificacion()`, y cada fábrica concreta implementa ese método para devolver la notificación correspondiente.

- **Notificación por correo:** completá `enviar()` para mostrar `Correo enviado a [destinatario]: [mensaje]`, reemplazando los corchetes y su contenido por los valores recibidos como parámetros.
- **Notificación por SMS:** completá `enviar()` para mostrar `SMS enviado a [destinatario]: [mensaje]`, utilizando los parámetros recibidos.
- **`enviarNotificacion()`:** llamá a `crearNotificacion()` y guardá el objeto devuelto en una variable de tipo `Notificacion`. Luego, invocá su método `enviar()`, pasándole el destinatario y el mensaje recibidos.
- **Fábricas concretas:** reemplazá `return null;` por la devolución de un objeto nuevo del tipo correspondiente. `FabricaCorreo` debe crear una `NotificacionCorreo` y `FabricaSMS` debe crear una `NotificacionSMS`.

**Importante:** no modifiques las firmas de los métodos ni agregues nuevas clases. Dentro de `enviarNotificacion()` no crees directamente una notificación de correo o SMS ni uses condicionales para elegir el canal: esa responsabilidad corresponde a cada fábrica concreta.

**Conclusión · ¿Para qué sirve Factory Method?** Factory Method permite que cada fábrica decida qué objeto crear, manteniendo común la forma de usarlo. Lo fundamental era que `enviarNotificacion()` utilizara `crearNotificacion()`. Así, para incorporar otro canal, podés agregar su notificación y su fábrica sin modificar ese método de envío.

### Código base

```java
interface Notificacion {
    void enviar(String destinatario, String mensaje);
}

class NotificacionCorreo implements Notificacion {
    @Override
    public void enviar(String destinatario, String mensaje) {
        // Mostrá un mensaje con este formato exacto:
        // Correo enviado a [destinatario]: [mensaje]
        //
        // Usá los parámetros recibidos para completar los datos.
        // Los corchetes no deben aparecer en la salida.
    }
}

class NotificacionSMS implements Notificacion {
    @Override
    public void enviar(String destinatario, String mensaje) {
        // Mostrá un mensaje con este formato exacto:
        // SMS enviado a [destinatario]: [mensaje]
        //
        // Usá los parámetros recibidos para completar los datos.
        // Respetá los espacios y los dos puntos.
    }
}

abstract class FabricaNotificacion {
    // Este es el Factory Method.
    // Cada fábrica concreta define qué notificación devuelve.
    public abstract Notificacion crearNotificacion();

    public void enviarNotificacion(String destinatario, String mensaje) {
        // 1. Llamá a crearNotificacion() y guardá el resultado
        //    en una variable de tipo Notificacion.
        // 2. Sobre esa variable, invocá enviar() y pasale
        //    los parámetros destinatario y mensaje recibidos.
        //
        // No crees directamente objetos de NotificacionCorreo o
        // NotificacionSMS aquí. Tampoco necesitás un if para elegir:
        // la fábrica concreta se encarga de decidir qué objeto crear.
    }
}

class FabricaCorreo extends FabricaNotificacion {
    @Override
    public Notificacion crearNotificacion() {
        // Reemplazá el retorno de null por un objeto nuevo
        // de tipo NotificacionCorreo, utilizando "new".
        // Este método solo crea y devuelve el objeto; no envía mensajes.
        return null;
    }
}

class FabricaSMS extends FabricaNotificacion {
    @Override
    public Notificacion crearNotificacion() {
        // Reemplazá el retorno de null por un objeto nuevo
        // de tipo NotificacionSMS, utilizando "new".
        // Aunque el retorno declarado es Notificacion, podés devolver
        // un objeto de una clase que implemente esa interfaz.
        return null;
    }
}
```

### Prueba

```java
FabricaNotificacion fabricaCorreo = new FabricaCorreo();
fabricaCorreo.enviarNotificacion("estudiante@correo.com", "La actividad fue publicada");
```

```
Correo enviado a estudiante@correo.com: La actividad fue publicada
```

### Prueba

```java
FabricaNotificacion fabricaSMS = new FabricaSMS();
fabricaSMS.enviarNotificacion("099123456", "Tu código de acceso es 4582");
```

```
SMS enviado a 099123456: Tu código de acceso es 4582
```

### Solución

```java
interface Notificacion {
    void enviar(String destinatario, String mensaje);
}

class NotificacionCorreo implements Notificacion {
    @Override
    public void enviar(String destinatario, String mensaje) {
        System.out.println("Correo enviado a " + destinatario + ": " + mensaje);
    }
}

class NotificacionSMS implements Notificacion {
    @Override
    public void enviar(String destinatario, String mensaje) {
        System.out.println("SMS enviado a " + destinatario + ": " + mensaje);
    }
}

abstract class FabricaNotificacion {
    // Este es el Factory Method.
    // Cada fábrica concreta define qué notificación devuelve.
    public abstract Notificacion crearNotificacion();

    public void enviarNotificacion(String destinatario, String mensaje) {
        Notificacion notificacion = crearNotificacion();
        notificacion.enviar(destinatario, mensaje);
    }
}

class FabricaCorreo extends FabricaNotificacion {
    @Override
    public Notificacion crearNotificacion() {
        return new NotificacionCorreo();
    }
}

class FabricaSMS extends FabricaNotificacion {
    @Override
    public Notificacion crearNotificacion() {
        return new NotificacionSMS();
    }
}
```

## Pregunta 294

**Tipo:** CodeRunner (Java)

**Enunciado:** **Revisión · Clonación de personajes con Prototype**

El personaje ya permite guardar su nombre, nivel y habilidades. Tu tarea es completar la clonación para obtener un nuevo personaje con los mismos datos iniciales, pero con su propia lista de habilidades.

**¿Qué debías implementar?** La parte característica de Prototype: crear un objeto a partir de otro existente mediante `clonar()`. En este ejercicio, el constructor privado se encarga de copiar los datos.

- **Constructor de copia:** dentro de `Personaje(Personaje original)`, `original` es el personaje que querés copiar y `this` representa el nuevo personaje.
- **Nombre y nivel:** tomá esos datos de `original` y asignalos a los atributos correspondientes del nuevo personaje.
- **Habilidades:** creá un nuevo `ArrayList` que contenga los elementos de la lista original. Podés utilizar el constructor de `ArrayList` que recibe una colección.
- **`clonar()`:** reemplazá `return null;` por la creación y devolución de un nuevo `Personaje`. Utilizá el constructor de copia y pasale `this` como `original`.

**Importante:** asignar directamente la lista original haría que ambos personajes compartieran la misma lista. Debés crear una nueva lista con los mismos elementos. Completá únicamente el constructor de copia y `clonar()`.

**Conclusión · ¿Para qué sirve Prototype?** Prototype permite crear objetos copiando uno existente, sin volver a configurar todos sus datos. Lo fundamental era devolver un nuevo personaje y darle su propia lista de habilidades. Así, podés crear variantes de un personaje sin que agregar o quitar habilidades en la copia afecte al original.

### Código base

```java
import java.util.ArrayList;
import java.util.List;

interface PrototipoPersonaje {
    Personaje clonar();
}

class Personaje implements PrototipoPersonaje {
    private String nombre;
    private int nivel;
    private List<String> habilidades;

    public Personaje(String nombre, int nivel) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.habilidades = new ArrayList<>();
    }

    private Personaje(Personaje original) {
        // Este constructor construye la copia.
        // "original" es el personaje del que tomás los datos.
        // "this" es el nuevo personaje que estás construyendo.

        // 1. Asigná al atributo nombre de this
        //    el valor del atributo nombre de original.
        // 2. Hacé lo mismo con el atributo nivel.
        // 3. Inicializá habilidades con un ArrayList nuevo.
        //    Pasale al constructor de ArrayList la lista
        //    de habilidades del personaje original.
        //
        // No asignes directamente original.habilidades:
        // eso haría que ambos personajes usaran la misma lista.
        //
        // Como los elementos son String (inmutables),
        // alcanza con crear una lista nueva con esos elementos.
    }

    @Override
    public Personaje clonar() {
        // Reemplazá el retorno de null por un Personaje nuevo.
        // Usá "new" e invocá el constructor que recibe un Personaje.
        // Pasale "this": representa al personaje que querés copiar.
        //
        // No devuelvas directamente this:
        // estarías devolviendo el mismo objeto, no una copia.
        return null;
    }

    public void agregarHabilidad(String habilidad) {
        habilidades.add(habilidad);
    }

    public List<String> getHabilidades() {
        return habilidades;
    }

    @Override
    public String toString() {
        return "Personaje [nombre=" + nombre
                + ", nivel=" + nivel
                + ", habilidades=" + habilidades + "]";
    }
}
```

### Prueba

```java
Personaje original = new Personaje("Guerrero", 10);
original.agregarHabilidad("Espada");
Personaje copia = original.clonar();
boolean mismaLista = original.getHabilidades() == copia.getHabilidades();
System.out.println("¿Comparten la misma lista? " + mismaLista);
```

```
¿Comparten la misma lista? false
```

### Prueba

```java
Personaje original = new Personaje("Guerrero", 10);
original.agregarHabilidad("Ataque con espada");
original.agregarHabilidad("Defensa con escudo");
Personaje copia = original.clonar();
System.out.println("Copia inicial: " + copia);
```

```
Copia inicial: Personaje [nombre=Guerrero, nivel=10, habilidades=[Ataque con espada, Defensa con escudo]]
```

### Solución

```java
import java.util.ArrayList;
import java.util.List;

interface PrototipoPersonaje {
    Personaje clonar();
}

class Personaje implements PrototipoPersonaje {
    private String nombre;
    private int nivel;
    private List<String> habilidades;

    public Personaje(String nombre, int nivel) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.habilidades = new ArrayList<>();
    }

    private Personaje(Personaje original) {
        this.nombre = original.nombre;
        this.nivel = original.nivel;
        this.habilidades = new ArrayList<>(original.habilidades);
    }

    @Override
    public Personaje clonar() {
        return new Personaje(this);
    }

    public void agregarHabilidad(String habilidad) {
        habilidades.add(habilidad);
    }

    public List<String> getHabilidades() {
        return habilidades;
    }

    @Override
    public String toString() {
        return "Personaje [nombre=" + nombre
                + ", nivel=" + nivel
                + ", habilidades=" + habilidades + "]";
    }
}
```

## Pregunta 295

**Tipo:** CodeRunner (Java)

**Enunciado:** **Revisión · Control de documentos con Proxy**

`DocumentoReal` ya sabe cargar y mostrar el documento. Tu tarea es completar `ProxyDocumento` para verificar los permisos antes de acceder y crear el documento solamente cuando sea necesario.

**¿Qué debías implementar?** La parte característica de Proxy: actuar como intermediario entre quien solicita el documento y el objeto real. El proxy controla el acceso y, si corresponde, delega la visualización en `DocumentoReal`.

- **Constructor:** guardá el nombre y el rol recibidos en sus atributos. No crees el documento real aquí: debe permanecer en `null` hasta que se solicite mostrarlo con un rol autorizado.
- **Permisos:** en `mostrar()`, comprobá si el rol es `DOCENTE` o `ADMINISTRADOR`. Usá `equalsIgnoreCase()` para aceptar mayúsculas, minúsculas o combinaciones, y el operador `||` para permitir cualquiera de los dos roles.
- **Creación del documento:** si tiene permiso, comprobá si `documentoReal` contiene `null`. Solo en ese caso creá un `DocumentoReal` con el nombre guardado y asignalo al atributo.
- **Visualización:** dentro del caso autorizado, llamá a `mostrar()` del documento real, tanto si acabás de crearlo como si ya existía.
- **Acceso denegado:** si el rol no está autorizado, mostrá `Acceso denegado para el rol: [rol]`, reemplazando los corchetes y su contenido por el rol recibido. No crees ni muestres el documento.

**Importante:** no modifiques `Documento` ni `DocumentoReal`. El documento real ya imprime los mensajes de carga y visualización; el proxy debe llamar a sus métodos, sin repetir esos mensajes.

**Conclusión · ¿Para qué sirve Proxy?** Proxy permite controlar el acceso a un objeto sin modificar su clase. Lo fundamental era verificar los permisos antes de crear o mostrar el documento y reutilizarlo una vez cargado. Así, el control queda centralizado y se evitan cargas innecesarias.

### Código base

```java
interface Documento {
    void mostrar();
}

class DocumentoReal implements Documento {
    private String nombre;

    public DocumentoReal(String nombre) {
        this.nombre = nombre;
        cargarDocumento();
    }

    private void cargarDocumento() {
        System.out.println("Cargando documento: " + nombre);
    }

    @Override
    public void mostrar() {
        System.out.println("Mostrando contenido de: " + nombre);
    }
}

class ProxyDocumento implements Documento {
    private String nombre;
    private String rol;
    private DocumentoReal documentoReal;

    public ProxyDocumento(String nombre, String rol) {
        // 1. Guardá el nombre recibido en el atributo nombre.
        // 2. Guardá el rol recibido en el atributo rol.
        //    Usá "this." para distinguir atributos y parámetros.
        //
        // No crees un DocumentoReal aquí.
        // El atributo documentoReal ya comienza en null.
    }

    @Override
    public void mostrar() {
        // 1. Comprobá si el rol es DOCENTE o ADMINISTRADOR.
        //    Usá equalsIgnoreCase() y uní las comparaciones con ||.
        //    Podés guardar el resultado en un boolean.
        //
        //    Pista: invocá equalsIgnoreCase(rol) sobre cada texto
        //    permitido. Así también evitás un error si rol es null.

        // 2. Organizá el acceso con un if y un else:
        //    - if: el rol tiene permiso.
        //    - else: el rol no tiene permiso.

        // 3. Dentro del caso autorizado:
        //    Comprobá con otro if si documentoReal es null.
        //    Si lo es, creá un DocumentoReal usando el nombre
        //    guardado y asignalo al atributo documentoReal.

        // 4. Después de ese if interno, pero todavía dentro
        //    del caso autorizado, invocá mostrar() del documentoReal.
        //
        //    Esa llamada debe ejecutarse en cada acceso autorizado,
        //    no solamente cuando se crea el documento.

        // 5. En el else del control de permisos, mostrá:
        //    Acceso denegado para el rol: [rol]
        //    Reemplazá [rol] por el valor recibido, sin corchetes.
        //
        //    En este caso no debés crear ni mostrar el documento.
    }
}
```

### Prueba

```java
Documento documentoEstudiante = new ProxyDocumento("Calificaciones.pdf", "ESTUDIANTE");
documentoEstudiante.mostrar();
```

```
Acceso denegado para el rol: ESTUDIANTE
```

### Prueba

```java
Documento documentoDocente = new ProxyDocumento("Calificaciones.pdf", "DOCENTE");
documentoDocente.mostrar();
```

```
Cargando documento: Calificaciones.pdf
Mostrando contenido de: Calificaciones.pdf
```

### Prueba

```java
Documento documentoAdmin = new ProxyDocumento("Actas.pdf", "administrador");
documentoAdmin.mostrar();
documentoAdmin.mostrar();
Documento documentoSinRol = new ProxyDocumento("Actas.pdf", null);
documentoSinRol.mostrar();
```

```
Cargando documento: Actas.pdf
Mostrando contenido de: Actas.pdf
Mostrando contenido de: Actas.pdf
Acceso denegado para el rol: null
```

### Solución

```java
interface Documento {
    void mostrar();
}

class DocumentoReal implements Documento {
    private String nombre;

    public DocumentoReal(String nombre) {
        this.nombre = nombre;
        cargarDocumento();
    }

    private void cargarDocumento() {
        System.out.println("Cargando documento: " + nombre);
    }

    @Override
    public void mostrar() {
        System.out.println("Mostrando contenido de: " + nombre);
    }
}

class ProxyDocumento implements Documento {
    private String nombre;
    private String rol;
    private DocumentoReal documentoReal;

    public ProxyDocumento(String nombre, String rol) {
        this.nombre = nombre;
        this.rol = rol;
    }

    @Override
    public void mostrar() {
        boolean autorizado = "DOCENTE".equalsIgnoreCase(rol) || "ADMINISTRADOR".equalsIgnoreCase(rol);
        if (autorizado) {
            if (documentoReal == null) {
                documentoReal = new DocumentoReal(nombre);
            }
            documentoReal.mostrar();
        } else {
            System.out.println("Acceso denegado para el rol: " + rol);
        }
    }
}
```

## Pregunta 296

**Tipo:** CodeRunner (Java)

**Enunciado:** **Revisión · Configuración del sistema con Singleton**

La clase ya cuenta con un constructor privado y un atributo estático para guardar la instancia. Tu tarea es completar `ConfiguracionSistema` para que las distintas partes de la aplicación utilicen el mismo objeto de configuración.

**¿Qué debías implementar?** La parte característica de Singleton: `getInstancia()` debe crear el objeto solamente la primera vez y devolver esa misma instancia en las siguientes llamadas.

- **Constructor privado:** asigná `"Español"` al atributo `idioma`. Este será el idioma inicial cuando se cree el objeto.
- **`getInstancia()`:** comprobá si el atributo `instancia` contiene `null`. Solo en ese caso creá un nuevo `ConfiguracionSistema` y guardalo en ese atributo.
- **Retorno de la instancia:** después de la comprobación, devolvé el atributo `instancia`. Debe retornarse tanto si acabás de crear el objeto como si ya existía.
- **`getIdioma()`:** devolvé el valor actual del atributo `idioma`.
- **`setIdioma()`:** guardá el idioma recibido en el atributo del objeto. Usá `this.` para distinguir el atributo del parámetro que tiene el mismo nombre.

**Importante:** no cambies la visibilidad del constructor ni agregues otros constructores. No crees un objeto nuevo en cada llamada a `getInstancia()` ni reinicies allí el idioma, porque se perdería la configuración guardada.

**Conclusión · ¿Para qué sirve Singleton?** Singleton permite compartir una única instancia mediante un punto de acceso común. Lo fundamental era crear la configuración una sola vez y devolver siempre el mismo objeto. Así, cuando una parte de la aplicación cambia el idioma, las demás consultan ese mismo valor.

### Código base

```java
public class ConfiguracionSistema {
    // Al ser static, este atributo pertenece a la clase
    // y guarda la referencia a la instancia compartida.
    private static ConfiguracionSistema instancia;

    private String idioma;

    private ConfiguracionSistema() {
        // Asigná "Español" al atributo idioma.
        //
        // El constructor es privado para impedir que otras clases
        // creen objetos directamente con new ConfiguracionSistema().
    }

    public static ConfiguracionSistema getInstancia() {
        // 1. Comprobá con un if si instancia contiene null.
        // 2. Dentro de ese if, creá un ConfiguracionSistema
        //    utilizando "new" y guardalo en el atributo instancia.
        //
        //    Si ya existe, no debés crear otro objeto.
        // 3. Después del if, devolvé el atributo instancia.
        //    Reemplazá el return null que aparece debajo.
        //
        // El retorno debe quedar fuera del if para devolver
        // la instancia en todas las llamadas.
        return null;
    }

    public String getIdioma() {
        // Reemplazá el retorno de null por el valor
        // que tiene actualmente el atributo idioma.
        return null;
    }

    public void setIdioma(String idioma) {
        // Guardá el parámetro recibido en el atributo idioma.
        // Usá "this.idioma" para referirte al atributo del objeto.
        //
        // Este método modifica la configuración existente;
        // no debe crear una nueva instancia.
    }
}
```

### Prueba

```java
ConfiguracionSistema configuracion1 = ConfiguracionSistema.getInstancia();
System.out.println("Idioma inicial: " + configuracion1.getIdioma());
```

```
Idioma inicial: Español
```

### Prueba

```java
ConfiguracionSistema configuracion1 = ConfiguracionSistema.getInstancia();
ConfiguracionSistema configuracion2 = ConfiguracionSistema.getInstancia();
System.out.println("Misma instancia: " + (configuracion1 == configuracion2));
```

```
Misma instancia: true
```

### Prueba

```java
ConfiguracionSistema configuracion1 = ConfiguracionSistema.getInstancia();
configuracion1.setIdioma("Inglés");
ConfiguracionSistema configuracion2 = ConfiguracionSistema.getInstancia();
System.out.println("Idioma desde otra referencia: " + configuracion2.getIdioma());
```

```
Idioma desde otra referencia: Inglés
```

### Solución

```java
public class ConfiguracionSistema {
    // Al ser static, este atributo pertenece a la clase
    // y guarda la referencia a la instancia compartida.
    private static ConfiguracionSistema instancia;

    private String idioma;

    private ConfiguracionSistema() {
        idioma = "Español";
    }

    public static ConfiguracionSistema getInstancia() {
        if (instancia == null) {
            instancia = new ConfiguracionSistema();
        }
        return instancia;
    }

    public String getIdioma() {
        return idioma;
    }

    public void setIdioma(String idioma) {
        this.idioma = idioma;
    }
}
```
