/*
Find the largest amogst 3 numbers in JS
*/
const prompt = require('prompt-sync')();

let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
let c = prompt("Enter the third number");


if (a === b && a ===c ){
    console.log("3 values are equal")
}
else if (a>b && a>c){

    console.log(`Value of a ${a} is greatest`);
}

else if (b>=a && b>=c){
    console.log(`Value of b ${b} is greatest`) ;  
}

else{
    console.log(`Value of C ${c} is greatest`)
}