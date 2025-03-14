// this is synchronous operation 

let count = true;

let countvalue = new Promise(function(resolve, reject){
    if(count){
        resolve("We can print a value")
    }else{
        reject("We cannot print the value")
    }
})

console.log(countvalue)