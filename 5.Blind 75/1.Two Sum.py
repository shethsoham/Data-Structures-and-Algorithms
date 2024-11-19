# Using two pointers approach

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Pair the elements with their original indices
        indexed_nums = [(num, idx) for idx, num in enumerate(nums)]
        
        # Sort based on the element values
        indexed_nums.sort(key=lambda x: x[0])
        
        # Two-pointer approach
        left = 0
        right = len(indexed_nums) - 1
        
        while left < right:
            current_sum = indexed_nums[left][0] + indexed_nums[right][0]
            if current_sum == target:
                # Return the original indices
                return [indexed_nums[left][1], indexed_nums[right][1]]
            elif current_sum < target:
                left += 1
            else:
                right -= 1
        
        return []  # No solution found


# Using hashmap

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Create a dictionary to store the index of each element
        hashmap = {}
        
        # Iterate through the array
        for i, num in enumerate(nums):
            complement = target - num
            
            # Check if complement is already in the hashmap
            if complement in hashmap:
                # If so, return the indices of the complement and current number
                return [hashmap[complement], i]
            
            # Otherwise, store the index of the current number
            hashmap[num] = i

        return []  # In case there's no solution, though problem guarantees one solution


