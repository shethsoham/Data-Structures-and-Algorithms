
console.log(average([1,2,3,4,5]))

function average(arr){
    let i;
    let sum = 0;
    let avg;
    for(i= 0; i<arr.length; i ++){
        sum = sum + arr[i];
    }
    avg = sum/ (arr.length)
    return avg;
}