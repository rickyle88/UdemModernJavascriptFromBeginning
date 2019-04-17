const clearBtn = document.querySelector('.clear-tasks');

const card = document.querySelector('.card');

const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// // Double Click
// clearBtn.addEventListener('dblclick', runEvent);
// // Mouse down (click and hold)
// clearBtn.addEventListener('mousedown', runEvent);
// // Mouse up (click and hold)
// clearBtn.addEventListener('mouseup', runEvent);
// // Mouse enter
// clearBtn.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseenter', runEvent);
// // Mouse leave
// clearBtn.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseleave', runEvent);
// // Mouse over
// clearBtn.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseover', runEvent);
// // Mouse out
// clearBtn.addEventListener('mouseout', runEvent);
// card.addEventListener('mouseout', runEvent);


// MOUSE MOVE
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    // heading.textContent = `Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`;
    heading.childNodes[0].nodeValue = `Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`;

    // Auto change backgound color
    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}