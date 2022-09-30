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
while (carros[i]) {
    if (i === 1) {
        i++;
        continue; // este hace un ciclo infinito tener en cuenta el i++ anterior
    }
    console.log(carros[i]);

    i++; 
}