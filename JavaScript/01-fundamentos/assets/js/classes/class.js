

class Persona{

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo = ' instancias';
    }

    static mensaje() {
        console.log(this.nombre); // undefined
        console.log('Hola a todos, soy un método stático');
    }
    
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        
        Persona._conteo++;
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
// console.log(spiderman);
// console.log(ironman);
//para visualizar le metodo, se neceita el () para ejecutar el metodo.
spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía may'
// spiderman.comida = 'Duende Verde';

// console.log(spiderman.getComidaFavorita);

// console.log( spiderman )
// Persona._conteo = 2;
console.log('Conteo stático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);