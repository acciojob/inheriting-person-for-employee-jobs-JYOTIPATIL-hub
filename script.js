// complete this js code
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the parent class constructor
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Example usage:
const alice = new Person("Alice", 25);
alice.greet(); // Expected output: "Hello, my name is Alice, I am 25 years old."

const bob = new Employee("Bob", 30, "Manager");
bob.jobGreet(); // Expected output: "Hello, my name is Bob, I am 30 years old, and my job title is Manager."



