// callback = a function that is passed as an argument as an argument to another  function.
//         used to handle asynchronous operations 

// 
// 
// 

function hello(callBack, callBack1){
        console.log("Hello");
        callBack1();
        callBack();
        
}

function goodBye(){
    console.log("Good bye ");
}


function leave(){
    console.log("leave")
}

function wait(){
    console.log("wait")
}

//hello(wait)
console.log("------------------")
leave()
goodBye()
wait()
//hello(leave)

console.log("------------------") 
hello(leave,wait)

