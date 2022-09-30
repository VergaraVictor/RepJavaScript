
// function crearPersona( nombre, apellido ) {
 //   return {
        // En este caso como el nombre de la propiedad es el mismo de la variable,
        // No hace falta que se especifique ejemplo nombre nombre dos veces:
        // nombre: nombre,
        // apellido: apellido
        // sencillamente se deja uno solo que el resultado es el mismo:

   //     nombre,
   //     apellido
   // }
// }


// Ahora lo vamos a crear en funcion de flecha

const crearPersona = ( nombre, apellido ) => ({ nombre,apellido }); //para que funcione se coloca entre parentesis () ya que lo quie hacen el parentesis es mostrar lo que hay en el parentesis se muestre como un objeto.



const persona = crearPersona( 'Bruce', 'Waine');
console.log( persona );

// funciona para funciones tradicionales
function imprimeArgumentos() {
    console.log( arguments );
}

// si se requiere con funcion de flecha los argumentos serian de la siguiente manera:
const imprimeArgumentos2 = ( edad, ...args ) => { //despues del primer parametro no puede ir otro 
    //console.log({ edad, args });
    return args;
}


const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Batman', 'Hola');
console.log({ casado, vivo, nombre, saludo });


const { apellido: nuevoApellido } = crearPersona( 'Bruce', 'Waine');
console.log({ nuevoApellido });

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
//    console.log( 'nombre:',personaje.nombre);
//    console.log( 'codeName:',personaje.codeName);
//    console.log( 'vivo:',personaje.vivo);
//    console.log( 'edad:',personaje.edad);
//    console.log( 'trajes:',personaje.trajes);
// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    // edad = edad || 0; Esto funciona si es un solo campo si son muchos no es conveniente

    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades(tony);