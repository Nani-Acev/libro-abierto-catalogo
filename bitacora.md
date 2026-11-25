# Bitácora - Proyecto Libro Abierto

## 1. Descripción del proyecto

El proyecto Libro Abierto consiste en desarrollar un catálogo
de libros utilizando JavaScript y Node.js.

El objetivo es construir una muestra inicial de libros y un
generador automático que permita crear catálogos grandes
para probar diferentes algoritmos de búsqueda.

## 2. Modelo de datos

Cada libro se representa mediante un objeto de JavaScript
con las siguientes propiedades:

- isbn
- titulo
- autor
- anio
- prestamos

Ejemplo:

{
    isbn: "9789584295125",
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    prestamos: 412
}

## 3. Justificación del ISBN como texto

El ISBN se representa como String porque es un código
identificador y no un valor numérico para realizar cálculos.

Al utilizar texto podemos conservar los ceros iniciales
y mantener correctamente los 13 caracteres del código.

## 4. Generador de libros

Se creó la función generarCatalogo(n), que permite generar
una cantidad determinada de libros.

Los datos se generan utilizando:

- Math.random() para obtener valores aleatorios.
- Math.floor() para obtener números enteros.
- padStart() para completar los códigos ISBN.
- Set para evitar ISBN repetidos.
- Arreglos de palabras y nombres para construir títulos
  y autores.

Los años se generan entre 1900 y 2026.

Los préstamos se generan entre 0 y 500.

## 5. Verificación de ISBN únicos

Se realizó una prueba utilizando:

generarCatalogo(10000);

Para comprobar la unicidad se utilizó un Set que almacena
los ISBN generados.

Después se comparó el tamaño del Set con la cantidad
de libros del catálogo.

Si ambos valores son iguales, significa que no existen
ISBN repetidos.

El resultado esperado es:

- Libros generados: 10000.
- ISBN únicos: 10000.
- ISBN repetidos: 0.

## 6. Exploración del catálogo

Se creó el archivo explorar.js para mostrar:

- Los primeros cinco libros generados.
- El año de publicación más antiguo.
- El año de publicación más reciente.
- La cantidad total de préstamos.
- La cantidad de ISBN únicos.

## 7. Consultas que realizará la red

Se contemplan tres tipos de consultas:

### Búsqueda por título

Permite buscar libros utilizando su título.

Puede devolver uno o varios libros porque diferentes
libros pueden tener títulos iguales o similares.

### Búsqueda por autor

Permite encontrar libros escritos por un autor determinado.

Debe devolver varios libros porque un autor puede
tener diferentes publicaciones.

### Búsqueda por ISBN

Permite identificar un libro mediante su código ISBN.

Debe devolver un solo libro porque cada ISBN identifica
un libro de manera única dentro del catálogo.

## 8. Conclusión

Se construyó un modelo de datos para representar libros
y un generador automático capaz de producir catálogos
de gran tamaño.

La estructura permitirá realizar posteriormente pruebas
de algoritmos de búsqueda por título, autor e ISBN.