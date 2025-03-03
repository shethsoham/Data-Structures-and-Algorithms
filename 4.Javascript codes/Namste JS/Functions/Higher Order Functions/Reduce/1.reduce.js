// reduce is used when you take all the elements in an array and one single value.

// find the sum using sum array using inbuilt function sum and using reduce accumatror and current

const arr = [5,1,2,4,6];

let sum =0;
for (let i = 0; i<arr.length; i++){
    sum = sum+ arr[i];
}

console.log(sum);

const output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);

console.log(output);

// finding  macimum using reduce function
 const output1 = arr.reduce(function(max,curr){
    if(curr>max){
        max = curr;
    }
    return max
 },0)

 console.log(output1)
