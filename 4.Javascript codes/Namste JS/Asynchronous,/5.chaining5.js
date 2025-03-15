const numberPromise = new Promise((resolve)=>{
    setTimeout(()=>resolve(10),1000);
})

numberPromise
    .then(num=>{
        console.log(`First:${num}`);
        return num*2
    })
    .then(num=>{
        console.log(`Second:${num}`);
        return num*2;
    })
    .then(num=>{
        console.log(`Second:${num}`);
        return num*2;
    });