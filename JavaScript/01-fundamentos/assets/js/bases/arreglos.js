

// const arr = new Array(10); esta es una forma
// const arr = [];
// console.log(arr);

let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Triger' ];
console.log({ videoJuegos });

console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123,
    'Batman',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    [ 'X', 'Megaman', 'Zero', 'Dr. Ligth', [
        'Dr. Willy', 'Woodman'
    ]],
];

// console.log( arregloCosas );
console.log( arregloCosas[7][4][1]);