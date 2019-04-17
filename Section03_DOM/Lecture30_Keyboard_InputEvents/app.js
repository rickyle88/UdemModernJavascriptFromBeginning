const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

const select = document.querySelector('select');

// To clear input box (before or after submitting)
taskInput.value = '';

// // Add event on the form when click Submit button
// form.addEventListener('submit', runEvent);

// keydown
// taskInput.addEventListener('keydown', runEvent);

// keyup
// taskInput.addEventListener('keyup', runEvent);

// // keypress
taskInput.addEventListener('keypress', runEvent);

// Focus (when we click inside input box)
// taskInput.addEventListener('focus', runEvent);

// Blur (when we click outside input box)
// taskInput.addEventListener('blur', runEvent);

// Cut text 
// taskInput.addEventListener('cut', runEvent);

// // Paste text 
// taskInput.addEventListener('paste', runEvent);

// Input: anything we do will fire up this event
// taskInput.addEventListener('input', runEvent);

// Change event
// select.addEventListener('change', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    // To log everything we type
    console.log(e.target.value);

    // To log everything in h5 element
    // Like data binding in Angular
    heading.innerText = e.target.value;

    // // Get input value
    // console.log(taskInput.value)

    // e.preventDefault();
}