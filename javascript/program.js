// let str = "hello";
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   rev += str[i];
// }

// console.log(rev);                        //REVERSE

// let str = "madam";
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   rev += str[i];
  
// }
// if(str === rev){
//     console.log("String is a palindrome");
//   }else{
//     console.log("String is not palindrome");
    
//   }                                      //PALINDROME

// let arr = [10, 45, 3, 99, 23];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);                            //MAX NUMBER


// let arr = [10, 45, 45, 3, 99, 23];
// let first = arr[0];
// let second = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > first) {
//     second = first;
//     first = arr[i];
//   } else if (arr[i] > second && arr[i] !== first) {
//     second = arr[i];
//   }
// }

// console.log(second); // 45

// let arr = [10, 45, 3, 25, 99, 23, 78];

// let first = arr[0];
// let second = arr[0];
// let third = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > first) {
//     third = second;
//     second = first;
//     first = arr[i];
//   } 
//   else if (arr[i] > second && arr[i] !== first) {
//     third = second;
//     second = arr[i];
//   } 
//   else if (arr[i] > third && arr[i] !== second && arr[i] !== first) {
//     third = arr[i];
//   }
// }

// console.log("Third Largest:", third);


// let arr = [10, 45, 3, 99, 23];

// arr.sort((a, b) => b - a);   // descending order

// console.log("Second Largest:", arr[1]);

// let str = "javascript";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];
//   if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
//     count++;
//   }
// }

// console.log(count); 

// let arr = [1, 2, 2, 3, 4, 4];
// let unique = [];

// for (let i = 0; i < arr.length; i++) {
//   let isDuplicate = false;

//   // Check if arr[i] already exists in unique array
//   for (let j = 0; j < unique.length; j++) {
//     if (arr[i] === unique[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }

  // If not duplicate, add to unique array
//   if (!isDuplicate) {
//     unique[unique.length] = arr[i]; // push without using push()
//   }
// }

// console.log(unique); // [1, 2, 3, 4]

// let num = 5;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }

// console.log(fact); // 120


// let n = 5;
// let a = 0, b = 1;

// console.log(a);
// console.log(b);

// for (let i = 1; i < n; i++) {
//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }


// let a = 5, b = 10;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a = " +a, "b = " +b); // 10 5

// let str = "hello";
// let obj = {};

// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];
//   obj[ch] = (obj[ch] || 0) + 1;
// }

// console.log(obj); // { h:1, e:1, l:2, o:1 }


// let arr = [10, 45, 45, 3, 99, 23];
// let first = arr[0];
// let second = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > first) {
//     second = first;
//     first = arr[i];
//   } else if (arr[i] > second && arr[i] !== first) {
//     second = arr[i];
//   }
// }
// console.log("Largest number:", first);
// console.log("Second largest number:", second);

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

// console.log("Ascending order:", arr);


let arr = [10, 45, 3, 99, 23];

let first = arr[0];
let second = -Infinity;
let third = -Infinity;

for (let i = 0; i < arr.length; i++) {

  if (arr[i] > first) {
    third = second;
    second = first;
    first = arr[i];

  } else if (arr[i] > second && arr[i] !== first) {
    third = second;
    second = arr[i];

  } else if (arr[i] > third && arr[i] !== first && arr[i] !== second) {
    third = arr[i];
  }
}

console.log("3rd Largest number:", third);


