// String
const name1 = 'Jeff';

// String as a object
const name2 = new String('Jeff');   
// name.newAttr = '2';


if(name1 === 'Jeff'){
    console.log('Yes');
}else{
    console.log('No');
}

// Number
const num1 = 5;

// Number as a object
const num2 = new Number(5);

// Boolean
const bool1 = true;
// Boolean as a object
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x,y){
    return x + y;
}

// Function as a Object
const getSum2 = new Function('x', 'y','return x + y');

console.log(getSum2(1,1));

// Object
const john = {name: "John"};

// Object
const john2 = new Object({name: "John"});

// Arrays
const arr1 = [1,2,3];
const arr2 = new Array(1,2,3);

console.log(arr1);
console.log(arr2);


// Backward Slash "\"
// Fordward slash "/"
// Regular expression
const re1 = /\w+/;
// We need to escape backslash
const re2 = new RegExp('\\w+');

console.log(re1.test('hello'));
console.log(re2);