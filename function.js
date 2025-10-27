console.log('finalmente le funzioni');


// le funzioni ci servono per ripetere un codice senza doverlo scrivere sempre, ora vedremmo i tipi di funzione:
// 1)questa funzione è quella - usata o per niente usata
// const multiplyBy2 = function (n) {
//     const result = n * 2;
//     return result; 
    
// }
//
// const pippo = multiplyBy2(100);

// console.log(pippo);
 
// const pluto = multiplyBy2(300);

// console.log(pluto);

// 2) questo è il metodo + UserActivation, cioè la funzione + usata


function multiplyBy2(n) {
    const result = n * 3;
    return result;
}

const pippo = multiplyBy2(100);

console.log(pippo);
 
const pluto = multiplyBy2(300);

console.log(pluto);

