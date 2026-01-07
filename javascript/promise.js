// let promise = new Promise((resolve, reject) => {
//   let number = 10;

//   if (number < 5) {
//     resolve("Number is greater than 5");
//   } else {
//     reject("Number is not greater than 5");
//   }
// });

// promise
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


//PROMISE CHAINING
// Step 1: Function to get user
// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting user");
//       resolve({ id: 1, name: "Bhavana" });
//     }, 1000);
//   });
// }

// // Step 2: Function to get orders using userId
// function getOrders(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting orders for user:", userId);
//       resolve(["Order1", "Order2", "Order3"]);
//     }, 1000);
//   });
// }

// // Step 3: Function to get order details
// function getOrderDetails(order) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting details for:", order);
//       resolve({ orderName: order, price: 500 });
//     }, 1000);
//   });
// }

// // Step 4: Promise Chaining
// getUser()
//   .then(user => {
//     console.log("User:", user);
//     return getOrders(user.id);   // return promise
//   })
//   .then(orders => {
//     console.log("Orders:", orders);
//     return getOrderDetails(orders[0]); // chaining continues
//   })
//   .then(orderDetails => {
//     console.log("Order Details:", orderDetails);
//   })
//   .catch(error => {
//     console.log("Error:", error);
//   })
//   .finally(() => {
//     console.log("Promise chaining completed");
//   });



//CALLBACK HELL
// Step 1: Get user using callback
// function getUser(callback) {
//   setTimeout(() => {
//     console.log("Getting user...");
//     callback({ id: 1, name: "Bhavana" });
//   }, 1000);
// }

// // Step 2: Get orders using callback
// function getOrders(userId, callback) {
//   setTimeout(() => {
//     console.log("Getting orders for user:", userId);
//     callback(["Order1", "Order2", "Order3"]);
//   }, 1000);
// }

// // Step 3: Get order details using callback
// function getOrderDetails(order, callback) {
//   setTimeout(() => {
//     console.log("Getting details for:", order);
//     callback({ orderName: order, price: 500 });
//   }, 1000);
// }

// // ❌ Callback Hell (nested callbacks)
// getUser(function(user) {
//   console.log("User:", user);

//   getOrders(user.id, function(orders) {
//     console.log("Orders:", orders);

//     getOrderDetails(orders[0], function(orderDetails) {
//       console.log("Order Details:", orderDetails);
//     });
//   });
// });


//Promise.all()
// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.resolve(30);

// Promise.all([p1, p2, p3])
//   .then(results => {
//     console.log(results); // [10, 20, 30]
//   })
//   .catch(error => {
//     console.log(error);
//   });


// const p1 = Promise.resolve("OK");
// const p2 = Promise.reject("Error occurred");

// Promise.all([p1, p2])
//   .then(result => console.log(result))
//   .catch(err => console.log(err)); // Error occurred


//Promise.any()
// const p1 = Promise.reject("Error 1");
// const p2 = Promise.reject("Error 3");
// const p3 = Promise.reject("Error 2");

// Promise.any([p1, p2, p3])
//   .then(result => console.log(result)) // Success
//   .catch(err => console.log(err));


//Promise .race()
const p1 = new Promise(resolve => setTimeout(resolve, 1000, "First"));
const p2 = new Promise(resolve => setTimeout(resolve, 500, "Second"));

Promise.race([p1, p2])
  .then(result => console.log(result)) // Second
  .catch(err => console.log(err));
