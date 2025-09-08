// //ParseInt parseFloat 
// function sum(a,b){
//     return parseInt(a) + parseFloat(b);
// }

// let ans = sum('2.2',"40.8");
// console.log(ans);


// //   find sum from 1 to a number 

// function sum(n){
//     let sum = 0; 
//     for(let i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }

// let res = sum(100);
// console.log(res);


// function sumFormula(num){
//     // let sum = ((num+1)*num) /2;
//     let sum = (num*(num+1)) /2;
//     return sum;

// }

// console.log(sumFormula(100));



// const fs = require("fs");
// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);
// const content = fs.readFileSync("b.txt", "utf-8");
// console.log(content);


// function sum(a,b){
//     return a+b;
// }
// function Subtraction(a,b){
//     return a-b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function divide(a,b){
//     return a/b;
// }

// function doOperation(a,b,op){
//     return op(a,b);
// }

// let res = doOperation(4,2,multiply);
// console.log(res);


// const fs = require('fs');
// function print(err, data){
//     if(err){
//         console.log("File is Not Found");
//     }else{console.log(data)}
// }

// fs.readFile("adf.txt", "utf-8", print);
// fs.readFile("b.txt", "utf-8", print);
// console.log("End of Code")

console.log("Start Code")

 function timeout(){
     console.log("Hello Prithwi");
}

setTimeout(timeout,5000);
console.log("End The Code");