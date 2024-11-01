// Check if the number is even or odd
const prompt = require('prompt-sync')();
let user_input = Number(prompt(("Enter the number")));


if (user_input % 2 == 0) {
    console.log("Even number")
}

else{
    console.log("Odd number")
}