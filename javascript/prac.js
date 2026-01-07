// // let a = [1, 2, 3, 4, 5]
// // let b = [6, 7, 8]
// // result = a.concat(b);
// // result.splice(6, 0, 101 );
// // console.log(result)

// // let a;
// // console.log(a);

// // student ={
// //     name : "abc",
// //     roll : 123
// // };

// // let a = [1, 2, 3, 4, 5]
// // let b = [6, 7, 8]
// // result = a.concat(b);
// // result.shift();
// // console.log(result);

// // let a1 = [1, 2, 3, 4, 5]
// // let b1 = [6, 7, 8]
// // result1 = a1.concat(b1);
// // result1.unshift(111);
// // console.log(result1);

// // let a = 10;
// // if(a % 2 == 0){
// //     console.log("Display number is even");
// // }
// // else{
// //     console.log("Display number is odd");
// // }

// // let a1 = [1,2,3, 4,5,6]
// // let result = a1.filter(function(number){
// //     return number%2 == 0
// // });
// // console.log(result)


// // let arr = [10, 8, 2, 20, 50]

// // let result = arr.reduce(function(num, el){
// //     return num + el
// // });
// // console.log(result);


// // let arr1 = [10, 8, 2, 20, 50]
// // let sum = 0
// // for(let i = 0; i <= arr1[i]; i++){
// //     sum = sum + arr1[i];
// // }
// // console.log(sum)


// const stud = {
//     name : "ABC",
//     city : "Bangalore",
//     skills : ["HTML", "CSS", "Javascript"],
//     student1 : function(){
//         return this.name + " " + this.city;
//     }
// };
// console.log(stud.student1());

// // let student =[ {
// //     name : "ABC",
// //     rollNo : 101,
// //     subject : "maths"
// // },
// // {
// //     name : "XYZ",
// //     rollNo : 102,
// //     subject : "Science"
// // },
// // {
// //     name : "PQR",
// //     rollNo : 103,
// //     subject : "Hindi"
// // },
// // {
// //     name : "LMN",
// //     rollNo : 104,
// //     subject : "Kannada"
// // }
// // ]
// // let output = [];
// // for(let i=0; i<student.length; i++){
    
// //     if(student[i].rollNo >= 102){
// //         let result = (student[i].name);

// //         let a = (result.toLowerCase());
// //         output.push(a);
        
// //     }
// //     // console.log(student[i]);
    
// // }
// // console.log(output);


// let arr = [2, 38, 66, 89, 15];
// let largest = arr[0];
// let secondLargest = arr[0];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>largest){
//         SecondLargest = largest;
//         largest = arr[i];
//     } else if(arr[i] > secondLargest && arr[i] !== largest){
//         secondLargest = arr[i];
//     }
// }
// console.log(secondLargest);


// let student = {
//     name : "ABC"
// };
// function greet(msg){
//     console.log(msg + " " + this.name);
// }
// greet.call(student, "Hello");

// let student1 = {
//     name : "ABC"
// };
// function greet(msg,place){
//     console.log(msg + " " + this.name + "from" + place);
// }
// greet.apply(student1,["Hi", "india"]);


// let student2 = {
//     name : "ABC"
// };
// function intro(){
//     console.log("I'm" + this.name);
// }
// let newIntro = intro.bind(student2)
// newIntro();


// let arr = [12,32, 43, 11,23];
// let largest = -Infinity;
// let secondLargest = -Infinity;
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > largest){
//         secondLargest = largest;
//         largest = arr[i];
//     }else if(arr[i] > secondLargest && arr[i] !== largest){
//         secondLargest = arr[i];
//     }
// }
// console.log(secondLargest);

// let str = "hello";
// let count = {};

// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];

//   if (count[ch] === undefined) {
//     count[ch] = 1;
//   } else {
//     count[ch]++;
//   }
// }

// console.log(count);



// let a = "madam";
// let rev ="";
// for(let i=a.length-1; i>=0;i--){
//     rev = rev + a[i];
// }
// if(a === rev){
//     console.log("Palindrome");
// }else{
//     console.log("Not a palindrome");
// }


// function Person(name) {
//   this.name = name;
// }

// let sayHello = function () {
//   console.log("Hello " + this.name);
// };

// let p1 = new Person("Ravi");
// let p2 = new Person("Anu");

// p1.sayHello();
// p2.sayHello();

// class Student {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     this._name = newName;
//   }
// }

// let s = new Student("Asha");
// console.log(s.name);   // getter

// s.name = "Kiran";      // setter
// console.log(s.name);

// class Student{
//   constructor(name, age){
//     this.name = "ABC";
//     this.age = 25;
//   }
//   display(){
//     console.log("NAME : ", this.name);
//     console.log("AGE : ", this.age);
//   }
// }
// let s1 = new Student();
// s1.display();




// console.log(a)
// const a=10;

// console.log(typeof null);



sayHello();

const sayHello = function () {
  console.log("Hello");
};




















































