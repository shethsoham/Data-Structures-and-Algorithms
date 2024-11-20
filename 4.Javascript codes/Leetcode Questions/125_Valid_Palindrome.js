/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let without_space = s.toLowerCase()
    without_space = without_space.replace(/[^a-z0-9]/g, '')
    
    let i =0;
    let j = without_space.length - 1
    while (i<=j){
        if (without_space[i] === without_space[j]){
            i++;
            j--;
            continue
        }else{
            return false
        }
    }
    return true  
};