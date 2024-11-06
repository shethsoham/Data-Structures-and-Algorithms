/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0] 
*/



//

let nums1 = [0, 1, 0, 3, 12];
let j = 0;

for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] !== 0) {
        // Swap nums[i] with nums[lastNonZeroIndex] if they are different
        [nums1[j], nums1[i]] = [nums1[i], nums1[j]];
        j++;
    }
}

console.log(nums1); // Output: [1, 3, 12, 0, 0]
