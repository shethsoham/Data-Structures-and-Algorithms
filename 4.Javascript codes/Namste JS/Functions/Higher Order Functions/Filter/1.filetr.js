// Filter values inside a array

const arr =[5,1,3,2,6];

// fitering odd values 
function isOdd(x){
    return x%2 ;
}

function isEven(x){
    return x%2 === 0;
}


function greaterThanfour(x){
    return x>4
}

// arrow function

const output3 = arr.filter((x)=>x <4);
console.log(output3)

const output = arr.filter(isOdd);
const output1 = arr.filter(isEven);
const output2 = arr.filter(greaterThanfour);


console.log(output2)
 console.log(output);
 console.log(output1)