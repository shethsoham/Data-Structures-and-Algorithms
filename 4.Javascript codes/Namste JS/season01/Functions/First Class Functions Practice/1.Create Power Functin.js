/*

1. Create a Power Function Generator
Write a function powerFunction(exponent) that returns another function. 
The returned function should take a number as input and raise it to the power of exponent.
*/

function powerFunction(exponent){
    return function(base){
        return Math.pow(base,exponent)
    }
}


const square = powerFunction(2);
const cube = powerFunction(3);

console.log(square(5)); // Output: 25
console.log(cube(2));   // Output: 8
