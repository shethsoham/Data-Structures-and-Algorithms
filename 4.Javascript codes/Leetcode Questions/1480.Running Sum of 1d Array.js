/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/

// Brute force solution S.C - O(n), T.C-O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr =[]
    let number =0;
    for(let i =0;i<nums.length;i++){
        number = nums[i] +number;
        arr.push(number)
    }
    return arr
};

// Optimal Solution TC:O(1), SC (1)


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        # reducing the space complexity -O(1) and time complexity -O(n)
        number = 0
        for i in range(0,len(nums)):
            number = number + nums[i]
            nums[i]=number 
        return nums
        