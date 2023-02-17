import { pedirCarta } from "./usecases/pedir-carta";

// turno de la computadora
//**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar.
 * @param {Array<String>} deck
 */
export const turnoComputadora = (puntosMinimos, deck ) => {
    if (!puntosMinimos) throw new Error('Puntos mínimos son necesario');
    if (!deck) throw new Error('El Deck es necesario');

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}