// console.log('ogetti!!');

// nome string 
// età number

// istruzione string 

// sesso string 

// nazionalità string

// stato civile boolean 

// indrizzo string

// interessi array 

// const leonardo = {
//     name: 'Leonardo',
//      surname: 'silva',  
//      age: 27, 
//      gender: 'maschio', 
//      nazionalita: 'Perù', 
//      isMarried: false, 
//      adress: {
//         street:'via dodecanneso 16',
//         civic: 16,
//         city: 'genova',
//     country: 'italia'},
//      interests: ['musica ', 'pagliaccio', 'bullo']}

// //ACCEDERE ALLE PROPRIETA DELL'OGGETTO

// console.log(leonardo.name);
// console.log(leonardo.age);

// console.log(leonardo.adress);

// console.log(leonardo.interests[1]); //se voglio prendere un elemento specifico dell'array metto le [] e ci metto dentro l'elemento di mio interesse

// //AGGIUNGI O CAMBIA UNA PROPRIETA

// leonardo.age = 25;

// leonardo.interests[2] = 'superbullo';

// leonardo.sibilings = 1; //aggiungo una nuova proprietà

// delete leonardo.gender; //cancello una proprietà

// console.log(leonardo);

// /// FUNZIONI COME PROPRIETA

// function salute() {
//     console.log('ciao sono leonardo');
    
    
    
    
// }

// leonardo.speak = salute; 

// leonardo.speak(); 

// //////

// const leonardo2 = {
//     name: 'Leonardo',
//      surname: 'silva',  
//      yob: 1998,
//      marks: [18, 22, 25, 30],
// }

// const luis = {
//     name: 'luis',
//      surname: 'amoretti',  
//      yob: 2004,
//      marks: [18, 22, 25, 30],
// }

// const evelyn = {
//     name: 'evelyn',
//      surname: 'rodriguez',  
//      yob: 1989,
//      marks: [18, 22, 25, 30],
// }

// const students = [leonardo2, luis, evelyn];

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];

// console.log(student.name, student.surname);

    
//}

///FOR IN 

// const ariel ={
//     name: 'ariel',
//     age: 4, 
//     race: 'border collie',
//     type: 'dog',
// }

// // let emptyString = '';

// for (const key in ariel) {
//     // const element = object[index];

//     const value = ariel[key];

//     // emptyString = emptyString + key + ':' + value +' \n';

//     // console.log(key + ':' + value);

// //  console.log(key);
    
// }
// console.log(ariel.name);
// console.log(ariel['name']);

// console.log(ariel['peggior nemico']);



// console.log(emptyString);
//le key sono i nomi di proprieta e value sono i vallori di proprieta 
// i nomi di prorpieta non possono avere spazi
// le [] servono per accedere alle proprita di un oggetto 

//JSON(JavaScript Object Notation)
// const leonardo = {
//     name: 'Leonardo',
//      surname: 'silva',  
//      age: 27, 
//      gender: 'maschio', 
//      nazionalita: 'Perù', 
//      isMarried: false, 
//      adress: {
//         street:'via dodecanneso 16',
//         civic: 16,
//         city: 'genova',
//     country: 'italia'},
//      interests: ['musica ', 'pagliaccio', 'bullo']}

//      console.log(leonardo);


//      const leoString = JSON.stringify(leonardo); //stringify trasforma un oggetto in una stringa JSON

//      console.log(leoString);

//      const dataString = '{"name":"Selma","surname":"sobhi", "age":"2002", "ismarried": false }';
//      console.log(dataString);

//      const data = JSON.parse(dataString); //parse trasforma una stringa JSON in un oggetto JS

//      console.log(data);
     


     
     