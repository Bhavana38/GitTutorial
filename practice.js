let obj1 = {
    name : "ABC",
    marks : {score : 90}
};
let obj2 = {...obj1};
obj2.name = "XYZ";
obj2.marks.score = 100;
console.log(obj1.marks.score);


// let obj1 = {
//     name : "ABC",
//     marks : {score : 90}
// };
// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.marks.score = 100;
// console.log(obj1.marks.score);
