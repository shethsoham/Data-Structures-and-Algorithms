// Longest common prefix among an array of strings

const strings = ["flower","flow","flight"];
console.log(longestCommonPrefix(strings));

function longestCommonPrefix(strs){
    let prefix =strs[0];
    for(let i =1; i< strs.length; i++){
        while(strs[i].indexOf(prefix) != 0){
            prefix  = prefix.slice(0,prefix.length -1)
        }
    }
    return prefix;
}