// To test easyhttp.js library

const http = new easyHTTP();

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {

//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }

// });

// Get single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {

//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }

// });

// Create data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// POST request
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {

//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }

// });

// PUT request
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }

// });

// DELETE request
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, posts) {

    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }

});