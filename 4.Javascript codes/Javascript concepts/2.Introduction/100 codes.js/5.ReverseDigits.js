// reverse digits


// reversing a string

let user_string = "Soham Sheth";
let reversed_string  = '';


for (let i = user_string.length - 1; i >=0; i --){
    reversed_string = reversed_string + user_string[i]
}
console.log(reversed_string);


// another style

let originalString = "Hello world";
let reverseString = originalString.split('').reverse().join('');
console.log(reverseString)