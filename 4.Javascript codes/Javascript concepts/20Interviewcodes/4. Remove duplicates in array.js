//  Return duplicate elements in an array

// 1. Without using set 

//using for loop
function removeDuplicates(arr){
    // 1. Initialise empty array to store unique elements
    const uniqueElements = [];

    // loop through the input array
    for (let i =0; i< arr.length; i++){
        if (uniqueElements.indexOf(arr[i])===-1){
            // check if the xurrent element is already in the uniquieElemnts array
            uniqueElements.push(arr[i])
        }
    }
    return uniqueElements;
}

console.log(removeDuplicates([1,2,7,3,4,4,5,5,6]))


function removeDuplicates1(arr){
    return[... new Set(arr)];
    // Convert the array into set which contains only unique values
    // step 2: convert the set back to the array using spread operator
}