function createFilter(condition){
    return function(arr){
        return arr.filter(condition)
    }
}

const filterEven = createFilter((num)=>num%2===0);
console.log(filterEven([1,2,3,4,5,6]))

const filterGreaterthan10 = createFilter((num)=>num>10);
console.log(filterGreaterthan10([11,2,3,4,10,200,34]))