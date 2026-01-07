// class Person {
//   constructor(name, age) {
//     this.nameValue = name;
//     this.ageValue = age;
//   }

//   // Getter
//   get name() {
//     return this.nameValue;
//   }

//   // Setter
//   set name(newName) {
//     this.nameValue = newName;
//   }

//   // Getter
//   get age() {
//     return this.ageValue;
//   }

//   // Setter
//   set age(value) {
//     if (value < 0) {
//       console.log("Age cannot be negative");
//     } else {
//       this.ageValue = value;
//     }
//   }
// }

// let p1 = new Person("Bhavana", 21);

// console.log(p1.name); // Bhavana
// console.log(p1.age);  // 21

// p1.name = "Anita";
// p1.age = 25;

// console.log(p1.name); // Anita
// console.log(p1.age);  // 25

// class Animal {
//   speak() {
//     console.log("Animal makes a sound");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Dog barks");
//   }
// }

// let d1 = new Dog();
// d1.speak();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(this.name + " makes a sound");
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);        // calls parent constructor
//     this.breed = breed;
//   }

//   speak() {
//     super.speak();     // calls parent method
//     console.log(this.name + " barks");
//   }
// }

// let d1 = new Dog("Buddy", "Labrador");

// d1.speak();
// let a1 = new Animal("Buddy");
// a1.speak();

// class Calc {
//   sum(a, b) {
//     console.log(a + b);
//   }

//   sum(a, b, c) {
//     console.log(a + b + c);
//   }
// }

// let c1 = new Calc();
// c1.sum(2, 3); // Calls last sum → NaN if c is undefined

function outer() {
  let count = 0; // outer variable

  return function inner() {
    count++;
    console.log(count);
  };
}

let counter = outer(); // outer() runs, returns inner function

counter(); // 1
counter(); // 2
counter(); // 3

