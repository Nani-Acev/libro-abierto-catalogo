function normalizar(texto) {
    return texto.trim().toLowerCase();
}



function buscarPorTitulo(libros, titulo) {

    let comparaciones = 0;

    const tituloBuscado = normalizar(titulo);

    for (let i = 0; i < libros.length; i++) {

        comparaciones++;

        const tituloActual = normalizar(libros[i].titulo);

        if (tituloActual === tituloBuscado) {

            return {
                libro: libros[i],
                comparaciones: comparaciones
            };
        }
    }

    return {
        libro: null,
        comparaciones: comparaciones
    };
}



function buscarPorAutor(libros, autor) {

    let resultados = [];

    let comparaciones = 0;

    const autorBuscado = normalizar(autor);

    for (let i = 0; i < libros.length; i++) {

        comparaciones++;

        const autorActual = normalizar(libros[i].autor);

        if (autorActual === autorBuscado) {

            resultados.push(libros[i]);

        }
    }

    return {
        libros: resultados,
        comparaciones: comparaciones
    };
}


function buscarPorPalabra(libros, palabra) {

    let resultados = [];

    let comparaciones = 0;

    const palabraBuscada = normalizar(palabra);

    for (let i = 0; i < libros.length; i++) {

        comparaciones++;

        const tituloActual = normalizar(libros[i].titulo);

        if (tituloActual.includes(palabraBuscada)) {

            resultados.push(libros[i]);

        }
    }

    return {
        libros: resultados,
        comparaciones: comparaciones
    };
}



module.exports = {
    buscarPorTitulo,
    buscarPorAutor,
    buscarPorPalabra
};