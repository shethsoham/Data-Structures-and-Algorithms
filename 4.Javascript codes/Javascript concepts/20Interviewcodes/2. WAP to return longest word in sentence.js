// "I love javascript a lot"

console.log(findLongestWord("I love javascript a lot"));

function findLongestWord(str) {
    //Step 1: Split the sentce in array of words
    const words =str.split(" ");
    let longestWord =""; //Initialise to empty dyting

    // step 2 : Iterate through each word in an array
    for (let word of words){
        // step 3 : check if the current word is longer than the current longest word
        if(word.length >longestWord.length){
            // step 4 . If true update the longestWord variable 
            longestWord = word;
        }
    }
    return longestWord
}

