
function saludar( nombre ) {
    console.log( arguments );
    console.log(' Hola ' + nombre );
    return [1,2]; // Si en una función no se define el return tomara el valor undefined   

    // Esto nunca se va ejecutar por return
    console.log( 'Soy un codigó que está despues del return' );
}


//LLamar una funcion dentro de una variable:
const saludar2 = function( nombre ) {
    console.log(' Hola ' + nombre );
 }

 // Funciones de flecha conocida como Landa functions
const saludarFlecha = () => {
    console.log( 'Hola Flecha' );
}

// Funcion con argumento el parentesis dentro de la variable es opcional va a funciionar igual pero por buenas practicas colocar siempre el parentesis
const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre );
}


// Se llama la función
const retornoDeSaludar = saludar( 'Batman', 40, true, 'Ciudad Gotica' ); //esto es igual a lo que se declare en el return
console.log( retornoDeSaludar[0], retornoDeSaludar[1] );

// saludar2( 'Batman' );
// saludarFlecha();
// saludarFlecha2( 'BatGirl' );

function sumar( a, b ) {
    return a + b;
}

// Lo mismo con funcion de flecha
// const sumar2 = (a,b) => {
//    return a + b;
// }
 // simpplificar lo anterior 

 const sumar2 = (a,b) => a + b;

 console.log( sumar2(2,2) );

 function getAleatorio() {
    return Math.random();
 }

 // En una función de flecha, que no tenga llaves {} 
 // getAleatorio2()

 const getAleatorio2 = () => Math.random();


console.log( getAleatorio2() );