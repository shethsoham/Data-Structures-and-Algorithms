fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
    .then(response=>{
       if(!response.ok){
        throw new Error(`HTTP error! Status:$`)
       }
    })