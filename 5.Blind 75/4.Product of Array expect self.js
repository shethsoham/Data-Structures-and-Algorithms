// product of array expect self 

/*
Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 
*/

// easy by using 1 for loop multiplying elements and division by that element : But we are not supposed to use this answer 
// used prefix and post fix in array 
// refer to diagram for best understanding

// we dont use extra space for prfix and post fix we calculate in output array itself
// Therefore T.C : O(N) and S.C : O(1)





