// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log('Hello World');
    
//     // Stop default behavior - redirect to another page because this is a tag
//     e.preventDefault();
// });



document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    // console.log('Click');

    let val;

    // Most important is e.target => represent the element that event actually happen on
    val = e;

    // Event target element
    // Please click on the button first and see element in the console
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // Change text of a tag
    // e.target.innerText = 'Hello';

    // Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coordinate event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coordinate event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    
    
    console.log(val);
}