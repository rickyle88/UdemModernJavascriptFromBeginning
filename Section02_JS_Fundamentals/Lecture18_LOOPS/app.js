// // FOR: When you know how many times you want to run

// for(let i = 0; i < 10; i++){    

//     if(i === 2){
//         console.log('2 is my favorite number');
//         continue;
//     }

//     if(i === 5){
//         console.log('Stop the loop');
//         break;
//     }

//     console.log(`Number ${i}`);
// }

// // WHILE: you don't know how many times you want to run
// let j = 0;
// while(j < 10){
//     console.log(`Number ${j}`);
//     j++;
// }

// // DO WHILE: always run 1 time
// let k = 0;
// do{
//     console.log(`Number ${k}`);
//     k++;
// }while(k<10);

////////////////////////////////////////////////////////
// ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// For loop
for( let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

////////////////////////////////////////////////////////
// ForEach loop with 1st para: value
cars.forEach(function(car){
    console.log(car);
});

// ForEach loop with 1st para: value, 2nd param: index
cars.forEach(function(car, index){
    console.log(`${index} : ${car}`);
});

// ForEach loop with 1st para: value, 2nd param: index, 3rd params: array
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

////////////////////////////////////////////////////////
// MAP : REturn result to an ARRAY
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'},
    {id: 4, name: 'Steve'},
];

// To create 
const ids = users.map(function(user){
    return user.id;
})

console.log(ids);
//=> [1, 2, 3, 4]

// The  map()  function is just like a forEach, but it returns a value.  In this case, it returns the ID.  However, you could also achieve the same thing using a forEach by declaring a variable outside the loop, setting it equal to the user.id, and then returning it.



// let ids;
 
// const ids = users.forEach(function(user) {
//    ids += user.id;
// })
 
// return ids;

// I have to clear some things up, map is method not a function or loop. It stores the values into array, it is designed for that. For each loop will not store it into array unless u declare so and it is more complicated. The example above is not correct it is not stored in array but into string.



// to equivalent map mathod with for each loop u had to declare two external variables the array and the indexer



// same results u can see the difference



// const users = [
// {id: 1, name: "Sara"},
// {id: 2, name: "Marcel"},
// {id: 3, name: "Tomas"},
// ];
 
// const ids = users.map(function(user){
//     return user.id;
// }
// );
 
// console.log(ids);
 
// var ids2 = [];
// var index = 0;
//   users.forEach(function(user){
 
//     ids2[index] = user.id;
//     index++;
// });
 
// console.log(ids2);
// this is the reason to learn map method it saves a ton of code; less code => more readable and less errors



////////////////////////////////////////////////////////
// FOR IN LOOP
const userObject = {
    firstName : 'John',
    lastname: 'Doe',
    age: 40
}

for(let key in userObject){
    console.log(`${key} : ${userObject[key]}`);
}

// firstName : John
// lastname : Doe
// age : 40