
// Return HTML5Collection
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

/////////////////////////////////////////////////////
let lis = document.getElementsByTagName('li');

// // console.log(lis[0]);
// lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

lis[4].childNodes[0].nodeValue =`Hello`;

// // Notice to convert HTML collection to array
// lis = Array.from(lis);

// lis.reverse();

// // ForEach loop with 1st para: value, 2nd param: index
// //cars.forEach(function(car, index) {
// //    console.log(`${index} : ${car}`);
// //});


// lis.forEach(function(li, index){
//     //console.log(li);
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });

// console.log(lis);
////////////////////////////


// const items = document.querySelectorAll('ul.collection li.collection-item');

// // QuerySelector return a Node list, we don't need to convert to array
// items.forEach(function(item, index){
//     item.textContent = `${index} : Hello`;
// });

// // Odd elements
// const liOdd = document.querySelectorAll('li.collection-item:nth-child(odd)');

// liOdd.forEach(function(item, index){
//     item.style.background = '#ccc';
// });

// // Evem elements
// const liEven = document.querySelectorAll('li.collection-item:nth-child(even)');

// for(let i = 0; i< liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);