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

val = person;

//Get specific value
val = person.firstName;

val = person['lastName'];

val = person.age;

val = person.hobbies[1];

val = person.address['state'];
val = person.address.state;

val = person.getBirthYear();

console.log(val);

//Create new array that holds multiple object
const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23}
];

for(let i = 0; i < people.length; i ++){
    console.log(people[i].name);
}