function higherOrderFunction(callback){
    setTimeout(()=>{
        console.log("Data Fetched")
        callback();// calling the callback function
    },2000)
}

function processData(){
    console.log("Processing data")
}

higherOrderFunction(processData)