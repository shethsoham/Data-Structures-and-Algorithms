// remove all the white spaces from a string


console.log(removeWhitespace(" Interview    soham  sheth  "))
// Output : Interviewsohamsheth

// 1. using For loop

function removeWhitespace(inputString){
    let i;
    let word = "";
    for(i=0;i<inputString.length; i++){
        if(inputString[i] !== " "){
            word = word +  inputString[i];
        }
    }
    return word;

}