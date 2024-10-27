// Arrow Functions

// Concise Anonnymous Function

// Whenever you have anonymous fucntion you can convert 
// that into a arrow function
// quicker to write

/*
var magic = function(){
    return new Date();
}
*/

var magic = () => {
    return new Date();
}

// we can shorten it more 
// if we dont need the return keyword
// or if we don't need braxkets

const magic1 = () => new Date();

// writing arrow functions with parameteres

var myConcat = function(arr1, arr2){
    return arr1.concat(arr2);
}
console.log(myConcat([1,2],[3,4,5]));

const myConcat1 = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat1([1,2],[3,4,5]));


// practicing writing arrow functions without parameters on my own 


var yourName = function() {
    return "John";
}

console.log(yourName())

//arrow function
var yourName1 = () => "John"
console.log(yourName1())

// arrow function with parameteres

const addition = function(add1, add2){
    return add1+add2
}

console.log(addition(5,6))

const addition1 = (add1,add2) =>  add1+add2
console.log(addition1(5,6))