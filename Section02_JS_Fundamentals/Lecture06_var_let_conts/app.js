// var let const
//block level scope

// var name = 'John Doe';
// console.log(name);

// //Re-asign variable 
// name = 'Steve Smith';
// console.log(name);

// //Init var
// var greeting;
// console.log(greeting);

// greeting = 'Hello';
// console.log(greeting);

//
var firstName = 'John';     //Camel case
var first_name = 'Sara';    //Underscore
var FirstName = 'Tom';      //Pascal case

/////////////////////////////
//let 

let name = 'John Doe';
console.log(name);

//Re-asign variable 
name = 'Steve Smith';
console.log(name);

/////////////////////////////
//const: we can update element of its , but can not re-assign
const name1 = 'John';
console.log(name1);

//Can not reasign
//name1 = 'Sara';

//Object
const person = {
    name : 'John',
    age : 30
};

person.name = 'Sara';
person.age = 25;

console.log(person);


//Array
const numbers = [1,2,3,4,5];

numbers.push(6);
numbers[0] = 10;

console.log(numbers);

