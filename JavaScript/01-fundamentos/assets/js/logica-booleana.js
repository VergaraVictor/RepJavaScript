const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

//Operador negacion !
console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log(!!false); // true se pueden utilizar de acuerdo a loq ue se requiera pero en este caso quedaria falso ! es el opuesto

console.log(!regresaFalse()); //true

//Operador And &&

console.log('And') // true = si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

console.log('=========');
console.log(regresaFalse() && regresaTrue()); //false
console.log(regresaTrue() && regresaFalse()); //false

console.log('====&&====')
regresaFalse() && regresaTrue();

console.log( '4 condiciones', true && true && true && false); //false

// Operador OR ||

console.warn('OR'); // solo necesita que una de las condiciones regrese true el resto ya no importa
console.log(true || false); //true
console.log(false || false); //false

console.log( regresaTrue() || regresaFalse() );
console.log('4 condiciones', true || true || true || false); //true

console.warn('Asiganciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150; // false
const a2 = 'Hola' && 'Mundo' && soyFalso && true; //
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({ a1, a2, a3, a4, a5 });

if (regresaFalse() && regresaTrue() && (true || false || true) ) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}



