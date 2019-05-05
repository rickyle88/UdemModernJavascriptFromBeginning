
// // async return a Promise
// async function myFunc(){
//     // return 'Hello';

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const err = false;

//     if(!err){
//         const res = await promise; // Wait until promise is resolved
//         return res;
//     }else{
//         await Promise.reject(new Error('Something went wrong'));
//     }   
// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));



// console.log(myFunc());

/////////////////////
async function getUsers(){
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceed once its resolve
    const data = await response.json();

    // onply proceed once 2nd promise is resolved
    return data;
}

getUsers()
    .then(users => console.log(users));