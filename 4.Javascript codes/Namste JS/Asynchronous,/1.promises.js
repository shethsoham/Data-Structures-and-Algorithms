const myPromise = new Promise(function(resolve,reject){
        let success = true;
        setTimeout(function(){
            if (success){
                resolve("Promise is resolved succesfully");
            }else{
                reject("Promise is rejecteedd due to Error");
            }
        },2000);
});

myPromise
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log(error);
    })

myPromise   
    .then(result=> console.log(result))
    .catch(error=>console.log(error))