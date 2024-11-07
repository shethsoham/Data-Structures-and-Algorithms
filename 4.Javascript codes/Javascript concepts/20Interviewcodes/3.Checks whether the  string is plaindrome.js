/* Checks whether the string is a palindrome or not */

console.log(isPalindrome("al"))

function isPalindrome(str){
    // Step 1 : reverse a string
    const reverseString  = str.split("").reverse().join("")

    // step2 : compare the reverse striong with original string
    if (reverseString === str){
        return true
    } 
    return false

}