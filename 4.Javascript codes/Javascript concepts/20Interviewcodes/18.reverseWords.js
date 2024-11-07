// Reverse the order of words in a given sentence

console.log(reverseWords("Hello world"));

function reverseWords(sentence){
    let words = sentence.split(" ");

    let reverseWords = words.reverse();
    let reversedSentence = reverseWords.join(" ");

    return reversedSentence;
}