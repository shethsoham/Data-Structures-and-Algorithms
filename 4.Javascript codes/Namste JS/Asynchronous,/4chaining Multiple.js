
function summation(x,y){
    return new Promise((resolve,reject)=>{
        if (typeof x === "number" && typeof y ==="number"){
            resolve(x+y);
        }else{
            reject("Invalid input x and y must be number ")
        }
    });
}
  

summation(5,10)
    .then(solution=>console.log("Sum:",solution))
    .catch(error=>console.log("Error:",error));

