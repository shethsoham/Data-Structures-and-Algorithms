// retrn the number of vowels

console.log(countVowels("Hello Soham world"));

function countVowels(str){
    const vowels =["a","e","i","o","u"];
    let count = 0;

    // step 1 : Iterate through each character in the string
    for (let character of str.toLowerCase()){
        // step 2 : check if the character is vowel
        if (vowels.includes(character)){
            // step 3 : 
            count ++
        }
    }
    return count;
}
