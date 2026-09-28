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
