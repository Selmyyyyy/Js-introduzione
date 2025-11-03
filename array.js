// console.log('il mondo è bello');

////ARRAY per definirew un array uso le parentesi [], l'array è una scatola 

let numbers = [2,4,5,9];

// console.log( numbers.length);

// console.log(numbers[0]); //Indica quale elemento dell’array vogliamo prendere.

let booleans = [true, true, true, false, true];

// console.log(booleans.length);

// console.log(booleans[3]);

let strings = ['pippo', 'pluto', 'topolino', 'paperino'];

// console.log(strings.length);

// console.log(strings[1]);

//posso creare array anche con elementi di tipi diversi

// let strangeArray = [ 12, false, 'paperino', 2 , 4, 'paperino']; //mai usare è un modo errato per usare gli array

// console.log(strangeArray.length);

// console.log(strangeArray[2]);

//CICLO FOR per scorrere gli elementi di un array

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];

//     console.log(element);
    
// }

// let i = 0;

// while (i < strings.length) {
    
//     const element = strings[i];

//     console.log(element);

//     i++
    
// }
//FOR OF è un modo più semplice per scorrere gli elementi di un array, ma non sai dov'è la posizione degli elementi 


// for (const element of numbers) {
//     console.log(element);
    
// }

// for (const stringa of strings) {
    
//     console.log(strings);

// }

// AGGIUNGERE ELEMENTI 

// strings.push('paperone');

// console.log(strings);

// strings.unshift('paperino');

// console.log(strings);

// // RIMUOVERE ELEMENTI

// const rimosso = strings.shift();


// strings.pop();

// console.log(strings);

// console.log('ho tolto' + rimosso);

// const rimosso2 = strings.shift(); // shift toglie il primo elemento 

// console.log('ho tolto' + rimosso2);


// const rimosso3 = strings.splice(2, 1); // splice toglie un elemento in una posizione specifica
// console.log(strings);

// console.log('ho tolto' + rimosso3);

// const rimosso4 = strings.splice(1, 2); // splice toglie più elementi in una posizione specifica
// console.log(numbers);
// console.log(rimosso4);

// strings[0]= 'superpippo';

// console.log(strings);


// strings[3]= 'super' + strings[3];

// console.log(strings);

// numbers[4] = 2;

// console.log(numbers)

// nimbers[8] = numbers[8] * 2;

// console.log(numbers);

/// PATTERN DEGLI ARRAY

//PATTERN DEGLI ARRAY: trovare un elemento in un array

// MAP -> MODIFICA DI TUTTI O PARTE DEGLI ELEMENTI DI UN ARRAY

//1) TRAFORMA TUTTE LE STRINGHE DELL' ARRAY al maiuscolo

// for (let i = 0; i < strings.length; i++) {
//     strings[i] = strings[i].toUpperCase();
    
// }

// console.log(strings);

// function arrayToUppercase(stringarray) {

//     const newArray = [];

//     for (let i = 0; i < stringarray.length; i++) {
//         const element = stringarray[i];

//         const uppercasedElement = element.toUpperCase();

//         newArray.push(uppercasedElement);
        
//     }
//     return newArray;
// }

// console.log(arrayToUppercase(strings));

// //1) moltiplica per due tutti i numeri in un array 

// function multiplyBy2Array(numberArray) {
   
//     const newArray = [];

//     for (let i = 0; i < numberArray.length; i++) {
//      const element = numberArray[i];
   
//     const dubleElement = element * 2;

//      newArray.push(dubleElement);

// }
    
//    return newArray;
    
// }

// console.log(multiplyBy2Array(numbers));


// //3) trasforma tutte le stringhe dell'array che inizaino per p al maiuscolo

// function arrayToUppercaseWordsStartingWithP(stringarray) {
//   const newArray = [];  

//   for (let i = 0; i < stringarray.length; i++) {
//     const element = stringarray[i];

//     if (element[0] === 'p') {
//         const elementUpper = element.toUpperCase();
//         newArray.push(elementUpper);
        
//     }else{
//         newArray.push(element);
//     }
    
    
//   }
//     return newArray;
// }

// console.log(arrayToUppercaseWordsStartingWithP(strings));

//41) creare una funzione che dato un array di numeri il eleva tutti al quadrato

function squareArray(numberArray) {

}

console.log(squareArray(pippo));//-> [4,16,25,81.....]

//42) creare una funzione che dato un array di numeri li eleva al quadrato solo i numeri dispari 

function squareArray(numberArray) {

}

console.log(squareArray(pippo));//-> [1,2,4,56, 78, 121.....]

//42) creare una funzione che dato un array di numeri moltiplichi per due quelli positivi e dvida per due quelli negativi

function multiplyBy2Array(numberArray) {

}

console.log(multiplyBy2Array(pippo));
