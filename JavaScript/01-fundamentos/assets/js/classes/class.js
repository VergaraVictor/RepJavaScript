

class Persona{
    
    nombre = '';
    codigo = '';
    frase  = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
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
ironman.miFrase();