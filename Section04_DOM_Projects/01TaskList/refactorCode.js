// In fact I've just noticed we are repeating ourselves with creating a li  and delete link twice. Once in addTask and once in getTasks so that could be put in a separate function too.
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

document.addEventListener('DOMContentLoaded', getTasks)
form.addEventListener('submit', addTask)
taskList.addEventListener('click', removeTask)
clearBtn.addEventListener('click', clearTasks)
filter.addEventListener('keyup', filterTasks)

function tasks() {
    return localStorage.getItem('tasks') === null ? [] : JSON.parse(localStorage.getItem('tasks'))
}

function getTasks() {
    tasks().forEach(task => paintTask(task, false))
}

function paintTask(task, newTask = true) {
    const li = document.createElement('li')
    li.className = 'collection-item'
    li.innerHTML = task
    const link = document.createElement('a')
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.append(link)
    newTask ? taskList.prepend(li) : taskList.append(li)
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('add a task')
    } else {
        paintTask(taskInput.value)
        localStorage.setItem('tasks', JSON.stringify([taskInput.value, ...tasks()]))
        taskInput.value = ''
        e.preventDefault()
    }
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure?')) {
            const elementToRemove = e.target.parentElement.parentElement
            localStorage.setItem(
                'tasks',
                JSON.stringify(tasks().filter(task => task !== elementToRemove.textContent))
            )
            elementToRemove.remove()
        }
    }
}

function clearTasks() {
    taskList.innerHTML = ''
    localStorage.clear()
}

function filterTasks(e) {
    document.querySelectorAll('.collection-item').forEach(task => {
        if (task.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}