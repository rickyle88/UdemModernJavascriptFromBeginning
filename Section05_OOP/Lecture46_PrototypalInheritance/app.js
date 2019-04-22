// Person constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

// Get full name
Person.prototype.getFullName = function(){
    return `Full name ${this.firstName} ${this.lastName}`;
}




const person1 = new Person('John', 'Doe');

console.log(person1.greeting());
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Customer constructor
function Customer(firstName, lastName, phone, membership){
    // We are calling the Person function and setting this to point to new instance of the Customer object.     
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person's prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype.constructor return Customer(), not Person()
Customer.prototype.constructor = Customer;

// Create Customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

// Overwrite greeting function
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.getFullName());