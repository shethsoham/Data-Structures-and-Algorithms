/*
Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
Example 3:

Input: nums = [3,7]
Output: 12
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const first_maxNum = Math.max(...nums);
    const index = nums.indexOf(first_maxNum);
    if (index !== -1) {
        nums.splice(index, 1); // Remove the element
    }

    const second_max = Math.max(...nums)

    return ((first_maxNum -1) * (second_max - 1))

};