// To test easyhttp.js library

const http = new EasyHTTP();

// Get Users

/*
const users = http.get('https://jsonplaceholder.typicode.com/users');

console.log(users);

=> Return Promise object, but we want to return data inside

*/

http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));



// Create user's data
const data = {
    name: 'John',
    username: 'johndoe',
    email: 'johndoe@gmail.com'
}

// Create POST request
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));



// // 
// console.log("PUT request");

// Create PUT request
http.put('https://jsonplaceholder.typicode.com/users/5', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Create DELETE request
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));
  


