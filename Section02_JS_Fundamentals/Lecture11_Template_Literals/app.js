const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

//Without template strings (es5)
//This is the old way
html = '<ul>' +
            '<li>Name: '+ name+'</li>' +
            '<li>Age: '+ age+'</li>' +
            '<li>Job: '+ job+'</li>' +
            '<li>City: '+ city+'</li>' +
        '</ul>';

function hello(){
    return 'hello';
}

//With template strings (es6)
html = `
<ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Math: ${2+2}</li>
        <li>Function: ${hello()}</li>
        <li>If condition: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
`;

document.body.innerHTML = html;
//We going to have a ul list


