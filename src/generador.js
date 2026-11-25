// Listas de palabras para construir títulos
const palabrasTitulo = [
    "El", "La", "Los", "Las",
    "Camino", "Historia", "Memoria",
    "Secreto", "Misterio", "Destino",
    "Vida", "Tiempo", "Sueño",
    "Corazón", "Mundo", "Esperanza",
    "Sombras", "Luz", "Silencio"
];

// Lista de nombres para construir autores
const nombres = [
    "Carlos", "María", "Juan", "Laura",
    "Andrés", "Sofía", "Daniel", "Valentina",
    "Miguel", "Isabella", "Pedro", "Camila"
];

// Lista de apellidos
const apellidos = [
    "García", "Rodríguez", "Martínez",
    "López", "González", "Pérez",
    "Ramírez", "Torres", "Mendoza",
    "Castro", "Herrera", "Morales"
];

function aleatorio(lista) {
    const posicion = Math.floor(Math.random() * lista.length);

    return lista[posicion];
}

// Función para generar un ISBN de 13 dígitos
function generarISBN(isbnsExistentes) {

    let isbn;

    do {

     
        const base = "978" +
            Math.floor(Math.random() * 1000000000)
                .toString()
                .padStart(9, "0");

       
        let suma = 0;

        for (let i = 0; i < 12; i++) {

            const digito = Number(base[i]);

            if (i % 2 === 0) {
                suma += digito;
            } else {
                suma += digito * 3;
            }
        }

        const digitoControl = (10 - (suma % 10)) % 10;

        isbn = base + digitoControl;

    } while (isbnsExistentes.has(isbn));

  
    isbnsExistentes.add(isbn);

    return isbn;
}

// Función principal para generar el catálogo
function generarCatalogo(n) {

    const catalogo = [];

    const isbnsExistentes = new Set();

    for (let i = 0; i < n; i++) {

        const titulo =
            aleatorio(palabrasTitulo) + " " +
            aleatorio(palabrasTitulo) + " " +
            aleatorio(palabrasTitulo);

        const autor =
            aleatorio(nombres) + " " +
            aleatorio(apellidos) + " " +
            aleatorio(apellidos);

        const anio = Math.floor(Math.random() * 127) + 1900;

        const prestamos = Math.floor(Math.random() * 501);

        const isbn = generarISBN(isbnsExistentes);

        const libro = {
            isbn: isbn,
            titulo: titulo,
            autor: autor,
            anio: anio,
            prestamos: prestamos
        };

        catalogo.push(libro);
    }

    return catalogo;
}


module.exports = generarCatalogo;