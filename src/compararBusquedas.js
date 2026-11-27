const generarCatalogo = require("./generador");

const {
    buscarPorIsbnLineal
} = require("./busqueda");

const {
    ordenarPorIsbn,
    buscarPorIsbn,
    buscarPorIsbnRecursivo
} = require("./busquedaBinaria");


const tamanos = [1000, 10000, 1000000];

const resultados = [];


for (let n of tamanos) {

    console.log("\nGenerando catálogo de", n, "libros...");

    const catalogo = generarCatalogo(n);

    const catalogoOrdenado = ordenarPorIsbn(catalogo);

    const libroBuscado = catalogo[catalogo.length - 1];


    const resultadoLineal = buscarPorIsbnLineal(
        catalogo,
        libroBuscado.isbn
    );


    const resultadoBinario = buscarPorIsbn(
        catalogoOrdenado,
        libroBuscado.isbn
    );


    const resultadoRecursivo = buscarPorIsbnRecursivo(
        catalogoOrdenado,
        libroBuscado.isbn
    );


    const maximoTeorico = Math.ceil(Math.log2(n + 1));


    resultados.push({

        libros: n,

        lineal: resultadoLineal.comparaciones,

        binariaIterativa: resultadoBinario.comparaciones,

        binariaRecursiva: resultadoRecursivo.comparaciones,

        maximoTeorico: maximoTeorico,

        coincidencia:
            resultadoBinario.libro !== null &&
            resultadoRecursivo.libro !== null &&
            resultadoBinario.libro.isbn === resultadoRecursivo.libro.isbn

    });

}


console.log("\nCOMPARACIÓN DE BÚSQUEDAS\n");

console.table(resultados);

console.log("\nANÁLISIS");

console.log("La búsqueda lineal puede recorrer todo el catálogo.");

console.log("La búsqueda binaria reduce el espacio de búsqueda a la mitad.");

console.log("Las dos versiones binarias deben devolver el mismo libro.");

