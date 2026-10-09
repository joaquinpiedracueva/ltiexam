# Fundamentos e Introducción a la Programación

## Pregunta 1

**Enunciado:** ¿Puede una variable en Java cambiar su tipo de datos después de ser declarada?

- a. Solo si se utiliza la palabra clave 'mutate'
- ✅ b. No
- c. Si
- d. Depende del tipo de variable

## Pregunta 2

**Enunciado:** Dado el siguiente código:

```java
public class Principal {
    public static void main(String[] args) {
        String a = "5";
        String b = "10";
        String c = a+b;
        System.out.println("El resultado es: "+c);
    }
}
```

¿Cuál es el valor de la variable de nombre `c` al ejecutar este programa?

- a. 15
- b. 105
- c. No se pueden sumar dos variables de este tipo.
- ✅ d. 510

## Pregunta 3

**Enunciado:** Dado el siguiente código en Java:

```java
public class caso3 {
    public static void main(String[] args) {
        int a=13;
        int b=5;
        int c=a%b;
        //System.out.println(c);
        System.out.println("El modulo o resto de hacer 13%5 es = "+c);

        // Ejemplo de OR logico ||
        boolean lluvia=false;
        boolean sol=true;
        boolean resultado = lluvia || sol;
        System.out.println("El resultado es: "+resultado);
    }
}
```

¿Cuál es el contenido de las variables `c` y `resultado` al terminar el programa?

- a. c=2.6 y resultado=true
- b. c=4 y resultado=true
- ✅ c. c=3 y resultado=true
- d. c=2.6 y resultado=false

## Pregunta 4

**Enunciado:** Dado el siguiente código:

```java
public class Main {
    public static void main(String[] args) {
        boolean esta=true;
        boolean voy=false;
        boolean resultado= esta && voy;
        System.out.println("La negacion de resultado es "+!resultado);
    }
}
```

Al terminar la ejecución de este programa, ¿cuál es el contenido de la variable `resultado`?

- ✅ a. false
- b. true

## Pregunta 5

**Enunciado:** ¿Cuál es la forma correcta de declarar un literal `long` en Java?

```java
1) long numero = 123423425;
2) long numero = 12134323551L;
3) long numero = 1231312412345l;
4) 2 y 3 son correctas.
5) long numero = L1231242532523;
```

- a. la 1
- ✅ b. La 4
- c. Solo la 2 es la correcta
- d. La 5

## Pregunta 6

**Enunciado:** ¿Cuál es el propósito principal de las variables en Java?

- a. Definir métodos y clases
- b. Mejorar el rendimiento del programa.
- c. Controlar el flujo de ejecución.
- ✅ d. Almacenar y manipular datos en memoria.

## Pregunta 7

**Enunciado:** Si quiero dar nombre a una variable en Java, ¿cuáles de los siguientes nombres son correctos de acuerdo a la convención para esto?

- ✅ a. edad
- b. 1nombre
- c. Resta
- ✅ d. suma
- e. fuente\*energia

## Pregunta 8

**Enunciado:** ¿Qué sucede si intentas almacenar un número más grande de lo que puede manejar un byte?

```java
byte miNumero = 200;
```

- a. El número se almacena después de aplicar el módulo 256.
- b. Compila sin problemas y guarda el número correctamente.
- c. Lanza una excepción en tiempo de ejecución.
- ✅ d. Causa un error de compilación debido a desbordamiento.

## Pregunta 9

**Enunciado:** ¿Cuál es la diferencia entre `=` y `==` en Java cuando se trata de variables?

- a. Ambos operadores son equivalentes y se pueden usar indistintamente.
- b. `=` se utiliza para comparar valores, mientras que `==` se utiliza para asignar valores.
- c. Estos operadores pueden ser iguales si se les agrega un `!`
- ✅ d. `=` se utiliza para asignar valores, mientras que `==` se utiliza para comparar valores.

## Pregunta 10

**Enunciado:** ¿Qué sucede cuando asignas un valor `int` a una variable `long` sin hacer casting explícito?

```java
int numeroInt = 100;
long numeroLong = numeroInt;
```

- a. Se produce un overflow.
- b. Error de compilación debido a la pérdida de precisión.
- c. Error en tiempo de ejecución.
- ✅ d. El valor se asigna correctamente, ya que la conversión es implícitamente segura.

## Pregunta 11

**Enunciado:** Si quiero almacenar en una variable en memoria el número 35,25, ¿cuál de las siguientes opciones es la correcta?

- a. `float 1variable = 35.25`
- b. `float variable_decimal = 35.25;`
- c. `int variable = 35.25;`
- ✅ d. `double variable1 = 35.25 ;`
- e. `double variable = 35;`

## Pregunta 12

**Enunciado:** ¿Qué valor almacenará la variable de tipo `char` en el siguiente fragmento de código?

```java
char exampleChar = 67;
```

- ✅ a. C
- b. 67
- c. D
- d. Error de compilación

## Pregunta 13

**Enunciado:** ¿Cuál será el resultado de la siguiente operación?

```java
double a = 50.0;
double b = 3.0;
float result = (float) (a / b);
```

- a. 16.67
- b. 17.0
- ✅ c. 16.666666
- d. 16.66666667

## Pregunta 14

**Enunciado:** ¿Qué es el alcance (scope) de una variable en Java?

- a. El número de veces que se puede acceder a la variable.
- ✅ b. La región del programa en la que la variable puede ser utilizada.
- c. La velocidad con la que la variable se inicializa.
- d. La cantidad de memoria que ocupa la variable.

## Pregunta 15

**Enunciado:** Dado el siguiente código, identificar cuál es la variable definida como acumulador:

```java
public class AcumuladorPregunta {
    public static void main(String[] args) {
        String dato="Utec esta presente en varias localidades del interior";
        int i=0;
        int s=0;
        int j=0;
        for(int l=1;l<10;l++) {
            s += l;
        }
        System.out.println(s);
    }
}
```

- ✅ a. s
- b. l
- c. j
- d. l

## Pregunta 16

**Enunciado:** ¿Cuál es el tamaño, en bits, de una variable de tipo `short` en Java?

- ✅ a. 16
- b. 64
- c. 8
- d. 32

## Pregunta 17

**Enunciado:** ¿Cuál de las siguientes formas es correcta de crear una variable de tipo entera en Java y asignarle el valor 100?

- ✅ a. `short variable = 100;`
- ✅ b. `byte variable=100;`
- ✅ c. `int variable = 100 ;`
- d. `double variable = 100;`
- e. `float variable=100;`

## Pregunta 18

**Enunciado:** Dado el siguiente código en Java:

```java
public class Caso5 {
    public static void main(String[] args) {
        double a=15.9;
        float b=13.8f;
        double suma = a+b;
        suma++;
        suma++;
        int c= (int)suma;
        c--;
        c--;
        c--;
        c+=23;
        c*=3;
        System.out.println(c);
    }
}
```

¿Qué se imprime en la consola al ejecutar el programa?

- a. 145
- ✅ b. 153
- c. 154
- d. El programa da un problema de compilación al tratar de ejecutar.

## Pregunta 19

**Enunciado:** Dado el siguiente código en Java:

```java
public class Caso4 {
    public static void main(String[] args) {
        String texto="Esto es un texto ";
        int indice=texto.indexOf('a');
        System.out.println(indice);
    }
}
```

¿Qué se imprime en la consola al ejecutar este programa?

- ✅ a. -1
- b. 15
- c. 10
- d. 4

## Pregunta 20

**Enunciado:** ¿Cuál es la diferencia entre `==` y `.equals()` al comparar variables de tipo `String` en Java?

- a. `==` compara el contenido de las cadenas, mientras que `.equals()` compara las referencias de objetos
- b. Java no permite comparar cadenas de texto
- c. Ambos son equivalentes y se pueden usar indistintamente
- ✅ d. `.equals()` compara el contenido de las cadenas, mientras que `==` compara las referencias de objetos
