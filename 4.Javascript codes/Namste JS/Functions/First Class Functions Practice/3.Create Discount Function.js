// 4. Create a Discount Function Generator
// Write a function createDiscount(discountPercentage)
//  that returns another function. The returned function should take a price and apply the given discount.


function DiscountFunctionGenrator(value){
    return function (discountpercentage){
        return (Math.floor(value*discountpercentage/100))
    }
}

