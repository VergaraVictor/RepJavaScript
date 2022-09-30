const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War',
};

console.log( personaje );
console.log('Nombre', personaje.nombre );
console.log('Nombre', personaje['nombre'] );
console.log( 'Edad', personaje.edad );
console.log( 'Coors', personaje.coords );
console.log( 'Lat', personaje.coords.lat );

console.log('No. Trajes', personaje.trajes.length );
console.log('último traje', personaje.trajes[personaje.trajes.length -1 ] );

const x = 'vivo';
console.log('vivo', personaje[x] );
console.log('Última película', personaje['ultima-pelicula'] );


// Más detalles


// proceso para eliminar variable edad
delete personaje.edad;
console.log( personaje );

// se encesitara una nueva propiedad en el objeto

personaje.casado = true;

// Necesitamos trabajar un objeto como un arreglo se realiza con entriesPares

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// al ser una constante va a permitir los anteriores cambios, lo que no permite es haceer una asignacion al objeto, las propiedades del objeto si lo permite:

// personaje = true; por ello esto nno lo permite al ser const


// Para hacer un bloqueo de las propiedades sobre las modificaciones se utiliza la siguiente instrucción:

Object.freeze( personaje ); //lo que hace es congelar todo lo que esta de aqui hacia atras

personaje.dinero = 1000000000000000; //esto no va aparecer
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica'; //freeze congela los objetos directos pero los que estan dentro de otro objeto no lo hace, si se quisiera congelar se haria directamente sobre ese objeto interno
console.log( personaje );

// listado de todas las propiedades de un objeto:

const propiedades = Object.getOwnPropertyNames( personaje );

// listado de  valores tambien
const valores = Object.values( personaje );
console.log({ propiedades, valores });