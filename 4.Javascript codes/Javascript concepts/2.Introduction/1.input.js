const prompt = require('prompt-sync')();


function names(){

    const yourName  = prompt("What is your name?")
    return yourName
    
}

console.log("My name is ",names())

