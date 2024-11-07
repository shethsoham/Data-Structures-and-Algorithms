// Find the sum of all elements in array 

console.log(sumofallElements([1,2,3,4,5]))

function sumofallElements(arr){
    let addition = 0;
    for(i=0;i<arr.length;i++){
        addition = addition + arr[i]
    }
    return addition
}