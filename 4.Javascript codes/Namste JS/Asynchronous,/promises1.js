api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallte();
        })
    })
})

createOrder(cart)
    .then(function(orderId){
        proceedToPayment(orderId);
    })
    .then(function(showOrderSummary){
        showOrderSummary(paymentInf);
    })
