function multiplyBy(n){
    return function(x){
         return n*x
    }
}

const double = multiplyBy(2)
const triple = multiplyBy(3)
console.log(double(5))
console.log(triple(6))