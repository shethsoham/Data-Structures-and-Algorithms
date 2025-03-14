let promise = new Promise(function(resolve, reject){
    
    setTimeout(function(){
        resolve("done");
    },2000);
});

promise.then(function(success){
    console.log(success);
});

let promise1 = new Promise((resolve,reject){
    setTimeout(()=>resolve('done'),5000)
});

promise1.then((success)=>console.log(success));

let promise2 = new Promise((resolve,reject){
    setTimeout(()=>reject(new Error('WHOOP')),3000)
});

promise2.then((sucess)=>console.log(success))