document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Fetch API return: get local text file data 
function getText() {
    fetch('test.txt')
        .then(function (res) {

            // Check response in Chrome's console
            // Because res.text() is a Promise
            // We need to add a return
            // console.log(res.text());
            return res.text();
        })
        .then(function (data) {
            console.log("This is data");
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (err) {
            console.log("Error occured");
            console.log(err);
        })
        ;
}

// Fetch API: get local JSON data
function getJson() {
    fetch('posts.json')
        .then(function (res) {

            // Check response in Chrome's console
            // Because res.json() is a Promise
            // We need to add a return
            // console.log(res.json());
            return res.json();
        })
        .then(function (data) {
            console.log("This is data");
            console.log(data);

            // Output to HTML
            let output = '';

            // why are we not doing JSON.parse(data)
            // What I accidentally discovered is that the .json() method actually parses the data already. So essentially it's a .text() with a JSON.parse() built-in.

            // You can test this by returning res.text() on the JSON file, and then parsing that data in the next .then(). It works the same way, but is obviously more code.


            data.forEach(function (post) {
                output += `<li>${post.title}</li>`;
            });

            // Add result to div in HTML
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log("Error occured");
            console.log(err);
        })
        ;
}

// Fetch API: get from external API
function getExternal() {
    fetch('https://api.github.com/users')
        .then(function (res) {

            // Check response in Chrome's console
            // Because res.text() is a Promise
            // We need to add a return
            // console.log(res.text());
            return res.json();
        })
        .then(function (data) {
            console.log("This is data");
            console.log(data);

            // Output to HTML
            let output = '';
            data.forEach(function (user) {
                output += `<li>${user.login}</li>`;
            });

            // Add result to div in HTML
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log("Error occured");
            console.log(err);
        })
        ;
}