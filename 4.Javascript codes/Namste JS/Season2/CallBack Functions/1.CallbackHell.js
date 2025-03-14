const cart = ["shoes", "pant","kurta"];

api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(
            function(){
                api.updateWallet()
            }
        )
    })

})

// Inversion of control 
//Callback hell