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
