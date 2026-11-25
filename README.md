# Libro Abierto - Catálogo

## Descripción

Proyecto desarrollado en JavaScript y Node.js para
representar y generar catálogos de libros.

Permite crear grandes cantidades de registros para
realizar pruebas con diferentes algoritmos de búsqueda.

## Estructura del proyecto

libro-abierto-catalogo/

    src/
        muestra.js
        generador.js
        explorar.js

    bitacora.md
    README.md

## Modelo de datos

Cada libro contiene:

- ISBN
- Título
- Autor
- Año
- Préstamos

## Funcionalidades

- Catálogo inicial de 8 libros.
- Generación automática de libros.
- ISBN únicos de 13 dígitos.
- Títulos y autores aleatorios.
- Años entre 1900 y 2026.
- Préstamos entre 0 y 500.
- Exploración de los primeros cinco libros.
- Cálculo del año más antiguo y más reciente.
- Cálculo del total de préstamos.

## Requisitos

- Node.js
- Visual Studio Code
- Git

## Ejecución

Desde la terminal, ejecutar:

node src/explorar.js

## Prueba de generación

La función permite generar 10.000 libros mediante:

generarCatalogo(10000);

