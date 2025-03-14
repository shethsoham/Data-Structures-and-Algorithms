// // Before promises 
// // Callback - callback hell,

// const cart =["shoes","pants","kurta"];


// createOrder(cart); // orderId // create order API -synchronous

// proceedToPayment(orderId); // proceedTopaymentAPI - synchronous

// /// using callbacks
// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// })
// // They are dependent on each other 

// // how we used to write code using call backs

// //using promises
// const promise = createOrder(cart)

// // {data:undefined}

// promise.then(function(orderId){
//     proceedToPayment(orderId)
// })

// earlier in callback we were passing a function 
// as an argument to function 

// but in promises we are attaching a function as an argemuent

// passing would call when ever they want
// in promise we would have control of our own.


const GITHUB_API = "https://api.github.com/users/akshaymarch7"
const user = fetch(GITHUB_API); 
//fetch function would return us promise
// it return a promise object
console.log()