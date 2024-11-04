// Constuctor Function

// Class keyword - this is the other way inw hich you can creae a object

// Trying to create my own class and object 



/*
1. Employee Class
Create a class called Employee with the following requirements:

Properties: name, position, salary.
Methods:
getDetails(): Returns a string with the employee’s name and position.
annualSalary(): Returns the employee’s salary multiplied by 12.
*/

class Employee{
    // Constructor method intializes the property of employee class
    constructor(name,position,salary){
        this.name = name  // 'this.name' is set to the `name` parameter
        this.position = position // `this.position` is set to the `position' parameter
        this.salary = salary // `this.salary` is set to the 'salary' parameter
    }
    getDetails(){// created a method name getDetails
        return `${this.name} his position is ${this.position}` // returns a statement used template literals
    }
    annualSalary(){
        return `Annual salary of the employee is ${this.salary * 12}`
    }
}

const employee_one = new Employee("Soham", "Software engineer", 750000); 
console.log(employee_one.getDetails())
console.log(employee_one.annualSalary())



const employee_two = new Employee("Sammy", "Environmental Scientist", 800000)
console.log(employee_two.getDetails())
console.log(employee_two.annualSalary())

/*
const emp1 = new Employee("John Doe", "Software Engineer", 5000);
console.log(emp1.getDetails());      // Output: John Doe works as a Software Engineer.
console.log(emp1.annualSalary());    // Output: 60000
*/

/*
2. Circle Class
Write a Circle class with the following:

Properties: radius.
Methods:
getArea(): Returns the area of the circle (use the formula π * radius^2).
getCircumference(): Returns the circumference of the circle (use the formula 2 * π * radius).
Use Math.PI for the value of π.

*/

class Circle{

    constructor(radius){
        this.radius = radius // setting radius of this instance
    }
    getArea(){
        return Math.PI*this.radius**2
    }
    getCircumference(){
        return 2*Math.PI*this.radius
    }

}

let circle = new Circle(5);
console.log(circle.getArea());
console.log(circle.getCircumference());


/*
3. BankAccount Class
Design a BankAccount class with the following:

Properties: accountHolder, balance.
Methods:
deposit(amount): Adds amount to the balance and returns the updated balance.
withdraw(amount): Subtracts amount from the balance if there are sufficient funds; otherwise, returns "Insufficient funds".
*/


class BankAccount{
    constructor(accountHolder,balance){
        this.accountHolder1 = accountHolder;
        this.balance1 = balance;
    }
    
    deposit(amount){
        return amount+ this.balance1;
    }
    withdraw(amount){
        if(amount <= this.balance1){
            return this.balance1 - amount;
        }
        else{
            return "Insufficient Funds"
        }
    }
}
const bankAccount = new BankAccount("Rohan",5000)
console.log(bankAccount.deposit(200))
console.log(bankAccount.withdraw(5100))

const students = new Student("soham", [2000,3000])
console.log(students.getAverage())
/*
4. Student Class with Grade Calculation
Create a Student class with the following:

Properties: name, marks (an array of numbers).
Methods:
getAverage(): Calculates and returns the average of the marks.
getGrade(): Returns the grade based on the average:
Average >= 90: "A"
Average >= 80 and < 90: "B"
Average >= 70 and < 80: "C"
Average < 70: "D"
*/

class Student{
    constructor(name,marks){
        this.name = name
        this.marks = marks
    }
    getAverage(){
        const total = this.marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const avg = total/this.marks.length
    }
    getGrade(){
        const {total,average} = this.getAverage();
        if(average>=90) return "A";
        else if (average >=80 && average <=90 ) return "B";
        else if (average >=70 && average < 80) return "C";
        else return "D"
    }

}

const student = new Student("Rohan",[60,70,80,70,50]);

