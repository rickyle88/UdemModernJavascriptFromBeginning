// const sayHello = function () {
//     console.log('Hello');
// }

// const sayHello1 = () => {
//     console.log('Hello');
// }

// // 1 line function doesn't need braces
// const sayHello2 = () =>
//     console.log('Hello');

// const sayHello3 = () => 'Hello';

// const sayHello4 = function(){
//     return 'Hello';
// } 

// Return object
// const sayHello = () => ({msg: 'Hello'});

// Single parameter, doesn't need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// More than 1 parameters, need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Nguyen', 'Le');

// console.log(sayHello());


const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map(function(name){
    return name.length;
});

// Shorter
const nameLengths1 = users.map((name) => {
    return name.length;
});

// Shortest
const nameLengths1 = users.map(name => name.length);


console.log(nameLengths1);
