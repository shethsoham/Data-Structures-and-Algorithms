/*
2011. Final Value of Variable After Performing Operations

here is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

 

Example 1:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
Example 2:

Input: operations = ["++X","++X","X++"]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.
Example 3:

Input: operations = ["X++","++X","--X","X--"]
Output: 0
Explanation: The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.
*/


/*
class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        
        X = 0
        n = len(operations)
        for i in range (0,n):
            if (operations[i] == "--X" or operations[i] == "X--"):
                X = X -1 
            else:
                X = X + 1
        return X
*/
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X = 0;
    let sum = 0;

    for(let i = 0 ; i<operations.length; i++){
        if (operations[i] === "--X" || operations[i] === "X--"){
            X = X -1 
        }else if (operations[i] === "++X" || operations[i] === "X++"){
            X = X + 1
        }
    }
    return X;
};
