
const promisesTimeout = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("this message appears after 3 seconds");
    },3000);
});


promisesTimeout
    .then(message=>console.log(message));


