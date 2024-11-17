/*
Javascript Practice Excercises

Write a JS program to check two numbers and return true if one of the number is 100 or if the sum of the two number is 100

*/ 


function checkNumbers(a,b){
    if (a === 100 || b === 100 || (a+b) === 100){
        return true
    }
    else{
        return false
    }
}

console.log("1",checkNumbers(100,0))
console.log("2",checkNumbers(0,100))
console.log("3",checkNumbers(50,50))
console.log("4",checkNumbers(80,30))

//using arrow function 

isEqualto100 = (a,b)=>  a ===100 || b === 100 || a+b === 100;

console.log("a ",isEqualto100(100,0))
console.log("b",isEqualto100(100,0))
console.log("c",isEqualto100(30,40))



// Problem 2 
// Write a JS program to get the extension of a filename.

const getFileExtension = (str) => stre.slice(str.lastIndexOf)