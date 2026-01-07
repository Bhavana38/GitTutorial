// const greetArrow = () => {
//   console.log("Hello");
// };
// greetArrow()

// let obj = {
//   name: "JavaScript",

//   normal: function () {
//     console.log(this.name);
//   },

//   arrow: () => {
//     console.log(this.name);
//   }
// };
// obj.normal(); // JavaScript
// obj.arrow();

// const functionName = () => console.log("Hello");
// functionName()

// const PersonArrow = (name) => {
//   this.name = name;
// };
// PersonArrow(Bhavana)

// function Person(name) {
//   this.name = name;
// }
// let p1 = new Person("Bhavana");
// console.log(p1);

// const PersonArrow = (name) => {
//   this.name = name;
// };
// console.log(Bhavana);


//Arguments
// Normal Function
// function demo() {
//   console.log(arguments);
// }
// demo(1, 2, 3);

// Arrow Function
// const demoArrow = () => {
//   console.log(arguments); // Error
// }
// demoArrow(1, 2, 3)

//NEW 
// Normal Function
// function Car(model) {
//   this.model = model;
// }
// let c1 = new Car("BMW");
// console.log(c1);

// Arrow Function 
// const CarArrow = (model) => {
//   this.model = model;
// };
// new CarArrow("BMW"); // Error

// //Callbacks
// let nums = [1, 2, 3];
// let doubled = nums.map(n => n * 2);   // Arrow Function (Preferred)

// // Normal Function
// let doubled2 = nums.map(function (n) {
//   return n * 2;
// });

//Object Methods
let user1 = { name: "A" };
let user2 = { name: "B" };

// // Normal Function
// function show() {
//   console.log(this.name);
// }
// show.call(user2); // B

// // Arrow Function
// const showArrow = () => {
//   console.log(this.name);
// };
// showArrow.call(user2); // undefined

// console.log("5" - 2);
// console.log(2 + "3");

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// let res = add(2)(3);
// console.log(res);

// const add = a => b => a + b;

// add(5)(4);
// console.log(add(5)(4));


// let obj1 = {
//   name: "JS",
//   marks: { score: 90 }
// };

// let obj2 = { ...obj1 }; // Shallow copy

// obj2.name = "JavaScript";
// obj2.marks.score = 100;

// console.log(obj1.marks.score);

// let obj1 = {
//   name: "JS",
//   marks: { score: 90 }
// };

// let obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy

// obj2.marks.score = 100;

// console.log(obj1.marks.score);

// let grandParent = {
//   house: "Villa"
// };

// let parent = {
//   car: "BMW",
//   __proto__: grandParent
// };

// let child = {
//   bike: "Royal Enfield",
//   __proto__: parent
// };

// console.log(child.bike);   // Royal Enfield
// console.log(child.car);    // BMW (from parent)
// console.log(child.house);  // Villa (from grandParent)

let arr = [10, 5, 20, 8, 15];

let largest = arr[0];
let secondLargest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] < largest && arr[i] > secondLargest) {
    secondLargest = arr[i];
  }
}

console.log("Second Largest Element:", secondLargest);
