const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;


//Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.8);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8,2);
val = Math.min(2,4,3,1);
val = Math.max(2,4,3,1);
val = Math.random();

//Random number between 0 and 19
val = Math.floor(Math.random() * 20 );

//Random number between 1 and 20
val = Math.floor(Math.random() * 20 + 1);

console.log(val);

