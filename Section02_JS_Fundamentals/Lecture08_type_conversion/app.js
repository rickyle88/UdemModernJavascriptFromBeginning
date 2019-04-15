let val;

//Number to string
val = String(555);
val = String(4+4);  //"8"

//Bool to String
val = String(true);

//Date to String
val = String(new Date());

//Array to string:1,2,3,4
val = String([1,2,3,4]);

//toString()
val = (5).toString();
val = (true).toString();

//String to number
val = Number('5');

//val = Number('hello');    =>//NAN: no a number
val = parseInt('110.30');   //=> 100
val = parseFloat('110.30');   //=> 100.30


//Output
console.log(val);
console.log(typeof val);
//console.log(val.length)
console.log(val.toFixed(2));    //result with 2 decimal

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log("Sum " + sum);
console.log("Data type " + typeof sum);