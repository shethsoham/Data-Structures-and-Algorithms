// merge 2 arrays in sorted order

const arr1 = [10,3,4,7];
const arr2 = [2,23,5,6];
console.log(mergeSortedArrays(arr1, arr2));

function mergeSortedArrays(arr1, arr2){
    const mergedarray = arr1.concat(arr2);

    const sortedarray = mergedarray.sort((a,b)=>a-b);
    return sortedarray
}
