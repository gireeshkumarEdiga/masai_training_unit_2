console.log("problem 1");

let array = [1,2,3,4,5,6];
let res = []; 

array.filter((element) => { element*2, res.push(element)});
console.log(res);

console.log("problem 2");

let array2 = [1,2];
let res2 = array2.map((element) => element*2);
console.log(res2);


console.log("problem 3");

let array3 = [1,2,3]; 
let res3 = array3.filter((element) => element%2==1);
console.log(res3);

console.log("problem 4");

let array4 = [2,3,4];
let res4 = array4.reduce((product,element) => product*=element);
console.log(res4);

console.log("problem 5");

let array5 = [1,2,3,4];
let res5 = array5.filter((element) => element%2==1).reduce((sum,element) => sum+element);
console.log(res5);

console.log("problem 6");

let array6 = [1,2,3,4,5,6];
let res6 = array6.filter((element) => element%3==0).map((element) => element**3).reduce((sum,element) => sum+element);
console.log(res6)