const generarCatalogo = require("./generador");
const {
    buscarPorTitulo,
    buscarPorAutor,
    buscarPorPalabra
} = require("./busqueda");
const {
    ordenarPorIsbn,
    buscarPorIsbn,
    buscarPorIsbnRecursivo,
    contarCopiasIsbn
} = require("./busquedaBinaria");

const CANTIDAD_LIBROS = 10000;
const COPIAS_REPETIDAS = 3;

const catalogo = generarCatalogo(CANTIDAD_LIBROS, {
    copiasRepetidas: COPIAS_REPETIDAS
});
const catalogoOrdenado = ordenarPorIsbn(catalogo);

function mostrarResultados(nombre, algoritmo, resultado, comparaciones, limite = 3) {
    console.log(`\nCONSULTA: ${nombre}`);
    console.log(`Algoritmo: ${algoritmo}`);
    console.log(`Comparaciones: ${comparaciones}`);

    if (Array.isArray(resultado)) {
        console.log(`Coincidencias: ${resultado.length}`);
        console.table(resultado.slice(0, limite));
        if (resultado.length > limite) console.log(`Se muestran ${limite} de ${resultado.length} resultados.`);
    } else if (resultado) {
        console.table([resultado]);
    } else {
        console.log("No se encontraron resultados.");
    }
}

console.log("LIBRO ABIERTO v0.1");
console.log(`Registros generados: ${catalogo.length}`);
console.log(`Catálogo ordenado por ISBN: ${catalogoOrdenado.length} registros`);

const ejemploTitulo = catalogo[10].titulo;
const porTitulo = buscarPorTitulo(catalogo, ejemploTitulo);
mostrarResultados(`Título exacto: "${ejemploTitulo}"`, "Búsqueda lineal", porTitulo.libro, porTitulo.comparaciones);

const ejemploAutor = catalogo[20].autor;
const porAutor = buscarPorAutor(catalogo, ejemploAutor);
mostrarResultados(`Autor: "${ejemploAutor}"`, "Búsqueda lineal completa", porAutor.libros, porAutor.comparaciones);

const palabra = catalogo[30].titulo.split(" ")[1];
const porPalabra = buscarPorPalabra(catalogo, palabra);
mostrarResultados(`Palabra en título: "${palabra}"`, "Búsqueda lineal por subcadena", porPalabra.libros, porPalabra.comparaciones);

const isbnRepetido = catalogo[0].isbn;
const binaria = buscarPorIsbn(catalogoOrdenado, isbnRepetido);
const recursiva = buscarPorIsbnRecursivo(catalogoOrdenado, isbnRepetido);
mostrarResultados(`ISBN: ${isbnRepetido}`, "Búsqueda binaria iterativa", binaria.libro, binaria.comparaciones);
mostrarResultados(`ISBN: ${isbnRepetido}`, "Búsqueda binaria recursiva", recursiva.libro, recursiva.comparaciones);

const conteo = contarCopiasIsbn(catalogoOrdenado, isbnRepetido);
console.log("\\nCONSULTA: Todas las copias del ISBN repetido");
console.log("Algoritmo: Búsqueda binaria de primera ocurrencia + recorrido a la derecha");
console.log("Primera posición:", conteo.primeraPosicion);
console.log("Copias encontradas:", conteo.cantidad);
console.log("Comparaciones binarias:", conteo.comparacionesBinarias);
console.log("Comparaciones del recorrido:", conteo.comparacionesRecorrido);
console.table(conteo.copias.map(libro => ({ isbn: libro.isbn, titulo: libro.titulo, sede: libro.sede })));

const isbnInexistente = "9799999999999";
const noEncontrado = buscarPorIsbn(catalogoOrdenado, isbnInexistente);
mostrarResultados(`ISBN inexistente: ${isbnInexistente}`, "Búsqueda binaria iterativa", noEncontrado.libro, noEncontrado.comparaciones);

console.log("\nFIN DEL REPORTE");