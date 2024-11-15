/*
1365. How Many Numbers Are Smaller Than the Current Number
Easy
Topics
Companies
Hint
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
*/

// Brute force solution : Time Complexity = O(N**2)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let arr =[]
    for (let i = 0; i<nums.length; i++){
        let count = 0;
        for (let j = 0 ; j < nums.length; j ++){
            if (nums[i]>nums[j]){
                count = count+1
            }
        }
        arr.push(count)
    }
    return arr
};

// Solution using map 

var smallerNumbersThanCurrent = function(nums) {
    const sortedNums = [...nums].sort((a,b)=> a - b);
    const map =  new Map();

    for(let i=0; i<sortedNums.length; i++){
        if(!map.has(sortedNums[i])){
        map.set(sortedNums[i], i)
        }
    }
    let ans = [];
    for(let i=0; i<nums.length; i++){
        ans.push(map.get(nums[i]))
    }

    return ans;




};

