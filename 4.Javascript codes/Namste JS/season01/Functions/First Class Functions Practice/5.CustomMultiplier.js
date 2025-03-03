function createMultiplier(multiplier){
    return function (arr){
        return arr.map((num)=> num*multiplier);
    }
}

const doubleArray =  createMultiplier(2);
console.log(doubleArray([1,2,3]));