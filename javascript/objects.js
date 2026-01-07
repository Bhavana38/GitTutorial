// function Person() {
//     console.log(Person.prototype);
// }

// const obj = {};
// console.log(obj.__proto__);

// function Student(name) {
//   this.name = name;
// }

// Student.prototype.sayHello = function() {
//   console.log("Hello " + this.name);
// };
// const s1 = new Student("Bhavana");
// s1.sayHello(); 

let student={
  firstName:"virat",
  lastName : "kohli",
  fullName : function(){
    return this.firstName + ' ' + this.lastName
  }
}

let college = {
  collegeName : "SIT"
}
Object.getPrototypeOf(student, college)

console.log(Object.getPrototypeOf(student))
console.log(student);
