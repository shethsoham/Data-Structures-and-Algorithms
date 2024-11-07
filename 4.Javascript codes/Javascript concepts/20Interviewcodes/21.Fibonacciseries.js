//fibonacci series to 

var n = 10;
console.log(fibonacciSeries(n));


function fibonacciSeries(n){

    var fibonacci =[0,1]

    for (var i =2;i<n;i++){
        fibonacci[i] = fibonacci[i-1]+fibonacci[i-2];
    }
    return fibonacci[n-1];
}