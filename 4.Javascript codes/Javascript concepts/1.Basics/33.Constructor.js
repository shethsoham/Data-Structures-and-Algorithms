//Classes and Objects

class RailwayForm{
    constructor(){
        let name;
        let age;
    }
    submit(){
        console.log("Form submitted")
    }
    cancel(){
        console.log("This form is submitted")
    }
}

let soham = new RailwayForm() // making instance of a class
let sammy = new RailwayForm() // making instance of a class

soham.submit()
soham.name() 

sammy.cancel()