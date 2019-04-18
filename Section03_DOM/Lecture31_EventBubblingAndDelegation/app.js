// // EVENT BUBBLING

// // In Card content, we select card title
// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// // .card-content is parent of .card-title
// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// // .card is parent of .card-content
// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// // .col is parent of .card
// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });

// // When we click on .card-title, all these events are fire off


// EVENT DELEGATION: put event on parent and going down

//WHY do we need to use Event Delegation when dynamically inserting something into the DOM?

//Instead of adding click event handlers to every button (like a delete button for a to do item), you add just a single event handler to it's parent. The idea being that you conserve memory since each event handler will take up memory. It's probably not noticeable with a handful of DOM items but it could make a difference if there were a quite a few.

/* <a href="#" class="delete-item secondary-content">
        <i class="fa fa-remove"></i>
    </a> 
*/

// That's only work on first item
const delItemULList = document.querySelector('.collection ');

delItemULList.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    // console.log(e.target);

    // But it showing <i> element , not <a> element

    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete item');
    // }

    if(e.target.parentElement.classList.contains('delete-item'))
    {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}

