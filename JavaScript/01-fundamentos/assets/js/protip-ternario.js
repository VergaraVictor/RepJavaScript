// asi es una forma de realizarlo con funcion de flecha al ser tan corto se puede quitar el return
// const elMayor = (a, b) => {
//     return (a > b) ? a : b;
// }

const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares';

console.log(elMayor(20, 15));
console.log(tieneMembresia(true));