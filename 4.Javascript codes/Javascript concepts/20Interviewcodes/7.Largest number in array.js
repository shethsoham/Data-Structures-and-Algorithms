// find tha largest number in array 

console.log(findLargestElement([2,3,1,9,6,5,4]))

function findLargestElement(arr){
    // step 1 : set the intial largest elemnt in an array 
    let largestElement = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i]> largestElement){
            largestElement = arr[i];
        }
    }
    return largestElement;
}