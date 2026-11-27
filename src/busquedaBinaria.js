function ordenarPorIsbn(libros) {

    const librosOrdenados = [...libros];

    librosOrdenados.sort((a, b) =>
        a.isbn.localeCompare(b.isbn)
    );

    return librosOrdenados;
}


function buscarPorIsbn(librosOrdenados, isbn) {

    let inicio = 0;
    let fin = librosOrdenados.length - 1;
    let comparaciones = 0;

    while (inicio <= fin) {

        const medio = Math.floor((inicio + fin) / 2);

        comparaciones++;

        const comparacion = librosOrdenados[medio].isbn.localeCompare(isbn);

        if (comparacion === 0) {

            return {
                libro: librosOrdenados[medio],
                comparaciones: comparaciones
            };
        }

        if (comparacion < 0) {

            inicio = medio + 1;

        } else {

            fin = medio - 1;
        }
    }

    return {
        libro: null,
        comparaciones: comparaciones
    };
}


function buscarPorIsbnRecursivo(
    librosOrdenados,
    isbn,
    inicio = 0,
    fin = librosOrdenados.length - 1,
    comparaciones = 0
) {

    if (inicio > fin) {

        return {
            libro: null,
            comparaciones: comparaciones
        };
    }

    const medio = Math.floor((inicio + fin) / 2);

    comparaciones++;

    const comparacion = librosOrdenados[medio].isbn.localeCompare(isbn);

    if (comparacion === 0) {

        return {
            libro: librosOrdenados[medio],
            comparaciones: comparaciones
        };
    }

    if (comparacion < 0) {

        return buscarPorIsbnRecursivo(
            librosOrdenados,
            isbn,
            medio + 1,
            fin,
            comparaciones
        );
    }

    return buscarPorIsbnRecursivo(
        librosOrdenados,
        isbn,
        inicio,
        medio - 1,
        comparaciones
    );
}


module.exports = {
    ordenarPorIsbn,
    buscarPorIsbn,
    buscarPorIsbnRecursivo
};