// Rest operators 
// (...args)
// we can have any number of arguments here 

const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a + b , 0);
    };
})();

console.log(sum(1,2,3,4,5,6));
