// Is prime or not () nUmber only divisble by 1 and itself


console.log(checkPrimenumber(7));
console.log(checkPrimenumber(10));


function checkPrimenumber(number){
    for (let i = 2; i <= number/2 ; i++){
        if(number % i === 0 ){
            return false
        }
    }
    return true
}

