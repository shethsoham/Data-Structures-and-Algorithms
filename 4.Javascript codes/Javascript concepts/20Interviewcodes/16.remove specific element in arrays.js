// function to remove specific element in an array 

// Using filter

console.log(removeElement([1,2,3,2,4],2))


function removeElement(arr,target){
    // using an arrow function inside filter
    const filterArray = arr.filter(element => element !== target);
    return filterArray;
}