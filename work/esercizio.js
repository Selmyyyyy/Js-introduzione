
// // let firstName = prompt("Come ti chiami?");
// // alert("Buon compleanno, " + firstName + "! ");

// // let base = parseFloat(prompt("Inserisci la base:"));
// // let esponente = parseFloat(prompt("Inserisci l'esponente:"));
// // let potenza = Math.pow(base, esponente);
// // alert(`${base} elevato a ${esponente} è ${potenza}`);

// // let Number = parseInt(prompt("Inserisci un numero intero:"));
// // if ( Number % 2 === 0) {
// //   alert("Il numero è pari.");
// // } else {
// //   alert("Il numero è dispari.");
// // }

// // let age = parseInt(prompt("Quanti anni hai?"));
// // if (age >= 18) {
// //   alert("Puoi entrare.");
// // } else {
// //   alert("Mi dispiace, non puoi entrare.");
// // }


// // let stringa = prompt("Inserisci una frase o parola:");
// // let maiuscola = stringa.toUpperCase();
// // alert("In maiuscolo: " + maiuscola);

// // 1)
// // const firstName = prompt("Come ti chiami?");
// // alert("Buon compleanno, " + firstName + "! ");

// // 2)
// // const number1 = prompt("Dammi le base della potenza");
// // const number2 = prompt("Dammi l'esponente");

// // const n1converted = Number(number1);
// // const n2converted = Number(number2);

// // const result = number1**number2;
// // alert("il risultato è: "+result)

// // 3)
// // const numb = prompt("Dammi un numero");
// // if (Number % 2 === 0){
// // alert("il numero è pari");
// // } else{
// //     alert("il numero è dispari");
// // }

// // 4)

// // const age = prompt("dammi l'età");

// // if( age >= 18){
// //     alert("puoi entrare");
// // }else{
// //     alert("non puoi entrare");
// // }

// // 5)
// //  const string = prompt("dammi una parola o una frase");
// //  const maiuscola =  string.toUpperCase();
// //  alert("in maiuscolo:" + maiuscola);

// // cerca di usare const invece di let

// // 6) fai un ciclo for che stampi il quadrato dei numeri da 1 a 100

// // for (let i = 1; i <= 100; i++) {
// //     const square = i ** 2;
// //     console.log(square);

// // }

// //7) fai un ciclo che per i numeri da 1 a 100 stampi pari se il numero è pari e dispari se il numero è dispari

// // for (let i = 1; i < 101; i++) {

// //     if (i % 2 === 0) {
// //         console.log("pari");


// //     } else {
// //         console.log("dispari")
// //     }

// // }

// // 8) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7

// // for (let i = 1; i <= 100; i++) {
// //   if (i % 7 === 0) {
// //     console.log(`${i} *`);
// //   } else {
// //     console.log(i);
// //   }
// // }


// // // 9) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti
// // for (let i = 1; i <= 100; i++) {
// //   // Verifica se il numero è un quadrato perfetto
// //   if (Number.isInteger(Math.sqrt(i))) {
// //     console.log(i + "*");
// //   } else {
// //     console.log(i);
// //   }
// // }

// // 10) chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0

// // Chiede all'utente un numero
// // let numero = parseInt(prompt("Inserisci un numero positivo:"));

// // // Controlla che il numero sia valido e positivo
// // if (isNaN(numero) || numero < 0) {
// //   console.log("Per favore inserisci un numero positivo valido.");
// // } else {
// //   // Ciclo decrescente da numero a 0
// //   for (let i = numero; i >= 0; i--) {
// //     console.log(i);
// //   }
// // }


// // // 11) chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente
// // // Chiede all'utente due numeri
// // const num1 = parseInt(prompt("Inserisci il primo numero:"));
// // const num2 = parseInt(prompt("Inserisci il secondo numero:"));

// // // Controlla che i valori siano numeri validi
// // if (isNaN(num1) || isNaN(num2)) {
// //   console.log("Per favore inserisci due numeri validi.");
// // } else {
// //   // Determina l'intervallo corretto (dal minore al maggiore)
// // const inizio = Math.min(num1, num2);
// //   const fine = Math.max(num1, num2);

// //   console.log(`Numeri pari tra ${inizio} e ${fine}:`);

// //   // Ciclo per loggare i numeri pari
// //   for (let i = inizio; i <= fine; i++) {
// //     if (i % 2 === 0) {
// //       console.log(i);
// //     }
// //   }
// // }

// // // 12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto
// // // Chiede all'utente la sua età
// // const age = parseInt(prompt("Quanti anni hai?"));

// // // Controlla che l'input sia valido
// // if (isNaN(age) || age < 0) {
// //   console.log("Per favore inserisci un'età valida.");
// // } else {
// //   // Calcola le ore vissute (approssimando con 365 giorni per anno)
// //   const oreVissute = age * 365 * 24;

// //   console.log(`Hai vissuto circa ${oreVissute.toLocaleString()} ore!`);
// // }

// // 13) Write a loop that makes seven calls to console.log to output the following
// //un triangolo
// // let  line = '#';
// //   let startingString = ''
// //  for (let i = 0; i < 7; i++) {
// //     console.log(line);
// //    line = line + '#'
// //
// // }
// // // → 3

// //14)

//         // for (let i = 1; i <= 100; i++) {
            
//         //     // Controlla se il numero è divisibile per 3 e 5
//         //     if (i % 3 == 0) {
//         //         console.log('fizz');
                
//         //     }
           
//         //     // Controlla se è divisibile solo per 5
//         // else if (i % 5 == 0) {
//         //         console.log
//         //         ("Buzz");
//         //     }
//         //   else if(i % 3 == 0 && i % 5 == 0){
//         //    console.log('Fizzbuzz');
//         //    }else{
//         //     console.log(i);
            
//         //    }
//         // }
    

//         // for (int i = 1; i <= 100; i++) {
            
//         //     // Controlla se il numero è divisibile per 3 e 5
//         //     if (i % 3 == 0 && i % 5 !== 0) {
//         //         System.out.println("Fizz");
//         //     }
//         //     // Controlla se è divisibile solo per 3
//         //     else if (i % 3 == 0) {
//         //         System.out.println("Fizz");
//         //     }
//         //     // Controlla se è divisibile solo per 5
//         //     else if (i % 5 == 0) {
//         //         System.out.println("Buzz");
//         //     }
//         //     // Altrimenti stampa il numero
//         //     else {
//         //         System.out.println(i);
//         //     }
//         // }
    

// //15) sacchera 8x8 esempi 

// // let  line = '#';
// //  for (let i = 0; i < 8; i++) {
// //  if (i % 2 === 0) {
// //     console.log('# # # #');
// //      }else{
// //         console.log('# # # #');
// //      }
// //  }


// // let  chessboard = '';
// //  for (let i = 0; i < 8; i++) {
// //  if (i % 2 === 0) {
// //     chessboard = chessboard + '# # # #\n';
// //      }else{
// //         chessboard = chessboard + '# # # #\n';
// //      }
// //  }

// //  console.log(chessboard);
 
// //  let size = '#';

// //  let chessboard = '';

// //  for (let line = 0; line < size; line++) {
   
    
// //  }

// // let size = 9;
// // let chessboard = '';

// // for (let line = 0; line < size; line++) {
// //    if((line + column  ) % 2 === 0){
// //     chessboard = chessboard + ' ';
// //    }else{
// //     chessboard = chessboard + '0';
// //    }
    
// //}

// //16) scrivere una funzione che mi dice se un numero è pari;

// // function checkEven(inputNumber) {
    
// //     const isEven = inputNumber % 2 === 0;
    
// //     return isEven;
// // }

// // const checkEvenLambda = (inputNumber) => inputNumber % 2 === 0;

// // const res1 = checkEven(22);
// // console.log(res1);
// // const res2 = checkEven(21);
// // console.log(res2);


// // const res3 = checkEvenLambda(221);
// // console.log(res3);
// // const res4 = checkEvenLambda(212);
// // console.log(res4);

// //17) scrivere una funzione che noltiplichi una stringa per un numero
// // es: se inserisco 'cacca' e 3, 1 l'output sarà 'caccacaccacacca'

// function multiplyString(inputString, multiplier) {
    
//     let multipliedString = '';

//      for (let i = 0; i < multiplier; i++) {
        
//         multipliedString += inputString;
//     }

//     return multipliedString;
// }

// const multiplyStringlambda = (inputString, multiplier) => inputString.repeat(multiplier);



// const res5 = multiplyString('pippo', 3);
// console.log(res5);

// //18) scrivi una funzione che dato un numero mi dice se è interro oppure no

// function checkInteger(n) {
   
//     const isInteger = n % 1 === 0;

//     return isInteger;
// }

// const checkIntegerLambda = n => n % 1 === 0;

// const res9 = checkInteger(3);
// console.log(res9);

// const res10 = checkInteger(3.14);
// console.log(res10);

// const res11 = checkInteger(30);
// console.log(res11);

// const res12 = checkInteger(0.5);
// console.log(res12);

// //19) scrivere una funzione che dati in inout due numeri ritorni il maggiore;
// //20) scrivere una funzipne che date in input due stringhe ritorni la più corta;
// //21) scrivere una funzione che date in input una stringsa ritroni la sua iniziale;
// //22) scrivere una funzione che dati in input una stringa e un numero, logghi la stringa tanto quanto il numero dato; 


// // 19) Scrivere una funzione che dati in input due numeri ritorni il maggiore
// // function greater(number1, number2) {
// //   return number1 > number2 ? number1 : number2;
// // }


// // console.log(greater(5, 9)); 


// function findGreaterNumber(n1,n2){
//     if (n1< n2) {
//         return n2;
//     }else{
//         return n1;
//     }
// }

// // 20) Scrivere una funzione che date in input due stringhe ritorni la più corta
// // function stringShort(string1, string2) {
// //   return str1.length < str2.length ? string1 : string2;
// // }


// // console.log(stringShort("gatto", "cane")); 


// function stringShort(string1, string2) {
//   if (string1.length < string2.length) {
//     return string1; 
//   } else {
//     return string2; 
//   }
// }

// console.log(stringShort("gatto", "cane")); 


// // 21) Scrivere una funzione che data in input una stringa ritorni la sua iniziale
// function start(string) {
//   return string.charAt(0); 
// }

// console.log(start("Ciao")); 


// function start(string) {
//   if (string.length === 0) {
//     return "Stringa vuota!";
//   } else {
//     return string[0];
//   }
// }

// console.log(start("Ciao")); 
// console.log(start(""));     


// // 22) Scrivere una funzione che dati in input una stringa e un numero,
// // logghi la stringa tante volte quanto il numero dato
// function repeatString(string, number) {
//   for (let i = 0; i < number; i++) {
//     console.log(string);
//   }
// }

// repeatString("JS è fantastico!", 3);



