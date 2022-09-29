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

//Operador And

console.log('And') // true = si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

console.log('=========');
console.log(regresaFalse() && regresaTrue() );