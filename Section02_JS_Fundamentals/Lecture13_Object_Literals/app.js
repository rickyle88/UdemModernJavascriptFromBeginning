const person = {
    firstName : 'Steve',
    lastName : 'Smith',
    age: 30,
    email: 'steve@alo.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2017 - this.age;
    }


}

let val;

// val = person;

//Get specific value
val = person.firstName;     //Steve

val = person['lastName'];   //Smith

val = person.age;

val = person.hobbies[1];    //Array: => sports

val = person.address['city'];  //Miami
val = person.address.state;     //FL

// Function
val = person.getBirthYear();    //2017-30 = 1987

console.log(val);

//Create new array that holds multiple object
const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i ++){
    console.log(people[i].name);
}