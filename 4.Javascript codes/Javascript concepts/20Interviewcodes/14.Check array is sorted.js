// Write a program to check if given function is sorted or not

console.log(check_sort([3,2,1]))
console.log(check_sort([1,2,3]))

function check_sort(arr){
    for (let i =0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            return true;
        }else{
            return false;
        }

    }
    
}