# SQL

## Pregunta 1

**Enunciado:** ¿Cuál de los siguientes es un sublenguaje de SQL que se utiliza para definir la estructura de la base de datos, incluyendo la creación y modificación de tablas?

- a. DCL (Data Control Language)
- b. TCL (Transaction Control Language)
- ✅ c. DDL (Data Definition Language)
- d. DML (Data Manipulation Language)

## Pregunta 2

**Enunciado:** Dada la siguiente tabla empleados(id, nombre, salario), con id de tipo Serial ¿cuál es la sintaxis correcta para insertar un nuevo registro con nombre = 'Ana' y salario = 50000?

- ✅ a. INSERT INTO empleados (nombre, salario) VALUES ('Ana', 50000);
- b. INSERT INTO empleados VALUES (1, 'Ana', 50000);
- c. INSERT INTO empleados (id, nombre, salario) SET VALUES (1, 'Ana', 50000);
- d. INSERT INTO empleados (id, nombre, salario) VALUES (1, 50000, 'Ana');

## Pregunta 3

**Enunciado:** ¿Cuál es la sintaxis correcta para eliminar todos los registros de la tabla clientes donde fecha_registro es antes del 1 de enero de 2023?

- a. DELETE FROM clientes IF fecha_registro < '2023-01-01';
- b. DELETE clientes WHERE fecha_registro < '2023-01-01';
- ✅ c. DELETE FROM clientes WHERE fecha_registro < '2023-01-01';
- d. REMOVE FROM clientes WHERE fecha_registro < '2023-01-01';

## Pregunta 4

**Enunciado:** Dada la siguiente tabla departamentos(id, nombre, ubicacion), con id de tipo Serial (primary key), nombre y ubicación de tipo varchar(50).

¿Cuál es la sintaxis correcta para insertar tres nuevos registros en la tabla?

| Nombre           | Ubicación |
| ---------------- | --------- |
| Recursos Humanos | Piso 1    |
| Finanzas         | Piso 2    |
| Marketing        | Piso 3    |

- a. INSERT INTO departamentos VALUES (1, 'Recursos Humanos', 'Piso 1'),(2, 'Finanzas', 'Piso 2'), (3, 'Marketing', 'Piso 3');
- b. INSERT INTO departamentos (nombre, ubicacion) VALUES (1, 'Recursos Humanos', 'Piso 1'), (2, 'Finanzas', 'Piso 2'), (3, 'Marketing', 'Piso 3');
- c. INSERT INTO departamentos (id, nombre, ubicacion) INSERT (1, 'Recursos Humanos', 'Piso 1'),(2, 'Finanzas', 'Piso 2'),(3, 'Marketing', 'Piso 3');
- ✅ d. INSERT INTO departamentos (nombre, ubicacion) VALUES ('Recursos Humanos', 'Piso 1'), ('Finanzas', 'Piso 2'), ('Marketing', 'Piso 3');

## Pregunta 5

**Enunciado:** ¿Cuál es la sintaxis correcta para agregar una nueva columna a una tabla existente en PostgreSQL?

- a. UPDATE TABLE table_name ADD COLUMN column_name data_type;
- ✅ b. ALTER TABLE table_name ADD COLUMN column_name data_type;
- c. ALTER TABLE table_name NEW COLUMN column_name data_type;
- d. MODIFY TABLE table_name ADD COLUMN column_name data_type;

## Pregunta 6

**Enunciado:** ¿Qué sublenguaje de SQL se utiliza para gestionar los permisos y accesos a la base de datos?

- ✅ a. DCL (Data Control Language)
- b. DML (Data Manipulation Language)
- c. DDL (Data Definition Language)
- d. TCL (Transaction Control Language)

## Pregunta 7

**Enunciado:** ¿Cuál consulta selecciona todos los registros de la tabla libros donde el año de publicación está entre 2000 y 2010?

- a. SELECT \* FROM libros WHERE año_publicacion = 2000 OR año_publicacion = 2010;
- b. SELECT \* FROM libros WHERE año_publicacion > 2000 AND año_publicacion < 2010;
- ✅ c. SELECT \* FROM libros WHERE año_publicacion BETWEEN 2000 AND 2010;
- d. SELECT \* FROM libros WHERE año_publicacion = 2000 AND año_publicacion = 2010;

## Pregunta 8

**Enunciado:** ¿Cuál consulta selecciona los nombres y fechas de nacimiento de los estudiantes que nacieron entre 1995 y 2000 y cuya carrera no es 'Ingeniería', 'Medicina' o 'Arquitectura'?

- a. SELECT nombre, fecha_nacimiento FROM estudiantes WHERE fecha_nacimiento BETWEEN '1995-01-01' AND '2000-12-31' OR nom_carrera IN ('Ingeniería', 'Medicina', 'Arquitectura');
- b. SELECT nombre As nombre, fecha_nacimiento As fecha FROM estudiantes WHERE fecha_nacimiento > '1995-01-01' AND fecha_nacimiento < '2000-12-31' AND nom_carrera IN ('Ingeniería', 'Medicina', 'Arquitectura');
- ✅ c. SELECT nombre, fecha_nacimiento As fecha FROM estudiantes WHERE fecha_nacimiento BETWEEN '1995-01-01' AND '2000-12-31' AND nom_carrera NOT IN ('Ingeniería', 'Medicina', 'Arquitectura');
- d. SELECT nombre, fecha_nacimiento fecha FROM estudiantes WHERE fecha_nacimiento IN ('1995', '2000') AND nom_carrera NOT IN ('Ingeniería', 'Medicina', 'Arquitectura');

## Pregunta 9

**Enunciado:** ¿Cuál consulta devuelve el título y el año de publicación de los libros que cumplen todas las siguientes condiciones?

- Fueron publicados entre 2015 y 2020.
- El id_autor es 1, 3 o 5.
- Tienen una calificación mayor o igual a 4.
- a. SELECT titulo, año_publicacion FROM libros WHERE año_publicacion BETWEEN 2015 AND 2020 AND id_autor IN (1, 3, 5) OR calificacion >= 4;
- b. SELECT titulo, año_publicacion FROM libros WHERE año_publicacion BETWEEN 2015 AND 2020 AND id_autor = 1 OR id_autor = 3 OR id_autor = 5 AND calificacion >= 4;
- c. SELECT titulo, año_publicacion FROM libros WHERE año_publicacion BETWEEN 2015 AND 2020 OR id_autor IN (1, 3, 5) AND calificacion >= 4;
- ✅ d. SELECT titulo, año_publicacion FROM libros WHERE año_publicacion BETWEEN 2015 AND 2020 AND id_autor IN (1, 3, 5) AND calificacion >= 4;

## Pregunta 10

**Enunciado:** Dada la siguiente tabla productos con la columna codigo ¿cuál es la forma correcta de seleccionar los registros donde codigo comienza con una letra seguida de exactamente cuatro dígitos?

- a. SELECT \* FROM productos WHERE codigo ~ 'A[0-9][0-9][0-9][0-9]';
- b. SELECT \* FROM productos WHERE codigo SIMILAR TO '[A-Z][0-9]{4}';
- c. SELECT \* FROM productos WHERE codigo LIKE '[A-Z][0-9][0-9][0-9][0-9]';
- ✅ d. SELECT \* FROM productos WHERE codigo ~ '^[A-Za-z]\d{4}$';

## Pregunta 11

**Enunciado:** Se necesita recuperar los registros de la tabla empleados donde la columna nombre contiene la secuencia "Juan" en cualquier parte del texto. ¿Cuál es la sintaxis SQL correcta?

- a. SELECT \* FROM empleados WHERE nombre LIKE 'Juan%';
- b. SELECT \* FROM empleados WHERE nombre LIKE '_Juan_';
- c. SELECT \* FROM empleados WHERE nombre LIKE '%Juan';
- ✅ d. SELECT \* FROM empleados WHERE nombre LIKE '%Juan%';

## Pregunta 12

**Enunciado:** Dado el siguiente conjunto de datos de ventas, ventas(id_venta, producto, cantidad, precio), ¿cómo se calcularía la cantidad total vendida por producto?

- a. SELECT producto, AVG(cantidad) FROM ventas GROUP BY producto;
- ✅ b. SELECT producto, SUM(cantidad) FROM ventas GROUP BY producto;
- c. SELECT producto, MAX(cantidad) FROM ventas GROUP BY producto;
- d. SELECT producto, COUNT(cantidad) FROM ventas GROUP BY producto;

## Pregunta 13

**Enunciado:** Para filtrar grupos en una consulta de agregación según una condición sobre un valor agregado, ¿qué cláusula deberíamos usar?

- ✅ a. Usando la cláusula HAVING
- b. Usando la cláusula GROUP BY
- c. Usando la cláusula ORDER BY
- d. Usando la cláusula WHERE

## Pregunta 14

**Enunciado:** En una consulta SQL, ¿cuál es el orden correcto de las cláusulas GROUP BY, ORDER BY y HAVING?

- ✅ a. GROUP BY, HAVING, ORDER BY
- b. ORDER BY, GROUP BY, HAVING
- c. HAVING, ORDER BY, GROUP BY
- d. HAVING, GROUP BY, ORDER BY

## Pregunta 15

**Enunciado:** ¿Cuál de las siguientes opciones describe mejor a PostgreSQL?

- a. Un lenguaje de programación orientado a objetos
- b. Un sistema operativo especializado para servidores
- c. Un entorno de desarrollo integrado (IDE) para bases de datos
- ✅ d. Un sistema de gestión de bases de datos relacional y de código abierto

## Pregunta 16

**Enunciado:** Dado el siguiente conjunto de datos de ventas, ventas (id_venta, producto, cantidad, precio), ¿cómo podrías calcular el precio promedio de los productos cuyo total vendido supera 100 unidades?

- ✅ a. SELECT producto As prod, SUM(precio) FROM ventas GROUP BY producto HAVING SUM(cantidad) > 100;
- b. SELECT producto prod, AVG(precio) FROM ventas WHERE cantidad > 100 GROUP BY producto;
- c. SELECT producto prod, AVG(precio) FROM ventas HAVING SUM(cantidad) > 100 GROUP BY producto;
- d. SELECT producto As prod, AVG(precio) FROM ventas WHERE SUM(cantidad) > 100 GROUP BY producto;

> **Nota:** ninguna opción es perfecta. La (a) es la única sintácticamente válida (`GROUP BY` antes de `HAVING`), pero usa `SUM(precio)` en lugar de `AVG(precio)`. La (c) tiene la agregación correcta pero invierte el orden de las cláusulas, por lo que da error en PostgreSQL. La consulta realmente correcta sería:
>
> ```sql
> SELECT producto, AVG(precio) FROM ventas GROUP BY producto HAVING SUM(cantidad) > 100;
> ```

## Pregunta 17

**Enunciado:** En una tabla de pedidos (id_pedido, id_cliente, fecha_pedido), ¿cómo podrías obtener las 5 fechas más recientes en las que se realizó al menos un pedido, sin repetir fechas?

- a. SELECT fecha_pedido FROM pedidos GROUP BY DISTINCT fecha_pedido LIMIT 5 DESC;
- ✅ b. SELECT DISTINCT fecha_pedido fecha FROM pedidos ORDER BY fecha_pedido DESC LIMIT 5;
- c. SELECT fecha_pedido FROM pedidos DISTINCT ORDER BY fecha_pedido DESC LIMIT 5;
- d. SELECT DISTINCT fecha_pedido fecha FROM pedidos LIMIT 5 ORDER BY fecha_pedido DESC;

## Pregunta 18

**Enunciado:** SELECT a.nombre, b.direccion FROM empleados a LEFT JOIN direcciones b ON a.id_empleado = b.id_empleado;
¿Cuál es el resultado de la siguiente consulta SQL?

- ✅ a. Muestra todas las filas de la tabla empleados y solo las filas coincidentes de la tabla direcciones
- b. Muestra todas las filas de la tabla empleados y todas las filas de la tabla direcciones
- c. Muestra solo las filas de la tabla empleados que tienen coincidencias en la tabla direcciones
- d. Muestra todas las filas de la tabla direcciones y solo las filas coincidentes de la tabla empleados

## Pregunta 19

**Enunciado:** SELECT c.nombre, o.fecha FROM clientes c INNER JOIN pedidos o ON c.id = o.id_cliente;
¿Cuál es el resultado de la siguiente consulta SQL?

- ✅ a. Muestra solo las filas que tienen coincidencias en ambas tablas.
- b. Muestra todas las filas de la tabla pedidos y solo las filas coincidentes de la tabla clientes.
- c. Muestra todas las filas de la tabla clientes y solo las filas coincidentes de la tabla pedidos.
- d. Muestra todas las filas de la tabla clientes y todas las filas de la tabla pedidos.

## Pregunta 20

**Enunciado:** Dada la siguiente consulta:

SELECT p.nombre, o.fecha FROM pedidos o RIGHT JOIN productos p ON o.id_producto = p.id;

¿Qué registros se incluirían en el resultado de la consulta?

- a. Muestra todas las filas de la tabla pedidos y solo las filas coincidentes de la tabla productos.
- b. Muestra solo las filas que tienen coincidencias en ambas tablas.
- ✅ c. Muestra todas las filas de la tabla productos y solo las filas coincidentes de la tabla pedidos.
- d. Muestra todas las filas de la tabla productos y todas las filas de la tabla pedidos.

## Pregunta 21

**Enunciado:** Dada la siguiente consulta:

SELECT p.producto, s.stock FROM productos p FULL JOIN inventario s ON p.id_producto = s.id_producto;

¿Cuál es el resultado de la consulta SQL utilizando FULL JOIN?

- a. Muestra todos los productos y solo los datos de stock coincidentes.
- ✅ b. Muestra todos los productos y todos los registros del inventario, con NULL donde no haya coincidencias.
- c. Muestra todos los registros del inventario y solo los datos de productos coincidentes.
- d. Muestra solo los productos y registros de inventario que tienen coincidencias en ambas tablas.

## Pregunta 22

**Enunciado:** ¿Cuál es la característica distintiva de PostgreSQL en comparación con otros sistemas de gestión de bases de datos?

- a. No soporta transacciones
- ✅ b. Permite la creación de tipos de datos personalizados
- c. Solo funciona en sistemas Windows
- d. Es un software propietario

## Pregunta 23

**Enunciado:** Dado un conjunto de datos de ventas (id_venta, producto, cantidad, precio), ¿cómo podrías seleccionar los productos cuyo precio es mayor que el precio promedio de todos los productos vendidos?

- a. SELECT producto FROM ventas v1 WHERE precio > (SELECT MIN(precio) FROM ventas);
- b. SELECT producto FROM ventas v1 WHERE precio > (SELECT AVG(precio) FROM ventas v2 WHERE v1.producto = v2.producto);
- c. SELECT producto FROM ventas v1 WHERE precio > (SELECT MAX(precio) FROM ventas WHERE v1.producto = ventas.producto);
- ✅ d. SELECT producto FROM ventas v1 WHERE precio > (SELECT AVG(precio) FROM ventas);

## Pregunta 24

**Enunciado:** Dado un conjunto de datos en una tabla de empleados (id_empleado, nombre, apellido), ¿cómo podrías obtener los primeros 3 caracteres del nombre y los últimos 2 caracteres del apellido, concatenados juntos en una sola columna llamada user?

- ✅ a. SELECT CONCAT(LEFT(nombre, 3), RIGHT(apellido, 2)) AS user FROM empleados;
- b. SELECT CONCAT(LEFT(nombre, 3), LEFT(apellido, 2)) AS user FROM empleados;
- c. SELECT LEFT(CONCAT(nombre, apellido), 3) AS user FROM empleados;
- d. SELECT CONCAT(RIGHT(nombre, 3), RIGHT(apellido, 2)) AS user FROM empleados;

## Pregunta 25

**Enunciado:** En una tabla de productos (id_producto, descripcion), ¿cómo podrías reemplazar todas las instancias de la palabra "nuevo" con "antiguo" en la descripción y luego obtener la longitud de la nueva descripción?

- a. SELECT LENGTH(descripcion) - LENGTH(REPLACE(descripcion, 'nuevo', 'antiguo')) AS longitud FROM productos;
- b. SELECT LENGTH(REPLACE(descripcion, 'nuevo', 'antiguo')) - LENGTH(descripcion) AS longitud FROM productos;
- ✅ c. SELECT LENGTH(REPLACE(descripcion, 'nuevo', 'antiguo')) AS longitud FROM productos;
- d. SELECT LENGTH(CONCAT(REPLACE(descripcion, 'nuevo', 'antiguo'))) AS longitud FROM productos;

## Pregunta 26

**Enunciado:** Dado un conjunto de datos en una tabla de estudiantes (id_estudiante, nombre, apellido), ¿cómo podrías crear el mail correspondiente con el formato nombre.apellido@estudiantes.edu.uy y visualizarlo en la columna correo?

- a. SELECT nombre || '-' || apellido || '@estudiantes.edu.uy' AS correo FROM estudiantes;
- ✅ b. SELECT CONCAT(nombre, '.', apellido, '@estudiantes.edu.uy') AS correo FROM estudiantes;
- c. SELECT nombre || . || apellido || '@estudiantes.edu.uy' AS correo FROM estudiantes;
- d. SELECT CONCAT(nombre, ' ', apellido, '@estudiantes.edu.uy') AS correo FROM estudiantes;

## Pregunta 27

**Enunciado:** En una tabla de clientes (id_cliente, nombre_cliente), ¿cómo podrías obtener el nombre del cliente sin los últimos 3 caracteres y luego reemplazar cualquier ocurrencia de la letra 'a' con 'x'?

- a. SELECT RIGHT(nombre_cliente, LENGTH(nombre_cliente) - 3), 'a', 'x' AS nombre_modificado FROM clientes;
- ✅ b. SELECT REPLACE(LEFT(nombre_cliente, LENGTH(nombre_cliente) - 3), 'a', 'x') AS nombre_modificado FROM clientes;
- c. SELECT REPLACE(RIGHT(nombre_cliente, 3), 'a', 'x') AS nombre_modificado FROM clientes;
- d. SELECT REPLACE(LEFT(nombre_cliente, 3), 'a', 'x') AS nombre_modificado FROM clientes;

## Pregunta 28

**Enunciado:** Dado un conjunto de datos en una tabla de empleados (id_empleado, nombre, fecha_contratacion), ¿cómo podrías calcular la antigüedad en años de un empleado desde su fecha de contratación hasta la fecha actual?

- a. SELECT DATE_PART('month', AGE(fecha_contratacion)) AS antiguedad FROM empleados;
- b. SELECT DATE_PART('year' CURRENT_DATE) - DATE_PART('year' fecha_contratacion) AS antiguedad FROM empleados;
- ✅ c. SELECT DATE_PART('year', CURRENT_DATE) - DATE_PART('year', fecha_contratacion) AS antiguedad FROM empleados;
- d. SELECT DATE_PART('year', CURRENT_DATE - fecha_contratacion) AS antiguedad FROM empleados;

## Pregunta 29

**Enunciado:** Dadas las tablas clientes(cliente_id, nombre) y pedidos(pedido_id, cliente_id, cantidad), ¿cuál de las siguientes consultas crea correctamente una vista que muestra el nombre del cliente y el total de pedidos realizados por cada uno?

- a. CREATE VIEW vista_total_pedidos AS SELECT nombre, cantidad FROM clientes JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;
- b. CREATE VIEW vista_total_pedidos AS SELECT nombre, SUM(precio) FROM clientes JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente GROUP BY nombre;
- c. CREATE VIEW vista_total_pedidos ASSELECT nombre, COUNT(\*) FROM clientes JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente GROUP BY nombre;
- ✅ d. CREATE VIEW vista_total_pedidos AS SELECT nombre, SUM(cantidad) FROM clientes JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente GROUP BY nombre;

## Pregunta 30

**Enunciado:** ¿Cuál de las siguientes palabras clave se utiliza para filtrar resultados en una consulta SQL?

- a. SELECT
- b. JOIN
- c. GROUP BY
- ✅ d. WHERE

## Pregunta 31

**Enunciado:** Tienes las siguientes vistas en tu base de datos: vista_clientes y vista_ventas.

Se pide escribir una consulta que devuelva el nombre del cliente y el monto total de todas sus compras (monto_total_compras) utilizando la menor cantidad de vistas posibles.

¿Cuál de las siguientes consultas devuelve el resultado correcto utilizando solo una vista?

- ✅ a. SELECT v.nombre_cliente, SUM(v.monto_total) AS monto_total_compras FROM vista_ventas v GROUP BY v.nombre_cliente;
- b. SELECT vc.nombre_cliente, SUM(v.monto_total) AS monto_total_compras FROM vista_clientes vc JOIN vista_ventas v ON vc.id_cliente = v.id_cliente GROUP BY vc.nombre_cliente;
- c. SELECT vc.nombre_cliente, v.monto_total FROM vista_clientes vc JOIN vista_ventas v ON vc.id_cliente = v.id_cliente;
- d. SELECT vc.nombre_cliente, SUM(v.monto_total) AS monto_total_compras FROM vista_clientes vc JOIN vista_ventas v ON vc.id_cliente = v.id_cliente JOIN vista_detalle_ventas dv ON v.id_venta = dv.id_venta GROUP BY vc.nombre_cliente;

## Pregunta 32

**Enunciado:** Si un rol llamado rol_ventas tiene permisos sobre la tabla ventas, ¿cuál de las siguientes consultas utilizarías para darle a user2 los mismos permisos a través del rol?

- a. GRANT USER user2 TO rol_ventas;
- ✅ b. GRANT rol_ventas TO user2;
- c. GRANT ALL PRIVILEGES ON ventas TO user2;
- d. GRANT INSERT ON ventas TO user2;

## Pregunta 33

**Enunciado:** Si el rol rol_reportes tiene el privilegio de SELECT en varias tablas, ¿cuál es el resultado de la siguiente consulta?

REVOKE SELECT ON ventas FROM rol_reportes;

- ✅ a. El rol rol_reportes retiene todos sus privilegios de SELECT menos en la tabla ventas.
- b. Nada cambia; rol_reportes mantiene todos sus privilegios.
- c. Todos los usuarios asociados a rol_reportes pierden el privilegio de SELECT en todas las tablas.
- d. El rol rol_reportes pierde el privilegio de SELECT en todas las tablas.

## Pregunta 34

**Enunciado:** ¿Cuál de las siguientes afirmaciones es correcta acerca de los roles en SQL?

- a. Los roles no pueden ser asignados a otros roles.
- ✅ b. Los roles permiten agrupar y gestionar permisos de manera centralizada.
- c. Un usuario solo puede tener un rol activo a la vez.
- d. Los privilegios otorgados a un rol no se aplican a los usuarios asignados a ese rol.

## Pregunta 35

**Enunciado:** ¿Cuál de las siguientes afirmaciones es verdadera sobre las transacciones en PostgreSQL?

- a. Las transacciones no pueden ser deshechas una vez confirmadas.
- b. Las transacciones son automáticas en PostgreSQL y no necesitan ser iniciadas explícitamente.
- c. Una transacción solo puede ser iniciada con el comando ROLLBACK.
- ✅ d. Las transacciones permiten agrupar varias operaciones SQL en una sola unidad de trabajo.

## Pregunta 36

**Enunciado:** ¿Qué comando se utiliza para confirmar una transacción en PostgreSQL?

- a. ABORT
- b. ROLLBACK
- c. SAVEPOINT
- ✅ d. COMMIT

## Pregunta 37

**Enunciado:** A continuación se presenta un bloque de código. Leerlo o analizarlo y responder: ¿qué hace el código?

```sql
BEGIN;
UPDATE cuentas
SET saldo = saldo - 100
WHERE id = 1;
SAVEPOINT antes_insertar;
INSERT INTO transacciones (id_cuenta, monto, tipo)
VALUES (1, 100, 'retiro');
ROLLBACK TO SAVEPOINT antes_insertar;
COMMIT;
```

- a. El UPDATE se deshará, pero el INSERT se mantendrá.
- b. Tanto el UPDATE como el INSERT se mantendrán en la base de datos.
- c. El UPDATE y el INSERT se desharán.
- ✅ d. Solo el INSERT será revertido, mientras que el UPDATE permanecerá.

## Pregunta 38

**Enunciado:** ¿Cuál de los siguientes parámetros opcionales se puede utilizar al crear una base de datos en PostgreSQL?

- a. LC_COLLATE
- b. ENCODING
- c. TABLESPACE
- ✅ d. Todas son correctas

## Pregunta 39

**Enunciado:** ¿Qué comando permite cambiar el propietario de una base de datos en PostgreSQL?

- a. ALTER DATABASE OWNER TO nuevo_propietario;
- b. CHANGE DATABASE OWNER TO nuevo_propietario;
- ✅ c. ALTER DATABASE nombre OWNER TO nuevo_propietario;
- d. MODIFY DATABASE nombre OWNER TO nuevo_propietario;

## Pregunta 40

**Enunciado:** ¿Qué palabra clave se utiliza para eliminar una tabla en SQL?

- a. DELETE TABLE
- b. ERASE TABLE
- ✅ c. DROP TABLE
- d. REMOVE TABLE

## Pregunta 41

**Enunciado:** ¿Qué parámetro de configuración se usa para definir la ubicación de los archivos de log en PostgreSQL?

- a. log_destination
- ✅ b. log_directory
- c. logging_collector
- d. log_filename

## Pregunta 42

**Enunciado:** ¿Cuál es el parámetro de configuración que permite habilitar el registro de eventos en PostgreSQL en Windows?

- ✅ a. logging_collector
- b. log_statement
- c. log_min_messages
- d. log_directory

## Pregunta 43

**Enunciado:** ¿Cuál de los siguientes tipos de índices en PostgreSQL es más adecuado para columnas con valores únicos?

- ✅ a. Índice B-tree
- b. Índice GiST
- c. Índice Hash
- d. Índice SP-GiST

## Pregunta 44

**Enunciado:** ¿Qué tipo de índice en PostgreSQL es útil para acelerar las búsquedas que involucran patrones de texto?

- a. Índice B-tree
- b. Índice GiST
- ✅ c. Índice GIN
- d. Índice Hash

## Pregunta 45

**Enunciado:** ¿Qué es un tablespace en PostgreSQL?

- a. Un esquema dentro de una base de datos
- b. Un conjunto de tablas dentro de una base de datos
- c. Un índice especial para mejorar la velocidad de las consultas
- ✅ d. Un espacio en el disco donde se almacenan los objetos de la base de datos

## Pregunta 46

**Enunciado:** ¿Cuál es el propósito principal de un tablespace en PostgreSQL?

- a. Dividir los datos en diferentes esquemas
- b. Almacenar índices de forma separada
- c. Crear copias de seguridad automáticas
- ✅ d. Organizar y distribuir los datos en diferentes discos o ubicaciones

## Pregunta 47

**Enunciado:** ¿Cuál de las siguientes es una característica clave del lenguaje PL/pgSQL en PostgreSQL?

- a. Es un lenguaje de programación de propósito general que se puede usar fuera de la base de datos.
- b. No soporta la reutilización de código mediante funciones.
- ✅ c. Permite la creación de funciones y triggers que pueden incluir control de flujo, variables y manejo de excepciones.
- d. Es un lenguaje orientado a objetos que permite herencia y polimorfismo.

## Pregunta 48

**Enunciado:** ¿Cuál de las siguientes opciones describe mejor cómo se integra PL/pgSQL con SQL en PostgreSQL?

- a. PL/pgSQL reemplaza completamente a SQL en PostgreSQL, por lo que no se pueden usar comandos SQL tradicionales.
- b. PL/pgSQL es un lenguaje independiente que no se puede combinar con SQL dentro de una misma función.
- c. PL/pgSQL no permite ejecutar consultas SQL dentro de su código.
- ✅ d. PL/pgSQL extiende SQL, permitiendo la inclusión de lógica procedural como loops y condiciones dentro de comandos SQL.

## Pregunta 49

**Enunciado:** ¿Qué tipo de dato en SQL es más adecuado para almacenar una fecha y hora con precisión hasta microsegundos?

- a. DATE
- ✅ b. TIMESTAMP
- c. TIME
- d. DATETIME

## Pregunta 50

**Enunciado:** La siguiente función en PL/pgSQL realiza dos acciones:

a) Selecciona una fila de la tabla productos y luego
b) Actualiza el registro basado en una lógica condicional.

¿Cómo sería el bloque DECLARE de esta función?

- a. DECLARE v_producto RECORD;
- ✅ b. DECLARE v_producto productos%ROWTYPE;
- c. DECLARE v_producto productos;
- d. DECLARE v_producto productos%TYPE;

## Pregunta 51

**Enunciado:** ¿Qué valor retornará la siguiente función en PL/pgSQL cuando se le pasa el parámetro p_num = 10?

```sql
CREATE OR REPLACE FUNCTION evaluar_numero(p_num INT)
RETURNS TEXT AS $$
BEGIN
    IF p_num < 5 THEN
        RETURN 'Menor que 5';
    ELSIF p_num BETWEEN 5 AND 10 THEN
        RETURN 'Entre 5 y 10';
    ELSE
        RETURN 'Mayor que 10';
    END IF;
END;
$$ LANGUAGE plpgsql;
```

- a. Menor que 5
- b. Mayor que 10
- c. Ninguno, retornará NULL
- ✅ d. Entre 5 y 10

## Pregunta 52

**Enunciado:** ¿Cuál función suma los números del 1 al 10 en PL/pgSQL de forma correcta?

- a.

```sql
CREATE OR REPLACE FUNCTION sumar_hasta_diez()
RETURNS INT AS $$
DECLARE
    i INT := 1;
    total INT := 0;
BEGIN
    WHILE i <= 10
    LOOP
        total := total + i;
        i := i + 1;
    END WHILE;
END;
$$ LANGUAGE plpgsql;
```

- ✅ b.

```sql
CREATE OR REPLACE FUNCTION sumar_hasta_diez()
RETURNS INT AS $$
DECLARE
    i INT := 1;
    total INT := 0;
BEGIN
    WHILE i <= 10 LOOP
        total := total + i;
        i := i + 1;
    END LOOP;
    RETURN total;
END;
$$ LANGUAGE plpgsql;
```

- c.

```sql
CREATE OR REPLACE FUNCTION sumar_hasta_diez()
RETURNS INT AS $$
DECLARE
    i INT := 1;
    total INT := 0;
BEGIN
    WHILE i <= 10
    LOOP total := total + i;
    i := i + 1;
    END LOOP;
    RETURN total;
END;
$$ LANGUAGE plpgsql;
```

- d.

```sql
CREATE OR REPLACE FUNCTION sumar_hasta_diez()
RETURNS INT AS $$
DECLARE
    i INT := 1;
    total INT := 0;
BEGIN
    WHILE i <= 10 DO
        total := total + i;
        i := i + 1;
    END LOOP;
END;
$$ LANGUAGE plpgsql;
```

## Pregunta 53

**Enunciado:** ¿Cuál es la forma correcta de definir un procedimiento en PL/pgSQL que dada la tabla contadores(id, valor) incremente en 1 el valor de un id específico de la tabla pasado por parámetro al procedimiento?

- a.

```sql
CREATE PROCEDURE incrementar_contador(p_id INT)
RETURNS VOID AS $$
BEGIN
    UPDATE contadores
    SET valor = valor + 1
    WHERE id = p_id;
END;
$$ LANGUAGE plpgsql;
```

- b.

```sql
CREATE PROCEDURE incrementar_contador(p_id INT)
AS $$
BEGIN
    SELECT valor
    FROM contadores
    WHERE id = p_id;
    valor = valor + 1;
END;
$$ LANGUAGE plpgsql;
```

- c.

```sql
CREATE PROCEDURE incrementar_contador()
LANGUAGE plpgsql
AS $$
DECLARE
p_id int = 1;
BEGIN
    UPDATE contadores
    SET valor = valor + 1
    WHERE id = p_id;
END;
$$;
```

- ✅ d.

```sql
CREATE PROCEDURE incrementar_contador(p_id INT)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE contadores
    SET valor = valor + 1
    WHERE id = p_id;
END;
$$;
```

## Pregunta 54

**Enunciado:** ¿Cuál es la sintaxis correcta para llamar al procedimiento incrementar_contador que acepta un parámetro p_id en PL/pgSQL?

- ✅ a. CALL incrementar_contador(5);
- b. EXECUTE incrementar_contador(5);
- c. CALL PROCEDURE incrementar_contador(5);
- d. EXEC incrementar_contador(5);

## Pregunta 55

**Enunciado:** ¿Cuál es la sintaxis correcta para eliminar una función llamada calcular_total que acepta dos parámetros NUMERIC y retorna un NUMERIC?

- a. DROP FUNCTION calcular_total;
- ✅ b. DROP FUNCTION calcular_total(NUMERIC, NUMERIC);
- c. DROP FUNCTION calcular_total(NUMERIC, NUMERIC) RESTRICT;
- d. DROP FUNCTION calcular_total(NUMERIC, NUMERIC) CASCADE;

## Pregunta 56

**Enunciado:** Para crear un trigger que se active antes de insertar un nuevo registro en la tabla ventas, que invoca la función log_venta. ¿Cuál es la sintaxis correcta?

- a. CREATE TRIGGER antes_insertar_venta BEFORE INSERT ON ventas FOR EACH ROW CALL log_venta();
- ✅ b. CREATE TRIGGER antes_insertar_venta BEFORE INSERT ON ventas FOR EACH ROW EXECUTE FUNCTION log_venta();
- c. CREATE TRIGGER antes_insertar_venta BEFORE INSERT ON ventas FOR EACH ROW EXECUTE PROCEDURE log_venta();
- d. CREATE TRIGGER antes_insertar_venta AFTER INSERT ON ventas FOR EACH ROW EXECUTE FUNCTION log_venta();

## Pregunta 57

**Enunciado:** ¿Cuál es la principal diferencia entre los tipos de datos CHAR y VARCHAR en SQL?

- a. CHAR almacena solo números y VARCHAR almacena texto
- ✅ b. CHAR tiene una longitud fija y VARCHAR tiene una longitud variable
- c. CHAR ocupa menos espacio que VARCHAR independientemente de la longitud
- d. CHAR admite valores NULL mientras que VARCHAR no

## Pregunta 58

**Enunciado:** ¿Cuál de los siguientes eventos NO puede activar un trigger en PostgreSQL?

- a. INSERT
- ✅ b. SELECT
- c. UPDATE
- d. DELETE

## Pregunta 59

**Enunciado:** Se tiene una tabla empleados y se desea crear un trigger que registre cada inserción en una tabla log_empleados. ¿Qué evento y acción se deben usar para crear este trigger?

- a. BEFORE INSERT ON empleados FOR EACH ROW INSERT INTO log_empleados
- ✅ b. AFTER INSERT ON empleados FOR EACH ROW INSERT INTO log_empleados
- c. BEFORE INSERT ON log_empleados FOR EACH ROW INSERT INTO empleados
- d. AFTER INSERT ON log_empleados FOR EACH ROW INSERT INTO empleados

## Pregunta 60

**Enunciado:** Si deseas crear una base de datos en PostgreSQL y luego cambiar el propietario de la base de datos a un rol específico. ¿Cuál es la secuencia correcta de comandos SQL?

- ✅ a. CREATE DATABASE my_database; ALTER DATABASE my_database OWNER TO db_owner;
- b. CREATE DATABASE my_database; SET OWNER TO db_owner;
- c. CREATE DATABASE my_database OWNER db_owner;
- d. CREATE DATABASE my_database WITH OWNER db_owner;

## Pregunta 61

**Enunciado:** ¿Qué significa SQL?

- ✅ a. Structured Query Language
- b. Sequential Query Language
- c. Standard Query Language
- d. Simple Query Language

## Pregunta 62

**Enunciado:** ¿Qué significa que PostgreSQL cumple con el estándar ACID?

- ✅ a. Atomicidad, Consistencia, Aislamiento, Durabilidad
- b. Acceso, Consistencia, Integridad, Distribución
- c. Autenticidad, Consistencia, Integridad, Disponibilidad
- d. Atomicidad, Coherencia, Integridad, Durabilidad

## Pregunta 63

**Enunciado:** ¿Cuál es la función de la sentencia `SELECT` en SQL?

- a. Eliminar datos de una tabla
- ✅ b. Consultar datos en una tabla
- c. Insertar datos en una tabla
- d. Actualizar datos en una tabla

## Pregunta 64

**Enunciado:** ¿Cuál de las siguientes es una sentencia DML?

- a. GRANT
- ✅ b. INSERT
- c. COMMIT
- d. SAVEPOINT

## Pregunta 65

**Enunciado:** ¿Qué hace la sentencia `COMMIT` en SQL?

- a. Eliminar datos de una tabla
- b. Revertir transacciones
- ✅ c. Guardar cambios permanentemente en la base de datos
- d. Conceder permisos a usuarios

## Pregunta 66

**Enunciado:** ¿Qué significa que SQL es un lenguaje declarativo?

- ✅ a. Se enfoca en qué resultado se desea obtener
- b. Es utilizado solo para consulta de datos
- c. Solo puede ser utilizado en bases de datos relacionales
- d. Se enfoca en cómo realizar las operaciones

## Pregunta 67

**Enunciado:** ¿Cuál de las siguientes sentencias se utiliza para eliminar registros de una tabla en SQL?

- a. DROP
- ✅ b. DELETE
- c. REMOVE
- d. TRUNCATE

## Pregunta 68

**Enunciado:** ¿Qué sublenguaje de SQL permite controlar el acceso a los objetos de la base de datos?

- a. DML
- ✅ b. DCL
- c. DDL
- d. TCL

## Pregunta 69

**Enunciado:** ¿Cuál es la sentencia correcta para otorgar permisos en SQL?

- ✅ a. GRANT
- b. REVOKE
- c. PERMIT
- d. ALLOW

## Pregunta 70

**Enunciado:** ¿Qué es PostgreSQL?

- a. Un lenguaje de programación
- b. Una herramienta de desarrollo web
- ✅ c. Un sistema de gestión de bases de datos relacional de código abierto
- d. Un sistema operativo

## Pregunta 71

**Enunciado:** Complete la sentencia SQL para crear una tabla con una columna de tipo autoincremental:  
`CREATE TABLE ejemplo_serial (id [ ___ ] PRIMARY KEY, nombre VARCHAR(100));`

- ✅ `SERIAL`
- `AUTOINCREMENT`
- `SEQUENCE`
- `INCREMENTAL`

## Pregunta 72

**Enunciado:** Complete la siguiente sentencia SQL para agregar un comentario de una sola línea:  
`SELECT * FROM empleados; [ ___ ] Obtenemos todos los registros de empleados`

- ✅ `--`
- `//`
- `*/`
- `/*`

## Pregunta 73

**Enunciado:** Complete la consulta SQL para seleccionar todos los registros de la tabla empleados donde la columna edad es mayor a 30:  
`SELECT [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] 30;`

- **Opción 1:** `FROM` | `edad` | `empleados` | `4` | `WHERE` | `>`
- **Opción 2:** `empleados` | `FROM` | `edad` | `4` | `WHERE` | `>`
- **Opción 3:** `WHERE` | `FROM` | `edad` | `empleados` | `4` | `>`
- **Opción 4:** `edad` | `FROM` | `empleados` | `4` | `WHERE` | `>`
- **Opción 5:** `>` | `FROM` | `edad` | `empleados` | `4` | `WHERE`

✅ **Resultado completo:** `SELECT FROM empleados WHERE edad > 30;`

## Pregunta 74

**Enunciado:** Complete la consulta SQL para insertar un registro en la tabla MI_TABLA:  
`[ 1 ] [ 2 ] MI_TABLA [ 3 ] (3, 'hola');`

- **Opción 1:** `INSERT` | `SELECT` | `INTO` | `ON` | `VALUES`
- **Opción 2:** `INTO` | `SELECT` | `INSERT` | `ON` | `VALUES`
- **Opción 3:** `VALUES` | `SELECT` | `INTO` | `INSERT` | `ON`

✅ **Resultado completo:** `INSERT INTO MI_TABLA VALUES (3, 'hola');`

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
- **Número decimal:**
  - ✅ `45.67`
  - `123`
  - `'cadena'`

## Pregunta 76

**Enunciado:** Empareje el operador SQL con su función correspondiente:

- **= (símbolo de igual):**
  - ✅ Operador de comparación
  - Operador lógico
  - Operador aritmético
- **+ (símbolo de más):**
  - ✅ Operador aritmético
  - Operador lógico
  - Operador de comparación
- **AND:**
  - ✅ Operador lógico
  - Operador aritmético
  - Operador de comparación

## Pregunta 77

**Enunciado:** ¿Cuál es el símbolo utilizado para seleccionar todas las columnas de una tabla en SQL?

- ✅ a. \* (símbolo de asterisco)
- b. @ (símbolo de arroba)
- c. % (símbolo de porcentaje)
- d. # (símbolo de numeral)

## Pregunta 78

**Enunciado:** ¿Cuál es la longitud máxima permitida para los identificadores en SQL?

- a. 32 caracteres
- ✅ b. 63 caracteres
- c. 128 caracteres
- d. 255 caracteres

## Pregunta 79

**Enunciado:** ¿Cuál de los siguientes operadores lógicos se utiliza en SQL para combinar dos condiciones que deben ser verdaderas?

- ✅ a. AND
- b. NOT
- c. OR
- d. XOR

## Pregunta 80

**Enunciado:** ¿Cuál es la diferencia principal entre los tipos de datos CHAR y VARCHAR?

- a. CHAR es para cadenas de longitud variable y VARCHAR para longitud fija.
- b. Ambos son para cadenas de longitud variable.
- ✅ c. CHAR es para cadenas de longitud fija y VARCHAR para longitud variable.
- d. CHAR permite más caracteres que VARCHAR.

## Pregunta 81

**Enunciado:** ¿Cómo se cambia la contraseña de un usuario existente en la base de datos?

- ✅ a. ALTER USER nombre_usuario WITH PASSWORD 'nueva_contraseña';
- b. MODIFY USER nombre_usuario SET PASSWORD 'nueva_contraseña';
- c. ALTER USER nombre_usuario CHANGE PASSWORD 'nueva_contraseña';
- d. UPDATE USER nombre_usuario SET PASSWORD 'nueva_contraseña';

## Pregunta 82

**Enunciado:** ¿Cómo se revoca un rol de un usuario en PostgreSQL?

- a. DELETE nombre_rol FROM nombre_usuario;
- b. DROP nombre_rol FROM nombre_usuario;
- ✅ c. REVOKE nombre_rol FROM nombre_usuario;
- d. REMOVE nombre_rol FROM nombre_usuario;

## Pregunta 83

**Enunciado:** ¿Cómo se revocan privilegios específicos como SELECT e INSERT de un usuario en una tabla?

- ✅ a. REVOKE SELECT, INSERT ON nombre_tabla FROM nombre_usuario;
- b. ERASE SELECT, INSERT ON nombre_tabla FROM nombre_usuario;
- c. DELETE SELECT, INSERT ON nombre_tabla FROM nombre_usuario;
- d. REMOVE SELECT, INSERT ON nombre_tabla FROM nombre_usuario;

## Pregunta 84

**Enunciado:** ¿Cómo se revocan todos los privilegios sobre una base de datos de un usuario?

- ✅ a. REVOKE ALL PRIVILEGES ON DATABASE nombre_DB FROM nombre_usuario;
- b. REMOVE ALL PRIVILEGES ON DATABASE nombre_DB FROM nombre_usuario;
- c. DELETE ALL PRIVILEGES ON DATABASE nombre_DB FROM nombre_usuario;
- d. DROP ALL PRIVILEGES ON DATABASE nombre_DB FROM nombre_usuario;

## Pregunta 85

**Enunciado:** ¿Cuál es la principal razón para crear usuarios en una base de datos?

- a. Aumentar la capacidad de almacenamiento
- b. Facilitar la conexión remota a la base de datos
- c. Mejorar el rendimiento de la base de datos
- ✅ d. Organización y gestión, seguridad, control de acceso y privacidad

## Pregunta 86

**Enunciado:** ¿Cuál es la sentencia para conceder todos los privilegios sobre una base de datos a un usuario?

- a. PROVIDE ALL PRIVILEGES ON DATABASE nombre_DB TO nombre_usuario;
- ✅ b. GRANT ALL PRIVILEGES ON DATABASE nombre_DB TO nombre_usuario;
- c. ALLOCATE ALL PRIVILEGES ON DATABASE nombre_DB TO nombre_usuario;
- d. GRANT ALL PRIVILEGES ON TABLE nombre_DB TO nombre_usuario;

## Pregunta 87

**Enunciado:** ¿Qué rol tiene el administrador de base de datos en la gestión de usuarios?

- a. Desarrollar aplicaciones de base de datos
- b. Gestionar los backups de la base de datos
- c. Crear y gestionar tablas
- ✅ d. Administrar los permisos y roles de los usuarios que interactúan con la base de datos

## Pregunta 88

**Enunciado:** ¿Qué sentencia se utiliza para asignar un rol a un usuario?

- a. ALLOCATE nombre_rol TO nombre_usuario;
- b. PROVIDE nombre_rol TO nombre_usuario;
- c. ASSIGN ROLE nombre_rol TO nombre_usuario;
- ✅ d. GRANT nombre_rol TO nombre_usuario;

## Pregunta 89

**Enunciado:** ¿Qué sentencia se utiliza para conceder privilegios específicos como SELECT e INSERT en una tabla a un usuario?

- a. AUTHORIZE SELECT, INSERT ON nombre_tabla TO nombre_usuario;
- b. PROVIDE SELECT, INSERT ON nombre_tabla TO nombre_usuario;
- ✅ c. GRANT SELECT, INSERT ON nombre_tabla TO nombre_usuario;
- d. ALLOCATE SELECT, INSERT ON nombre_tabla TO nombre_usuario;

## Pregunta 90

**Enunciado:** ¿Qué sucede si un usuario intenta acceder a un recurso para el cual no tiene privilegios?

- ✅ a. Se genera un error y se deniega el acceso
- b. Se le asignan privilegios temporalmente
- c. Se le concede el acceso automáticamente
- d. Se cierra la sesión del usuario

## Pregunta 91

**Enunciado:** ¿Cuál de las siguientes es la sintaxis correcta para crear una tabla dentro de un esquema específico en PostgreSQL?

- a. CREATE TABLE esquema(tabla);
- b. CREATE TABLE tabla.esquema;
- c. CREATE TABLE esquema:tabla;
- ✅ d. CREATE TABLE esquema.tabla;

## Pregunta 92

**Enunciado:** ¿Cuál es el comando utilizado para crear una nueva base de datos en PostgreSQL?

- a. CREATE TABLE
- ✅ b. CREATE DATABASE
- c. CREATE SCHEMA
- d. CREATE USER

## Pregunta 93

**Enunciado:** ¿Cuál es la sintaxis correcta para crear un esquema en PostgreSQL?

- ✅ a. CREATE SCHEMA nombre_del_esquema;
- b. CREATE USER nombre_del_esquema;
- c. CREATE TABLE nombre_del_esquema;
- d. CREATE DATABASE nombre_del_esquema;

## Pregunta 94

**Enunciado:** ¿Cuál es la sintaxis correcta para crear una base de datos con un propietario específico?

- ✅ a. CREATE DATABASE mi_base_de_datos OWNER mi_usuario;
- b. CREATE DATABASE OWNER mi_usuario;
- c. CREATE DATABASE nombre_del_usuario OWNER mi_base_de_datos;
- d. CREATE DATABASE mi_base_de_datos WITH OWNER;

## Pregunta 95

**Enunciado:** ¿Qué comando se utiliza para eliminar un esquema y todos los objetos que contiene en PostgreSQL?

- a. REMOVE SCHEMA nombre_del_esquema;
- b. DROP SCHEMA nombre_del_esquema;
- c. DELETE SCHEMA nombre_del_esquema;
- ✅ d. DROP SCHEMA nombre_del_esquema CASCADE;

## Pregunta 96

**Enunciado:** ¿Qué comando se utiliza para eliminar una base de datos en PostgreSQL?

- ✅ a. DROP DATABASE
- b. ERASE DATABASE
- c. DELETE DATABASE
- d. REMOVE DATABASE

## Pregunta 97

**Enunciado:** Antes de especificar un usuario en la creación de un esquema, ¿qué debe hacerse?

- a. El usuario debe tener permisos de administrador
- ✅ b. El usuario debe estar previamente creado
- c. El usuario debe ser superusuario
- d. El usuario debe haber creado la base de datos

## Pregunta 98

**Enunciado:** ¿Qué es un esquema en PostgreSQL?

- a. Un archivo que contiene datos de la base de datos
- b. Un tipo de índice especial
- ✅ c. Una colección lógica de objetos de base de datos como tablas y vistas
- d. Un conjunto de permisos de usuario

## Pregunta 99

**Enunciado:** ¿Qué sucede si intentas eliminar un esquema que contiene objetos sin usar la opción CASCADE?

- ✅ a. Se genera un error y el esquema no se elimina
- b. PostgreSQL elimina todos los objetos automáticamente
- c. El esquema se renombra y los objetos se mantienen
- d. El esquema se elimina pero los objetos permanecen

## Pregunta 100

**Enunciado:** ¿Qué usuario se utiliza por defecto para crear una base de datos si no se especifica un propietario?

- a. Un usuario aleatorio del sistema
- ✅ b. El superusuario "postgres"
- c. El usuario que ejecuta el comando
- d. El primer usuario creado en el sistema

## Pregunta 101

**Enunciado:** ¿Cuál de las siguientes restricciones se utiliza para asegurar que los valores de una columna cumplan con una condición específica?

- a. FOREIGN KEY
- b. PRIMARY KEY
- c. UNIQUE
- ✅ d. CHECK

## Pregunta 102

**Enunciado:** ¿Cuál es el propósito principal de las restricciones (constraints) en una base de datos?

- a. Organizar los datos en particiones
- b. Limitar el tamaño de la base de datos
- ✅ c. Asegurar la integridad, precisión y fiabilidad de los datos
- d. Incrementar la velocidad de las consultas

## Pregunta 103

**Enunciado:** ¿Cuál es la función de la restricción CHECK en la siguiente sentencia: `CHECK (salario > 0)`?

- a. Asegura que el salario no sea nulo
- b. Asegura que el salario sea menor que cero
- c. Asegura que el salario sea siempre un número entero
- ✅ d. Asegura que el salario sea mayor que cero

## Pregunta 104

**Enunciado:** ¿Cuál es la sintaxis correcta para crear un dominio que valide direcciones de correo electrónico?

- ✅ a. CREATE DOMAIN email AS VARCHAR(255) CHECK (VALUE ~\* '^[A-Za-z0-9]+@.+..+$');
- b. CREATE DOMAIN email AS TEXT CHECK (email_format);
- c. CREATE DOMAIN email AS VARCHAR(255) CHECK (email_valid);
- d. CREATE DOMAIN email AS VARCHAR(255) CHECK (FORMAT 'email');

## Pregunta 105

**Enunciado:** ¿Cuál es la sintaxis correcta para crear una tabla con una restricción NOT NULL en la columna 'edad'?

- a. CREATE TABLE empleados (edad INT CHECK NOT NULL);
- ✅ b. CREATE TABLE empleados (edad INT NOT NULL);
- c. CREATE TABLE empleados (edad INT UNIQUE);
- d. CREATE TABLE empleados (edad INT FOREIGN KEY);

## Pregunta 106

**Enunciado:** ¿Qué es un dominio en el contexto de PostgreSQL?

- a. Una clave foránea en una tabla
- b. Un conjunto de tablas en una base de datos
- c. Un esquema en una base de datos
- ✅ d. Un tipo de dato personalizado con restricciones adicionales

## Pregunta 107

**Enunciado:** ¿Qué restricción asegura la integridad referencial entre dos tablas?

- a. PRIMARY KEY
- b. CHECK
- ✅ c. FOREIGN KEY
- d. NOT NULL

## Pregunta 108

**Enunciado:** ¿Qué restricción en SQL asegura que una columna _no_ contenga valores nulos?

- a. UNIQUE
- b. PRIMARY KEY
- c. CHECK
- ✅ d. NOT NULL

## Pregunta 109

**Enunciado:** ¿Cuál es la diferencia principal entre una restricción CHECK y un dominio en PostgreSQL?

- ✅ a. Un dominio es un tipo de dato personalizado que puede incluir restricciones, mientras que CHECK valida condiciones específicas en una columna.
- b. CHECK se usa exclusivamente en claves primarias, y los dominios en claves foráneas.
- c. Los dominios solo aplican a columnas numéricas, mientras que CHECK funciona con cualquier tipo de dato.
- d. Los dominios no permiten restricciones, solo CHECK lo hace.

## Pregunta 110

**Enunciado:** ¿Qué tipo de restricción es una combinación de UNIQUE y NOT NULL?

- a. FOREIGN KEY
- ✅ b. PRIMARY KEY
- c. DEFAULT
- d. CHECK

## Pregunta 111

**Enunciado:** ¿Cómo se agrega una clave foránea depto_id en empleados que referencia id en departamentos?

- a. UPDATE empleados ADD FOREIGN KEY (depto_id) FROM departamentos(id);
- b. MODIFY TABLE empleado SET FOREIGN KEY (depto_id) = departamentos(id);
- ✅ c. ALTER TABLE empleados ADD CONSTRAINT fk_depto FOREIGN KEY (depto_id) REFERENCES departamentos(id);
- d. ADD FOREIGN KEY depto_id IN empleados TO departamentos(id);

## Pregunta 112

**Enunciado:** ¿Cómo se agrega una columna email (tipo VARCHAR(100)) a la tabla clientes con valor predeterminado 'sin-email'?

- a. MODIFY TABLE clientes INSERT COLUMN email VARCHAR(100) SET 'sin-email';
- b. ADD COLUMN email TO clientes DEFAULT 'sin-email';
- ✅ c. ALTER TABLE clientes ADD email VARCHAR(100) DEFAULT 'sin-email';
- d. UPDATE clientes ADD email VARCHAR(100) DEFAULT 'sin-email';

## Pregunta 113

**Enunciado:** ¿Cuál es la diferencia entre TRUNCATE TABLE empleados y DELETE FROM empleados?

- a. TRUNCATE es más rápido, no registra filas individuales y reinicia secuencias.
- ✅ b. Ambas son correctas (b y c).
- c. DELETE puede usar WHERE, TRUNCATE no.
- d. TRUNCATE elimina la tabla, DELETE solo las filas.

## Pregunta 114

**Enunciado:** ¿Cuál es la sentencia correcta para crear una tabla empleados con las columnas: id (entero, autoincremental y clave primaria), nombre (texto, no nulo), salario (decimal con CHECK > 0)?

- a. MAKE TABLE empleados ( id INTEGER PRIMARY KEY, nombre CHAR(50), salario NUMERIC );
- ✅ b. CREATE TABLE empleados ( id SERIAL PRIMARY KEY, nombre TEXT NOT NULL, salario DECIMAL CHECK (salario > 0) );
- c. CREATE TABLE empleados ( id INT AUTO_INCREMENT, nombre VARCHAR(100), salario FLOAT );
- d. TABLE CREATE empleados ( id SERIAL, nombre TEXT, salario DECIMAL );

## Pregunta 115

**Enunciado:** ¿Cuál es la sintaxis para cambiar la columna cantidad de INT a BIGINT en la tabla pedidos?

- a. ALTER TABLE pedidos MODIFY cantidad BIGINT;
- b. CHANGE COLUMN cantidad TYPE BIGINT;
- ✅ c. ALTER TABLE pedidos ALTER COLUMN cantidad TYPE BIGINT;
- d. CONVERT COLUMN cantidad TO BIGINT IN pedidos;

## Pregunta 116

**Enunciado:** ¿Qué comando permite eliminar la tabla proveedores únicamente si existe, evitando que se genere un error en caso de que no exista?

- a. DROP TABLE proveedores IF PRESENT;
- b. DELETE TABLE IF EXISTS proveedores;
- c. REMOVE TABLE proveedores;
- ✅ d. DROP TABLE IF EXISTS proveedores;

## Pregunta 117

**Enunciado:** ¿Qué hace DROP TABLE departamentos CASCADE;?

- a. Elimina solo la tabla departamentos si no tiene relaciones.
- b. Crea una copia de seguridad antes de eliminar.
- ✅ c. Elimina la tabla departamentos y todas las tablas que dependen de ella (ej. claves foráneas).
- d. Renombra la tabla a departamentos_old.

## Pregunta 118

**Enunciado:** ¿Qué hace esta sentencia?
`ALTER TABLE productos ADD CONSTRAINT precio_valido CHECK (precio > 0 AND precio < 1000);`

- a. Agrega un valor predeterminado a precio.
- b. Convierte precio a un tipo decimal.
- ✅ c. Crea una restricción para que precio esté entre 0 y 1000.
- d. Elimina registros con precio inválido.

## Pregunta 119

**Enunciado:** Si direccion tiene una restricción CHECK ¿Qué ocurre al ejecutar `ALTER TABLE clientes DROP COLUMN direccion;`?

- a. PostgreSQL pide confirmación interactiva.
- b. La columna se elimina, pero la restricción queda en la tabla.
- ✅ c. Se genera un error (debemos usar CASCADE).
- d. La restricción se convierte en columna.

## Pregunta 120

**Enunciado:** ¿Qué sentencia cambia el nombre de la tabla ventas_2023 a ventas_historico?

- a. RENAME TABLE ventas_2023 AS ventas_historico;
- b. UPDATE TABLE ventas_2023 SET nombre = 'ventas_historico';
- c. ALTER TABLE ventas_2023 CHANGE TO ventas_historico;
- ✅ d. ALTER TABLE ventas_2023 RENAME TO ventas_historico;

## Pregunta 121

**Enunciado:** ¿Cuál es la función de la cláusula WHERE en la sentencia UPDATE?

- a. Definir las columnas que serán actualizadas
- b. Eliminar las filas seleccionadas
- c. Insertar nuevas filas en la tabla
- ✅ d. Especificar las filas que serán actualizadas

## Pregunta 122

**Enunciado:** ¿Cuál es la sentencia correcta para eliminar una fila específica de una tabla?

- a. DELETE ROW nombre_tabla WHERE columna = valor;
- b. DROP ROW FROM nombre_tabla WHERE columna = valor;
- c. REMOVE ROW FROM nombre_tabla WHERE columna = valor;
- ✅ d. DELETE FROM nombre_tabla WHERE columna = valor;

## Pregunta 123

**Enunciado:** ¿Cuál es la sentencia utilizada para insertar nuevas filas en una tabla en PostgreSQL?

- ✅ a. INSERT INTO
- b. ADD INTO
- c. CREATE ROW
- d. ADD ROW

## Pregunta 124

**Enunciado:** ¿Cuál es la sintaxis correcta para eliminar todas las filas de la tabla 'empleados'?

- a. REMOVE ALL FROM empleados;
- ✅ b. DELETE FROM empleados;
- c. DROP FROM empleados;
- d. DELETE \* FROM empleados;

## Pregunta 125

**Enunciado:** ¿Cuál es la sintaxis correcta para incrementar el salario de todos los empleados en un 10%?

- a. UPDATE empleados SET salario = salario + 10%;
- b. UPDATE empleados SET salario = salario + salario \* 0.10;
- c. UPDATE empleados SET salario = salario \* 0.90;
- ✅ d. UPDATE empleados SET salario = salario \* 1.10;

## Pregunta 126

**Enunciado:** ¿Cuál es la sintaxis correcta para insertar una fila especificando todas las columnas?

- a. INSERT INTO nombre_tabla VALUES (columna1, columna2, ...)
- b. INSERT INTO (columna1, columna2, ...) VALUES (valor1, valor2, ...) IN nombre_tabla
- ✅ c. INSERT INTO nombre_tabla (columna1, columna2, ...) VALUES (valor1, valor2, ...)
- d. INSERT INTO nombre_tabla (valor1, valor2, ...)

## Pregunta 127

**Enunciado:** ¿Cuál es la sintaxis correcta para insertar varias filas en una tabla en una única sentencia?

- a. INSERT INTO nombre_tabla VALUES (valor1, valor2, valor3, valor4, valor5, valor6);
- b. INSERT INTO nombre_tabla (columna1, columna2) VALUES (valor1, valor2, valor3, valor4, valor5, valor6);
- c. INSERT INTO nombre_tabla (columna1, columna2) (valor1, valor2), (valor3, valor4), (valor5, valor6);
- ✅ d. INSERT INTO nombre_tabla (columna1, columna2) VALUES (valor1, valor2), (valor3, valor4), (valor5, valor6);

## Pregunta 128

**Enunciado:** ¿Qué sucede si insertas una fila sin especificar las columnas en la sentencia INSERT?

- a. Los valores se insertan en cualquier orden
- b. La sentencia genera un error
- ✅ c. Se deben proporcionar valores para todas las columnas en el orden en que fueron declaradas
- d. Solo se insertan valores en las columnas especificadas

## Pregunta 129

**Enunciado:** ¿Qué sucede si omites la cláusula WHERE en una sentencia UPDATE?

- a. La sentencia genera un error
- b. No se actualiza ninguna fila
- c. Se actualiza la primera fila encontrada
- ✅ d. Se actualizan todas las filas de la tabla

## Pregunta 130

**Enunciado:** ¿Qué sucede si se omite la cláusula WHERE en una sentencia DELETE?

- a. Se genera un error
- ✅ b. Se eliminan todas las filas de la tabla
- c. No se elimina ninguna fila
- d. Se elimina la primera fila encontrada

## Pregunta 131

**Enunciado:** ¿Cuál es la sentencia SQL utilizada para recuperar datos de una o más tablas?

- ✅ a. SELECT
- b. INSERT
- c. UPDATE
- d. DELETE

## Pregunta 132

**Enunciado:** ¿Cuál es la sintaxis correcta para excluir empleados que pertenecen a los departamentos 1, 2 o 3?

- a. SELECT \* FROM empleados WHERE departamento IN (1, 2, 3);
- b. SELECT \* FROM empleados WHERE departamento = (1, 2, 3);
- c. SELECT \* FROM empleados WHERE departamento != (1, 2, 3);
- ✅ d. SELECT \* FROM empleados WHERE departamento NOT IN (1, 2, 3);

## Pregunta 133

**Enunciado:** ¿Cuál es la sintaxis correcta para filtrar empleados con salario mayor a 50,000?

- a. SELECT \* FROM empleados WHERE salario < 50000;
- b. SELECT \* FROM empleados WHERE salario != 50000;
- c. SELECT \* FROM empleados WHERE salario = 50000;
- ✅ d. SELECT \* FROM empleados WHERE salario > 50000;

## Pregunta 134

**Enunciado:** ¿Cuál es la sintaxis correcta para insertar en la tabla empleados los registros de la tabla candidatos, considerando únicamente aquellos candidatos que fueron aprobados?

- ✅ a. INSERT INTO empleados (nom_completo, correo, salario) SELECT nombre, correo, salario FROM candidatos WHERE aprobado = true;
- b. INSERT INTO empleados SELECT (nombre, correo, salario) FROM candidatos WHERE aprobado = true;
- c. INSERT INTO empleados (nom_completo, correo, salario) SELECT \* FROM candidatos WHERE aprobado = true;
- d. INSERT INTO empleados (nom_completo, correo, salario) VALUES (SELECT nombre, correo, salario FROM candidatos WHERE aprobado = true);

## Pregunta 135

**Enunciado:** ¿Cuál es la sintaxis correcta para seleccionar columnas específicas 'nom_completo' y 'salario' de la tabla 'empleados'?

- a. SELECT nom_completo salario FROM empleados;
- b. SELECT nom_completo; salario FROM empleados;
- ✅ c. SELECT nom_completo, salario FROM empleados;
- d. SELECT salario, nom_completo FROM empleados;

## Pregunta 136

**Enunciado:** ¿Cuál es la sintaxis correcta para seleccionar todas las columnas de una tabla llamada 'empleados'?

- ✅ a. SELECT \* FROM empleados;
- b. SELECT columnas FROM empleados;
- c. SELECT \* WHERE empleados;
- d. SELECT ALL FROM empleados;

## Pregunta 137

**Enunciado:** ¿Cuál es una consideración importante al utilizar subconsultas para insertar datos en una tabla?

- a. La tabla destino debe tener menos columnas que la tabla origen
- b. La subconsulta SELECT debe incluir una cláusula WHERE
- ✅ c. Las columnas de la subconsulta SELECT deben coincidir en número y tipo de dato con las columnas de la tabla destino
- d. Las columnas de la tabla origen deben estar en la misma base de datos

## Pregunta 138

**Enunciado:** ¿Qué cláusula se utiliza para especificar múltiples valores en una condición WHERE?

- ✅ a. IN
- b. LIKE
- c. HAVING
- d. BETWEEN

## Pregunta 139

**Enunciado:** ¿Qué sucede si intentas insertar datos en una tabla sin cumplir con las restricciones definidas en la tabla destino?

- a. Solo se insertan las filas que cumplen con las restricciones
- ✅ b. La inserción se cancela y se genera un error
- c. La inserción se completa, pero las restricciones se ignoran
- d. Los datos se insertan sin restricciones

## Pregunta 140

**Enunciado:** ¿Qué tipo de consulta se utiliza para insertar datos en una tabla utilizando los resultados de otra consulta?

- a. INSERT SELECT
- ✅ b. INSERT INTO ... SELECT
- c. UPDATE INTO
- d. SELECT INTO ... INSERT

## Pregunta 141

**Enunciado:** ¿Cuál de las siguientes opciones coincide con cualquier cadena que termina con 'abc'?

- a. 'abc^'
- b. '$abc'
- c. '^abc'
- ✅ d. 'abc$'

## Pregunta 142

**Enunciado:** ¿Cuál de las siguientes opciones NO es una función o característica de las expresiones regulares en PostgreSQL?

- a. Reemplazar texto
- b. Buscar texto
- ✅ c. Crear nuevos registros
- d. Extraer texto

## Pregunta 143

**Enunciado:** ¿Cuál de los siguientes operadores es insensible a mayúsculas y minúsculas en PostgreSQL?

- a. ~
- b. ~\*
- ✅ c. ILIKE
- d. LIKE

## Pregunta 144

**Enunciado:** ¿Cuál es la función correcta para extraer un número de la cadena 'Order #1234' en PostgreSQL?

- ✅ a. SELECT regexp_matches('Order #1234', '\d+');
- b. SELECT regexp_select('Order #1234', '\d+');
- c. SELECT regexp_extract('Order #1234', '\d+');
- d. SELECT regexp_find('Order #1234', '\d+');

## Pregunta 145

**Enunciado:** Elige la opción que define correctamente el uso del carácter '[]' en expresiones regulares.

- a. Escapa caracteres especiales
- b. Actúa como un operador OR
- c. Define un grupo de caracteres negado
- ✅ d. Coincide con cualquier caracter dentro del conjunto

## Pregunta 146

**Enunciado:** En las expresiones regulares utilizadas en PostgreSQL, si deseas asegurarte de que una parte de la cadena contenga al menos un carácter del grupo o patrón especificado anteriormente, ¿cuál operador deberías usar? Este operador garantiza que el grupo o carácter previo aparezca al menos una vez, pero puede aparecer muchas más. Selecciona la opción correcta.

- a. ? - Este operador indica que el carácter o grupo anterior puede aparecer cero o una vez.
- b. \* - Este operador indica que el carácter o grupo anterior puede aparecer cero o más veces.
- ✅ c. + - Este operador indica que el carácter o grupo anterior debe aparecer al menos una vez.
- d. | - Este operador funciona como un OR, permitiendo que se coincida con uno de los patrones especificados a cada lado del operador.

## Pregunta 147

**Enunciado:** En una consulta SQL, ¿qué significa utilizar el operador NOT ILIKE?

- a. Busca patrones que coincidan, sensible a mayúsculas y minúsculas.
- b. Busca patrones que no coincidan, sensible a mayúsculas y minúsculas.
- ✅ c. Busca patrones que no coincidan, insensible a mayúsculas y minúsculas.
- d. Busca patrones que coincidan, insensible a mayúsculas y minúsculas.

## Pregunta 148

**Enunciado:** ¿Qué simboliza el carácter especial '^' en expresiones regulares?

- a. Un carácter no numérico
- b. Final de una cadena
- c. Un dígito
- ✅ d. Inicio de una cadena

## Pregunta 149

**Enunciado:** Si quieres negar un conjunto de caracteres en una expresión regular, ¿qué símbolo utilizarías?

- a. ?
- ✅ b. [^]
- c. +
- d. \*

## Pregunta 150

**Enunciado:** ¿Qué función de agregación usarías para contar todas las filas en una tabla llamada "empleados"?

- a. SELECT AVG(\*) FROM empleados;
- b. SELECT MIN(\*) FROM empleados;
- c. SELECT SUM(\*) FROM empleados;
- ✅ d. SELECT COUNT(\*) FROM empleados;

## Pregunta 151

**Enunciado:** ¿Qué sintaxis usarías para sumar los precios de productos solo en las categorías "Electrónica" y "Libros"?

- a. SELECT COUNT(precio) FROM producto WHERE categoria IN ('Electrónica', 'Libros');
- ✅ b. SELECT SUM(precio) FROM producto WHERE categoria IN ('Electrónica', 'Libros');
- c. SELECT AVG(precio) FROM producto WHERE categoria IN ('Electrónica', 'Libros');
- d. SELECT MAX(precio) FROM producto WHERE categoria IN ('Electrónica', 'Libros');

## Pregunta 152

**Enunciado:** Si quieres obtener el salario máximo dentro de un departamento específico, ¿cuál sería la sintaxis correcta?

- ✅ a. SELECT MAX(salario) FROM empleado WHERE departamento = 'Ventas';
- b. SELECT COUNT(salario) FROM empleado WHERE departamento = 'Ventas';
- c. SELECT AVG(salario) FROM empleado WHERE departamento = 'Ventas';
- d. SELECT SUM(salario) FROM empleado WHERE departamento = 'Ventas';

## Pregunta 153

**Enunciado:** ¿Cuál de las siguientes opciones calcula el total de precios de los productos que no son nulos?

- a. SELECT AVG(precio) FROM producto;
- b. SELECT COUNT(precio) FROM producto;
- ✅ c. SELECT SUM(precio) FROM producto;
- d. SELECT MIN(precio) FROM producto;

## Pregunta 154

**Enunciado:** ¿Cómo podrías contar el número de empleados que tienen un salario superior a 2000?

- a. SELECT SUM(\*) FILTER (WHERE salario > 2000) FROM empleado;
- b. SELECT COUNT(salario > 2000) FROM empleado;
- c. SELECT AVG(\*) FILTER (WHERE salario > 2000) FROM empleado;
- ✅ d. SELECT COUNT(\*) FILTER (WHERE salario > 2000) FROM empleado;

## Pregunta 155

**Enunciado:** Para calcular el precio mínimo de los productos, excluyendo aquellos con valores nulos, usarías:

- a. SELECT MAX(precio) FROM producto;
- b. SELECT COUNT(precio) FROM producto;
- ✅ c. SELECT MIN(precio) FROM producto;
- d. SELECT AVG(precio) FROM producto;

## Pregunta 156

**Enunciado:** ¿Qué función te permite obtener el promedio de edad de los empleados en un departamento específico?

- ✅ a. SELECT AVG(edad) FROM empleado WHERE departamento = 'IT';
- b. SELECT MAX(edad) FROM empleado WHERE departamento = 'IT';
- c. SELECT SUM(edad) FROM empleado WHERE departamento = 'IT';
- d. SELECT COUNT(edad) FROM empleado WHERE departamento = 'IT';

## Pregunta 157

**Enunciado:** ¿Qué declaración SQL es correcta para contar las filas no nulas de una columna específica?

- a. SELECT SUM(columna) FROM tabla;
- b. SELECT MIN(columna) FROM tabla;
- ✅ c. SELECT COUNT(columna) FROM tabla;
- d. SELECT AVG(columna) FROM tabla;

## Pregunta 158

**Enunciado:** ¿Cuál de las siguientes opciones NO es una función de agregación?

- a. SUM
- ✅ b. FILTER
- c. MAX
- d. COUNT

## Pregunta 159

**Enunciado:** ¿Cómo seleccionarías el número máximo y mínimo de salarios de los empleados en un solo query?

- a. SELECT COUNT(salario), AVG(salario) FROM empleado;
- b. SELECT SUM(salario), AVG(salario) FROM empleado;
- c. SELECT COUNT(salario), SUM(salario) FROM empleado;
- ✅ d. SELECT MAX(salario), MIN(salario) FROM empleado;

## Pregunta 160

**Enunciado:** ¿Cómo listarías los productos por categoría solo si la categoría tiene más de 10 productos distintos?

- a. SELECT categoria FROM producto WHERE COUNT(\*) > 10 GROUP BY categoria;
- b. SELECT categoria, COUNT(_) FROM producto GROUP BY categoria HAVING COUNT(_) > 10;
- ✅ c. SELECT categoria FROM producto GROUP BY categoria HAVING COUNT(DISTINCT nombre) > 10;
- d. SELECT categoria, COUNT(DISTINCT nombre) FROM producto GROUP BY categoria HAVING COUNT(\*) > 10;

## Pregunta 161

**Enunciado:** ¿Cómo obtener la lista de años en los que se vendieron más de 100 unidades de cualquier producto?

- a. SELECT año FROM ventas HAVING SUM(cantidad) > 100 GROUP BY año;
- ✅ b. SELECT año FROM ventas GROUP BY año HAVING SUM(cantidad) > 100;
- c. SELECT año, SUM(cantidad) > 100 FROM ventas GROUP BY año;
- d. SELECT SUM(cantidad) FROM ventas WHERE cantidad > 100 GROUP BY año;

## Pregunta 162

**Enunciado:** Si deseas agrupar empleados por departamento y sumar sus salarios, ¿cuál sería la consulta correcta?

- ✅ a. SELECT departamento, SUM(salario) FROM empleado GROUP BY departamento;
- b. SELECT departamento, SUM(salario) FROM empleado ORDER BY departamento;
- c. SELECT SUM(salario), departamento FROM empleado WHERE departamento;
- d. SELECT departamento FROM empleado GROUP BY SUM(salario);

## Pregunta 163

**Enunciado:** Para filtrar grupos que tienen más de 5 miembros después de una agregación, ¿qué cláusula usarías?

- a. ORDER BY
- b. GROUP BY
- c. WHERE
- ✅ d. HAVING

## Pregunta 164

**Enunciado:** ¿Qué consulta SQL usarías para mostrar los departamentos con un salario promedio superior a 2000?

- a. SELECT departamento FROM empleado WHERE AVG(salario) > 2000 GROUP BY departamento;
- b. SELECT departamento, AVG(salario) FROM empleado WHERE salario > 2000 GROUP BY departamento;
- c. SELECT AVG(salario), departamento FROM empleado GROUP BY departamento HAVING salario > 2000;
- ✅ d. SELECT departamento FROM empleado GROUP BY departamento HAVING AVG(salario) > 2000;

## Pregunta 165

**Enunciado:** ¿Cómo ordenarías los nombres de los empleados por edad en orden descendente?

- a. SELECT nombre FROM empleado GROUP BY edad DESC;
- b. SELECT nombre FROM empleado HAVING edad DESC;
- ✅ c. SELECT nombre FROM empleado ORDER BY edad DESC;
- d. SELECT edad, nombre FROM empleado ORDER BY edad ASC;

## Pregunta 166

**Enunciado:** Si deseas identificar los clientes que han realizado más de 5 pedidos, ¿cuál sería la consulta correcta?

- ✅ a. SELECT cliente_id FROM pedidos GROUP BY cliente_id HAVING COUNT(pedido_id) > 5;
- b. SELECT COUNT(pedido_id) > 5 FROM pedidos GROUP BY cliente_id;
- c. SELECT cliente_id, COUNT(pedido_id) FROM pedidos HAVING COUNT(pedido_id) > 5;
- d. SELECT cliente_id FROM pedidos WHERE COUNT(pedido_id) > 5 GROUP BY cliente_id;

## Pregunta 167

**Enunciado:** ¿Qué resultado obtienes al aplicar GROUP BY en una consulta sin funciones de agregación?

- ✅ a. Una lista de valores únicos para las columnas especificadas
- b. Una suma de todas las columnas
- c. Un error
- d. Ningún cambio, se muestra la tabla original

## Pregunta 168

**Enunciado:** ¿Cómo podrías asegurar que solo los departamentos con más de 30 empleados sean mostrados en una consulta?

- a. SELECT departamento FROM empleado WHERE COUNT(\*) > 30 GROUP BY departamento;
- ✅ b. SELECT departamento FROM empleado GROUP BY departamento HAVING COUNT(\*) > 30;
- c. SELECT departamento FROM empleado ORDER BY COUNT(\*) DESC;
- d. SELECT COUNT(\*) > 30 FROM empleado GROUP BY departamento;

## Pregunta 169

**Enunciado:** En términos de rendimiento, ¿cuál es la ventaja de utilizar LIMIT en consultas grandes?

- a. Aumenta la seguridad de la base de datos
- b. Permite un mejor ordenamiento de los datos
- ✅ c. Reduce la cantidad de datos transferidos desde el servidor
- d. Mejora la claridad del código SQL

## Pregunta 170

**Enunciado:** ¿Qué cláusula SQL usarías para devolver sólo las primeras tres filas de una tabla de datos?

- a. SELECT TOP 3 \* FROM datos;
- b. SELECT \* FROM datos ROWS 1 TO 3;
- c. SELECT FIRST 3 \* FROM datos;
- ✅ d. SELECT \* FROM datos LIMIT 3;

## Pregunta 171

**Enunciado:** Cuando usas DISTINCT ON (columna), ¿cómo aseguras que el resultado incluya el primer registro según algún criterio específico?

- a. Usando la cláusula WHERE
- b. Limitando los resultados con la cláusula LIMIT
- c. Aplicando un GROUP BY después del DISTINCT ON
- ✅ d. Ordenando los datos antes del DISTINCT ON

## Pregunta 172

**Enunciado:** ¿Qué hace la cláusula DISTINCT en una consulta SQL?

- a. Ordena los resultados de una consulta
- b. Agrupa filas basadas en columnas específicas
- c. Limita el número de filas devueltas
- ✅ d. Elimina filas duplicadas de los resultados

## Pregunta 173

**Enunciado:** Si deseas obtener todos los nombres únicos de los clientes de una tabla llamada clientes, ¿cuál sería la consulta correcta?

- a. SELECT nombre FROM clientes GROUP BY nombre;
- b. SELECT nombre FROM clientes ORDER BY nombre;
- ✅ c. SELECT DISTINCT nombre FROM clientes;
- d. SELECT UNIQUE nombre FROM clientes;

## Pregunta 174

**Enunciado:** ¿Cómo usarías la cláusula LIMIT para obtener los primeros 5 registros de una tabla llamada productos?

- ✅ a. SELECT \* FROM productos LIMIT 5;
- b. SELECT \* FROM productos FETCH FIRST 5 ROWS ONLY;
- c. SELECT \* FROM productos ORDER BY 5;
- d. SELECT \* FROM productos WHERE LIMIT = 5;

## Pregunta 175

**Enunciado:** ¿Qué consulta SQL devuelve el número de categorías únicas en una tabla de productos?

- a. SELECT DISTINCT(categoria) FROM productos COUNT;
- b. SELECT DISTINCT COUNT(categoria) FROM productos;
- ✅ c. SELECT COUNT(DISTINCT categoria) FROM productos;
- d. SELECT COUNT(categoria) FROM productos DISTINCT;

## Pregunta 176

**Enunciado:** ¿Cuál es la función de la cláusula DISTINCT ON en PostgreSQL?

- ✅ a. Todas las anteriores son correctas
- b. Limita el número de filas devueltas a una por valor único de columna especificada
- c. Devuelve un valor único para la primera columna y los primeros valores registrados para las demás
- d. Filtra y muestra solo la primera entrada de cada valor único de columna especificada

## Pregunta 177

**Enunciado:** Si necesitas los detalles del primer pedido de cada cliente ordenados por fecha, ¿cuál sería la consulta apropiada usando DISTINCT ON?

- a. SELECT DISTINCT ON (id_cliente) \* FROM pedidos ORDER BY id_cliente, fecha_pedido;
- b. SELECT DISTINCT ON (id_cliente) \* FROM pedidos ORDER BY fecha_pedido, id_cliente ASC;
- ✅ c. SELECT DISTINCT ON (id_cliente) \* FROM pedidos ORDER BY id_cliente, fecha_pedido ASC;
- d. SELECT DISTINCT ON (id_cliente) \* FROM pedidos ORDER BY fecha_pedido DESC;

## Pregunta 178

**Enunciado:** ¿Cómo puedes restringir una consulta para que solo devuelva los dos nombres de clientes más recientes en una tabla llamada clientes?

- ✅ a. SELECT nombre FROM clientes ORDER BY fecha_registro DESC LIMIT 2;
- b. SELECT nombre FROM clientes FETCH FIRST 2 ROWS ONLY;
- c. SELECT TOP 2 nombre FROM clientes ORDER BY fecha_registro DESC;
- d. SELECT nombre FROM clientes ORDER BY fecha_registro DESC FETCH FIRST 2 ROWS ONLY;

## Pregunta 179

**Enunciado:** ¿Qué tipo de JOIN devuelve únicamente los registros que tienen valores coincidentes en ambas tablas?

- a. LEFT JOIN
- ✅ b. INNER JOIN
- c. RIGHT JOIN
- d. FULL JOIN

## Pregunta 180

**Enunciado:** En el contexto de SQL, ¿qué significa "producto cartesiano" mencionado en la descripción de CROSS JOIN?

- a. Una función específica de PostgreSQL para manejar grandes volúmenes de datos.
- b. Una técnica para optimizar consultas que involucran múltiples JOINs.
- c. La multiplicación de valores dentro de una columna.
- ✅ d. Una operación que genera todas las combinaciones posibles entre filas de dos tablas.

## Pregunta 181

**Enunciado:** Si necesitas todos los registros de la tabla "empleados" y solo los registros coincidentes de "departamentos", ¿qué JOIN usarías?

- a. FULL JOIN
- b. RIGHT JOIN
- c. INNER JOIN
- ✅ d. LEFT JOIN

## Pregunta 182

**Enunciado:** ¿Qué tipo de JOIN deberías usar para retornar todos los registros de la tabla derecha y los coincidentes de la izquierda, rellenando con NULL donde no hay coincidencias?

- ✅ a. RIGHT JOIN
- b. LEFT JOIN
- c. FULL JOIN
- d. INNER JOIN

## Pregunta 183

**Enunciado:** ¿Qué JOIN devuelve todas las combinaciones posibles de filas entre dos tablas?

- a. LEFT JOIN
- ✅ b. CROSS JOIN
- c. INNER JOIN
- d. FULL JOIN

## Pregunta 184

**Enunciado:** ¿Qué operador JOIN retorna todos los registros cuando hay una coincidencia en una de las tablas y también incluye registros sin coincidencias en ambas tablas con valores NULL correspondientes?

- a. LEFT JOIN
- b. RIGHT JOIN
- ✅ c. FULL JOIN
- d. INNER JOIN

## Pregunta 185

**Enunciado:** En un INNER JOIN entre las tablas "empleados" y "departamentos", ¿qué sucede si no hay coincidencia entre las columnas especificadas en la cláusula ON?

- a. La fila es incluida con valores NULL en las columnas de "departamentos".
- b. Todas las filas son incluidas con valores NULL donde no hay coincidencias.
- c. La fila es incluida con valores NULL en las columnas de "empleados".
- ✅ d. La fila correspondiente no es incluida en el conjunto de resultados.

## Pregunta 186

**Enunciado:** Si usas un FULL JOIN en las tablas "productos" y "pedidos", ¿qué tipo de resultados esperarías?

- a. Todas las filas de "productos" y solo las coincidencias de "pedidos".
- b. Solo las filas que tienen coincidencias en ambas tablas.
- c. Todas las filas de "pedidos" y solo las coincidencias de "productos".
- ✅ d. Todas las filas de ambas tablas, con filas sin coincidencias mostrando NULL.

## Pregunta 187

**Enunciado:** ¿Cuál es la principal ventaja de utilizar un JOIN en lugar de múltiples consultas para obtener información de varias tablas?

- a. Menos carga en el servidor de la base de datos
- b. Mayor claridad en el código SQL
- c. Reducción en el uso de la red
- ✅ d. Mejora en la eficiencia de la consulta

## Pregunta 188

**Enunciado:** ¿Qué declaración sobre el RIGHT JOIN es verdadera?

- a. Retorna todos los registros de la tabla izquierda, con NULLs donde no hay coincidencia.
- b. Retorna solo los registros que tienen coincidencias en ambas tablas.
- ✅ c. Retorna todos los registros de la tabla derecha, con NULLs donde no hay coincidencia.
- d. Retorna todas las posibles combinaciones de registros entre las tablas.

## Pregunta 189

**Enunciado:** ¿Qué es una subconsulta en SQL?

- a. Una consulta que no puede ejecutarse sin una consulta externa
- b. Una consulta que siempre devuelve un solo valor
- c. Una consulta que elimina duplicados
- ✅ d. Una consulta dentro de otra consulta

## Pregunta 190

**Enunciado:** Supongamos que tienes una base de datos con dos tablas: "productos" y "ventas". La tabla "productos" incluye columnas "id_producto" y "precio", mientras que la tabla "ventas" incluye "id_venta", "id_producto" y "cantidad". Si quieres encontrar los nombres de los productos que han generado ingresos totales superiores a $5000, ¿cuál sería la consulta SQL correcta utilizando subconsultas?

- a. SELECT nombre FROM productos WHERE id_producto IN (SELECT id_producto FROM ventas GROUP BY id_producto HAVING SUM(precio \* cantidad) > 5000);
- ✅ b. SELECT nombre FROM productos p WHERE p.id_producto IN (SELECT v.id_producto FROM ventas v JOIN productos p ON v.id_producto = p.id_producto GROUP BY v.id_producto HAVING SUM(p.precio \* v.cantidad) > 5000);
- c. SELECT nombre FROM productos WHERE id_producto IN (SELECT id_producto FROM ventas JOIN productos ON ventas.id_producto = productos.id_producto GROUP BY ventas.id_producto HAVING SUM(precio \* cantidad) > 5000);
- d. SELECT nombre FROM productos p WHERE EXISTS (SELECT 1 FROM ventas v WHERE v.id_producto = p.id_producto GROUP BY v.id_producto HAVING SUM(precio \* cantidad) > 5000);

## Pregunta 191

**Enunciado:** ¿En qué parte de una consulta SQL puedes utilizar una subconsulta?

- a. Solo en la cláusula SELECT
- b. Solo en la cláusula WHERE
- ✅ c. En las cláusulas SELECT, FROM y WHERE
- d. Solo en la cláusula FROM

## Pregunta 192

**Enunciado:** ¿Cómo filtras los clientes que han realizado pedidos de más de $1000 usando subconsultas?

- a. SELECT nombre FROM clientes WHERE id <> (SELECT cliente_id FROM pedidos WHERE monto > 1000);
- b. SELECT nombre FROM clientes WHERE id = (SELECT cliente_id FROM pedidos WHERE monto > 1000);
- c. SELECT nombre FROM clientes WHERE EXISTS (SELECT cliente_id FROM pedidos WHERE monto > 1000);
- ✅ d. SELECT nombre FROM clientes WHERE id IN (SELECT cliente_id FROM pedidos WHERE monto > 1000);

## Pregunta 193

**Enunciado:** ¿Cuál es la definición de una subconsulta escalar?

- a. Una subconsulta que puede devolver múltiples filas
- ✅ b. Una subconsulta que devuelve exactamente un valor
- c. Una subconsulta que depende de la consulta exterior
- d. Una subconsulta que verifica la existencia de filas

## Pregunta 194

**Enunciado:** En el contexto de subconsultas, ¿qué realiza la cláusula EXISTS?

- a. Devuelve el número de filas afectadas
- ✅ b. Devuelve TRUE si la subconsulta contiene filas
- c. Altera datos en la base de datos
- d. Devuelve un valor numérico específico

## Pregunta 195

**Enunciado:** ¿Cómo podrías verificar si existen pedidos pendientes para cada cliente utilizando subconsultas?

- a. SELECT nombre FROM clientes WHERE (SELECT COUNT(\*) FROM pedidos WHERE estado = 'pendiente' AND cliente_id = id) > 0;
- b. SELECT nombre FROM clientes c WHERE (SELECT estado FROM pedidos WHERE cliente_id = c.id) = 'pendiente';
- c. SELECT nombre FROM clientes WHERE id IN (SELECT cliente_id FROM pedidos WHERE estado = 'pendiente');
- ✅ d. SELECT nombre FROM clientes c WHERE EXISTS (SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id AND p.estado = 'pendiente');

## Pregunta 196

**Enunciado:** ¿Cuál es una característica de las subconsultas correlacionadas?

- ✅ a. Hacen referencia a columnas de la consulta exterior
- b. No pueden usarse en la cláusula WHERE
- c. No dependen de la consulta exterior
- d. Devuelven múltiples filas siempre

## Pregunta 197

**Enunciado:** ¿Cuál función SQL se utiliza para extraer los primeros N caracteres de una cadena de texto?

- a. REPLACE
- ✅ b. LEFT
- c. CONCAT
- d. LENGTH

## Pregunta 198

**Enunciado:** ¿Qué función utilizarías para combinar varias columnas de una tabla en una sola cadena de texto?

- ✅ a. CONCAT
- b. LENGTH
- c. RIGHT
- d. LEFT

## Pregunta 199

**Enunciado:** Si deseas obtener los últimos 5 caracteres de la cadena 'Bienvenidos', ¿qué función y parámetros usarías?

- a. LEFT('Bienvenidos', 5)
- ✅ b. RIGHT('Bienvenidos', 5)
- c. CONCAT('Bienvenidos', 5)
- d. LENGTH('Bienvenidos', 5)

## Pregunta 200

**Enunciado:** ¿Qué hace la función CONCAT en SQL?

- ✅ a. Une dos o más cadenas en una
- b. Reemplaza parte de una cadena
- c. Elimina partes de una cadena
- d. Cuenta los caracteres de una cadena

## Pregunta 201

**Enunciado:** Si quieres saber el número de caracteres en la palabra 'computadora', ¿qué consulta usarías?

- a. SELECT REPLACE('computadora')
- ✅ b. SELECT LENGTH('computadora')
- c. SELECT CONCAT('computadora')
- d. SELECT RIGHT('computadora')

## Pregunta 202

**Enunciado:** ¿Cómo reemplazarías la palabra 'cielo' por 'mar' en la cadena 'el cielo es azul' utilizando SQL?

- a. SELECT CONCAT('el cielo es azul', 'cielo', 'mar')
- ✅ b. SELECT REPLACE('el cielo es azul', 'cielo', 'mar')
- c. SELECT RIGHT('el cielo es azul', 'cielo', 'mar')
- d. SELECT LENGTH('el cielo es azul', 'cielo', 'mar')

## Pregunta 203

**Enunciado:** Si necesitas concatenar dos columnas de texto, nombre y apellido, con un espacio entre ellas, ¿cuál sería la consulta correcta?

- a. SELECT CONCAT(nombre + apellido) FROM personas
- ✅ b. SELECT CONCAT(nombre, ' ', apellido) FROM personas
- c. SELECT LENGTH(nombre, apellido) FROM personas
- d. SELECT REPLACE(nombre, apellido) FROM personas

## Pregunta 204

**Enunciado:** ¿Cuál función te permite determinar si una cadena de texto específica es más larga que otra?

- a. LEFT
- b. REPLACE
- c. CONCAT
- ✅ d. LENGTH

## Pregunta 205

**Enunciado:** Para extraer los primeros 3 caracteres de cada nombre en la tabla 'usuarios', ¿cuál sería la sintaxis correcta?

- a. SELECT CONCAT(nombre, 3) FROM usuarios
- ✅ b. SELECT LEFT(nombre, 3) FROM usuarios
- c. SELECT RIGHT(nombre, 3) FROM usuarios
- d. SELECT REPLACE(nombre, 3) FROM usuarios

## Pregunta 206

**Enunciado:** ¿Cuál es la función adecuada para cambiar todas las ocurrencias de 'viejo' por 'nuevo' en la columna 'descripción' de una tabla 'productos'?

- a. SELECT CONCAT(descripción, 'viejo', 'nuevo') FROM productos
- b. SELECT LENGTH(descripción, 'viejo', 'nuevo') FROM productos
- c. SELECT LEFT(descripción, 'viejo', 'nuevo') FROM productos
- ✅ d. SELECT REPLACE(descripción, 'viejo', 'nuevo') FROM productos

## Pregunta 207

**Enunciado:** ¿Qué tipo de dato SQL se utiliza principalmente para almacenar solo la fecha sin información de zona horaria?

- a. TIMESTAMPTZ
- b. TIME
- c. TIMESTAMP
- ✅ d. DATE

## Pregunta 208

**Enunciado:** ¿Qué resultado devuelve la siguiente consulta SQL: SELECT DATE_PART('minute', '2023-07-09 15:30:45'::TIMESTAMP)?

- a. 15
- b. 7
- ✅ c. 30
- d. 2023

## Pregunta 209

**Enunciado:** ¿Para qué se usa la función DATE_PART en SQL?

- a. Para sumar tiempo a una fecha
- b. Para convertir texto en fechas
- ✅ c. Para extraer una parte específica de una fecha o timestamp
- d. Para comparar dos fechas

## Pregunta 210

**Enunciado:** Si deseas extraer el año de la fecha '2023-12-25', ¿cuál sería la consulta SQL correcta?

- a. SELECT TIME_PART('year', '2023-12-25')
- ✅ b. SELECT DATE_PART('year', '2023-12-25'::DATE)
- c. SELECT DATE_PART('year', '2023-12-25')
- d. SELECT DATE('year', '2023-12-25')

## Pregunta 211

**Enunciado:** ¿Cómo obtendrías el mes de una columna de fecha llamada 'fecha_registro' en una tabla 'registros'?

- ✅ a. SELECT DATE_PART('month', fecha_registro) FROM registros
- b. SELECT DATE('month', fecha_registro) FROM registros
- c. SELECT DATE_PART('month', 'fecha_registro') FROM registros
- d. SELECT DATE_PART(fecha_registro, 'month') FROM registros

## Pregunta 212

**Enunciado:** ¿Qué función se utilizaría para extraer los segundos de un timestamp '2024-01-01 12:59:59'?

- a. SELECT DATE_PART('second', '2024-01-01 12:59:59')
- b. SELECT TIME_PART('second', '2024-01-01 12:59:59'::TIME)
- c. SELECT DATE_PART('second', '2024-01-01 12:59:59'::DATE)
- ✅ d. SELECT DATE_PART('second', '2024-01-01 12:59:59'::TIMESTAMP)

## Pregunta 213

**Enunciado:** En PostgreSQL, ¿Qué tipo de dato almacenaría la fecha y hora con información de zona horaria?

- a. TIMESTAMP
- b. DATE
- ✅ c. TIMESTAMPTZ
- d. TIME

## Pregunta 214

**Enunciado:** ¿Cómo puedes extraer la hora de un campo de tipo TIMESTAMP definido como '2024-05-20 14:45:30+02'?

- a. SELECT DATE_PART('hour', '2024-05-20 14:45:30+02'::DATE)
- b. SELECT DATE_PART('hour', '2024-05-20 14:45:30+02'::TIME)
- ✅ c. SELECT DATE_PART('hour', '2024-05-20 14:45:30+02'::TIMESTAMP)
- d. SELECT DATE_PART('hour', '2024-05-20 14:45:30+02')

## Pregunta 215

**Enunciado:** Si necesitas verificar qué parte del año corresponde a la fecha '2024-03-01', ¿Cuál función y parámetro usarías?

- a. DATE_PART('month', '2024-03-01'::DATE)
- ✅ b. DATE_PART('quarter', '2024-03-01'::DATE)
- c. DATE_PART('day', '2024-03-01'::DATE)
- d. DATE_PART('year', '2024-03-01'::DATE)

## Pregunta 216

**Enunciado:** ¿Qué comando se utiliza para crear un usuario en PostgreSQL?

- a. CREATE USER nombre_usuario WITH LOGIN PASSWORD 'contraseña';
- b. ADD USER nombre_usuario WITH LOGIN PASSWORD 'contraseña';
- c. SET USER nombre_usuario WITH LOGIN PASSWORD 'contraseña';
- ✅ d. CREATE ROLE nombre_usuario WITH LOGIN PASSWORD 'contraseña';

## Pregunta 217

**Enunciado:** ¿Cómo revocarías el privilegio de ejecutar procedimientos almacenados de un usuario específico en PostgreSQL?

- a. REMOVE EXECUTE ON ALL PROCEDURES FROM usuario;
- b. REVOKE EXECUTE ON PROCEDURE ALL FROM usuario;
- c. UNSET EXECUTE ON PROCEDURE public FROM usuario;
- ✅ d. REVOKE EXECUTE ON ALL PROCEDURES IN SCHEMA public FROM usuario;

## Pregunta 218

**Enunciado:** ¿Qué es un rol en PostgreSQL?

- a. Una colección de tablas
- b. Un grupo de bases de datos
- ✅ c. Una colección de privilegios asignable a usuarios o grupos
- d. Un tipo de procedimiento almacenado

## Pregunta 219

**Enunciado:** ¿Cómo se concede un privilegio SELECT en una tabla específica a un usuario?

- a. ENABLE SELECT ON TABLE tabla TO usuario;
- b. ASSIGN SELECT ON TABLE tabla TO usuario;
- c. SET SELECT ON TABLE tabla TO usuario;
- ✅ d. GRANT SELECT ON TABLE tabla TO usuario;

## Pregunta 220

**Enunciado:** ¿Qué comando se usa para eliminar un rol en PostgreSQL?

- a. DELETE ROLE nombre_rol;
- b. REMOVE ROLE nombre_rol;
- ✅ c. DROP ROLE nombre_rol;
- d. EXCLUDE ROLE nombre_rol;

## Pregunta 221

**Enunciado:** ¿Cuál de las siguientes opciones NO es un privilegio directamente relacionado con las tablas en PostgreSQL?

- a. DELETE
- ✅ b. CONNECT
- c. TRIGGER
- d. CREATE

## Pregunta 222

**Enunciado:** ¿Cómo se pueden revocar todos los privilegios de un usuario en una tabla específica?

- ✅ a. REVOKE ALL ON TABLE tabla FROM usuario;
- b. DELETE PRIVILEGES ON TABLE tabla FROM usuario;
- c. UNSET ALL ON TABLE tabla FROM usuario;
- d. REMOVE ALL ON TABLE tabla FROM usuario;

## Pregunta 223

**Enunciado:** ¿Qué sintaxis es correcta para transferir la propiedad de una tabla a otro rol?

- a. UPDATE TABLE tabla OWNER TO nuevo_rol;
- b. CHANGE TABLE tabla OWNER TO nuevo_rol;
- c. MODIFY TABLE tabla OWNER TO nuevo_rol;
- ✅ d. ALTER TABLE tabla OWNER TO nuevo_rol;

## Pregunta 224

**Enunciado:** ¿Para qué se utiliza principalmente el privilegio "USAGE" en PostgreSQL?

- a. Para permitir a los usuarios ejecutar comandos SELECT.
- b. Para permitir la creación de nuevas tablas.
- c. Para permitir la conexión a la base de datos.
- ✅ d. Para permitir el acceso y uso de esquemas y secuencias.

## Pregunta 225

**Enunciado:** ¿Cómo asignas un rol existente a un nuevo usuario en PostgreSQL?

- a. SET rol TO usuario;
- ✅ b. GRANT rol TO usuario;
- c. GIVE rol TO usuario;
- d. ASSIGN rol TO usuario;

## Pregunta 226

**Enunciado:** ¿Qué comando se utiliza para iniciar una transacción en PostgreSQL?

- a. BEGIN TRANSACTION;
- b. START TRANSACTION;
- c. INIT TRANSACTION;
- ✅ d. BEGIN;

## Pregunta 227

**Enunciado:** Si un desarrollador desea probar varias inserciones en la tabla `productos` pero quiere asegurarse de poder revertir todos los cambios fácilmente si algo sale mal, ¿qué serie de comandos debería utilizar?

- ✅ a. BEGIN; INSERT INTO productos VALUES (...); INSERT INTO productos VALUES (...); ROLLBACK;
- b. SAVE; INSERT INTO productos VALUES (...); INSERT INTO productos VALUES (...); ROLLBACK;
- c. START; INSERT INTO productos VALUES (...); INSERT INTO productos VALUES (...); UNDO;
- d. BEGIN; INSERT INTO productos VALUES (...); INSERT INTO productos VALUES (...); COMMIT;

## Pregunta 228

**Enunciado:** ¿Qué propiedad de las transacciones garantiza que todos los cambios realizados se revertirán si la transacción falla?

- ✅ a. Atómica
- b. Coherente
- c. Aislada
- d. Duradera

## Pregunta 229

**Enunciado:** ¿Cuál es el comando para confirmar y hacer permanentes los cambios de una transacción?

- a. SAVE;
- ✅ b. COMMIT;
- c. FINISH;
- d. END;

## Pregunta 230

**Enunciado:** Si necesitas revertir una transacción antes de que se confirme, ¿qué comando usarías?

- a. CANCEL;
- b. UNDO;
- c. REVERT;
- ✅ d. ROLLBACK;

## Pregunta 231

**Enunciado:** ¿Cómo se llama la acción de dividir una transacción en partes más manejables usando puntos específicos que permiten volver atrás sin cancelar toda la transacción?

- ✅ a. Savepointing
- b. Segmenting
- c. Fragmenting
- d. Breaking

## Pregunta 232

**Enunciado:** ¿Qué comando establece un punto de guardado dentro de una transacción?

- a. CREATE SAVEPOINT savepoint_name;
- b. POINT SAVE savepoint_name;
- c. SET SAVEPOINT savepoint_name;
- ✅ d. SAVEPOINT savepoint_name;

## Pregunta 233

**Enunciado:** ¿Qué propiedad de las transacciones asegura que los efectos de la transacción son permanentes una vez confirmada?

- a. Atomicidad
- b. Aislamiento
- ✅ c. Durabilidad
- d. Coherencia

## Pregunta 234

**Enunciado:** ¿Qué comando se utilizaría para deshacer todos los cambios desde el último punto de guardado si una inserción falla?

- a. RESET TO savepoint_name;
- b. UNDO TO savepoint_name;
- ✅ c. ROLLBACK TO savepoint_name;
- d. CANCEL TO savepoint_name;

## Pregunta 235

**Enunciado:** ¿Qué comando no existe en el contexto de manejar transacciones en PostgreSQL?

- a. BEGIN
- b. COMMIT
- ✅ c. REVOKE
- d. INSERT

## Pregunta 236

**Enunciado:** ¿Cuál es el propósito de ejecutar pg_terminate_backend() antes de usar DROP DATABASE?

- a. Verificar permisos de superusuario
- ✅ b. Cerrar conexiones activas que impiden borrar la base
- c. Aumentar el límite de conexiones
- d. Reiniciar PostgreSQL

## Pregunta 237

**Enunciado:** ¿Cuál es el propósito del parámetro TEMPLATE al crear una base de datos?

- ✅ a. Reutilizar la estructura y contenido de otra base
- b. Aplicar un esquema de seguridad
- c. Indicar un nombre de archivo para guardar el backup
- d. Crear una base de datos vacía

## Pregunta 238

**Enunciado:** ¿Cuál es la función del parámetro LC_COLLATE en PostgreSQL?

- a. Establece el nombre del propietario
- b. Define el tamaño del tablespace
- c. Establece el formato de fecha por defecto
- ✅ d. Controla cómo se ordenan los textos

## Pregunta 239

**Enunciado:** ¿Qué comando se utiliza para cambiar el nombre de una base de datos existente?

- a. UPDATE DATABASE nombre SET NAME = nuevo_nombre;
- b. RENAME DATABASE TO nuevo_nombre;
- c. MODIFY DATABASE nombre TO nuevo_nombre;
- ✅ d. ALTER DATABASE nombre RENAME TO nuevo_nombre;

## Pregunta 240

**Enunciado:** ¿Qué comando se utiliza para crear una nueva base de datos en PostgreSQL?

- ✅ a. CREATE DATABASE nombre;
- b. INIT DATABASE nombre;
- c. BUILD DATABASE nombre;
- d. MAKE DATABASE nombre;

## Pregunta 241

**Enunciado:** ¿Qué comando se utiliza para eliminar una base de datos solo si existe?

- ✅ a. DROP DATABASE IF EXISTS nombre;
- b. REMOVE DATABASE nombre IF EXISTS;
- c. DELETE DATABASE IF TRUE nombre;
- d. DROP DATABASE nombre CASCADE;

## Pregunta 242

**Enunciado:** ¿Qué instrucción permite establecer un nuevo valor de parámetro de configuración en una base de datos existente?

- ✅ a. ALTER DATABASE nombre SET parámetro TO valor;
- b. CONFIGURE DATABASE nombre WITH parámetro = valor;
- c. ALTER DATABASE nombre RESET parámetro;
- d. UPDATE DATABASE nombre SET parámetro = valor;

## Pregunta 243

**Enunciado:** ¿Qué instrucción permite restablecer un parámetro de configuración de una base de datos a su valor predeterminado?

- a. REVERT DATABASE SET parámetro;
- b. RESET DATABASE nombre parámetro;
- c. ALTER DATABASE nombre SET parámetro DEFAULT;
- ✅ d. ALTER DATABASE nombre RESET parámetro;

## Pregunta 244

**Enunciado:** ¿Qué parámetro permite definir en qué tablespace se almacenará una nueva base de datos?

- a. FILEPATH
- ✅ b. TABLESPACE
- c. STORAGE
- d. LOCATION

## Pregunta 245

**Enunciado:** ¿Qué parámetro se utiliza para asignar un usuario como propietario al momento de crear una base de datos?

- a. USER
- ✅ b. OWNER
- c. AUTHORIZATION
- d. ADMIN

## Pregunta 246

**Enunciado:** ¿Qué sentencia SQL se utiliza para crear una vista en PostgreSQL?

- a. SET VIEW nombre_vista AS SELECT ...
- b. BUILD VIEW nombre_vista AS SELECT ...
- ✅ c. CREATE VIEW nombre_vista AS SELECT ...
- d. MAKE VIEW nombre_vista AS SELECT ...

## Pregunta 247

**Enunciado:** ¿Cómo puede un DBA asegurarse de que solo los cambios validados sean visibles a través de una vista?

- a. Aplicando reglas de validación en las consultas de la vista.
- ✅ b. Concediendo privilegios selectivos sobre la vista.
- c. Utilizando disparadores (triggers) para controlar la visibilidad.
- d. Configurando la vista para que use transacciones.

## Pregunta 248

**Enunciado:** ¿Cuál es el propósito principal de una vista en la base de datos?

- a. Incrementar la seguridad física de los datos
- b. Almacenar datos físicamente en forma optimizada
- c. Acelerar las consultas físicas en el disco
- ✅ d. Actuar como tabla virtual para simplificar consultas complejas

## Pregunta 249

**Enunciado:** ¿Cómo se consulta una vista en PostgreSQL?

- a. GET \* FROM nombre_vista;
- b. EXTRACT FROM nombre_vista;
- ✅ c. SELECT \* FROM nombre_vista;
- d. QUERY FROM nombre_vista;

## Pregunta 250

**Enunciado:** Si necesitas modificar una vista para incluir una nueva columna de otra tabla, ¿qué comando utilizarías?

- a. MODIFY VIEW nombre_vista AS SELECT ...
- ✅ b. CREATE OR REPLACE VIEW nombre_vista AS SELECT ...
- c. ALTER VIEW nombre_vista AS SELECT ...
- d. UPDATE VIEW nombre_vista AS SELECT ...

## Pregunta 251

**Enunciado:** ¿Qué comando se utiliza para eliminar una vista existente?

- a. DELETE VIEW nombre_vista;
- ✅ b. DROP VIEW nombre_vista;
- c. REMOVE VIEW nombre_vista;
- d. CLEAR VIEW nombre_vista;

## Pregunta 252

**Enunciado:** ¿Cómo puedes asegurarte de que la eliminación de una vista no genere error si la vista no existe?

- a. DROP VIEW nombre_vista IF EXISTS;
- b. REMOVE VIEW IF EXISTS nombre_vista;
- c. DELETE VIEW nombre_vista IF FOUND;
- ✅ d. DROP VIEW IF EXISTS nombre_vista;

## Pregunta 253

**Enunciado:** ¿Qué comando se utilizaría para conceder privilegios de selección en una vista a un usuario?

- a. ALLOW SELECT ON nombre_vista TO usuario;
- b. GIVE SELECT ON nombre_vista TO usuario;
- ✅ c. GRANT SELECT ON nombre_vista TO usuario;
- d. PERMIT SELECT ON nombre_vista TO usuario;

## Pregunta 254

**Enunciado:** ¿Cuál es el comando para revocar el privilegio de seleccionar en una vista de un usuario?

- ✅ a. REVOKE SELECT ON nombre_vista FROM usuario;
- b. REMOVE SELECT ON nombre_vista FROM usuario;
- c. DENY SELECT ON nombre_vista FROM usuario;
- d. WITHDRAW SELECT ON nombre_vista FROM usuario;

## Pregunta 255

**Enunciado:** Cuando se modifica una vista con CREATE OR REPLACE VIEW y se omite una columna existente en la nueva definición, ¿qué ocurre con esa columna?

- ✅ a. Se elimina de la vista.
- b. Se convierte en una columna oculta.
- c. Se mantiene en la vista.
- d. Se marca como obsoleta.

## Pregunta 256

**Enunciado:** ¿Qué comando SQL se utiliza para crear un índice B-tree en una columna específica de una tabla en PostgreSQL?

- a. SET INDEX nombre_indice ON nombre_tabla (columna);
- b. BUILD INDEX nombre_indice ON nombre_tabla (columna);
- c. ADD INDEX nombre_indice ON nombre_tabla (columna);
- ✅ d. CREATE INDEX nombre_indice ON nombre_tabla (columna);

## Pregunta 257

**Enunciado:** ¿Cuál es la principal ventaja de usar índices en una base de datos?

- ✅ a. Mejorar la velocidad de las operaciones de consulta.
- b. Aumentar la velocidad de las operaciones de inserción.
- c. Simplificar las consultas SQL.
- d. Reducir el espacio utilizado en disco.

## Pregunta 258

**Enunciado:** ¿Qué tipo de índice es especialmente útil para consultas que utilizan condiciones de igualdad?

- a. GiST
- ✅ b. Hash
- c. B-tree
- d. GIN

## Pregunta 259

**Enunciado:** ¿Cómo se crea un índice que involucre múltiples columnas en PostgreSQL?

- a. CREATE MULTI INDEX nombre_indice ON nombre_tabla (columna1, columna2);
- ✅ b. CREATE INDEX nombre_indice ON nombre_tabla (columna1, columna2);
- c. BUILD INDEX nombre_indice ON nombre_tabla (columna1, columna2);
- d. SET INDEX nombre_indice ON nombre_tabla (columna1, columna2);

## Pregunta 260

**Enunciado:** ¿Cuál es la sintaxis correcta para eliminar un índice en PostgreSQL, asegurándose de que no haya errores si el índice no existe?

- ✅ a. DROP INDEX IF EXISTS nombre_indice;
- b. DELETE INDEX IF EXISTS nombre_indice;
- c. REMOVE INDEX IF EXISTS nombre_indice;
- d. CLEAR INDEX IF EXISTS nombre_indice;

## Pregunta 261

**Enunciado:** ¿Qué tipo de índice se recomendaría para optimizar consultas en columnas que almacenan datos geoespaciales?

- a. B-tree
- b. Hash
- ✅ c. GiST
- d. GIN

## Pregunta 262

**Enunciado:** ¿Qué índice es el mejor para manejar búsquedas de texto completo y arrays?

- a. GiST
- ✅ b. GIN
- c. B-tree
- d. Hash

## Pregunta 263

**Enunciado:** ¿Qué parámetro adicional se utiliza para definir un índice HASH en una tabla?

- a. ADD INDEX nombre_indice ON nombre_tabla AS HASH (columna);
- b. SET INDEX nombre_indice ON nombre_tabla USING HASH (columna);
- c. BUILD INDEX nombre_indice ON nombre_tabla WITH HASH (columna);
- ✅ d. CREATE INDEX nombre_indice ON nombre_tabla USING HASH (columna);

## Pregunta 264

**Enunciado:** ¿Para qué sirve el comando `DROP INDEX [IF EXISTS] nombre_indice [CASCADE | RESTRICT];` en PostgreSQL?

- a. Para listar todos los índices existentes en la base de datos.
- b. Para crear un nuevo índice y opcionalmente agregar restricciones.
- c. Para modificar un índice existente y verificar si existen dependencias.
- ✅ d. Para eliminar un índice y opcionalmente eliminar dependencias o restringir si hay dependencias.

## Pregunta 265

**Enunciado:** ¿Qué comando se utiliza para crear un tablespace en PostgreSQL?

- ✅ a. CREATE TABLESPACE nombre_tablespace LOCATION 'ruta_directorio';
- b. MAKE TABLESPACE nombre_tablespace LOCATION 'ruta_directorio';
- c. INIT TABLESPACE nombre_tablespace LOCATION 'ruta_directorio';
- d. SET TABLESPACE nombre_tablespace LOCATION 'ruta_directorio';

## Pregunta 266

**Enunciado:** ¿Para qué se utiliza principalmente un tablespace en PostgreSQL?

- a. Para gestionar usuarios y permisos.
- b. Para crear una copia de seguridad de la base de datos.
- c. Para almacenar procedimientos almacenados y funciones.
- ✅ d. Para distribuir los datos en diferentes dispositivos de almacenamiento y mejorar el rendimiento.

## Pregunta 267

**Enunciado:** ¿Qué privilegio debe tener un usuario para crear objetos en un tablespace que no le pertenece?

- a. SELECT
- ✅ b. CREATE
- c. MODIFY
- d. ADMIN

## Pregunta 268

**Enunciado:** ¿Qué comando SQL se utiliza para cambiar el propietario de un tablespace?

- a. MODIFY TABLESPACE nombre_tablespace OWNER TO nuevo_propietario;
- ✅ b. ALTER TABLESPACE nombre_tablespace OWNER TO nuevo_propietario;
- c. CHANGE TABLESPACE nombre_tablespace OWNER TO nuevo_propietario;
- d. UPDATE TABLESPACE nombre_tablespace SET OWNER nuevo_propietario;

## Pregunta 269

**Enunciado:** ¿Cómo se elimina un tablespace en PostgreSQL asegurando que no haya error si el tablespace no existe?

- a. DELETE TABLESPACE IF EXISTS nombre_tablespace;
- ✅ b. DROP TABLESPACE IF EXISTS nombre_tablespace;
- c. CLEAR TABLESPACE IF EXISTS nombre_tablespace;
- d. REMOVE TABLESPACE IF EXISTS nombre_tablespace;

## Pregunta 270

**Enunciado:** ¿Qué parámetro es esencial al crear un tablespace para especificar su ubicación en el sistema de archivos?

- a. DIRECTORY
- b. DESTINATION
- ✅ c. LOCATION
- d. PATH

## Pregunta 271

**Enunciado:** ¿Cómo se puede listar todos los tablespaces disponibles en PostgreSQL junto con sus propietarios y ubicaciones?

- ✅ a. SELECT spcname AS "Nombre Tablespace", pg_get_userbyid(spcowner) AS "Propietario", pg_tablespace_location(oid) AS "Ubicación" FROM pg_tablespace;
- b. SELECT spcname, spcowner, location FROM pg_tablespace;
- c. SHOW TABLESPACES;
- d. LIST ALL TABLESPACES;

## Pregunta 272

**Enunciado:** ¿Qué ocurre si intentas eliminar un tablespace que aún contiene objetos de la base de datos?

- a. Los objetos dentro del tablespace se eliminan automáticamente.
- b. El tablespace se elimina sin problemas.
- ✅ c. PostgreSQL no permite eliminar el tablespace y muestra un error.
- d. Todos los objetos se trasladan automáticamente a otro tablespace.

## Pregunta 273

**Enunciado:** ¿Qué comando se usaría para crear una tabla en un tablespace específico?

- a. SET TABLE nombre_tabla (columna1 tipo, columna2 tipo) TO TABLESPACE nombre_tablespace;
- b. CREATE TABLE nombre_tabla (columna1 tipo, columna2 tipo) IN TABLESPACE nombre_tablespace;
- ✅ c. CREATE TABLE nombre_tabla (columna1 tipo, columna2 tipo) TABLESPACE nombre_tablespace;
- d. CREATE TABLE nombre_tabla (columna1 tipo, columna2 tipo) USING TABLESPACE nombre_tablespace;

## Pregunta 274

**Enunciado:** Al crear un tablespace, ¿cuál de los siguientes es un requisito para la ubicación del directorio del tablespace?

- ✅ a. Debe ser un directorio existente y vacío que sea propiedad del usuario de PostgreSQL.
- b. Debe ubicarse en una red externa para optimizar el rendimiento.
- c. Debe estar en un almacenamiento extraíble para facilitar la portabilidad.
- d. Puede contener archivos previos siempre que haya suficiente espacio disponible.

## Pregunta 275

**Enunciado:** ¿Qué archivo de configuración en PostgreSQL permite ajustar los parámetros para la generación de logs?

- a. postgresql.log
- b. pg_conf.sql
- c. postgresql.data
- ✅ d. postgresql.conf

## Pregunta 276

**Enunciado:** ¿Qué debe hacerse en el archivo postgresql.conf para registrar la duración de todas las consultas ejecutadas?

- ✅ a. log_duration = on
- b. enable_query_log = true
- c. set log_all_queries = on
- d. log_all_duration = active

## Pregunta 277

**Enunciado:** ¿Qué parámetro se debe modificar para habilitar el recolector de logs en PostgreSQL?

- a. collector_log = true
- b. enable_logging = on
- ✅ c. logging_collector = on
- d. log_collector = enable

## Pregunta 278

**Enunciado:** Si deseas configurar el nombre del archivo de log para que incluya la fecha y hora exacta de creación, ¿cuál sería la configuración correcta?

- a. log*file = 'log-%Y-%m-%d*%H%M%S'
- b. log*filename = 'postgresql-%D-%M-%Y*%H%M.log'
- ✅ c. log*filename = 'postgresql-%Y-%m-%d*%H%M%S.log'
- d. filename_log = 'postgresql-%Y%m%d.log'

## Pregunta 279

**Enunciado:** ¿Cuál es el comando para reiniciar el servicio de PostgreSQL desde la línea de comandos en Windows?

- ✅ a. net stop postgresql-x64-<version> && net start postgresql-x64-<version>
- b. postgresql-service --restart
- c. net restart postgresql-x64-<version>
- d. service postgresql restart

## Pregunta 280

**Enunciado:** ¿Qué parámetro define el máximo tamaño de un archivo de log antes de que se rote a un nuevo archivo?

- ✅ a. log_rotation_size = '10MB'
- b. rotate_log_size = '10MB'
- c. max_log_size = '10MB'
- d. log_max_size = '10MB'

## Pregunta 281

**Enunciado:** Para registrar únicamente mensajes de nivel de advertencia o superior, ¿qué parámetro se debe configurar?

- a. log_messages = 'WARNING'
- b. log_level = 'WARNING'
- c. messages_min_log = 'WARNING'
- ✅ d. log_min_messages = 'WARNING'

## Pregunta 282

**Enunciado:** ¿Cómo se especifica la ubicación donde PostgreSQL debe almacenar los archivos de log?

- a. directory_log = 'pg_log'
- b. store_log_at = 'log'
- c. path_to_log = 'pg_log'
- ✅ d. log_directory = 'log'

## Pregunta 283

**Enunciado:** Si un administrador quiere registrar todas las consultas que excedan los 1000 milisegundos en su duración, ¿qué parámetro debe configurar?

- a. log_duration_exceed = 1000
- ✅ b. log_min_duration_statement = 1000
- c. query_duration_log = 1000
- d. log_query_time = 1000

## Pregunta 284

**Enunciado:** ¿Qué comando se utiliza para cambiar el destino de los logs a formatos múltiples como stderr, csvlog y jsonlog?

- ✅ a. log_destination = 'stderr,csvlog,jsonlog'
- b. log_format = 'all'
- c. log_types = 'stderr,csvlog,jsonlog'
- d. log_output = 'multiple'

## Pregunta 285

**Enunciado:** ¿Cómo se realiza un comentario de una línea?

- ✅ a. -- (símbolos doble guion)
- b. // (símbolos doble barra)
- c. # (símbolo numeral)
- d. /\* \*/ (símbolos barra asterisco espacio asterisco barra)

## Pregunta 286

**Enunciado:** ¿Cuál atributo se declara en una variable y toma el tipo de dato de una columna de la tabla referenciada?

- a. %ROWTYPE
- b. %TABLE.COLUMN
- c. %DATATYPE
- ✅ d. %TYPE

## Pregunta 287

**Enunciado:** ¿Cuál de las siguientes es el objetivo primordial de PL/pgSQL?

- a. Generar informes acerca de los datos guardados en la base de datos.
- b. Administrar y gestionar los usuarios y roles
- ✅ c. Implementar funciones y disparadores.
- d. Crear consultas almacenadas.

## Pregunta 288

**Enunciado:** ¿Cuál es el comando que se utiliza para definir una función en PL/pgSQL?

- a. CREATE OR REPLA FUNCTION
- b. DEFINE OR REPLACE FUNCTION
- ✅ c. CREATE FUNCTION
- d. CREATE OR REPLACE FUNC

## Pregunta 289

**Enunciado:** ¿Cuál es el parámetro que se pasa por función y puede cambiar su valor?

- a. IN
- b. OUT
- ✅ c. INOUT
- d. RETURN

## Pregunta 290

**Enunciado:** ¿Cuál es la principal ventaja de ejecutar un procedimiento en el servidor de base de datos?

- ✅ a. Mejora el rendimiento.
- b. Ocupa menos espacio de almacenamiento en la base de datos.
- c. Permite la mejor personalización de la base de datos.
- d. Mejora la seguridad de nuestra base de datos.

## Pregunta 291

**Enunciado:** Mientras la condición sigue siendo evaluada como TRUE ¿Cuál es el tipo de bucle que se ejecuta ?

- a. CASE
- b. LOOP
- c. FOR
- ✅ d. WHILE

## Pregunta 292

**Enunciado:** ¿Cuál es la estructura del bucle FOR?

- a. FOR variable IN valor_minimo TO valor_maximo LOOP
- ✅ b. FOR variable IN valor_minimo … valor_maximo LOOP
- c. FOR EACH variable IN valor_minimo TO valor_maximo LOOP
- d. FOR variable FROM valor_minimo TO valor_maximo LOOP

## Pregunta 293

**Enunciado:** ¿Cuál es la estructura del bucle WHILE?

- a. WHILE TRUE DO LOOP
- b. WHILE condición DO LOOP
- c. WHILE condition IS TRUE LOOP
- ✅ d. WHILE condicion LOOP

## Pregunta 294

**Enunciado:** ¿Cuál es la palabra reservada que se utiliza para agregar condiciones adicionales a una estructura IF?

- a. ELSE
- b. CONTINUE
- c. CASE
- ✅ d. ELSEIF

## Pregunta 295

**Enunciado:** ¿Cuál es la sentencia utilizada para forzar la ejecución de un bucle LOOP?

- a. BREAK
- b. STOP
- ✅ c. EXIT
- d. FINISH

## Pregunta 296

**Enunciado:** ¿Cuál estructura de control se utiliza para manejar múltiples condiciones con resultados distintos?

- ✅ a. CASE
- b. LOOP
- c. WHILE
- d. IF

## Pregunta 297

**Enunciado:** ¿Cómo se ejecuta un procedimiento?

- ✅ a. CALL nombre_procedimiento
- b. RUN nombre_procedimiento
- c. START nombre_procedimiento
- d. EXECUTE nombre_procedimiento

## Pregunta 298

**Enunciado:** ¿Cuál de las siguientes es el propósito principal de los procedimientos?

- a. Generación de reportes.
- b. Establecer los parámetros del archivo log.
- ✅ c. Realizar tareas específicas como inserción de datos.
- d. Asignar permisos a usuarios.

## Pregunta 299

**Enunciado:** En un procedimiento, ¿cuál de las siguientes es la sentencia que se utiliza para iniciar un bloque de código?

- ✅ a. BEGIN
- b. OPEN
- c. START
- d. INITIATE

## Pregunta 300

**Enunciado:** ¿Cuál es la instrucción que me permite mostrar un mensaje en pantalla?

- a. PRINT MESSAGE
- ✅ b. RAISE NOTICE
- c. SHOW MESSAGE
- d. RAISES NOTICES

## Pregunta 301

**Enunciado:** ¿Cuál es la palabra reservada utilizada para eliminar un procedimiento:

- a. REMOVE
- b. DELETE
- c. ERASE
- ✅ d. DROP

## Pregunta 302

**Enunciado:** ¿Cuál es la principal diferencia entre un procedimiento y una función?

- a. Los procedimientos se almacenan en la base de datos y las funciones no.
- b. Los procedimientos siempre devuelven un valor.
- c. Los procedimientos no se almacenan en la base de datos.
- ✅ d. Los procedimientos no necesariamente devuelve un valor.

## Pregunta 303

**Enunciado:** ¿Cuál de las siguientes opciones es la mejor definición para un trigger?

- a. Un bloque de código que se debe ejecutar manualmente.
- b. Una función que retorna un valor automáticamente.
- c. Una función que se debe ejecutar manualmente.
- ✅ d. Un bloque de código que se ejecuta automáticamente al generar un evento en la base de datos.

## Pregunta 304

**Enunciado:** ¿Cuál de las siguientes opciones es un tipo de trigger que se ejecuta por cada fila afectada?

- a. %ROWTYPE
- ✅ b. ROW
- c. FUNCTION
- d. STATEMENT

## Pregunta 305

**Enunciado:** ¿Cuál de las siguientes opciones es una sentencia para la eliminación de un trigger?

- a. IF EXIST DROP TIGER
- b. DROP TRIGER
- c. DELETE TRIGGER IF EXIST
- ✅ d. DROP TRIGGER

## Pregunta 306

**Enunciado:** ¿Cuál de las siguientes opciones no es un uso habitual de un trigger?

- a. Auditoría
- b. Automatización
- ✅ c. Creación de tablas
- d. Mantenimiento de integridad

## Pregunta 307

**Enunciado:** ¿Cuál de las siguientes opciones es un evento que puede activar un trigger?

- a. ALTER TABLE
- ✅ b. INSERT
- c. GRANT
- d. SELECT

## Pregunta 308

**Enunciado:** ¿Cuál de las siguientes opciones es la palabra reservada utilizada para la creación de un trigger?

- a. PROCEDURE
- ✅ b. TRIGGER
- c. FUNCTION
- d. DO
