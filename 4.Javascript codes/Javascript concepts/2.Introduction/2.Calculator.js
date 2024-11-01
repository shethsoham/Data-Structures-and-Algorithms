const prompt = require('prompt-sync')();
var x;
 var y;

function add(x,y){
    let addition = x +y
    return addition
}

console.log(add(5,3))

function subtraction(x,y){
    let subs = x-y
    return subs
}

console.log(subtraction(8,5))

function main(){
    console.log("Hello my name is Soham")
}
main()

var a = prompt("Enter the value of a")
var b = prompt("Enter the value of b")

var  solution = a -b
console.log(solution)


var floating_number = 3.4
console.log(typeof floating_number)