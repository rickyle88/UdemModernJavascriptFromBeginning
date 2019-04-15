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
// \ backslash
val = "That 's awesome, I can't wait";
val = 'That \'s awesome, I can\'t wait';

//Length
val = firstName.length;

//concat()
val = firstName.concat(' ',lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Taking 0 index of this string
val = firstName[0];

//indexOf()
// William
val = firstName.indexOf('l');       //2
val = firstName.lastIndexOf('l');   //3

//charAt()
val = firstName.charAt('0');        //W
val = firstName.charAt(0);          //W

//Get last char
val = firstName.charAt(firstName.length-1);

// William
//substring
val = firstName.substring(0,4);     //Will

// Mostly use with array
//slice()
val = firstName.slice(0,4);         //Will
//Start from the end and take last 3 char
val = firstName.slice(-3);          //iam

//split() : string to array base on seperator
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('Brad','Jack');

//includes()
//return true or false
val = str.includes('hello');
val = str.includes('fd');

console.log(val);