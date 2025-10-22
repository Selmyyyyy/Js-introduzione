//IF-> se le condizione è true esegue il codice tra le graffe altrimenti no

// const pippo = 5;
// const pluto = 8;

// if (pippo > pluto) {
//   console.log("evviva!")  
// }

//IF ELSE se le condizione è true esegue il codice tra le graffe dell'if
// se le condizione è false esegue il codice tra le graffe dell'else

//  const pippo = 5;
// const pluto = 3;

//  if (pippo < pluto) {
//   console.log("evviva!")  
//  }
//  else{
// console.log("brutta storia!!")
//  }

//IF - ELSE if - ELSE

// const candy = prompt("quante caramelle hai mangiato ieri?")

// const candyNumber = Number(candy)


// if(candyNumber === 0){
// alert("sei a dieta?")
// } else if (candyNumber < 5) {
//   alert("Molto bravo!")  
// } else if (candyNumber < 20) {

//     alert("hai lavoto i denti!") 
// } else if (candyNumber < 100) {
//     alert("ti verrà il diabete!!")
// } else{
// alert("Hai fatto schifo")
//  }

// const age = prompt("quanti anni hai?")

// const ageNumber = Number(age)


// if(ageNumber === 0){
// alert("quanti anni hai?")
// } else if (ageNumber > 18 ) {
//   alert("sei Giovane!")  
// } else if (ageNumber > 30) {

//     alert("stai invecchiando!") 
// } else if (ageNumber > 50 ) {
//     alert("che boomer!!")
// } else{
// alert("ciaone!")
// }


//SWITCH

// const response = prompt('come ti senti oggi?')

// switch (response) {
//   case "felice":
//     alert( 'bene sono felice di sentirlo!')
    
//     break;
// case "triste":
//   alert( 'su con il morale, oggi è una splendida giornata!')
//   break;
  
//   case "euforico":
//     alert('bene, ma datti una calmata')
//    break;
  
// case "arrabbiato":
//   alert('mi dispiace, cosa è successo?')
// break;

// default:
//   alert('è molto interessante')
//     break;
// }

// const response = prompt('come ti senti oggi?')

// if(response === "felice"){
// alert("bene sono felice di sentirlo")
// } else if (response === "triste") {
//   alert("su con il morale, oggi è una splendida giornata")  
// } else if (response === "euforico") {

//     alert("bene, ma datti una calmata!") 
// } else if (response === "arrabbiato") {
//     alert("mi dispiace, cosa è successo?")
// } else{
// alert("è molto interessante")
//  }








// il while viene usato e ripetuto quante volte è vera la condizione

// let counter = 0;

// while (counter < 20){

//   console.log('ciao!' + counter); // se metti + counter riesci a vedere tutti le volte che c'è scritto ciao senza vedi solo il ciao con il numero 20 senza vedere tutti i ciao

// counter++;

// }

// console.log("sono uscito dal while");

// let outputString = '';

// while(outputString.length < 100){
//   outputString = outputString + 'pippo';
// }

// console.log(outputString);




// while (true){
// const number = prompt('indovina il numero che ho pensato');
// const numberConverted= Number(number);
// }// è un ciclo che non finisce mai

// if (numberConverted === 20){
//   alert('hai vinto!');
//   break;
// }else {
//   alert('hai perso, prova di nuovo!')
// }

// console.log('gioco finito!');

//DO WHILE-> esegue almeno una volta
// let counter = 0;

// do {
//   console.log('ciao!'+ counter);

//   counter++;
// }

//  while (counter < 20);

//  console.log("sono uscito dal do while")



//FOR

//  for (let i = 0; i < 20; i++){

//   console.log('ciao!' + i);
//  }

//  console.log('sono uscito dal ciclo for')

//  for (let i = 19; i >= 0; i++) {
//   console.log('ciao!' + i);


//  }

// 

// for (; ;) {

//   const number = prompt('indovina il numero che ho pensato');
//   const numberConverted = Number(number);

//   if (numberConverted === 20) {
//     alert('hai vinto!');
//     break;
//   } else {
//     alert('hai perso, prova di nuovo!')
//   }
// }

// console.log('gioco finito!');

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log("riga:" + j + "coolonna:" + i);
// }

// }



