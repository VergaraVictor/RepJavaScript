

let a = 5;


if ( a >= 10  ) { //undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date(); //{}
// console.log(hoy); Esta es para que muestre con todos los detales del dia de hoy

let dia = hoy.getDate(); // 0: Domingo, 1: lunes, 2: martes ....

console.log( dia );

if ( dia === 0 ) { // un = es asignación un == lo toma como string un === asegura que sea elvalor y el tipo
    console.log('Domingo');
} else if ( dia === 1 ){
    console.log('Lunes');

    // if ( dia === 1 ) {
    //    console.log('Lunes');
    // } else {
    //    console.log('No es lunes ni domingo');
    // }
} else if ( dia === 2 ){
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
}



//Sin usar if Else, o switch, únicamente objetos
dia = 6; // 0:domingo, 1: lunes...

//Objetos

// const diasLetras = {
//     0: ()=> 'domingo - 0',   
//     1: ()=> 'lunes - 1',
//     2: ()=> 'martes - 2',
//     3: ()=> 'miércoles - 3',
//     4: ()=> 'jueves - 4',
//     5: ()=> 'viernes - 5', 
//     6: ()=> 'sábado - 6',
// 
// }

const diasLetras = {
    0: 'domingo', 
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes', 
    6: 'sábado',

}

const diasLetras2 = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];


    console.log( diasLetras2[dia] || 'Día no definido');
