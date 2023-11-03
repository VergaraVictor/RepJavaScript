
/**
 * @returns {Object} quote information
 */
const fetchQuote = async() => {
    
    const res = await fetch('https://www.breakingbadapi.com/api/qoute/random');


}



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = ( element ) => {
    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';


}
