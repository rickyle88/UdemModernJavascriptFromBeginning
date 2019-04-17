// Create element
const li = document.createElement('li');

// Add a class
li.className = 'collection-item';

// Add a id
li.id = 'new-item';

// Add attribute
li.setAttribute('title','New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

/////////////////////////////////////////////////
// Create new link element
const link = document.createElement('a');

// Add class to a element
link.className = 'delete-item secondary-content';

// Add icon html to a element, use this to parse HTML
// link.innerHTML = '<i class="fa fa-remove"></i>';

// OR
const i = document.createElement('i');
i.className = 'fa fa-remove';
link.appendChild(i);


// Append link to li
li.appendChild(link);
/////////////////////////////////////////////////

// Append li as a child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);