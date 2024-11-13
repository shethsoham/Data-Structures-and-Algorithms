/*
Javascript Practice Excercises

Write a JS program to check two numbers and return true if one of the number is 100 or if the sum of the two number is 100

*/ 


function checkNumbers(a,b){
    if (a === 100 || b === 100 || (a+b) === 100){
        return true
    }
}

checkNumbers(100,0)