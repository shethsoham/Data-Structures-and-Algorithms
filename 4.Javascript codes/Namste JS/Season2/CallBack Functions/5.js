function firstFunction(callback){
    console.log("I AM FIRST")
    callback()
}

function secondFunction(){
    console.log("I am second")
}

// secondFunction()
firstFunction(secondFunction)