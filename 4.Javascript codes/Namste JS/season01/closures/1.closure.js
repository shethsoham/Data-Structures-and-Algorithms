function x(){
    var a = 7;
    function y(){
        console.log(a)
    }
    y() // it dont find a in function so it goes to lexical parent to find the value of that
}
x()

// closure a function bundled together with lexical scope.