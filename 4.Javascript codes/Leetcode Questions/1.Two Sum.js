/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

// Brute Force Solution 

var twoSum = function(nums, target) {
    // BRUTE FORCE SOLUTION

    for(let i=0; i< nums.length-1; i++){
        for (let j =i+1 ; j< nums.length; j++){
           if (nums[i]+nums[j]=== target){
                return [i,j]
           } 
        }
    }
};

// uisng maps - object

class Solution {
    twoSum(nums, target) {
        let hashmap = {};  // Object to store the number and its index
        for (let i = 0; i < nums.length; i++) {  // Iterate through the array
            let num = nums[i];
            let complement = target - num;  // Calculate the complement

            if (hashmap.hasOwnProperty(complement)) {  // Check if complement is already in the hashmap
                return [hashmap[complement], i];  // Return the indices of the two numbers
            }

            hashmap[num] = i;  // Add the current number and its index to the hashmap
        }
    }
}

// using 2 pointers

class Solution {
    twoSum(nums, target) {
        // Create an object (hashmap) to store the index of each element
        let hashmap = {};
        
        // Iterate through the array
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let complement = target - num;
            
            // Check if the complement is already in the hashmap
            if (hashmap.hasOwnProperty(complement)) {
                // If so, return the indices of the complement and current number
                return [hashmap[complement], i];
            }
            
            // Otherwise, store the index of the current number
            hashmap[num] = i;
        }
        
        return [];  // In case there's no solution, though problem guarantees one solution
    }
}
