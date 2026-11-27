# Libro Abierto - Catálogo

## Descripción

Libro Abierto es un proyecto desarrollado con JavaScript y Node.js para crear, explorar y buscar información de un catálogo de libros. El proyecto utiliza un conjunto pequeño de libros como muestra y también permite generar catálogos de gran tamaño para probar y comparar algoritmos de búsqueda.

## Tecnologías y requisitos

- JavaScript.
- Node.js.
- Visual Studio Code (recomendado para editar el proyecto).
- Git (para el control de versiones).

No se requieren paquetes externos para ejecutar los archivos incluidos.

## Estructura del proyecto

```text
libro-abierto-catalogo/
├── src/
│   ├── muestra.js
│   ├── generador.js
│   ├── explorar.js
│   ├── busqueda.js
│   ├── busquedaBinaria.js
│   └── compararBusquedas.js
├── bitacora.md
└── README.md
```

## Modelo de datos

Cada libro se representa mediante un objeto con las siguientes propiedades:

| Propiedad | Descripción |
|---|---|
| `isbn` | Código ISBN de 13 dígitos, almacenado como texto. |
| `titulo` | Título del libro. |
| `autor` | Nombre del autor. |
| `anio` | Año de publicación. |
| `prestamos` | Cantidad de préstamos registrados. |

## Archivos y funcionalidades

### `src/muestra.js`

Contiene un catálogo de muestra con ocho libros y sus datos: ISBN, título, autor, año y cantidad de préstamos.

### `src/generador.js`

Exporta la función `generarCatalogo(n)`, que crea un catálogo con la cantidad de libros indicada. Los registros incluyen:

- ISBN de 13 dígitos con dígito de control y sin duplicados dentro del catálogo generado.
- Títulos construidos con palabras aleatorias.
- Autores construidos con nombres y apellidos aleatorios.
- Años entre 1900 y 2026.
- Préstamos entre 0 y 500.

### `src/explorar.js`

Genera un catálogo de 10.000 libros y muestra los primeros cinco registros. También calcula el año más antiguo, el año más reciente, el total de préstamos y la cantidad de ISBN únicos.

### `src/busqueda.js`

Contiene las funciones de búsqueda lineal:

- `buscarPorTitulo(libros, titulo)`: busca el primer título que coincide, sin distinguir entre mayúsculas y minúsculas.
- `buscarPorAutor(libros, autor)`: devuelve todos los libros cuyo autor coincide, sin distinguir entre mayúsculas y minúsculas.
- `buscarPorPalabra(libros, palabra)`: devuelve los libros cuyos títulos contienen la palabra buscada.
- `buscarPorIsbnLineal(libros, isbn)`: busca un libro por su ISBN recorriendo el catálogo desde el principio.

Las funciones devuelven los resultados junto con el número de comparaciones realizadas.

### `src/busquedaBinaria.js`

Contiene las funciones de búsqueda binaria por ISBN:

- `ordenarPorIsbn(libros)`: crea una copia del catálogo y la ordena por ISBN, sin modificar el arreglo original.
- `buscarPorIsbn(librosOrdenados, isbn)`: realiza la búsqueda binaria de forma iterativa.
- `buscarPorIsbnRecursivo(librosOrdenados, isbn)`: realiza la misma búsqueda mediante llamadas recursivas.

Las dos búsquedas binarias reciben un catálogo previamente ordenado por ISBN y devuelven el libro encontrado (o `null`) y el número de comparaciones.

### `src/compararBusquedas.js`

Genera catálogos de 1.000, 10.000 y 1.000.000 de libros. Ordena una copia de cada catálogo por ISBN y compara el número de comparaciones de la búsqueda lineal, la búsqueda binaria iterativa y la búsqueda binaria recursiva. También calcula el máximo teórico de comparaciones binarias mediante `Math.ceil(Math.log2(n + 1))` y muestra los resultados en una tabla.

Los datos del catálogo se generan aleatoriamente, por lo que el número de comparaciones de la búsqueda lineal puede variar en cada ejecución.

## Cómo ejecutar el proyecto

Abre una terminal en la carpeta principal `libro-abierto-catalogo`.

### 1. Explorar el catálogo generado

```bash
node src/explorar.js
```

### 2. Comparar los algoritmos de búsqueda

```bash
node src/compararBusquedas.js
```

## Conceptos de complejidad

- **Búsqueda lineal:** en el mejor caso puede encontrar el elemento en la primera comparación, O(1). En el peor caso recorre el catálogo completo, O(n).
- **Búsqueda binaria:** requiere que los libros estén ordenados por ISBN. En cada paso descarta aproximadamente la mitad de los elementos, por lo que su complejidad de búsqueda es O(log n).
- **Ordenamiento:** antes de aplicar la búsqueda binaria, el catálogo se ordena. Esta preparación tiene un costo adicional; el archivo de comparación ordena una copia para conservar el catálogo original.

## Importante

La búsqueda binaria solo funciona correctamente si recibe los libros ordenados por ISBN. Para ejecutar los archivos desde la terminal, utiliza los comandos indicados y asegúrate de estar ubicado en la carpeta principal del proyecto.