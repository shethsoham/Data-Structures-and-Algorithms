function x(){
    var i = 1;
    setTimeout(function()
        {console.log(i);
        }, 3000);
        console.log("Namaste JS")
    }
    x();

function y(){
    for (var i = 1; i <=5; i++){
        setTimeout(function(){
            console.log(i)
        },i*1000);
    }
    console.log("Namaste JS")
}
y()
// 6 6 6 6 6 same memory 

// can fix by using let , then it will 1 2 3 4 5 

// using var - closures will help us

function x(){
    for (var i = 1; i<=5; i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            },x*1000)
        }
        close(i);
    }

    console.log("NS JS")
}
x()