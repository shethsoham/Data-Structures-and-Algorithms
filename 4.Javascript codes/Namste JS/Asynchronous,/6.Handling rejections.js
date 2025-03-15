const isSuccesfull = new Promise((resolve,reject)=>{

    const success = false; 

    if(success){
        resolve("Yes it is successful");
    }else{
        reject("No it is not successful");
    }
});

isSuccesfull
    .then(result=>console.log(result))
    .catch(error=>console.log(error))