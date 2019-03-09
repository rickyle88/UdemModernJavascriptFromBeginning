const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = "hello there my name is Brad";
const tags = "ab,ds,ew";

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Appending
val = 'Brad ';
val += 'Traversy';

val = 'Hello , my name is ' + firstName + ' and I am ' + age;

//Escaping
val = "That 's awesome, I can't wait";
val = 'That \'s awesome, I can\'t wait';

//Length
val = firstName.length;

//concat()
val = firstName.concat(' ',lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase();

val = firstName[0];

//indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt()
val = firstName.charAt('0');
val = firstName.charAt(0);

//Get last char
val = firstName.charAt(firstName.length-1);

//substring
val = firstName.substring(0,4);

//slice()
val = firstName.slice(0,4);
//Start from the end and take 3 char
val = firstName.slice(-3);

//split() : string to array
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('Brad','Jack');

//includes()
//return true or false
val = str.includes('hello');
val = str.includes('fd');

console.log(val);