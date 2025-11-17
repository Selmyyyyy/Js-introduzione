
// // // let firstName = prompt("Come ti chiami?");
// // // alert("Buon compleanno, " + firstName + "! ");

// // // let base = parseFloat(prompt("Inserisci la base:"));
// // // let esponente = parseFloat(prompt("Inserisci l'esponente:"));
// // // let potenza = Math.pow(base, esponente);
// // // alert(`${base} elevato a ${esponente} è ${potenza}`);

// // // let Number = parseInt(prompt("Inserisci un numero intero:"));
// // // if ( Number % 2 === 0) {
// // //   alert("Il numero è pari.");
// // // } else {
// // //   alert("Il numero è dispari.");
// // // }

// // // let age = parseInt(prompt("Quanti anni hai?"));
// // // if (age >= 18) {
// // //   alert("Puoi entrare.");
// // // } else {
// // //   alert("Mi dispiace, non puoi entrare.");
// // // }


// // // let stringa = prompt("Inserisci una frase o parola:");
// // // let maiuscola = stringa.toUpperCase();
// // // alert("In maiuscolo: " + maiuscola);

// // // 1)
// // // const firstName = prompt("Come ti chiami?");
// // // alert("Buon compleanno, " + firstName + "! ");

// // // 2)
// // // const number1 = prompt("Dammi le base della potenza");
// // // const number2 = prompt("Dammi l'esponente");

// // // const n1converted = Number(number1);
// // // const n2converted = Number(number2);

// // // const result = number1**number2;
// // // alert("il risultato è: "+result)

// // // 3)
// // // const numb = prompt("Dammi un numero");
// // // if (Number % 2 === 0){
// // // alert("il numero è pari");
// // // } else{
// // //     alert("il numero è dispari");
// // // }

// // // 4)

// // // const age = prompt("dammi l'età");

// // // if( age >= 18){
// // //     alert("puoi entrare");
// // // }else{
// // //     alert("non puoi entrare");
// // // }

// // // 5)
// // //  const string = prompt("dammi una parola o una frase");
// // //  const maiuscola =  string.toUpperCase();
// // //  alert("in maiuscolo:" + maiuscola);

// // // cerca di usare const invece di let

// // // 6) fai un ciclo for che stampi il quadrato dei numeri da 1 a 100

// // // for (let i = 1; i <= 100; i++) {
// // //     const square = i ** 2;
// // //     console.log(square);

// // // }

// // //7) fai un ciclo che per i numeri da 1 a 100 stampi pari se il numero è pari e dispari se il numero è dispari

// // // for (let i = 1; i < 101; i++) {

// // //     if (i % 2 === 0) {
// // //         console.log("pari");


// // //     } else {
// // //         console.log("dispari")
// // //     }

// // // }

// // // 8) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7

// // // for (let i = 1; i <= 100; i++) {
// // //   if (i % 7 === 0) {
// // //     console.log(`${i} *`);
// // //   } else {
// // //     console.log(i);
// // //   }
// // // }


// // // // 9) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti
// // // for (let i = 1; i <= 100; i++) {
// // //   // Verifica se il numero è un quadrato perfetto
// // //   if (Number.isInteger(Math.sqrt(i))) {
// // //     console.log(i + "*");
// // //   } else {
// // //     console.log(i);
// // //   }
// // // }

// // // 10) chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0

// // // Chiede all'utente un numero
// // // let numero = parseInt(prompt("Inserisci un numero positivo:"));

// // // // Controlla che il numero sia valido e positivo
// // // if (isNaN(numero) || numero < 0) {
// // //   console.log("Per favore inserisci un numero positivo valido.");
// // // } else {
// // //   // Ciclo decrescente da numero a 0
// // //   for (let i = numero; i >= 0; i--) {
// // //     console.log(i);
// // //   }
// // // }


// // // // 11) chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente
// // // // Chiede all'utente due numeri
// // // const num1 = parseInt(prompt("Inserisci il primo numero:"));
// // // const num2 = parseInt(prompt("Inserisci il secondo numero:"));

// // // // Controlla che i valori siano numeri validi
// // // if (isNaN(num1) || isNaN(num2)) {
// // //   console.log("Per favore inserisci due numeri validi.");
// // // } else {
// // //   // Determina l'intervallo corretto (dal minore al maggiore)
// // // const inizio = Math.min(num1, num2);
// // //   const fine = Math.max(num1, num2);

// // //   console.log(`Numeri pari tra ${inizio} e ${fine}:`);

// // //   // Ciclo per loggare i numeri pari
// // //   for (let i = inizio; i <= fine; i++) {
// // //     if (i % 2 === 0) {
// // //       console.log(i);
// // //     }
// // //   }
// // // }

// // // // 12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto
// // // // Chiede all'utente la sua età
// // // const age = parseInt(prompt("Quanti anni hai?"));

// // // // Controlla che l'input sia valido
// // // if (isNaN(age) || age < 0) {
// // //   console.log("Per favore inserisci un'età valida.");
// // // } else {
// // //   // Calcola le ore vissute (approssimando con 365 giorni per anno)
// // //   const oreVissute = age * 365 * 24;

// // //   console.log(`Hai vissuto circa ${oreVissute.toLocaleString()} ore!`);
// // // }

// // // 13) Write a loop that makes seven calls to console.log to output the following
// // //un triangolo
// // // let  line = '#';
// // //   let startingString = ''
// // //  for (let i = 0; i < 7; i++) {
// // //     console.log(line);
// // //    line = line + '#'
// // //
// // // }
// // // // → 3

// // //14)

// //         // for (let i = 1; i <= 100; i++) {

// //         //     // Controlla se il numero è divisibile per 3 e 5
// //         //     if (i % 3 == 0) {
// //         //         console.log('fizz');

// //         //     }

// //         //     // Controlla se è divisibile solo per 5
// //         // else if (i % 5 == 0) {
// //         //         console.log
// //         //         ("Buzz");
// //         //     }
// //         //   else if(i % 3 == 0 && i % 5 == 0){
// //         //    console.log('Fizzbuzz');
// //         //    }else{
// //         //     console.log(i);

// //         //    }
// //         // }


// //         // for (int i = 1; i <= 100; i++) {

// //         //     // Controlla se il numero è divisibile per 3 e 5
// //         //     if (i % 3 == 0 && i % 5 !== 0) {
// //         //         System.out.println("Fizz");
// //         //     }
// //         //     // Controlla se è divisibile solo per 3
// //         //     else if (i % 3 == 0) {
// //         //         System.out.println("Fizz");
// //         //     }
// //         //     // Controlla se è divisibile solo per 5
// //         //     else if (i % 5 == 0) {
// //         //         System.out.println("Buzz");
// //         //     }
// //         //     // Altrimenti stampa il numero
// //         //     else {
// //         //         System.out.println(i);
// //         //     }
// //         // }


// // //15) sacchera 8x8 esempi 

// // // let  line = '#';
// // //  for (let i = 0; i < 8; i++) {
// // //  if (i % 2 === 0) {
// // //     console.log('# # # #');
// // //      }else{
// // //         console.log('# # # #');
// // //      }
// // //  }


// // // let  chessboard = '';
// // //  for (let i = 0; i < 8; i++) {
// // //  if (i % 2 === 0) {
// // //     chessboard = chessboard + '# # # #\n';
// // //      }else{
// // //         chessboard = chessboard + '# # # #\n';
// // //      }
// // //  }

// // //  console.log(chessboard);

// // //  let size = '#';

// // //  let chessboard = '';

// // //  for (let line = 0; line < size; line++) {


// // //  }

// // // let size = 9;
// // // let chessboard = '';

// // // for (let line = 0; line < size; line++) {
// // //    if((line + column  ) % 2 === 0){
// // //     chessboard = chessboard + ' ';
// // //    }else{
// // //     chessboard = chessboard + '0';
// // //    }

// // //}

// // //16) scrivere una funzione che mi dice se un numero è pari;

// // // function checkEven(inputNumber) {

// // //     const isEven = inputNumber % 2 === 0;

// // //     return isEven;
// // // }

// // // const checkEvenLambda = (inputNumber) => inputNumber % 2 === 0;

// // // const res1 = checkEven(22);
// // // console.log(res1);
// // // const res2 = checkEven(21);
// // // console.log(res2);


// // // const res3 = checkEvenLambda(221);
// // // console.log(res3);
// // // const res4 = checkEvenLambda(212);
// // // console.log(res4);

// // //17) scrivere una funzione che noltiplichi una stringa per un numero
// // // es: se inserisco 'cacca' e 3, 1 l'output sarà 'caccacaccacacca'

// // function multiplyString(inputString, multiplier) {

// //     let multipliedString = '';

// //      for (let i = 0; i < multiplier; i++) {

// //         multipliedString += inputString;
// //     }

// //     return multipliedString;
// // }

// // const multiplyStringlambda = (inputString, multiplier) => inputString.repeat(multiplier);



// // const res5 = multiplyString('pippo', 3);
// // console.log(res5);

// // //18) scrivi una funzione che dato un numero mi dice se è interro oppure no

// // function checkInteger(n) {

// //     const isInteger = n % 1 === 0;

// //     return isInteger;
// // }

// // const checkIntegerLambda = n => n % 1 === 0;

// // const res9 = checkInteger(3);
// // console.log(res9);

// // const res10 = checkInteger(3.14);
// // console.log(res10);

// // const res11 = checkInteger(30);
// // console.log(res11);

// // const res12 = checkInteger(0.5);
// // console.log(res12);

// // //19) scrivere una funzione che dati in inout due numeri ritorni il maggiore;
// // //20) scrivere una funzipne che date in input due stringhe ritorni la più corta;
// // //21) scrivere una funzione che date in input una stringsa ritroni la sua iniziale;
// // //22) scrivere una funzione che dati in input una stringa e un numero, logghi la stringa tanto quanto il numero dato; 


// // // 19) Scrivere una funzione che dati in input due numeri ritorni il maggiore
// // // function greater(number1, number2) {
// // //   return number1 > number2 ? number1 : number2;
// // // }


// // // console.log(greater(5, 9)); 


// // function findGreaterNumber(n1,n2){
// //     if (n1< n2) {
// //         return n2;
// //     }else{
// //         return n1;
// //     }
// // }

// // // 20) Scrivere una funzione che date in input due stringhe ritorni la più corta
// // // function stringShort(string1, string2) {
// // //   return str1.length < str2.length ? string1 : string2;
// // // }


// // // console.log(stringShort("gatto", "cane")); 


// // function stringShort(string1, string2) {
// //   if (string1.length < string2.length) {
// //     return string1; 
// //   } else {
// //     return string2; 
// //   }
// // }

// // console.log(stringShort("gatto", "cane")); 


// // // 21) Scrivere una funzione che data in input una stringa ritorni la sua iniziale
// // function start(string) {
// //   return string.charAt(0); 
// // }

// // console.log(start("Ciao")); 


// // function start(string) {
// //   if (string.length === 0) {
// //     return "Stringa vuota!";
// //   } else {
// //     return string[0];
// //   }
// // }

// // console.log(start("Ciao")); 
// // console.log(start(""));     


// // // 22) Scrivere una funzione che dati in input una stringa e un numero,
// // // logghi la stringa tante volte quanto il numero dato
// // function repeatString(string, number) {
// //   for (let i = 0; i < number; i++) {
// //     console.log(string);
// //   }
// // }

// // repeatString("JS è fantastico!", 3);




// //23) È possibile ottenere l'ennesimo carattere, o lettera, da una stringa scrivendo [N] dopo la stringa (ad esempio, string[2]). Il valore risultante sarà una stringa contenente un solo carattere (ad esempio, "b"). Il primo carattere ha posizione 0, il che fa sì che l'ultimo si trovi alla posizione string.length - 1. In altre parole, una stringa di due caratteri ha lunghezza 2 e i suoi caratteri hanno posizioni 0 e 1.
// //Scrivi una funzione chiamata countBs che accetti una stringa come unico argomento e restituisca un numero che indica quanti caratteri B maiuscoli sono presenti nella stringa.
// //Successivamente, scrivi una funzione chiamata countChar che si comporti come countBs, tranne per il fatto che accetta un secondo argomento che indica il carattere da contare (invece di contare solo i caratteri B maiuscoli). Riscrivi countBs per utilizzare questa nuova funzione.

// // function countChar(string, char) {
// //   let count = 0; //variabile 
// //   for (let i = 0; i < string.length; i++) {
// //     if (string[i] === char) {
// //       count++;
// //     }
// //   }
// //   return count;
// // }


// // function countBs(string) {

// //   return countChar(string, "B");
// // }



// // console.log(countBs('Bicchiere'));
// // console.log(countBs('Limbo'));


// // console.log(countChar('Banana', 'a'));

// //LA FUNZIONE SOTTO è LA CORREZIONE DEL PROF DEL ES SOPRA


// // function countBs(str) {
// //   let counter = 0; //variabile 

// //   for (let i = 0; i < str.length; i++) {

// // const selectedChar = str[i];
// // const lowerChar = selectedChar.toLowerCase();


// //     if (lowerChar === 'b') {
// //       counter++;
// //     }
// //   }
// //   return counter;
// // }

// // function countChar(str) {
// //     return countBs(str, 'b');
// // }

// // console.log(countBs('Bicchiere'));
// // console.log(countBs('Limbo'));
// // console.log(countBs('abBracadabra'));
// // console.log(countChar('Banana', 'a'));
// // console.log(countChar('Bubble', 'b'));




// //24) Inversione di un numero
// //Scrivi una funzione invertiNumero che prenda un numero come parametro e restituisca il numero con le cifre invertite (es. 123 → 321).

// // function InvertedNumber(n) {
// //    const StringNumber = String(n);

// //    const number = StringNumber.split('');

// //    const Inverted = number.reverse();

// //    const StringInverted = Inverted.join('');

// //    const numberInverted = parseInt(StringInverted, 10);

// //    return numberInverted;
// // }

// // console.log(InvertedNumber(123));  
// // console.log(InvertedNumber(98765));
// // console.log(InvertedNumber(500));  
// // console.log(InvertedNumber(1002)); 

// //25) Tabellina
// //Scrivi una funzione tabellina che prenda un numero come parametro e stampi in console la tabellina di quel numero fino a 10.
// // CORREZIONE DEL PROF MA FATTA IN MODO PIU SEMPLICE
// // function tabellina(nbr) {
// //     console.log(nbr * 1);
// //     console.log(nbr * 2);
// //     console.log(nbr * 3);
// //     console.log(nbr * 4);
// //     console.log(nbr * 5);
// //     console.log(nbr * 6);
// //     console.log(nbr * 7);
// //     console.log(nbr * 8);
// //     console.log(nbr * 9);
// //     console.log(nbr * 10);
// //     console.log(nbr * 11);

// // }

// // tabellina(5);
// // tabellina(8);

// // QUESTA è LA CORREZIONE DEL PROF PIU PRECISA 
// // function tabellinaEvolution(nbr) {
// //     for (let i = 1; i < 11; i++) {
// //         console.log(nbr * i);
// //     }

// // }

// // tabellinaEvolution(7);
// // tabellinaEvolution(9);

// // QUESTA INVECE TI METTE LA TABELLINA SU UNA STRINGA 

// // function tabellinaString(nbr) {

// //     let tabellinaStr = '';

// //     for (let i = 0; i < 11; i++) {
// //         const result = nbr * i;
// //         tabellinaStr += result;
// //         tabellinaStr += ' ';

// //     }
// //     return tabellinaStr;
// // }

// // for (let i = 0; i < 11; i++) {
// //     console.log(tabellinaString(i));


// // }

// //26) Fibonacci
// //Scrivi una funzione fibonacci che prenda un numero N come parametro e restituisca l’N-esimo numero della sequenza di Fibonacci.

// // function fibonacci(nbr) {
// //    const  nbrToString = String(nbr);

// //    let reversed = '';

// //    for (let i = nbrToString.length - 1; i >= 0; i--) {
// //   const char = nbrToString[i];
// //   reversed += char;
// //    }
// //    const reversedToNumber = Number(reversed);
// //    return reversedToNumber;
// // }

// // console.log(fibonacci(12345));
// // console.log(fibonacci(33456));




// //27)  Conteggio vocali
// //Scrivi una funzione contaVocali che prenda una stringa come parametro e restituisca il numero di vocali presenti.

// // function contaVocali(str) {

// //     let counter = 0;

// //     for (let i = 0; i < str.length; i++) {

// //         const lowerChar = str[i].toLowerCase();

// //         if (lowerChar === 'a'
// //            || lowerChar === 'i'
// //            || lowerChar === 'e'
// //            || lowerChar === 'o'
// //            || lowerChar === 'u'
// //         ) {
// //             counter++;
// //         }

// //     }
// //     return counter;
// // }

// // console.log(contaVocali('aiuola'));


// //28) Sconto
// //Scrivi una funzione applicaSconto che prenda due numeri come parametri (prezzo e percentuale di sconto) e restituisca il prezzo scontato.

// // function ApplyDiscount(n1, n2) {
// //     const discount = (n1 * n2) / 100;
// //     const priceDiscount = n2 - discount;
// //     return priceDiscount;
// // }

// // console.log(ApplyDiscount(100, 20));
// // console.log(ApplyDiscount(250, 15));
// // console.log(ApplyDiscount(80, 5));
// // console.log(ApplyDiscount(50, 10));



// //29) Conversione gradi
// //Scrivi una funzione convertiGradi che prenda un numero come parametro (gradi Celsius) e restituisca la conversione in Fahrenheit

// // function convertedDegrees(c) {
// //     const f = (c * 9/5) + 32;
// //     return f;
// // }

// // console.log(convertedDegrees(30));



// //30) Verifica password
// //Scrivi una funzione verificaPassword che prenda una stringa e restituisca true se:
// // - Ha almeno 8 caratteri
// // - Contiene almeno una lettera maiuscola
// // - Contiene almeno un carattere speciale tra questi '!#@$%'
// // - Non contiene la parola 'cacca'

// //LA FUNZIONE SOTTO è QUELLA MENO ORDINATA, MA QUELLA CHE HO CAPITO
// // function checkPassword(password) {
// //    if (password.length < 8) {

// //    } else {
// //     if (password.toLowerCase() === password) {
// //         return false;
// //     }else{
// //         if (password.includes("!")
// //         || password.includes("#")
// //         || password.includes("$")
// //         || password.includes("@")
// //         || password.includes("%")
// //         ) {
// //             if (password.includes("cacca")) {
// //                 return false;
// //             }

// //          }else {
// //             return false;

// //          }
// //     }

// //    }
// // }

// // console.log(checkPassword('vinofresco'));
// // console.log(checkPassword('Cicciobello!'));


// // QUESTI SOTTO SONO TUTTI GLI ESEMPI DEL PROF
// // function hasSpecialCharacters(str){
// //     if (password.includes("!")
// //         || password.includes('#')
// //         || password.includes('@')
// //         || password.includes('$')
// //         || password.includes('%')) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }

// // function containsUppercaseChar(str){
// //     if (str.toLowerCase() === str) {
// //         return false;
// //     } else {
// //         return true;
// //     }
// // }

// // function isTooShort(str){
// //     if(str.length < 8){
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }

// // function containsCacca(str){
// //     if(str.includes('cacca')){
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }

// // function checkPassword(password) {
// //     // if(password.length < 8){
// //     //     return false;
// //     // } else {
// //     //     if(password.toLowerCase() === password){
// //     //         return false;
// //     //     } else {
// //     //         if (password.includes("!")
// //     //         || password.includes('#')
// //     //         || password.includes('@')
// //     //         || password.includes('$')
// //     //         || password.includes('%')) {
// //     //             if (password.includes('cacca')) {
// //     //                 return false;
// //     //             } else {
// //     //                 return true;
// //     //             }
// //     //         } else {
// //     //             return false;
// //     //         }
// //     //     }
// //     // }


// //     if (isTooShort(password)) {
// //         return false;
// //     } else if (!containsUppercaseChar(password)){
// //         return false;
// //     } else if (!hasSpecialCharacters(password)){
// //         return false;
// //     } else if (containsCacca(password)) {
// //         return false;
// //     } else {
// //         return true;
// //     }



// // }


// // console.log(checkPassword('caccacaccacacca'));
// // console.log(checkPassword('Leonardo!'));

// // 31) Somma dei numeri fino a n
// // Scrivi una funzione sommaFinoAN(n) che restituisce la somma dei numeri da 1 a n.
// // sommaFinoAN(5) -> 1 + 2 + 3 + 4 + 5 -> 15
// // function sommaFinoAN(n) {
// //   let somma = 0;
// //   for (let i = 1; i <= n; i++) {
// //     somma += i;
// //   }
// //   return somma;
// // }


// // console.log(sommaFinoAN(5)); // 15






// // 32) Conteggio cifre
// // Scrivi una funzione contaCifre(num) che restituisce il numero di cifre di un numero
// // contaCifre(5) -> 1
// // contaCifre(1245) -> 4
// // function contaCifre(num) {
// //   return num.toString().length;
// // }

// // // Esempi:
// // console.log(contaCifre(5));    // 1
// // console.log(contaCifre(1245)); // 4

// // 33) Somma delle cifre
// // Scrivi una funzione sommaCifre(num) che restituisce la somma delle cifre di un numero
// // sommaCifre(5) -> 5
// // sommaCifre(1245) -> 12
// // CORREZIONE DEL PROF
// // function sommaCifre(nbr) {

// //     let nbrToString = String(nbr);
// //     let sum = 0;

// //     for (let i = 0; i < nbrToString.length; i++) {

// //         const nChar = nbrToString[i];

// //         const n = Number(nChar);
// //         sum = sum + n;


// //     }
// // return sum;

// // }

// // console.log(sommaCifre(10));
// // console.log(sommaCifre(444));




// // function sommaCifre(num) {
// //   let somma = 0;
// //   let cifre = num.toString();
// //   for (let cifra of cifre) {
// //     somma += Number(cifra);
// //   }
// //   return somma;
// // }

// // // Esempi:
// // console.log(sommaCifre(5));    // 5
// // console.log(sommaCifre(1245)); // 12





// // 34) Conversione valuta
// // Scrivi una funzione euroToDollaro(euro) che converte un importo in euro in dollari (1 euro = 1.1 dollari).

// // function euroToDollaro(euro) {
// //   return euro * 1.1;
// // }

// // console.log(euroToDollaro(10)); // 11

// //correzione del prof
// // function euroDollari(euro) {
// //     const dollari = euro * 1.1;
// //     return dollari;

// // }



// // 35) Calcolo area rettangolo
// // Scrivi una funzione areaRettangolo(base, altezza) che restituisce l’area di un rettangolo.

// // function areaRettangolo(base, altezza) {
// //    const area = base * altezza;
// //    return area; 
// // }

// // console.log(areaRettangolo(20,6));



// // function areaRettangolo(base, altezza) {
// //   return base * altezza;
// // }

// // // Esempio:
// // console.log(areaRettangolo(5, 10)); // 50


// // 36) Calcolo media
// // Scrivi una funzione media(a, b, c) che restituisce la media di tre numeri.
// // correzione del prof
// // function media(a,b,c) {
// //     const sum = a + b + c;
// //     const mean = sum / 3;
// //     return mean;

// // }

// // console.log(media(2,44,5));



// // function media(a, b, c) {
// //   return (a + b + c) / 3;
// // }

// // // Esempio:
// // console.log(media(3, 6, 9)); // 6


// // 37) Generatore di password casuale
// // Scrivi una funzione generaPasswordCasuale() che restituisce una password di 8 caratteri usando solo lettere maiuscole e numeri (usa Math.random())
// //correzione del prof
// // function generaPasswordCasuale() {
// //     const availableCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// //       let password = "";

// //     for (let i = 0; i < 8; i++) {
// //         const numeroRandomico = Math.random();
// //         const position = numeroRandomico * (availableCharacters.length - 1);
// //         const roundedPosition = Math.round(position);

// // password = password + availableCharacters[roundedPosition];


// //     }
// //     return password;
// // }

// // console.log(generaPasswordCasuale());


// // function generaPasswordCasuale() {
// //   const caratteri = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// //   let password = "";
// //   for (let i = 0; i < 8; i++) {
// //     let indiceCasuale = Math.floor(Math.random() * caratteri.length);
// //     password += caratteri[indiceCasuale];
// //   }
// //   return password;
// // }


// // console.log(generaPasswordCasuale()); 




// // 38) Potenza con ciclo
// // Scrivi una funzione potenzaCiclo(base, esponente) che calcola la potenza usando un ciclo.
// //correzione del prof\
// // function potenzaCiclo(base, esponente) 
// // {
// //     let pow = 1;
// //     for (let i = 0; i < esponente; i++) {
// //         pow = pow * base;

// //     }
// //    return pow; 
// // }

// // console.log(potenzaCiclo(2,3));




// // function potenzaCiclo(base, esponente) {
// //   let risultato = 1;
// //   for (let i = 0; i < esponente; i++) {
// //     risultato *= base;
// //   }
// //   return risultato;
// // }


// // console.log(potenzaCiclo(2, 3)); // 8



// // 39) Scrivi un validatore di email con queste regole:
// // -deve contenere una @
// // -deve contenere un punto posizionato dopo la @
// // -le parti di testo prima della @ e tra la @ e il punto devono almeno avere tre lettere
// // -il punto non può essere l'ultimo carattere
// // CORREZIONE DEL PROF

// // includes() controlla se una stringa contiene un certo testo

// // function constainAt(email) {
// //     if (email.includes('@')) {
// //         return true;
// //     } else{
// //         return false;
// //     }

// // }
// // // la funzione sotto serve per controllare se c'è un punto dopo la @
// // // indexOf() restituisce la posizione del primo "." (o -1 se non c’è)
// // function containsDotAfterAt(email) {
// // const dotPosition = email.indexOf('.');
// // if (dotPosition === -1) {
// //     return false;

// // }

// //     const atPosition = email.indexOf('@');
// //     if (dotPosition > atPosition) {
// //         return true;
// //     }else{
// //         return false;
// //     }



// // }

// // function fristAndSecondPartlengthIsThreeOrMore(email) {
// //     const atPosition = email.indexOf('@');
// //     const firstPart = email.substring(0, atPosition);

// //     const dotPosition = email.indexOf('.');
// //     const secondPart = email.substring(atPosition + 1, dotPosition);

// //     if (firstPart.length >= 3 && secondPart.length >=3) {
// //         return true;
// //     }else{
// //         return false;
// //     }
// // }

// // // 🔹 Funzione principale che valida l'email
// // // "!" significa "non" → quindi se NON contiene "@"
// // function emailValidator(email) {
// //     if (!constainAt(email)) {
// //         return false;

// //     }else if (!containsDotAfterAt(email)) {
// //         return false;
// //     }else if (!fristAndSecondPartlengthIsThreeOrMore(email)) {
// //         return false;

// //     }else{
// //         return true;
// //     }

// // }

// // console.log(containsDotAfterAt("cicciobello@gmail.com"));
// // console.log(containsDotAfterAt("ciaobello"));
// // console.log(containsDotAfterAt(""));






// // function validaEmail(email) {
// //   if (!email.includes("@")) return false;

// //   const [partePrima, resto] = email.split("@");
// //   if (!resto || partePrima.length < 3) return false;

// //   const puntoPosizione = resto.indexOf(".");
// //   if (puntoPosizione < 3 || puntoPosizione === resto.length - 1) return false;

// //   return true;
// // }


// // console.log(validaEmail("abc@def.com"));  // true
// // console.log(validaEmail("a@b.com"));      // false
// // console.log(validaEmail("abc@de."));      // false




// // 40) crea un converitore tra italiano e farfallino(https://it.wikipedia.org/wiki/Alfabeto_farfallino)

// // function farfallinoTranslator(str) {

// //     const vowels = 'aeiou';

// //    let farfallinoStr = '';

// //     for (let i = 0; i < str.length; i++) {
// //          const char = str[i];

// //          if (vowels.includes(char.toLowerCase())) {
// //             farfallinoStr = farfallinoStr + char + 'f' + char;

// //          } else {
// //             farfallinoStr = farfallinoStr + char;
// //          }

// //     }

// //     return farfallinoStr;
// // }



// //const pippo = [1, 2, 4, 56, 78, 11, -123, 3, -23, 2, 22, 4];

// //41) creare una funzione che dato un array di numeri li eleva tutti al quadrato

// // function squareArray(nbrArray) {

// //     const newArray = [];


// //     for (let i = 0; i < nbrArray.length; i++) {

// //         const element = nbrArray[i];

// //         const square = element * element;

// //         newArray.push(square);

// //     }


// //     // for (const nbr of nbrArray) {

// //     //     const square = nbr ** 2;

// //     //     newArray.push(square);

// //     // }

// //     return newArray;
// // }

// //console.log(squareArray(pippo)) //-> [1, 4, 16, 3136, ....]


// //42) creare una funzione che dato un array di numeri li eleva al quadrato solo i numeri dispari

// // function squareOddArray(nbrArray) {

// //         const newArray = [];


// //     for (let i = 0; i < nbrArray.length; i++) {

// //         const element = nbrArray[i];

// //         if(element % 2 === 0){

// //             newArray.push(element);

// //         } else {

// //             const square = element * element;

// //             newArray.push(square);

// //         }

// //     }

// //     return newArray;


// // }

// // console.log(squareOddArray(pippo)) //-> [1, 2, 4, 56, 78, 121, 15129, 9, 529, 2, 22, 4]

// // 43) Trova il Minimo
// // Scrivi una funzione trovaMinimo(array) che restituisce il numero più piccolo in un array di numeri.

// // const numbers = [34, -2, 45, 0, 11, -9, 23];

// // let min = numbers[0];

// // for (let i = 0; i < array.length; i++) {
// //    const element = array[i];
// //    if (element < min) {
// //       min = element;
// //    }
// //    return min;
// // }

// // console.log(min);


// // 44) Inverti Array con un ciclo
// // Scrivi una funzione invertiArray(array) che restituisce un nuovo array con gli elementi in ordine inverso.

// function invertiArray(array) {

//    const newArray = [];

//    for (let i = array.length - 1; i >= 0; i--) {
//       const element = array[i];
//       newArray.push(element);
//    }
//    return newArray;

// }


// // 45) Maiuscolo Tutte le Parole
// // Scrivi una funzione maiuscoloTutto(array) che restituisce un nuovo array con tutte le stringhe in maiuscolo.



// // 46) Somma Righe Matrice
// // Scrivi una funzione sommaRighe(matrice) che restituisce un array con la somma degli elementi di ogni riga.

// // const superArray = [
// //    [1, 2, 3],
// //    [4, 5, 6],
// //    [7, 8, 9]
// // ];

// // function sommaRighe(matrice) {
// //    const sumArray = [];

// //    for (let rowNumber = 0; rowNumber < matrice.length; rowNumber++) {
// //       let rowSum = 0;
// //       const row = matrice[rowNumber];

// //       for (let columnNumber = 0; columnNumber < row.length; columnNumber++) {
// //          const element = row[columnNumber];
// //          rowSum = rowSum + element;
// //       }

// //       sumArray.push(rowSum);
// //    }

// //    return sumArray;
// // }

// // console.log(sommaRighe(superArray));




// // 47) Conta Occorrenze
// // Scrivi una funzione contaOccorrenze(array, elemento) che conta quante volte un elemento appare in un array
// const stringArray = ['ciao', 'come', 'stai', 'ciao', 'bene', 'ciao'];
// const numberarray = [1, 2, 3, 4, 2, 5, 2, 6, 2];
// // function contaOccorrenza(array, elemento) {

// //    let counter = 0;

// //    for (let i = 0; i < array.length; i++) {

// //       const selected = array[i];

// //       if (selected === elemento) {
// //          counter++;
// //       }
// //    }
// //    return
// // }


// // console.log(contaOccorrenza(numberarray, 10000));
// // console.log(contaOccorrenza(numberarray,4));



// // 48) Filtra indice pari
// // Scrivi una funzione filtraIndicePari(array) che tiene tutti gli elementi in posizione dispari
// // funzione del prof
// // function invertiArray(array) {

// //    const newArray = [];

// //    for (let i = 0; i < array.length; i++) {

// //       const element = array[i];

// //       newArray.unshift(element);

// //    }
// //    return newArray;
// // }

// // console.log(invertiArray(stringArray));


// // function filtraIndicaPari(array) {

// //    const newArray = [];

// //    for (let i = 0; i < array.length; i++) {
// //       const element = array[i];

// //    }
// //    return newArray;
// // }
// // console.log(filtraIndicaPari(stringArray));


// // 49) Somma pari 
// // Scrivi una funzione sommaPari(array) che somma tutti i numeri pari

// // function sommaPari(array) {
// //       let result = 0;

// //       for (let i = 0; i < array.length; i++) {
// //          const element = array[i];

// //       }

// // }


// // 50) trova lunghezze
// // Scrivi una funzione trovaLunghezzeParola(array) che restituisce un array delle lunghezze(numeri) delle stringhe che compongono l'array in input

// // function trovaLunghezzeParola(array) {
// //    const newArray = [];

// //    for (let i = 0; i < array.length; i++) {
// //       const element = array[i];
// //       const length = element.length;
// //       newArray.push(length);
// //    }
// //    return newArray;
// // }

// // const stringArray = ["pizza", "mondo", "ho molto sonno"];

// // console.log(trovaLunghezzeParola(stringArray));

// function countBy(x, n) {
//   let z = [];

// for (let i = 0; i <= n; i++) {
//   z.push(x * i);

//    }


//   return z;
// }


// console.log(countBy(1,10));


//51) Scrivi una funzione che, dato un array di numeri, crei un array con tutti i numeri
// maggiori di 100

const numberArray = [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8, 4];
const stringArray = ['pizza', 'spaghetti', 'frittata', 'lasagne'];

function numberGreatArray(nbrArray) {

  const newArray = [];

  for (let i = 0; i < nbrArray.length; i++) {

    const element = nbrArray[i];

    if (element > 100) {
      newArray.push(element);

    }


  }
  return newArray;
}

console.log(numberGreatArray(numberArray));








//52) Scrivi una funzione che, dato un array di stringhe, crei un array con tutte le stringhe 
// che finiscono con 'a'


// function StringA(str) {

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//   }
// }

// function wordsEndingWithA(array) {

//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     const str = array[i];
//     const lastChar = str[str.length - 1];

//     if (lastChar === 'a') {
//       newArray.push(str);
//     }

//   }
//   return newArray;
// }

// console.log(wordsEndingWithA(stringArray));


function lastCharIsA(str) {
  const lastChar = str[str.length - 1];
  if (lastChar === 'a') {
    return true;
  } else{
    return false;
  }
}


console.log(stringArray.filter(lastCharIsA));
console.log(stringArray.filter((str) => str[str.length - 1]==='a'))




//53) Scrivi una funzione che, dato un array di numeri, crei un array con tutti i numeri
// divisibili per 3

function number3(nbr) {
  const result = [];

 for (let i = 0; i < nbr.length; i++) {
   if (nbr[i] % 3 === 0) {
      result.push(nbr[i]);
    }
  }
  return result;
  
 }

  console.log(number3(numberArray));
  
function divisibiliPerTre(nbr) {
  return nbr.filter(num => num % 3 === 0);
}

console.log(divisibiliPerTre(numberArray));




// map
//54) Scrivi una funzione che, dato un array di numeri, crei un array con tutti i numeri
// elevati al cubo



function cubed2(nbr) {
  const result = [];
  for (let i = 0; i < nbr.length; i++) {
    result.push(nbr[i] ** 2);
  }
  return result;
}

console.log(cubed2(numberArray));




//55) Scrivi una funzione che, dato un array di stringhe, crei un array con tutte le stringhe
// con la prima lettera maiuscola

// function capitalizeWords(str) {
//   // divido la stringa in parole
//   const words = str.split(" ");

//   // trasformo la prima lettera di ogni parola in maiuscolo
//   const capitalizedWords = words.map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });

//   // ricompongo la stringa
//   return capitalizedWords.join(" ");
// }

// console.log(capitalizeWords(stringArray));


//56) Scrivi una funzione che, dato un array di numeri, crei un array di stringhe di
//cancelletti lunga quanto il numero originale
// [3, 4, 1, 0] -> ['###', '####', '#', '']

// reduce
//57) Scrivi una funzione che, dato un array di numeri, li moltiplichi tutti tra loro

//58) Scrivi una funzione che, dato un array di stringhe, crei una stringa composta
// dalle prime tre lettere delle strighe originarie

//59) Scrivi una funzione che, dato un array di numeri, trovi il maggiore

//60) Scrivi una funzione che, dato un array di stringhe, trovi la stringa con più
// volte ripetuta la lettera t;


///////FOREACH non è particolarmente utile(viene usato tanto quindi riguardatelo)


// const students = ['luis', 'alexander', 'dtefania', 'eros', 'dantiel', 'selma'];
// const numbers =[30,12,5,111,300,400,1];

// for (let i = 0; i <students.length; i++) {
//   const student = students[i];

//   console.log(student);
  
  
// }

// for (const student of students) {console.log(student);

  
// }

// students.forEach((student, i) => console.log(i, student));

/// find

// function isGreaterThan100(nbr) {
//   return nbr > 100;
// }

// console.log(isGreaterThan100(numbers));


const prodotti = [
  { id: 1, nome: "Mela", categoria: "Frutta", prezzo: 1.20, scadenza: "2025-11-15", peso: 0.2, biologico: true },
  { id: 2, nome: "Pasta", categoria: "Pasta e Riso", prezzo: 0.80, scadenza: "2026-05-10", peso: 0.5, biologico: false },
  { id: 3, nome: "Latte", categoria: "Latticini", prezzo: 1.10, scadenza: "2025-11-14", peso: 1, biologico: true },
  { id: 4, nome: "Pane", categoria: "Pane e Sostituti", prezzo: 1.50, scadenza: "2025-11-12", peso: 0.3, biologico: false },
  { id: 5, nome: "Yogurt", categoria: "Latticini", prezzo: 0.60, scadenza: "2025-11-20", peso: 0.125, biologico: true },
  { id: 6, nome: "Riso", categoria: "Pasta e Riso", prezzo: 1.30, scadenza: "2027-02-20", peso: 1, biologico: false },
  { id: 7, nome: "Pomodoro", categoria: "Ortaggi", prezzo: 0.90, scadenza: "2025-11-18", peso: 0.3, biologico: true },
  { id: 8, nome: "Acqua", categoria: "Bevande", prezzo: 0.30, scadenza: "2026-12-31", peso: 1.5, biologico: false },
  { id: 9, nome: "Biscotti", categoria: "Dolci", prezzo: 2.00, scadenza: "2026-03-01", peso: 0.2, biologico: false },
  { id: 10, nome: "Uova", categoria: "Uova", prezzo: 2.50, scadenza: "2025-11-30", peso: 0.6, biologico: true },
  { id: 11, nome: "Caffè", categoria: "Bevande", prezzo: 3.00, scadenza: "2026-10-01", peso: 0.25, biologico: false },
  { id: 12, nome: "Formaggio", categoria: "Latticini", prezzo: 4.50, scadenza: "2025-12-10", peso: 0.2, biologico: true },
  { id: 13, nome: "Carote", categoria: "Ortaggi", prezzo: 0.70, scadenza: "2025-11-25", peso: 1, biologico: true },
  { id: 14, nome: "Tonno", categoria: "Conserve", prezzo: 1.80, scadenza: "2027-01-15", peso: 0.16, biologico: false },
  { id: 15, nome: "Cioccolato", categoria: "Dolci", prezzo: 1.70, scadenza: "2026-04-30", peso: 0.1, biologico: false }
];


//61) mettere in ordine l'array di prodotti per prezzo dal più costoso in giù

// function comparePrezzoAscending(n1, n2){
//     return n2.prezzo - n1.prezzo; 
// }


function comparaPrezzoAscending(prodotto1, prodotto2) {
  const prezzo1 =  prodotto1.prezzo;
const prezzo2 = prodotto2.prezzo;
return prezzo2 - prezzo1;

}

prodotti.sort(comparaPrezzoAscending);
console.log(prodotti);




//62) mettere in ordine per nome discendente

// function compareStringsDescending(s1, s2) {
//     return s1.nome.localeCompare(s2.nome);
// }



function compareStrings2Desceding(prodotto1,prodotto2) {
  const nome1 = prodotto1.nome;
  const nome2 = prodotto2.nome;
  return prezzo1 - prezzo2;
  
}
prodotti.sort(compareStrings2Descending);
console.log(prodotti);

//63) mettere in ordine per categoria ascendente, e se uguali per peso dal più pesante



// function compareCategoriePeso(s1, s2) {
//     
//     const categoriaComparison = s1.categoria.localeCompare(s2.categoria);

//        if (categoriaComparison !== 0) {
//         return categoriaComparison;
//     }

//    
//     return s2.peso - s1.peso;
// }



// function compareCategoryAndWeightDesc(prodotto1, prodotto2) {
//   return prodotto1.categoria.localeCompare(prodotto2);
// }

function compareCategoryAndWeightDesc(prodotto1, prodotto2) {
  if (prodotto1.categoria === prodotto2.categoria) {
    return prodotto2.peso - prodotto1.peso;
  }
  return prodotto1.categoria.localeCompare(prodotto2.categoria);
}

prodotti.sort(compareCategoryAndWeightDesc);
console.log(prodotti);


//64) mettere in ordine per anno di scadenza dal più vicino

function compareYearsDesc(prodotto1, prodotto2) {
  const yearString1 = prodotto1.scadenza.silce(0,4);
    const yearString2 = prodotto.scadenza.silce(0,4);

    const year1 = Number(yearString1);
    const year2 = Number(yearString2);

    return year1 - year2;

  
  
}

prodotti.sort(compareYearsDesc);
console.log(prodotti);


//  function compareStringsAscending(s1, s2) {
//     return s1.scadenza.localeCompare(s2.scadenza);
// }

// prodotti.sort(compareStringsAscending);
// console.log(prodotti);

// function compareScadenzaAscending(s1, s2) {
//     // Usiamo localeCompare() per confrontare le stringhe di data nel formato AAAA-MM-GG.
//     // Il confronto stringa è sufficiente e restituisce:
//     // - Un valore negativo se s1 è una data più vicina (deve venire prima).
//     // - Un valore positivo se s2 è una data più vicina (deve venire prima).
//     // - Zero se le date sono uguali.
//     return s1.scadenza.localeCompare(s2.scadenza);
// }

// prodotti.sort(compareScadenzaAscending);
// console.log(prodotti);


//65) mettere in ordine per categoria discendente, se uguali per peso dal più piccolo, se uguali per nome ascendente

function compCatDescWeightAscNameAsc(prodotto1,prodotto2){
 
  if (prodotto1.categoria === prodotto2.categoria) {
    
    if (prodotto1.peso === prodotto2.peso) {

      return prodotto1.nome.localeCompare(prodotto2.nome);
      
    }
    return prodotto1.peso - prodotto2.peso;
  }


  return prodotto2.categoria.localeCompare(prodotto1.categoria);
  
}

prodotti.sort(compCatDescWeightAscNameAsc);
console.log(prodotti);







// function compareCategoriePesoNome(s1,s2) {

//   const categoriaComparison = s2.categoria.localeCompare(s1.categoria);

//     if (categoriaComparison !== 0) {
//         return categoriaComparison;
//     }
//     const pesoComparison = s1.peso - s2.peso;

//     if (pesoComparison !== 0) {
//       return pesoComparison;
//     }
//     return  s1.nome.localeCompare(s2.nome);

// }

// prodotti.sort(compareCategoriePesoNome);
// console.log(prodotti);
