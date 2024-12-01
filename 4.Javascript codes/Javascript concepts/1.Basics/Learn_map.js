// What is map function in JS 
/*
The map() method in JavaScript is used to create a new array by applying 
a callback function to each element of an existing array. It does not mutate the original array.
*/

// Basic Syntax is 
array.map(callback(currentValue, index, array), thisArg);

/*
callback: The function to apply to each element. It takes:
currentValue: The current element being processed.
index (optional): The index of the current element.
array (optional): The array map() was called on.
thisArg (optional): Value to use as this when executing the callback.

*/

// 1. Double each element in array 

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2)

