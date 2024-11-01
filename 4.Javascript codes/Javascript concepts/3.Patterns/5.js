/*
1
12
123
1234
12345
*/

var rows =5;
for(i=0;i<rows;i++){
    var num = 1
    for(j=0;j<i+1;j++){
        process.stdout.write(num)
        num += 1
    }
    console.log()
}
