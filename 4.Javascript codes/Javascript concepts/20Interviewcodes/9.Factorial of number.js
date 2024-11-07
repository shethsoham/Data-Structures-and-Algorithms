// Find the factorial  number 

console.log(factorialNumber(5));

function factorialNumber(number){

    let i;
    let factorialis =1;
    if (number === 0){
        return 1
    }
    for (i=number; i>0; i--){
        factorialis = factorialis * i;
    }
    return factorialis
}