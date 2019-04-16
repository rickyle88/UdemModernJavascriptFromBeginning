// An HTMLCollection is NOT an array!

// An HTMLCollection may look like an array, but it is not.

// You can loop through the list and refer to the elements with a number (just like an array).

// However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.

let val;

//Assign DOM to val 
val = document;

// Turn val into an collections
val = document.all;

//Return html
val = document.all[0];

//Return head tag
val = document.all[1];

//Total element
val = document.all.length;

val = document.head;

val = document.body;

val = document.domain;

val = document.URL;

val = document.contentType;

// FORM
val = document.forms;

val = document.forms[0];

val = document.forms[0].id;

val = document.forms[0].method;

val = document.forms[0].action;

// LINKS
val = document.links;

val = document.links[0];

val = document.links[0].id;

val = document.links[0].className;

val = document.links[0].classList;

// IMAGES

val = document.images;

// SCRIPT

val = document.scripts;

val = document.scripts[2].getAttribute('src');


// //////////////////////////////////////
// Convert Collection to Array
let scripts = document.scripts;

let scriptsArray = Array.from(scripts);

// 

scriptsArray.forEach(function(script){
    console.log(script);
});

scriptsArray.forEach(function(script){
    console.log(script.getAttribute('src'));
});


console.log(val);