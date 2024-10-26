// Return values from a function with return

function minusSeven(num){
    return num - 7;
}

console.log(minusSeven(10));


function timesfive(num){
    return num*5
}

console.log(timesfive(5))

// Understanding the undefined value returned from a function 

var sum =0;
function addThree(){
    sum = sum + 3
    // without return statement mmeans undefined
}

console.log(addThree()) // output = Undefined

function addFive(){
    sum = sum + 5;
}

//Assignment with the returned value 

var changed = 0;

function change(num){
    return(num + 5)/3
}

changed = change(10);
console.log("Value of changed is", changed)

var process = 0 ;

function processed(num){
    return (num+3)/5;
}

process=processed(10)
console.log("Value of processed is ", process)