// console.log("hello world!");

// booleani
true;
false;

//number
3; 
3.14;
-34.4;
Infinity;
-Infinity;

NaN;
// 

//string
'ciao mondo'
"hello world!"
" possono essere molto lunghe"
'possono essere corte'
'possono essere vuote'

//tipi nulli
undefined //-> non mai definita 
null //-> nullo

//operatori logici:

//not
true; //vera
!true; //falso il ! rende il vero falso e il falso vero

false; //falso
!false; //vero

//console.log(!false);

//and
true && true; //true
true && false; //false
false && true;//false
false && false; //false

//console.log(true && true);
// console.log(true && false);

//or 
true || true ;//true
true || false; //true
false || true; //true
false || false; //false

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

// operatori matematici 

//+
5 + 10; //15

//-

-3.1;

90 -10; //80

//*

6 * 8; //48

// divisione(/)
9 / 3; //3

// potenza(**)
2**3; //8
4**2; //16

// modulo(%) non centra niente con la percentuale 
//resto della divisione

10 % 3; //1
5 % 3; //2
24 % 11; //2

// somma  di stringhe(+) l'unico operatore che puo essere usato per le stringhe
"ciao" + "mamma"; //"ciaomamma"
"ciao" + " " + "mamma"; //"ciao mamma"
//concatenazione di stringhe

// Operatori di confronto 

//ugalianza (== o ==)

5 === 5; //true
7 === 2; //false

7 === '7'; //false pk non uguale ad una stringa
7 == '7'; //true -> il doppio uguale converte prima di confrontare 

true === true; //true
false === false; //false
"pippo" === "pippo"; //true
"pippo" === "pluto"; //false

//diversità (!= o !==) per controllare quello diverso

5 !==3; //true
5 !== 5; //false

! (7 === 7);//false

7 !== '7'; //true
7 != '7'; //false

true !== true; //false
true !== false; //ture

"pippo" !== "pippo"; //false
"pippo" !== "pluto"; //true

//maggiore e maggiore o uguale (> o >=)
//minore e minore o uguale (< o <=)

7 > 6; // true
7 > 8; //false
7 > 7; //false
7 >= 7; //true

// parentesi (())
((5+2))* 2 - ((4 - 3));
(7 * 2 - 1);
(14 - 3);
13;

//esercizi 
!(true || true); //false
!(true || ("pippo"=== "pluto")); //false
!((12 % 5) === 3); //true//4
("ciao mondo" !==( "ciao"+ "  "+ "mondo" )) === false; //false


//variabile

//Var -> NON USARE MAI
// var firstNumber = 5;
// console.log(firstNumber);

// var secondNumbers = 10;

// var sumOfNumbers = firstNumber + secondNumber;
// console.log(sumOfNumbers);

// var empty;
// console.log(empty)

//LET

// let firstNumber = 5;
// console.log(firstNumber);

// let secondNumbers = 10;

// let sumOfNumbers = firstNumber + secondNumber;
// console.log(sumOfNumbers);

// let empty;
// console.log(empty);

// secondNumbers = 20;

// let newSumOfNumbers = firstNumber + secondNumbers;
// console.log(newSumOfNumbers);

// let firstName = "selma";
// let hello = "ciao" + " " + firstName;

//DIFFERENZA TRA LET E VAR;
// let pippo = 5;
// let pluto = pippo + 30; javascribt segnala un errore perheè usa una variabile 
// console.log(pluto);


// var paperoga = paperino + 30; javascribt può usare la variabile ma 
// var paperino = 5;
// console.log(paperoga);

//CONST la useremo spesso

// const qui = true;
// const quo = false;
// const qua = qui && quo; //false;
// console.log( qua);

// qui = false; // javascribt mi segnala un errore perchè non posso cambiare il valore 


//TYPE OF

// const variabileUNo = 3;

// console.log(typeof variabileUNo); //tipo number

// const variabile2 = true;
// console.log(typeof variabile2); //tipo boolean

// const variabile3 = "axia";
// console.log(typeof variabile3); //tipo string

// const variabile4 = typeof variabile1;
// console.log("il contenuto di variabile 4 è:"+ variabile4 + "l suo tipo è:" + typeof variabile4);

// const variabile5 = 5 > 6;
// console.log(typeof variabile5)

// let variabile6;
// console.log(typeof variabile6); //tipo underfined

// let variabile7 = null
// console.log(typeof variabile7); //tipo object

// let variabile8 = NaN;
// console.log(typeof variabile8); //tipo number???

// let dynamic; 
// console.log( typeof dynamic);

// dynamic = 5;
// console.log(typeof dynamic);

// dynamic = "pippo";
// console.log(typeof dynamic);

//ALERT
//pezzettini che ci servono per scrivere i primi proggrammi con javascribt

// alert("ciao mondo!")

// const birthdayGirl = "Salma";
// alert("auguri" + birthdayGirl)

//PROMPT

// const age = prompt("quanti anni fai?");

// console.log(age);
// console.log( typeof age); //string

//CALCOLATRICE

// const frist = prompt ('dammi il primo numero');
// const second = prompt( 'dammi il secondo numero');

// const fristToNumber = Number(frist);
// const secondToNumber = Number(second);

// const sum = fristToNumber + secondToNumber;
// // console.log(frist);
// // console.log(second);
 
// alert("la somma è: " + sum); 








