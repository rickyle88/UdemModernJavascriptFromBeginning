let val;

// Select ul
const list = document.querySelector('ul.collection');

// Select first li
const listItem = document.querySelector('li.collection-item');

val = listItem;
val = list;

// Get child nodes (include line break-text node)
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes (not include line break - return HTML collection)
val = list.children;
val = list.children[0];
list.children[0].textContent = 'hello';

//Children of children
val = list.children[3].children;
// Change id
list.children[3].children[0].id = 'test-link';
// Select first 
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child element
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;     //text item
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;     //text item
val = listItem.previousElementSibling; //null, 

console.log(val);