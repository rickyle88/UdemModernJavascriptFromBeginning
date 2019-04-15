//Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22,'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

//Get array length
val = numbers.length;

//Check if is array
//Array we can't do foreach loops
val = Array.isArray(numbers);


//Get single value
val = numbers[3];       //23
val = numbers[0];       //43

//Insert into array
//array is 
numbers[2] = 100;

//Find index of value : count from 0
//const numbers = [43,56,100,23,44,36,5];
val = numbers.indexOf(36);      //5

//MUTATING ARRAYS
//Add on to the end
numbers.push(250);
//Add on to the front
numbers.unshift(120);

//Take off - remove from the end
numbers.pop();

//Take off - remove from the front
numbers.shift();

////const numbers = [43,56,100,23,44,36,5];
//Splice values
numbers.splice(1,3);    //New array: [43,44,36,5]

//Reverse
numbers.reverse();      //[43,44,36,5]

//const numbers2 = new Array(22,45,33,76,54);
//Concatenate array
val = numbers.concat(numbers2);

//[43,44,36,5,22,45,33,76,54]


//const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
//Sorting arrays on array of strings
val = fruit.sort(); //['Apple', 'Banana', 'Orange', 'Pear']

//Sorting arrays
val = numbers.sort(function(x,y){
    return x - y;
})

//Reverse Sorting arrays
val = numbers.sort(function(x,y){
    return y-x;
})

//Find
function under40(num){
    return num < 40;
}

function over40(num){
    return num > 40;
}

val = numbers.find(under40);

console.log(numbers);
console.log("All numbers > 40");
console.log(val);

