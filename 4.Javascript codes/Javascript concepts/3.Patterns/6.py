class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        output = 0
        for num in nums : 
            if (((num-1)% 3 == 0) or ((num+1)% 3 == 0)):
                output = output + 1
            else :
                return 0
        return output


solution1 = Solution(self, [1,2,3,4]) 



