const cart =["shoes","pants","kurta"]
api.CreateOrder();
api.proceedToPayment();

// 2 steps
// 1. Cretae order 
// 2. proceed to payment

// How to manage the order or sequence

api.CreateOrder(cart, function(){
    api.proceedToPayment();
})

// now what if depemdecies increase one after the another 

api.CreateOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallte();
        })
    })
})

// callback hell 