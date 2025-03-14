// creating a promise 
// consuming a promise

const cart =["shoes","pants","kurtas"];

const promise = createOrder(cart);//orderId

promise.then(function(orderId){
    console.log(orderId)
})

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        //createOrder
        //validateCart
        //orderId

        if(!validateCart(cart)){
            const error = new Error("cart is not valid")
            reject(err);
    
        }
        const orderId ="12345";
        if(orderId){
            resolve(orderId)
        }
    });

    return pr;
}

function validateCart(cart){
    return true;
}