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
// }

const age = prompt("quanti anni hai?")

const ageNumber = Number(age)


if(ageNumber === 0){
alert("quanti anni hai?")
} else if (ageNumber >= 18 ) {
  alert("sei Giovane!")  
} else if (ageNumber > 30) {
   
    alert("stai invecchiando!") 
} else if (ageNumber >=50 ) {
    alert("che boomer!!")
} else{
alert("ciaone!")
}