const cart = ["shoes","pants","kurta"]; 

const orderId = createOrder(cart);
proceedToPayment(orderId);


// using callbacks
createOrder(cart, function(){
    proceedToPayment(orderId);
})

// using promises

const promiseRef = createOrder(cart); 

promiseRef.then(function(){
    proceedToPayment(orderId)
})

