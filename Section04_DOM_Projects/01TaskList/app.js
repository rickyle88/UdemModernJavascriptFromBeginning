// Define UI vars

// Form
const form = document.querySelector('#task-form');

// Task Input in Form
const taskInput = document.querySelector('#task');



// FilterInput
const filterInput = document.querySelector('#filter');

// UL that returns results after filtering
const taskListUL = document.querySelector('.collection');
// ul need to have .collection class
// li  need to has .collection-item class and delete icon needs to have class .delete-item and .secondary-content

// Button to clear result list
const clearBtn = document.querySelector('.clear-tasks');

////////////////////////////////////////////////////
// Load all event listener
loadEventListeners();

// Load all event listener
function loadEventListeners() {

    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event in UL
    taskListUL.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTask);
    // Filter task event
    filterInput.addEventListener('keyup', filterTask);
}
//////////////////////////////////////////////////////////////////
// Get tasks
function getTasks() {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // Loop thru tasks array
    tasks.forEach(function (task) {
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Add text node and append to li
        li.appendChild(document.createTextNode(task));

        // Create new a element
        const link = document.createElement('a');
        // Add class to link
        link.className = 'delete-item secondary-content';

        // Add icon <i> to link
        link.innerHTML = '<i class="fa fa-remove"></i>';

        // Append link to li
        li.appendChild(link);

        // Append li to ul
        taskListUL.appendChild(li);

    });

    console.log(tasks);

}

//////////////////////////////////////////////////////////////////
// Add Task when submit form 
function addTask(e) {

    // If input is blank, alert user
    if (taskInput.value === '') {
        alert('Please add a task');
    }

    //     <li class="collection-item">
    //          List Item
    //          <a href="#" class="delete-item secondary-content">
    //              <i class="fa fa-remove"></i>
    //           </a>
    //   </li>

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Add text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new a element
    const link = document.createElement('a');
    // Add class to link
    link.className = 'delete-item secondary-content';

    // Add icon <i> to link
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append link to li
    li.appendChild(link);

    // Append li to ul
    taskListUL.appendChild(li);

    // Store text from input box into localStorage
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';

    // console.log(li);

    e.preventDefault();
}

//////////////////////////////////////////////////////////////////
// Store task
function storeTaskInLocalStorage(task) {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    // Set value to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}



//////////////////////////////////////////////////////////////////
//     <li class="collection-item">
//          List Item
//          <a href="#" class="delete-item secondary-content">
//              <i class="fa fa-remove"></i>
//           </a>
//   </li>
// Remove task
// When we click on x icon, it showing <i> element, so we need to go up to get <a> element 
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        // console.log(e.target);
        // Add confirm 
        if (confirm('Are you sure? ')) {


            //             Array.prototype.slice.call(arguments) is the old-fashioned way to convert an arguments into an array.

            // In ECMAScript 2015, you can use Array.from or the spread operator:

            // let args = Array.from(arguments);

            // let args = [...arguments];


            const index = Array.prototype.slice.call(e.target.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement);

            // Remove from UL
            e.target.parentElement.parentElement.remove();

            // Remove from local Storage also
            removeFromLocalStorage(e.target.parentElement.parentElement, index);

            
        }
    }

}

function removeFromLocalStorage(taskItem, i) {
    // li element
    // console.log(taskItem);
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task && i === index) {
            // Remove element
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//////////////////////////////////////////////////////////////////
//     <li class="collection-item">
//          List Item
//          <a href="#" class="delete-item secondary-content">
//              <i class="fa fa-remove"></i>
//           </a>
//   </li>
// Clear task - remove UL list
function clearTask(e) {
    // Way 1
    // taskListUL.innerHTML = '';

    // Way 2: removeChild vs innerHTML => remove from the DOM
    while (taskListUL.firstChild) {
        taskListUL.removeChild(taskListUL.firstChild);
    }

    // Clear from local storage
    clearFromLocalStorage();
}

// Clear tasks from local storage
function clearFromLocalStorage() {
    // Clear `tasks` key from local storage intead of delete all 
    localStorage.removeItem('tasks')
    // localStorage.clear();
}
//////////////////////////////////////////////////////////////////
// Filter task
function filterTask(e) {
    // Get text from Filter input
    const textFilter = e.target.value.toLowerCase();

    // Loop thru all li elements
    document.querySelectorAll('.collection-item').forEach(function (task) {

        // firstChild is the text node containing our task names
        const item = task.firstChild.textContent;

        if (item.toLowerCase().includes(textFilter)) {
            // if(item.toLowerCase().indexOf(textFilter) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

    console.log(textFilter);
}