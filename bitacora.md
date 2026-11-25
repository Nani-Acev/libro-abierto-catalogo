# Bitácora - Proyecto Libro Abierto
## Mini reto 1
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


## Mini reto 2

# 9. Implementación de búsqueda lineal

Se implementaron tres funciones de búsqueda utilizando JavaScript y ciclos `for`.

Las funciones desarrolladas son:

- `buscarPorTitulo()`: permite encontrar el primer libro cuyo título coincida exactamente con el texto buscado.
- `buscarPorAutor()`: permite encontrar todos los libros escritos por un autor.
- `buscarPorPalabra()`: permite encontrar libros cuyos títulos contengan una palabra determinada.

Para realizar las comparaciones se implementó una función llamada `normalizar()`, que convierte los textos a minúsculas y elimina los espacios sobrantes.

## 10. Búsqueda por título

La búsqueda por título utiliza un ciclo `for` para recorrer el catálogo.

Cuando encuentra un libro cuyo título coincide con el buscado, devuelve el resultado inmediatamente.

Esto se conoce como retorno temprano y permite reducir las comparaciones cuando el libro está al principio del catálogo.

Si el libro no existe, devuelve `null`.

También se registra la cantidad de comparaciones realizadas.

## 11. Búsqueda por autor

La búsqueda por autor recorre todos los elementos del catálogo.

Esto es necesario porque un mismo autor puede tener diferentes libros y necesitamos encontrar todas sus publicaciones.

Por esta razón, no podemos detener la búsqueda después de encontrar la primera coincidencia.

La función devuelve un arreglo con todos los libros encontrados y el número de comparaciones.

## 12. Búsqueda por palabra

Se implementó una búsqueda que permite encontrar libros cuyo título contenga una palabra específica.

Para esto se utiliza `includes()` sobre una cadena de texto normalizada.

Por ejemplo, al buscar la palabra "casa", se pueden encontrar títulos como "La casa de las dos palmas".

## 13. Medición de comparaciones

Se realizaron pruebas con catálogos de diferentes tamaños:

- 100 libros.
- 1.000 libros.
- 10.000 libros.

Se evaluaron cuatro situaciones:

- Primer libro del catálogo.
- Último libro del catálogo.
- Libro ubicado en la mitad.
- Libro que no existe.

### Tabla de resultados

| Cantidad de libros | Primero | Medio | Último | No existe |
|---|---:|---:|---:|---:|
| 100 | 1 | 51 | 100 | 100 |
| 1.000 | 1 | 501 | 1.000 | 1.000 |
| 10.000 | 1 | 5.001 | 10.000 | 10.000 |

Los resultados demuestran que la cantidad de comparaciones depende de la posición del libro.

## 14. Análisis de complejidad

**Mejor caso: O(1)**

Ocurre cuando el libro está en la primera posición del catálogo. Solo se necesita una comparación.

**Caso promedio: O(n)**

Ocurre cuando el libro se encuentra en una posición intermedia. En promedio, una búsqueda exitosa necesita aproximadamente la mitad de las comparaciones del catálogo.

La fórmula utilizada es:

C(n) = (n + 1) / 2

**Peor caso: O(n)**

Ocurre cuando el libro está al final del catálogo o cuando no existe. En estas situaciones se necesita recorrer todos los elementos.

## 15. Traza de búsqueda: "Delirio"

Se realizó una búsqueda del libro "Delirio" utilizando la muestra inicial de ocho libros.

La búsqueda se ejecutó en el siguiente orden:

| Comparación | Libro evaluado | ¿Coincide? |
|---|---|---|
| 1 | Cien años de soledad | No |
| 2 | La vorágine | No |
| 3 | El olvido que seremos | No |
| 4 | Delirio | Sí |

Resultado:

- Libro encontrado: Delirio.
- Autor: Laura Restrepo.
- Año: 2004.
- Préstamos: 201.
- Comparaciones realizadas: 4.

La búsqueda termina en la cuarta comparación porque se utiliza retorno temprano.

## 16. ¿Cuándo es necesaria la búsqueda lineal?

La búsqueda lineal es una buena alternativa cuando los datos no están ordenados y no contamos con índices o estructuras que permitan acceder directamente a los elementos.

También es útil cuando el catálogo es pequeño o cuando necesitamos recorrer todos los registros para encontrar múltiples coincidencias.

En nuestro proyecto, el catálogo no está ordenado por título ni por autor, por lo que la búsqueda lineal permite consultar los libros sin necesitar una organización previa.

## 17. Conclusión

Se implementaron tres funciones de búsqueda lineal y se midió su rendimiento utilizando diferentes tamaños de catálogo.

Las pruebas permitieron comprobar que la búsqueda por título puede detenerse anticipadamente, mientras que las búsquedas por autor y palabra necesitan recorrer todo el catálogo para encontrar todas las coincidencias.

También se comprobó que la búsqueda lineal tiene un mejor caso O(1), mientras que su caso promedio y peor caso son O(n).