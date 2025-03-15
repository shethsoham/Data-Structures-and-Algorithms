const promiseexample1 = new Promise((resolve,reject)=>{

    let condition = true;

    if (condition==1){
        resolve("condition is true")
    }else{
        reject("Condition is falsed")
    }
})

promiseexample1
    .then(data=>console.log(data))
    .catch(data=>console.log(data))