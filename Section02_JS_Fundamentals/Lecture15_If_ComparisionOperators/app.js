const id = 100;


//Equal To. Compare value only amd automatic type conversion
if(id == 101){
    console.log('Correct');
} else{
    console.log('Incorrect');
}

// Not equal to
if(id != 100){
    console.log('Correct');
} else{
    console.log('Incorrect');
}

//Equal To: Value and Type
if(id === 101){
    console.log('Correct');
} else{
    console.log('Incorrect');
}


//Equal To: Value and Type
if(id !== 100){
    console.log('Correct');
} else{
    console.log('Incorrect');
}


////////////////
// To test something is undefined
if(typeof id != undefined){
    console.log(`The ID is ${id}`);
}else{
    console.log('No ID');
}


// GREATER OR LESS THAN
// >= <=
const color = 'yellow';

if(color === 'red'){
    console.log('Color is red');
}else if( color === 'blue'){
    console.log('Color is blue');
}else{
    console.log('Color is not red or blue');
}

// LOGICAL OPERATORS
const name = 'Steve';
const age = 20;

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
}else if(age >= 15 && age <= 19){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is an adult`);
}

// OR &&
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
}else {
    console.log(`${name} is registered for the race`);
}

// Shorthands
// TENARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

