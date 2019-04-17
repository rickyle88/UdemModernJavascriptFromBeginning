// REPLACE ELEMENT

// Create element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node and append
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent: so we can replace element
const cardAction = document.querySelector('.card-action');

// Replace 
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

console.log("Length of li before: " + lis.length);
// Remove list item
lis[0].remove();

console.log("Length of li after: " + lis.length);

// Remove by child element - put in element
list.removeChild(lis[3]);



// CLASSES & ATTRIBUTE
const firstLi = document.querySelector('li');
// const firstLi = document.querySelector('li:first-child');

//Get first child element
const link = firstLi.children[0];

let val;
val = link.className;
val = link.classList;   // DOM token list
// val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

// Attribute
val = link;

val = link.getAttribute('href');
val = link.setAttribute('href','https://www.google.com');

link.setAttribute('titile', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');


console.log(val);