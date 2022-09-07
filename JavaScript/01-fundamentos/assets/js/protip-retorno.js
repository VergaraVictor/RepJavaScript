
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

//