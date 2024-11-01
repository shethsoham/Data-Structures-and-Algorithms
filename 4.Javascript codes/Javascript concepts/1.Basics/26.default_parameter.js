const increment = (function(){
    return function increment(number, value =1){
        return number + value
    }
})();

// we set default parameter value =1 
// which means that if you don't give any value 
// the value will be automatically be equal to 1

console.log(increment(5,2));
console.log(increment(5))

console.log(increment(6,6))