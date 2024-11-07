/* Function to reverse the string */

// 1. using for loop
// 2. Initialize an emoty string to store the reversed array
// 3. iterate through the character of inout atring in reverese order

function reverseString(str){
    
    // Initialising a empty string
    let reverseStr = "";
    for (let i = str.length-1; i>=0;i--){
        reverseStr = reverseStr+str[i];

    }
    return reverseStr
}

console.log(reverseString("Soham Sheth"));

// 2. Using inbuilt methods
// Short cut way (SPJ)
// 1.Split 
// 2.Reverse
// 3.Join

function reverseString1(str1){
    //Split the string into an array of characters
    // Reverse the order of elements in the array
    //Join the character back together into a string
    return str.split("").reverse().join("")
}

console.log(reverseString("Hello world"));