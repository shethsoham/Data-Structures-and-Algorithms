// function to write second largest element in array

const numbers = [5,10,2,8,3];
console.log(findSECONDlARGEST(numbers))

function findSECONDlARGEST(arr){
    const sortedArr = arr.sort((a,b)=> b-a);
    let secondlargest = sortedArr[1]

    return secondlargest
}