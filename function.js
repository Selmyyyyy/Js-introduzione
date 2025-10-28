// console.log('finalmente le funzioni');


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


// function multiplyBy2(n) {
//     const result = n * 3;
//     return result;
// }

// const pippo = multiplyBy2(100);

// console.log(pippo);
 
// const pluto = multiplyBy2(300);

// console.log(pluto);

// function stringBuilder(s1, s2, s3){
//     return s1+ s2 +s3;
// } 

// console.log(stringBuilder('leonardo', 'leo', 'nardo'));

// console.log(stringBuilder('leonardo', 'leo'));// i paramentri mancanti sono underfind

// console.log(stringBuilder('leonardo', 'leo', 'nardo', 'onar'));// i parametri in eccesso vengono ignorati

// function pow(base, exponent) {
//     return base ** exponent;
    
// }

// console.log(pow(3,3));

// function pow(base, exponent) {
//    if(exponent == underfined) {
//     exponent = 2;
//    }
    
//    return base ** exponent;
// }

// console.log(pow(3,3));

// console.log(pow(3));

// console.log(pow());

//////////////////////
// sono zone chiuse che non fanno vedere quello che c'è dentro, ma quello che c'è fuori lo fanno vedere

// const number = 5;

// if (number > 3) {

//     const number2 = number + 5 // lo scopo interno vede le variabili dello scope esterno

//     console.log(number2);
    
//     if (number2 > 7) {
//         const number3 = number + number2 ;

//         console.log(number3);
        
//     }

//     console.log(number3);
    
// }

// const number3  = number2 + 5; // lo scope esterno non accede alle variabili dello scope interno

// const number4 = number2 +5; // lo scope esterno non accede alle variabili dello scope interno

// console.log(number3);

// // lo scope inzia dalle parentesi graffe gialle

// // il figlio non sopravvive mail al papà pk non lo vede.

////////CLOJURE le funzioni mantengono in vita le variabili che usano anche al di fuori del loro scope
// il padre è esterno il figlio è dentro il padre, appena il padre finisce muore il figlio, ma con le funzione questo non accade 

// const isOpen = true;

// let myFunction;

// if (isOpen) { // dentro l' if definisco una variabile

//     let counter = 0;
// dentro le paremtesi viola ci metto un paramentro se non lo metto non c'è.
    // myFunction = () => {
    //     counter++;
    //     console.log(counter);
        
    // }

   
    // for (let i = 0; i < 10000; i++) {
    //     myFunction()
        
    // }
// }
//  myFunction()
//     myFunction()
//     myFunction()
//     myFunction()
//RECURSION
// una funzione può richiamare se stessa all'interno di una funzione 
// FATTORIALE(!) definizione 0! = 1, per tutti gli altri numeri n ! = n . (n-1)!
//es: 1! = 1. (1-1)!= 1. 1 = 1
// FACT(0) = 1;
//fact(n) = n * fact(n-1)

// function fact(n) {
//     if (n = 0) {
//         return 1;
        
//     }else{
//         return n * fact(n - 1);
//     }
    
// }

// console.log(fact(0));
// console.log(fact(1));
// console.log(fact(2));
// console.log(fact(3));
// console.log(fact(4));
// console.log(fact(5));
// console.log(fact(6));
// console.log(fact(7));


// function isEven(n) {
//     if (n === 0) {
//         return 
        
//     } else if(n === 1){
//         return false;
//     }else{
//         return isEven(n - 2);
//     }
    
// }

// console.log(isEven(5));
// console.log(isEven(4));
// console.log(isEven(3));

// function isEven(n) {
// if (n === 0) {
//     return true;
    
// }else{
//     return isEven(n - 1)
// } 
// }

// function isOdd(n) {
//     if (n === 0){
//         return false;
        
//     }else{
//         return isEven(n - 1);
//     }
    
// }

// console.log(isEven(3));
// console.log(isOdd(3));

/// 
// 1)se ci sono rimuovendo gli spazi prima e dopo;*
//2) aggiungere la stringa pippo in fondo*
//3) mettere tutto maiscolo 
//4) ruipetere per il numero di volte del moltiplicatore 
//5) aggiungere in fondo la sua lunghezza 
//6) rimuovere tutte le p 


// function strangeStringFunction(str, multiplier) {
//   const strWithoutSpace = str.trim();
//   console.log('senza spazi:', strWithoutSpace);
  
//   const strWithoutPippo = strWithoutSpace + 'pippo';
//   console.log('aggiungi pippo:', strWithoutPippo);
  
//   const strUpper = strWithoutPippo.toUpperCase(); // toUpperCase serve per gli spazi
//   console.log('maiuscolo:', strUpper);
  
//   const strMultiplied = strUpper.repeat(multiplier);
//   console.log('moltiplicazione ->', strMultiplied);
  
//   const strWithLength = strMultiplied + strMultiplied.length;
//   console.log('con lunghezza ->', strWithLength);
  
//   let strWithoutP = '';
//   for (let i = 0; i < strWithLength.length; i++) {
//     const char = strWithLength.charAt(i);
//     if (char !== 'P') {  // metti 'P' maiuscola, perché la stringa è tutta uppercase
//       strWithoutP += char;
//     }
//   }
  
//   console.log('senza P ->', strWithoutP);
// }

// strangeStringFunction('leonardo bullo!', 2);

