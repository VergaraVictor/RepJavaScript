

class Singleton {

    static instancia; // es igual a undefined, pasa cuando se define la variable y no se le asigna valor
    nombre = '';

    constructor(nombre = '') {
        
        // // Esto es para aclara como funciona el booleano en una doble negación
        // const a = undefined;
        // console.log(a);
        // console.log(!a);
        // console.log(!!a);     

        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        // return this;

    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);


