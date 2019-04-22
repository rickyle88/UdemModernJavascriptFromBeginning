// Object.prototype

// Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);

    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return ageDate.getUTCFullYear() - 1970;
    // }

}

// Move function (Calculate age) to Prototype
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return ageDate.getUTCFullYear() - 1970;
}

// Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}


const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());

// True
console.log(mary.hasOwnProperty('firstName'));
// False
console.log(mary.hasOwnProperty('getFullName'));