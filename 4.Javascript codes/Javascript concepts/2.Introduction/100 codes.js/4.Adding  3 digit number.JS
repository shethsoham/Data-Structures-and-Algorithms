/*
Taking input from user digit of the number entered by the user
*/
const prompt = require('prompt-sync')();
let user_number = parseInt(prompt("Enter the 3 digit number you want"));

let sum = 0;
// Loop through each digit

while(user_number>0){
    let digit = user_number % 10 //get the last digit
    sum += digit;
    user_number = Math.floor(user_number/10);
}

console.log(sum)

a = user_number % 10;
user_number = Math.floor(user_number/10);

b = user_number % 10;
user_number = Math.floor(user_number/10);

c = user_number % 10;
user_number = Math.floor(user_number/10)

console.log("Addition of all 3 numbers is",a+b+c)

//--------------------------------------------------------------------------------------------------------
// for converting the number to string is 
let str = "555"
let num = Number(str)
console.log(num)

let number = 444
let string = String(number)
console.log(string)