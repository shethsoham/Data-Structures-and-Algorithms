# Brute force solution

#771. Jewels and Stones

class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        count = 0
        for i in range(0,len(jewels)):
            for j in range(0,len(stones)):
                if (jewels[i] == stones[j]):
                    count += 1
        
        return count
    
