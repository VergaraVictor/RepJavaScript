/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosjugador = 0,
    puntosComputadora = 0;


// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasjugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML =document.querySelectorAll('small');

// esta funcion crea un nuevo deck o baraja
const crearDeck = () => {

    for (let i = 2; i <= 10; i++){
        for (let tipo of tipos) {
            deck.push( i + tipo );
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

crearDeck();

// Esta funcion me permite tomar una carta
const pedirCarta = () => {
    
    if ( deck.length === 0 ){
        throw 'No hay cartas en el deck';
        // console.log('????'); en este caswo no es posible ver este consol log por el trhow
    }
    const carta = deck.pop();
    return carta;
}


// pedirCarta();

const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor )) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;

            //El codigo de arriba equivale a lo comentareado abajo solo que simplificado
    // let puntos = 0;
    // console.log({ valor });
    // if( isNaN( valor ) ) {

    //     puntos = ( valor === 'A' ) ? 11 : 10;

    // } else {
    //     puntos = valor * 1;
    // }

    // console.log(puntos);


}

// Turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {

    do {

        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
    
        //  <img class="carta" src="assets/cartas/2C.png">
    
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );
    
        if( puntosMinimos > 21 ) {
            break;
        }

     } while( puntosComputadora < puntosMinimos && (puntosMinimos <= 21 ) );

     setTimeout(() => {  
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 10 );
}

// Eventos

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosjugador = puntosjugador + valorCarta( carta );

    console.log( puntosjugador );
    puntosHTML[0].innerText = puntosjugador;

    //  <img class="carta" src="assets/cartas/2C.png">

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartasjugador.append( imgCarta );

    if ( puntosjugador > 21 ){
        console.log('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosjugador);

    } else if ( puntosjugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosjugador);
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosjugador);


});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck();

    puntosjugador     = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasjugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});

// Esto se reallizo para simular un jugador // TODO: Borrar
// console.log( 16 );
// turnoComputadora( 16 );