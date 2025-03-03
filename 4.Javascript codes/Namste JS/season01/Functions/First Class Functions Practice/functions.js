// 1. Function Statement aka function declaration

function a(){
    console.log("a called")
}
a() // function invoked

// 2.Function Expression 

var b = function(){
    console.log("b called")
}

b() // function invoked


// Difference between function statement and function expression is
// hoisting

// 3.Function declaration 
// 4. Anonymous function - no name

// function (){
//    console.log("d called")
// } ---> syantax error 

// 5. Function expression - named function expression


var e = function xyz(){
    console.log("e called")
}
// You cannot call the it by xyz()

// so you it b using 
e()
//xyz()// ERROR

var f = function (param1, param2){
    console.log("f called ",param1, "Hello", param2)
}

f("soham", "sheth")
f(1,2)


// You can pass function inside function as arguments

// First class functions - the abilty tp used functions as value is known as first class functions

/**
 1. You can pass function as argument
 2. You can return function from function 
 */

 var m = function(param1){
    return function(){
        console.log("returned function")
    }
 }

 m()()