// Returning early pattern 
// Return statement ends the function any time
function abTest(a,b){
    // Only change the code below this line 
    if (a<0 || b < 0){
        return "a or b is less and zero"
    }
    return undefined

}
    
console.log(abTest(1,1))