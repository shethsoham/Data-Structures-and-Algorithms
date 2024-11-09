let s = "hello";
let asciiValues = [];
let diffrence = [];
let sum = 0;
for (let i = 0; i < s.length; i++) {
    asciiValues.push(s.charCodeAt(i));
    //diffrence = Math.abs(s[i]-s[i+1])
}
console.log(asciiValues)
for (let j = 0; j < asciiValues.length - 1; j++) {
    diffrence.push(Math.abs(asciiValues[j] - asciiValues[j + 1]))
}
console.log(diffrence)

for (let k = 0; k < diffrence.length; k++) {
    sum = sum + diffrence[k]
}
console.log(sum)
//


