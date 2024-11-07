// Define the Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to print a greeting message
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Define the Employee class that inherits from Person
class Employee extends Person {
    constructor(name, age, jobTitle) {
        // Call the parent class constructor
        super(name, age);
        this.jobTitle = jobTitle;
    }

    // Method to print a greeting message with job title
    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Example Test Cases

// Test case 1: Testing the Person class
const person = new Person("Alice", 25);
person.greet(); // Expected output: "Hello, my name is Alice, I am 25 years old."

// Test case 2: Testing the Employee class
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet(); // Expected output: "Hello, my name is Bob, I am 30 years old, and my job title is Manager."
