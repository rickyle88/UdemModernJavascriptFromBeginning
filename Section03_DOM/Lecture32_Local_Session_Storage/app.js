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
document.querySelector('form').addEventListener('submit',function(e){
    // Get value of input box
    const task = document.getElementById('task').value;

    // Initalize new variable
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.preventDefault();
});