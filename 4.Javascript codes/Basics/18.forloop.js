var myArr =[]

for (i=0;i<5;i++){
    myArr.push(i);
}

console.log(myArr)

// Iterate odd numbers with a for loop

var oddNumber =[];
for(var i =1;i<=9;i=i+2){
    oddNumber.push(i);
}

console.log(oddNumber)

//

var oddNumber1 =[];
for(var i =11;i>1;i=i-2){
    oddNumber1.push(i);
}

console.log("Reverse odd number is",oddNumber1)

// Iterate through an array in for loop 

var arr = [2,4,6,8,10]
console.log(arr.length)
var total = 0;

for( var i =0; i < arr.length; i++ ){
    console.log(arr[i])
    total = total + arr[i]
}

console.log(total)

//Nesting for loops
function multiplyAll(arr){
    var product =1;
    
    for(var i=0; i<arr.length;i++){
        for (var j = 0; j<arr[i].length; j++){
            product = product * arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]])
console.log("Product is",product)

