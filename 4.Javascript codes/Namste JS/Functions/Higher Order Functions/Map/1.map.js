const arr = [5,1,3,2,6]

// Double - [10,2,6,4,12]
// triple -[15,3,9,6,18]
//Binary-["101","1","11,"10","110"]

function double(x){
    return x*2 ;
}

function triple(x){
    return x*3
}

function binary(x){
    return x.toString(2);
}

const output = arr.map(double)
console.log(output)

const output1 = arr.map(triple)
console.log(output1)

const output2 = arr.map(binary)
console.log(output2)

//____________________________________________________________________

const output4 = arr.map(function quadratic(x){
    return x*4
})
console.log(output4)

// Using arrow functions 

// cube using arrow functions
const output5 = arr.map((x)=>(x*x*x));
console.log(output5)