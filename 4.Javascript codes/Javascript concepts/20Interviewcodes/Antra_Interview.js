/*
const prompt = require('prompt-sync')();
process.stdout.write("* ");
*/

/*

//create a function take a string as input and return a double string.
//example:
//input: 'abc'
//ouput: 'aabbcc'

function foo(input) {
 // implement the logic below
}

// test case
console.log(foo('abc')); // should output 'aabbcc' in the console
console.log(foo('a12f')); // should output 'aa1122ff' in the console
*/

// Brute Force 

function foo(input){
    let result = ""
    for(let char of input){
        result = result + char + char // adding twice
    }

    return result
}

console.log(foo('abc')); // should output 'aabbcc' in the console
console.log(foo('a12f')); // should output 'aa1122ff' in the console
// Time complexity 0(n)

// Optimized solution 




