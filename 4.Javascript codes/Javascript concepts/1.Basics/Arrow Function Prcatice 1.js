
// 1. Addition practice
function add(a, b) {
    return a + b;
}

const addition = (c,d) => c+d;

console.log(addition(3,4))
console.log("---------------------------------------------------------------------------")
// 2. Is even

function isEven(num){
    return num % 2 === 0;
}

const isEvenNumber = (num1) => num1%2 ===0;
console.log("If false it is not even, if true it is even", isEvenNumber(5))


// 3.  Say Hello name 
function sayHello(name) {
    return `Hello, ${name}!`;
}

const saying_Hello = (namer) =>  `Hello, ${namer}!`
console.log(sayHello("Soham Sheth"))
// 

// 4. Creating  cube

function cube(x) {
    return x * x * x;
}

const cubes = (y) => y*y*y 
console.log("cubes value is",cubes(5))
