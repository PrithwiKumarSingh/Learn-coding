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

// console.log("Start Code")

//  function timeout(){
//      console.log("Hello Prithwi");
// }

// setTimeout(timeout,5000);
// console.log("End The Code");



// Promises and async, awit


// class Rectangle {
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area(){
//         const area = this.width*this.height;
//         return area;
//     }
    
//     paint(){
//          console.log(`Painting with color ${this.color}`);
//     }
// }

// const rect = new Rectangle(2,4,'red');
// const area = rect.area();
// console.log(area);
// const paint = rect.paint();
// console.log(paint);



// const sum = (a,b)=>{return (this.a = a) + (this.b = b)};
// const res = sum(3,5);
// console.log(res);



// const rect1 = {
//     width: 2, 
//     height: 3, 
//     color:"red"
// }

// const areas = (rect)=>{ return rect.width * rect.height}

// const ans = new Rectangle(rect1.width, rect1.height, rect1.color);
// console.log(ans);



// Give UTC-0 time but india time zone UTC-5:30+
// const date = new Date();
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.toISOString());


// const map = new Map();
// map.set('name','Alice');
// map.set('age', 32);
// console.log(map.get('name'));
// console.log(map.get('age'));


// function setTimeoutPromisified(ms){
//     let p = new Promise(resolve => setTimeout(resolve,ms));
//     return p;
// }

// function callback(){
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);


// function waitFor3S(resolve){
//     setTimeout(resolve, 3000);
// }
// function main(){
//     console.log("main is called");
// }

// waitFor3S(main);


const random = (resolve)=>{
        setTimeout(resolve,5000);
}
