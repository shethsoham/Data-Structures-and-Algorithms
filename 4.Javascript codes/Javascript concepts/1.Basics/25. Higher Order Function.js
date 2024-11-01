//Higher order function 

/*

This are the functions who pass 
map filter and reduce 
they take functions as argument for processing collection of data
*/ 

/*
when ever one function takes another function as argument it f=good time to use arrow function
*/
// write higher order arow function
const realNumberarray =[4,5.6,-9.8,3.14,42,6,8.34,-2];

const squareList =(arr) =>{
    const squaredIntegers = arr.filter(num=> Number.isInteger(num)&&num>0).map(x =>x *x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);

console.log(squaredIntegeres);

