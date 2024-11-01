/*

* * * * *
* * * *
* * *
* *
*

*/

rows = 5

for(i=0;i<rows;i++){
    for(j=0;j<rows-i;j++){
        process.stdout.write("* ");
    }
    console.log()
}