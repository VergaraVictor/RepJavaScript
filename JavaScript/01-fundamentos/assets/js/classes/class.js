

class Persona{
    
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }
    
    // Set es para establecer un valor and Get para recuperar un valor

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }


    //Esto es un metodo
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        //se puede llamar un metodo dentro de otro
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
        
    }
}


const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman   = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(spiderman);
console.log(ironman);
//para visualizar le metodo, se neceita el () para ejecutar el metodo.
spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía may'
// spiderman.comida = 'Duende Verde';

console.log(spiderman.getComidaFavorita);

console.log( spiderman ) 