
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for (let i = 0; i < heroes.length; i++) {
    // for (let i = 0; i < 5; i++) El for tiene tres partes 1: donde se iniciakliza la variable 2: La condicion que se va ejecutar como ejemplo en while 3: Incrementador como se puede observar en el parentesis.
    
     console.log(heroes[i]);
}


console.warn('For in');
for (let i in heroes) {
    console.log(heroes[i]);
}

console.warn('For of');
for (let heroe of heroes) {
    console.log( heroe )
}
