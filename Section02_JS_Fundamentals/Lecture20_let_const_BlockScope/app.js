// Global Scope

var a = 1;
let b = 2;
const c = 3;

// function text(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function scope: ', a, b, c);
// }

// text();

// Block level scope
// if(true){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('If Block scope: ', a, b, c);   //4,5,6
// }

//console.log('Global scope: ', a, b, c);         //4,2,3 => let and const value don't change

// for(let a = 0; a < 10; a++){
//     console.log(`Loop : ${a}`);
// }

// => a = 0

for(var a = 0; a < 10; a++){
    console.log(`Loop : ${a}`);
}

// => a = 10

console.log('Global scope: ', a, b, c); 
