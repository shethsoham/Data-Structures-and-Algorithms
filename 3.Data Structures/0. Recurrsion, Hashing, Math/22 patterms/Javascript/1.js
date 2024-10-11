/*
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/
let k
for(let i=0; i<5;i++){
    
    for (let j=0; j<5; j++){
        process.stdout.write("* ");
    }
    console.log("");
}
let n ;
function nForest(n){
    for (let i = 0; i<n;i++){
        for (let j =0; j<n; j++){
            process.stdout.write("* ");
        }
        console.log("");
    }
}

nForest(n=prompt("Enter the number"))