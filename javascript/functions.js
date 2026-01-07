// function greet(num1, num2) {
//     res=num1+num2
//     console.log(res);
    
// }
// greet(10, 20)

// function details(name, branch, city){
//     let out=`Hi i am ${name}, i am from ${branch}, i am from ${city}`;
//     console.log(out)
// }
// details('bhavana', 'banavara')

// function printAll(){
//     for(let arg in arguments){
//          console.log(`argument #${parseInt(arg) + 1} is ${arguments[arg]}`)
//     }
// }
// printAll(123, 100, 221, 501, 612)

// (function (num1) {
//     let sqr = num1 * num1;
//     console.log(sqr);
// })(5)                               //Self invoking function


// let arr = [10, 20, 30];
// arr.forEach(function printVal(val,index, array) {
//     console.log(val, index, array);
// });                                     //forEach

// let arr=[10, 20, 30, 40 ]
// let res=arr.map(function(num){
//     return num*2
// });
// console.log(res);                    //Map

let arr=[10, 20, 30, 40 ]
let res=arr.filter(num => num%4==0){
console.log(res);
}
                       //Filter


// let arr = [10, 20, 30, 40];
// let total = arr.reduce((acc, curr) => acc + curr);
// console.log(total);                                     //Reduce


// let arr = [10, 20, 30, 40];
// res = arr.every(function(num){
//     return num<=30
// });
// console.log(res)


// let arr = [1, 2, 3];
// let result = arr.flatMap(num => [num, num * 2]);
// console.log(result);

// let arr=[1, 22, 3, 14]
// let res = arr.sort(function(a, b){
//     return a-b
// });
// console.log(res)