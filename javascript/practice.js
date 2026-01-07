// let a=["ABC" , 12,"Bangalore"]
// console.log(a);                          //Array creaion

// let a= "STRING"
// console.log(a[0])                //Array index

// let a = [1, 2, 3, 4]
// b = [5, 6, 7]
// res=a.concat(b)
// res.pop()
// res.pop()
// console.log(res);            //POP 

// let a = [1, 2, 3, 4]
// b = [5, 6, 7]
// res=a.concat(b)
// res.shift()
// res.shift()
// console.log(res);               //SHIFT

// let a = [1, 2, 3, 4]
// b = [5, 6, 7]
// res=a.concat(b)
// res.push(8)
// res.push(0)
// console.log(res);                //PUSH

// let a = [1, 2, 3, 4]
// b = [5, 6, 7]
// res=a.concat(b)
// res.unshift(8)
// res.unshift(0)
// console.log(res);

// let a = [1, 2, 3, 4, 5, 6, 7]
// value = a.slice(1,4)
// console.log(value);             //SLICE

// let a = [1, 2, 3, 4, 5, 6, 7]
// res=a.splice(1,3,101)
// console.log(res);
// console.log(a)                      //SPLICE



// array.forEach(value,index, array ){
    
// };

// let arr=[1, 2, 3, 4, 5, 6]
// array.reduce(function(accumulator,currentValue)){
//     return arr % 2 ==0;
// }
// console.log(arr)

let arr = [1, 2, 3, 4, 5, 6]
arr.reduce = (el => el % 2 ==0{
  return el;
});
console.log(el);


// let arr=[1, 2, 3, 4, 5, 6]
// res = arr.reduce(function(num , el){
//     return num+el
// });
// console.log(res)

// for(let i=1; i<=value; i++){
// }

// let player = {
//   name: "Rohit"
// };
// function intro() {
//   console.log("I am " + this.name);
// }
// let newIntro = intro.bind(player);
// newIntro();                         //Bind - bind() does not call the function immediately. It returns a   
// //                                                 new function with this permanently attached.


// let student = {
//   name: "Bhavana"
// };
// function greet(msg) {
//   console.log(msg + " " + this.name);
// }
// greet.call(student, "Hello");               //call - call() is used to borrow a function from another object and                                            call it immediately with a specified this value.


let student = {
  name: "Virat"
};
function greet(msg, place) {
  console.log(msg + " " + this.name + " from " + place);
}
greet.apply(student, ["Hi", "India"]);         

//apply - apply() is same as call(), but it takes arguments in an array.