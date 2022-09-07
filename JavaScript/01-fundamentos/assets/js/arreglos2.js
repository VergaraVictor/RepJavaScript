

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log( 'Largo', juegos.length );

let primero = juegos[0];
let ultimo = juegos[ juegos.length -1 ];

console.log( { primero, ultimo} );

juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
} );

// Metodo para insertar "En este caso inserta elemento al final"
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

// Metodo para insertar elemento al principio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

//Metodo para borrar el ultimo elemnto arreglo agregado
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });


// Metodo para borrar un elemnto especifico del arreglo

let pos = 1;

console.log( juegos );
let juegosBorrados = juegos.splice( pos, 2);
console.log({ juegosBorrados, juegos });


// Saber posicion indice del arreglo
let metroidIndex = juegos.indexOf('Metroid'); //CaSeSeNsItIvE
console.log({ metroidIndex });

// TODO: Referencia