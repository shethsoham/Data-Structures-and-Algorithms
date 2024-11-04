// Print the second largest number in an array.



// Brute force solution sortin an array and then finding  second largest element in array 
// Here you  can see the time complexity is O(nlogn) - and TC for finding element - O(n)


class SecondL{

    second_largest(arr){
        let n = arr.length -1
        arr.sort((a,b)=>a-b);
        for(let i=n-1; i>=0; i--){
            if (arr[i] < arr[n]){
                return arr[i]
            } 
        }
        return null;
    }
}
   

let secondl = new SecondL()
console.log(secondl.second_largest([10,5,10]));

///

let array = [2,4,3,5,10,2];
console.log(array.sort((a,b)=>a-b));

// 

class SecondL2 {
    constructor(){
        let n = arr2.length
    }
    
    second_largest(){
        let largest = arr2[0];
        for(i=0;i<n;i++){
            

        }
        

    }
    

}