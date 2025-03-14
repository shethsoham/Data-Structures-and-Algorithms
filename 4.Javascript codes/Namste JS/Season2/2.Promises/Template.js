let promise1 = new Promise(function(resolve,reject){
    // producing code ("May take some time "))
    resolve(); // when successful
    reject(); // when error
});

// consuming code ("Must wait for a full filled promise ")
myPromise.then(
    function(value){
        // code if successful
    },
    function(error){
        // code if some error 
    }
);

