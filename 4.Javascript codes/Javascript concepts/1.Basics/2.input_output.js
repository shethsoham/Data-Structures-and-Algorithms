//npm install prompt-sync : add comment in terminal first

/*
multiple
line comments
*/


const prompt = require('prompt-sync')();

const named = prompt("What is your name? ");
console.log("My fist name is",named);



function myName(sur_name){
    console.log("Hello", named ,sur_name);
}

myName("sheth")