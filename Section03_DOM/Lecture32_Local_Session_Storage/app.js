// // Open Chrome dev tools => Console
// // Type 'window', press Enter
// // Point to localStorage

// // Set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// // Open Chrome dev tools => Console
// // Open 'Application' tab , => Storage => Local Storage => key, value - name, John

// // Set session storage item (if we close window, will be deleted)
// sessionStorage.setItem('name', 'Beth');


// // ////////////////////////////////////////////////
// // Remove from storage
// // localStorage.removeItem('name');

// // Clear storage
// localStorage.clear();

// // Get from storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');


// console.log(`From Local Storage: name - ${name} and age - ${age}`);

// ////////////////////////////////////////////

document.querySelector('form').addEventListener('submit', function(e){

    // Get value from input box
    const task = document.getElementById('task').value;

    // Create new array to hold
    let tasks;

    // Condition: 
    // Check localStorage, if that key 'tasks' not initialzed (===Null), initialize array to hold value

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // Always Insert element to array whene Submit button is clicked
    // We have some data and want to add to tasks ARRAY
    tasks.push(task);

    // 3) Convert from JS object - > JSON string
    localStorage.setItem('tasks', JSON.stringify(tasks));

    console.log('Co don');

    // 
    e.preventDefault();
});



// Loop thru task array
// const tasks = localStorage.getItem('tasks');
const tasks = JSON.parse( localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});