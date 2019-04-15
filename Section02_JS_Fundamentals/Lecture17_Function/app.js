// // ES5: Set default value
// function greet(firstName, lastName){


//     if(typeof firstName === 'undefined'){firstName = 'John'};
//     if(typeof lastName === 'undefined'){lastName = 'Doe'};

//     // console.log('Hello');
//     return 'Hello ' + firstName + ' ' + lastName;
// }

////////////////////////////////////////////////////////

// ES6: Set default value
function greet(firstName = 'John', lastName = 'Doe') {
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());

// FUNCTION EXPRESSIONS: put function into a variable
// benefit: for advance concepts: like hoisting, closure...
const square = function (x = 3) {
    return x * x;
}

console.log(square());

////////////////////////////////////////////////////////
//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// Function declared and run at the same time

// (function(){
//     console.log('IIFE Ran...');
// }) ();

(function (name) {
    console.log('IIFE Ran..., Hello ' + name);
})('Brad');

// 
////////////////////////////////////////////////////////
// PROPERTY METHODS
const todo = {
    add: function () {
        console.log('Add todo...');
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function () {
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();

// Example of IIFEs
//Once you get on to working with larger programs you will see the importance of structuring code into modules. The traditional way of creating modules uses an IIFE to define the module.


// Andrew · a year ago
// Using an IIFE is a good way to create a namespace with public and private variables private. You can construct a public interface (scoped to a namespace) which has access to private variables within the namespace. 

// Something similar to private instance methods using classes. You might achieve the same ends using classes. As JS has no formal notion of a class (uses prototypes) this pattern helps overcome encapsulation limitations. 

// Use this when you want to provide access to certain public variables outside the namespace while hiding other (private) variables inside the namespace.

// Hope this helps. It might not be immediately obvious why you would need this until you encounter large amounts of code which need to be well structured and organized away from a large monolithic chunk. It allows you to manage discrete modules of code which might be organized around functionality. You might create a user module, an authorization module etc.

// Here's a quick example for a namespace of moduleName (particularly note that the IIFE returns an object):

const moduleName = (function () {
    const privateVar1 = 'Private 1';
    const privateVar2 = 'Private 2';
    const privateFunc1 = function () {
        console.log(`Hello everyone from ${privateVar1} and ${privateVar2}`);
    }
    return {
        publicVar1: 'Public 1',
        publicVar2: `I make ${privateVar2} public`,
        publicFunc1: function () {
            console.log(`Hello everyone from ${this.publicVar1} and ${this.publicVar2}`);
        },
        publicFunc2: privateFunc1
    }
})();

console.log(moduleName.privateVar1); // undefined
console.log(moduleName.privateVar2); // undefined
console.log(moduleName.publicVar1); // Public 1
console.log(moduleName.publicVar2); // I make Private 2 public

// will cause error
// moduleName.privateFunc1(); // not a function

moduleName.publicFunc1(); // Hello everyone from Public 1 and I make Private 2 public

moduleName.publicFunc2(); // Hello everyone from Private 1 and Private 2

