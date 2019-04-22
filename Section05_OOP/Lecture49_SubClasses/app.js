class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

// Subclass
class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        // Call Person's constructor
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    get name() {
        // Validation can happen on data
        return this.firstName;
    }
    set name(val) {
        // Validation can happen on data
        this.firstName = val;
    }

    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555-5555');

console.log(john.name);
console.log(john.greeting());

// Call static method from Customer class
console.log(Customer.getMembershipCost());