class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    // Method that we added to class also get added to prototype
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return ageDate.getUTCFullYear() - 1970;
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    // Static method
    static addNumbers(x, y){
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams','11-13-1980');

console.log(mary.greeting());
console.log(mary.calculateAge());

mary.getsMarried('Thompson');


console.log(mary);

console.log(Person.addNumbers(1,2));