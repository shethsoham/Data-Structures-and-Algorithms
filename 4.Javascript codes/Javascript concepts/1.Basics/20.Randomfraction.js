// Math.random()

function randomF(){
    return Math.random();
}

console.log(randomF());

// genetaring whole number using math .random

var randomNumberBetween0and19= Math.floor(Math.random()*20)

function randomWholeNum(){
    

    return Math.floor(Math.random()*10);
}
console.log(randomWholeNum())

// Function to convert string into integer

function convertToInteger(str){
    
    return parseInt(str);
}

console.log(convertToInteger("56"))
console.log(typeof(convertToIntegrer))

// ParseInt function

function convertToInteger(str){
    return parseInt(str,2)// 2 shows it should be converted into binary
}

var answer = convertToInteger("10110")

console.log(answer)