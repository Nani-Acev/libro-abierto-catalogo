const generarCatalogo = require("./generador");


const catalogo = generarCatalogo(10000);

// Mostramos los primeros 5 libros
console.log(" LIBRO ABIERTO");

console.log("\nPRIMEROS 5 LIBROS GENERADOS:\n");

console.table(catalogo.slice(0, 5));


const anioAntiguo = Math.min(
    ...catalogo.map(libro => libro.anio)
);


const anioReciente = Math.max(
    ...catalogo.map(libro => libro.anio)
);


const totalPrestamos = catalogo.reduce(
    (total, libro) => total + libro.prestamos,
    0
);


const isbnUnicos = new Set(
    catalogo.map(libro => libro.isbn)
);

console.log("\nRESULTADOS");

console.log("Total de libros:", catalogo.length);

console.log("Año más antiguo:", anioAntiguo);

console.log("Año más reciente:", anioReciente);

console.log("Total de préstamos:", totalPrestamos);

console.log("ISBN únicos:", isbnUnicos.size);

console.log(
    "¿Todos los ISBN son únicos?",
    isbnUnicos.size === catalogo.length
);

