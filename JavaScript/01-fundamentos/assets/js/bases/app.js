
console.log( miNuevoNombre + 'Cañas');


// alert('Hola desde app.js');

// console.log( console.log('Hola Mundo'));

// Crear variable
//let a = 10; // let es la forma actual
// var b = 10; // var era la forma antigua se recomienda let
// c = 20; // no se puede hacer

//-- Esta parte es una forma tambien para declarar variables 
// let a = 10;
// let b = 10;
// let c = 10;
// let d = 10;
// let x = a + b;

// esta es otra forma
let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'Batman',
    x = a + b;

const saludo = c + d;

// console.log( x ); //imprima esto en consola
// console.warn( x ); //Imprime un mensaje de alerta
// console.error( x ); //Imprime un mensaje de error o que parece error

// esta una forma solo que mas larga
//para imprimir un definicion antes de mostrar variable
// console.log( 'a', a );
// console.log( 'b', b );
// console.log( 'c', c );

// una forma más corta
// console.log('%c Mis Variables', 'color:blue; font-weight: bold'); //Agregar css a la consola
// console.log({ a });
// console.log({ b });
// console.log({ c });

c = 'Hola de nuevo';

// console.table({a, b, c, d, x}); // Para cuando quiero ver una tabla

// Este es el inconveniente de usar var, ya que se mete con las caracteriticas de window
// var outerWidth = '1000000';
//var outerHeight = 600;

// por ello se recomienda let

//let outerWidth = '1000000';


// este es otro inconveniente de var si colocamos el llamado al principio antes del var la va a definir como:
// Undefined esdecir indefinida pero no aclara el error en donde se encuentra ni si quiera aprece error

// var miNuevoNombre = 'Victor Verga';

// Ahora se va a probar colocando let en cambio con let muestra el detalle del error en la cual demuestra que no esta iniciaklizada
// es decir te muestra que no se puede definir una variable sin indicarla antes.

let miNuevoNombre = 'Victor Verga';