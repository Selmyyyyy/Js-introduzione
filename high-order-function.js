// // function sayHello() {
// //     console.log('hello!');

// // }

// // const helloHello = () => console.log("belinda ciao!!");


// // const superHello = function () {
// //     console.log('super hello');

// // }

// // console.log(helloHello);
// // console.log(superHello);
// // console.log(sayHello);



// // //// FUNZIONI COME PARAMETRI IN INPUT

// // const  numbers = [-100, -30, 20, 11, 1, 40, -21, -15, 3, 9, 300, 5001];
// // function keepPositive(nbrArray) {

// //     const newAarray = [];

// //     for (const nbr of nbrArray) {

// //         if (nbr >= 0) {
// //            newArray.push(nbr); 
// //         }

// //     }
// // return newArray;

// // }

// // console.log(keepPositive(numbers));

// // const numbers = [-100, -30, 20, 11, 1, 40, -21, -15, 3, 9, 300, 5001];

// // const testArray = ['pippo', 'pluto', 'paperino', 'qui', 'quo']

// // function keepPositive(nbrArray) {
// //     const newArray = [];


// //     for (let i = 0; i < nbrArray.length; i++) {
// //         const nbr = nbrArray[i];

// //         if (nbr >= 0) {
// //             newArray.push(nbr)
// //         }
// //     }
// //     return newArray;
// // }
// // console.log(keepPositive(numbers));

// // function keepGreaterThan30(nbrArray) {
// //     const newArray = [];


// //     for (let i = 0; i < nbrArray.length; i++) {
// //         const nbr = nbrArray[i];

// //         if (nbr > 30) {
// //             newArray.push(nbr)
// //         }
// //     }
// //     return newArray;
// // }
// // console.log(keepGreaterThan30(numbers));


// // function keepLongerThan3(strArray) {
// //     const newArray = [];


// //     for (let i = 0; i < strArray.length; i++) {
// //         const str = strArray[i];

// //         if (strArray.length > 3) {
// //             newArray.push(str)
// //         }
// //     }
// //     return newArray;
// // }
// // console.log(keepLongerThan3(testArray));



// // function highFilter(array, conditionFunction) {
// //     const newArray = [];

// //     for (let i = 0; i < array.length; i++) {
// //         const element = array[i];

// //         if (conditionFunction(element)) {
// //             newArray.push(element);

// //         }

// //     }
// //     return newArray;
// // }

// // function isEven(nbr) {

// //     if (nbr % 2 === 0) {
// //         return true;
// //     } else {
// //         return false;
// //     }

// // }

// // console.log(highFilter(numbers, isEven));

// // function notStartingWithP(str) {

// //     const firstChar = str[0];
// //     const firstLower = firstChar.toLowerCase();

// //     if (firstLower !== 'p') {
// //         return true;

// //     } else {
// //         return false;
// //     }

// // }

// // console.log(highFilter(testArray, notStartingWithP));

// // console.log(highFilter(numbers, (nbr) => nbr < 0));

// // console.log(numbers.filter((nbr) => nbr < 0));

// // MAP

// // function multiplierBy3(nbrArray) {
// //     const newArray = [];

// //     for (let i = 0; i < nbrArray.length; i++) {

// //         const nbr = nbrArray[i];

// //         const newNbr = nbr * 3; // uso la variabile giusta

// //         newArray.push(newNbr);
// //     }

// //     return newArray;
// // }


// // console.log(multiplierBy3(numbers));

// // function multiplyByArrayPosition(nbrArray) {

// //     const newArray = [];

// //     for (let i = 0; i < nbrArray.length; i++) {

// //         const nbr = nbrArray[i];

// //         const newNbr = nbr * i;

// //         newArray.push(newNbr);

// //     }
// //     return newArray;
// // }

// // console.log(multiplyByArrayPosition(numbers));

// // function toUpperCaseArray(strArray) {

// //     const newArray = [];

// //     for (let i = 0; i < strArray.length; i++) {

// //         const str = strArray[i];

// //         const newString = str.toUpperCase();

// //         newArray.push(newString);

// //     }
// //     return newArray;
// // }

// // console.log(toUpperCaseArray(testArray));


// // function highMap(array, transformFunction) {

// //     const newArray = [];
// //     for (let i = 0; i < array.length; i++) {

// //         const element = array[i];

// //         const newElement = transformFunction(element, i);
// //         newArray.push(newElement);


// //     }
// //     return newArray;
// // }


// // function multiplyBy3number(nbr) {
// //     return nbr * 3;

// // }

// // console.log(highMap(numbers, multiplyBy3number));
// // console.log((numbers, (nbr => nbr * 3)));
// // console.log(numbers.map((nbr => nbr * 3)));


// // console.log(highMap(numbers, (nbr, i) => nbr * i));
// // console.log(numbers.map((nbr, i) => nbr * i));




// // console.log(highMap(numbers, (nbr, i) => nbr * i));
// // console.log(testArray.map((str) => str.toUpperCase));

// // /REDUCE

// // function sumAll(nbrArray) {

// //     let sum = 0;

// //     for (let i = 0; i < nbrArray.length; i++) {

// //         const nbr = nbrArray[i];

// //         sum = sum + nbr;
// //     }
// //     return sum;
// // }

// // console.log(sumAll(numbers));


// // function stringWithFristChars(strArray) {

// //     let newString = '';

// //     for (let i = 0; i < strArray.length; i++) {
        
// //         const str = strArray[i];

// //         const fristChar = str[0];
// //         newString = newString + fristChar;
        
// //     }
// //     return newString;
// // }

// // console.log(stringWithFristChars(testArray));


// // function highReduce(array, reduceFunction, startingValue){
// //     let accumuletor = startingValue;
    
// //     for (let i = 0; i < array.length; i++) {
       
// //         const current  = array[i];

// //         accumuletor = reduceFunction(accumuletor, current, i);
        
// //     }
// // return accumuletor;
// // }

// // console.log(highReduce(numbers, (sum, nbr) => sum + nbr, 0)); //puoi mettere anche nomi diversi pk conta la posizione 
// // console.log(numbers.reduce((sum, nbr) => sum + nbr, 0));

// // function sumFirstChar(acc, curr) {
    
// //     const firstChar = curr[0];

// //     return acc + firstChar;
// // }

// // console.log(highReduce(testArray, sumFirstChar, ''));
// // console.log(testArray.reduce(sumFirstChar));
// // console.log(testArray.reduce((acc,curr) => acc+ curr[0], ''));

// // ///FOREACH non è particolarmente utile(viene usato tanto quindi riguardatelo)


// const students = ['luis', 'alexander', 'dtefania', 'eros', 'dantiel', 'selma'];
// const numbers =[30,12,5,111,300,400,1];

// for (let i = 0; i <students.length; i++) {
//   const student = students[i];

//   console.log(student);
  
  
// }

// for (const student of students) {console.log(student);

  
// }

// students.forEach((student, i) => console.log(i, student));

// //////find

// function isGreaterThan100(nbr) {
//   return nbr > 100;
// }

// function isGreaterThan5000(nbr) {
//     return nbr > 5000;
    
// }

// // console.log(numbers.filter(isGreaterThan100));
// // console.log(numbers.find(isGreaterThan100));
// // console.log(numbers.filter(isGreaterThan100)[0]);

// ///some

// console.log(numbers.some(isGreaterThan100));
// console.log(numbers.some(isGreaterThan5000));

// ////sort

// numbers.sort();

// console.log(numbers);
// students.sort();
// console.log(students);

// function compareNumbersAscending(n1, n2){
//     return n1 - n2;
// }

// function compareNumbersDescending(n1, n2){
//     return n2 - n1; // Descending should be reversed
// }

// // String comparison functions
// function compareStringsAscending(s1, s2){
//     return s1.localeCompare(s2);
// }

// function compareStringsDescending(s1, s2){
//     return s2.localeCompare(s1);
// }

// // Sort numbers descending
// numbers.sort(compareNumbersDescending);
// console.log("Numbers Descending:", numbers);

// // Sort numbers ascending
// numbers.sort(compareNumbersAscending);
// console.log("Numbers Ascending:", numbers);

// // Sort students ascending
// students.sort(compareStringsAscending);
// console.log("Students Ascending:", students);

// // Sort students descending
// students.sort(compareStringsDescending);
// console.log("Students Descending:", students);

// const cars = [
//     {
//         model: "g-wagon",
//         producer: "mercedes",
//         maxSpeed: 180
//     },
//     {
//         model: "cla",
//         producer: "mercedes",
//         maxSpeed: 225
//     },
//     {
//         model: "panda",
//         producer: "fiat",
//         maxSpeed: 150
//     },
//     {
//         model: "bravo",
//         producer: "fiat",
//         maxSpeed: 180
//     },
//     {
//         model: "a4",
//         producer: "audi",
//         maxSpeed: 225
//     }
// ]

// function compareCarsBySpeedDescending(car1, car2) {
//     return car2.maxSpeed - car1.maxSpeed;
// }

// function compareCarsByModelAscending(car1, car2) {
//     return car1.model.localeCompare(car2.model);
// }

// function compareCarsBySpeedDescendingAndModelAscending(car1, car2) {
//     if(car1.maxSpeed > car2.maxSpeed){
//         return -1;
//     } else if (car2.maxSpeed > car1.maxSpeed){
//         return 1;
//     } else {
//         return car1.model.localeCompare(car2.model);
//     }
// }

// cars.sort(compareCarsBySpeedDescendingAndModelAscending);

// console.log(cars);