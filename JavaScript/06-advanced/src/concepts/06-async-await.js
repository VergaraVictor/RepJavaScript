import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = ( element ) => {

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';

}


const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id === id );
    if ( !hero )
        throw `Hero not found`;

        return hero;


}
