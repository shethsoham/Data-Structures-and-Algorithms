// CALL, APPLY, BIND

let name ={
    firstName: "Soham",
    lastName: "Sheth",
    printFullName: function(){
        console.log(this.firstName +" "+ this.lastName);//over here the this refers to the object(name in this case)
    }
}
name.printFullName();

let name2 ={
    firstName :"Sachin",
    lastName :"Tendulkar"
}

//function borrowing

name.printFullName.call