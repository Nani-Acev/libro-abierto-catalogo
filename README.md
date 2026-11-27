# Libro Abierto – Catálogo v0.1

## ¿Qué es?

Libro Abierto es un catálogo bibliográfico desarrollado en JavaScript con Node.js. Permite generar registros de libros y consultar el catálogo mediante búsquedas lineales y binarias. Esta versión integra búsquedas por título, autor, palabra e ISBN, además de localizar todas las copias de un ISBN repetido en distintas sedes.

## Requisitos

- Node.js instalado.
- No requiere dependencias externas.

## Estructura

```text
src/
├── muestra.js
├── generador.js
├── explorar.js
├── busqueda.js
├── busquedaBinaria.js
├── compararBusquedas.js
└── catalogo.js
bitacora.md
README.md
```

## Cómo ejecutar

Desde la carpeta raíz del proyecto:

```bash
node src/catalogo.js
```

Para explorar una muestra aleatoria:

```bash
node src/explorar.js
```

Para comparar el rendimiento de búsquedas:

```bash
node src/compararBusquedas.js
```

## Consultas soportadas

- **Título:** coincidencia exacta, ignorando mayúsculas y espacios sobrantes. Usa búsqueda lineal.
- **Autor:** devuelve todos los libros del autor. Usa búsqueda lineal.
- **Palabra:** encuentra títulos que contienen una palabra. Usa búsqueda lineal.
- **ISBN:** localiza un libro mediante búsqueda binaria iterativa o recursiva. Requiere el catálogo ordenado por ISBN.
- **Copias de ISBN:** encuentra la primera posición con búsqueda binaria y recorre a la derecha para contar todas las copias consecutivas.

## Modelo de datos

Cada registro contiene `isbn`, `titulo`, `autor`, `anio`, `prestamos` y `sede`. El ISBN se maneja como cadena porque es un identificador.

## Copias repetidas

El generador acepta la opción `copiasRepetidas`. Por ejemplo:

```javascript
const catalogo = generarCatalogo(10000, { copiasRepetidas: 3 });
```

Se agregan tres registros adicionales que comparten el ISBN del primer libro, pero se asignan a sedes distintas.

## Complejidad

- Búsqueda lineal: O(n).
- Búsqueda binaria iterativa: O(log n).
- Búsqueda binaria recursiva: O(log n).
- Primera ocurrencia y recorrido de copias: O(log n + k), donde `k` es la cantidad de copias encontradas.
- Ordenamiento inicial: O(n log n), según el algoritmo de ordenamiento utilizado por el motor.

## Versión

v0.1 – Buscador integrado y búsqueda de primera ocurrencia por ISBN.