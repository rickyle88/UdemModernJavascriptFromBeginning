// const brad = {
//     name: 'Brad',
//     age: 30
// }

// console.log(brad);
// console.log(brad.age);

// this keyword: refer to current instance of the object

// Personal constructor
function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);

    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return ageDate.getUTCFullYear() - 1970 ;
        }

    // this.age = age;

    // this keyword: refer to current instance of the object
    // console.log(this);
    // Return: Person {name: 'Brad'}
    // Return: Person {name: 'John'}
}

// console.log(this) ==> return window object

// To instantiate new object, use new keyword
const brad = new Person('Brad', '9-10-1981');



console.log(brad.calculateAge());