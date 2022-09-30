// ciclos repetir el codigo varias veces

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
// La condición se deb cumplir  o si no se va a tener un ciclo infinito

let i = 0;
// while (i < carros.length) {
//     console.log(carros[i]);
    
//     i++; //Esto es igual // i = i + 1; toma el valor de i e incrementale 1
    //i += 2 // se utiliza para incrementar de acuerdo el numero que se coloque.

// }

// Condiciones que son consideradas falsas
// undefined
// null
// false
console.warn('While')
while (carros[i]) {
    if (i === 0) {
        i++;
        continue; // este hace un ciclo infinito tener en cuenta el i++ anterior para finalizarlo en chrome en los tres puntos del nacegador/mas herramientas/administrador de tareas y finalizas la pestaña.  
    }
    console.log(carros[i]);
    i++; 
}

// Do While funciona igual en el do se va ejecutar una vez y despues se va ejecutar con tal de while sea correcta:
console.warn('Do While');
let j = 0; // con do while si no esta en la posicion sale undifined

do {
    console.log(carros[j]);
    j++;
} while ( carros[j] );