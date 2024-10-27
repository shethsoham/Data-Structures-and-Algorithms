//setup

function testEqual(val){
    if(val == '10'){ //Loose equality
        return "Equal";
    }
    return "Not Equal";
}

// change this value to test
console.log(testEqual(10));

//Strict Equality operator === 
// Does not do the type coerision 
/*
3=='3' true
3==='3' false
*/

function testEqual1(val){
    if(val === '10'){ //Strict equality
        return "Equal";
    }
    return "Not Equal";
}

// change this value to test
console.log(testEqual1(10));

// != (loose equality) (Not equal) !== STrict equality (Not equal)
// >= greater than equal to
// > greater than
// < less than
// <= less than equal to

// Comparison with the Logical and Operators
// Logical AND (&&)
// Logical OR  (||)





// Else statement

/*
if (){

}else {

}

*/

// else-if statement 
/*
if(){

}
else if(){

}
else{

}
*/

// orders matters in if and else statement 
