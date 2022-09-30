


alert('Hola Mundo'); //esto bloquea  hasta que el usuario de click


// prompt('¿Cuál es tu nombre?', 'sin nomre'); // En este caso permite un capturador de informacion es como un formulario y espues de la coma es lo que muestra en la casilla, con lo qu el va a retornar lo que usuario escriba

// let nombre = prompt('¿Cuál es tu nombre?', 'sin nomre'); // Por lo anterio lo cual se declaria una variabe para que almacene
// console.log(nombre);
// console.log('****' + nombre + '****' ); // Esto es un string vacio

// Dela siguiente forma se puede hacer un confirm para confirmar algo del usuario
const Seleccion = confirm ('¿Está seguro de borrar esto?');
console.log(Seleccion);

// Estas anteriores funciones son directamente son de window

// ahora para que funcione en un caso como node
// se ejecutaria Global

console.log( global );

// es importante saber en donde se va ejecutar si es en el navegador o Backend