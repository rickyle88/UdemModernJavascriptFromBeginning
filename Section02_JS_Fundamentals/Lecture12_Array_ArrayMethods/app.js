//Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22,'Hello', true, undefined, null, {a:1, b:1}, new Date()];
let val;

// This way will change original array
// let newNumbers = numbers;

// This way WILL NOT change original array
let newNumbers = numbers.slice().sort(compare2);

// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative a is sorted before b.

// If the result is positive b is sorted before a.

// If the result is 0 no changes is done with the sort order of the two values.

// Example:

// The compare function compares all the values in the array, two values at the time (a, b).

// When comparing 40 and 100, the sort() method calls the compare function(40, 100).

// The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

// You can use this code snippet to experiment with numerically and alphabetically sorting:

//
function compare1(a, b){
    let comparison = 0;
    
    if (a > b) {
      comparison = 1;
    } else if (b > a) {
      comparison = -1;
    }
    
    return comparison;
   }
    
function compare2(a, b){
    return a - b;
   }

console.log("Old array: ");
console.log(numbers);
console.log("New array: ");
console.log(newNumbers);
//console.log(val);

///////////////////////////////////
const bands = [ 
    { genre: 'Rap', band: 'Migos', albums: 2},
    { genre: 'Pop', band: 'Coldplay', albums: 4},
    { genre: 'Rock', band: 'Breaking Benjamins', albums: 1}
   ];

console.log(bands[0].genre);

function compare3(a, b) {
    // Dùng toUpperCase() để không phân biệt ký tự hoa thường
    const genreA = a.genre.toUpperCase();
    const genreB = b.genre.toUpperCase();
    
    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
}

//Để đảo ngược thứ tự sắp xếp, bạn chỉ việc đảo ngược giá trị trả lại từ hàm so sánh:
// function compare(a, b) {
//     ...
    
//     //nghịch đảo giá trị trả lại bằng cách nhân với -1
//     return comparison * -1; 
//    }

let newBandsArr = bands.slice().sort(compare3);

/* returns [ 
{ genre: 'Pop', band: 'Coldplay', albums: 4 }, 
{ genre: 'Rap', band: 'Migos', albums: 2 }, 
{ genre: 'Rock', band: 'Breaking Benjamins', albums: 1 } 
] */

//Tạo hàm sắp xếp dynamic
//Cuối cùng, chúng ta hãy cùng tạo hàm so sánh “động”, mà bạn có thể sử dụng để sắp xếp array objects, giá trị của những object này có thể là chuỗi hoặc số. Hàm này có hai tham số — key để sắp xếp theo đó, và thứ tự của kết quả (i.e. tăng dần hay giảm dần).

//The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
console.log(bands[0].hasOwnProperty('band'));

let anotherBands = bands.sort(compareValuesDynamic('band')); 
console.log(anotherBands);

function compareValuesDynamic(key, order = 'asc'){
    return function(a,b){
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)){
            return 0;
        }

        const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
    
        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }

        return (
            (order == 'desc') ? (comparison * -1) : comparison
        );

    };


}

// Ở đoạn code bên trên, method hasOwnProperty được sử dụng để kiểm tra xem liệu tính chất định sẵn có được xác định trên object hay không, và có thừa hưởng qua chuỗi nguyên mẫu (prototype chain) hay không hàm này trả giá trị 0, khiến thứ tự sắp xếp giữ nguyên.

// Toán tử typeof cũng được sử dụng để kiểm tra kiểu dữ liệu của giá trịnh của tính chất. Như vậy, hàm có thể xác định cách sắp xếp array phù hợp. Ví dụ, nếu giá trị của tính chất định sẵn là một string, một method toUpperCase sẽ được sử dụng để chuyển đổi tất cả ký tự trong đó thành uppercase, vì vậy khi sắp xếp, các ký tự hoa thường được đánh giá không phân biệt.