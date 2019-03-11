let val;

//Instantiate new object
const today = new Date();

let birthday = new Date('9-10-2918 11:25');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');


val = today;

val = today.getMonth();         //January : 0
val = today.getDay();           //Sunday: 0, Monday: 1...
val = today.getFullYear();      //
val = today.getHours();         //
val = today.getMinutes();
val = today.getSeconds();       //
val = today.getMilliseconds();  //
val = today.getTime();          //Timestamp - Unix timestamp

birthday.setMonth(2);           //March: 2, ...
birthday.setDate(12);           //March 12th
birthday.setFullYear(1985);     
birthday.setHours(3);
birthday.setMinutes(39);
birthday.setSeconds(25);    


console.log(val);
console.log(typeof val);

console.log("---");
console.log(birthday);