// functions advanced 
// Global scope and functions : can see anywherre in whole code

myGlobal = 4;
error_variable = 2;
console.log(error_variable)
function fun1(){
    var myLocal = 3;
    oopsGlobal = 4 // as we didn't put var variable here we can access it anywhere it becomes a global variable
    console.log(myLocal)// can access outside the function 
}
fun1()
console.log(fun1.myLocal)// can't access outrside the function
console.log("Decalred inside function still global", oopsGlobal)
console.log(typeof myGlobal)
//------------------------------------------------------------------------------------------------
// Local scope and functions
/* local scope are only accesed insdie a function only */
console.log("_____Local scope and functions______")
function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();

//Global vs Local scope in Functions

// It is possible that you take local and global variables by same name
// when you do this local variable takes precedent(lead) over global variable


var outerwear = "Tshirt"

function myOutfit(){
    

    return outerwear;
}

console.log("it was declared outside golabl by still it got accessed", myOutfit())
//here we can see though the variable was declared outside globbaly it was accesed inside the 
// function and returned the output

var outerwear1 = "Tshirt"

function myOutfit1(){
    var outerwear1 = "sweater"

    return outerwear1;
}

console.log("Variables were of same name , local variable has a advantage over gloabl variable", myOutfit1())

console.log("here we see that it printing the output from global variable instead of local variable",outerwear1)

//----------------------------------------------------------

