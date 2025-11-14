const fs = require('fs');

const a = 10; 
const b = "Hello World";

console.log(b);

function sum(a,b){
    return a + b;
}


// readFile is a part of libuv 
fs.readFile("./data.json", "utf-8", (err,res)=>{
    console.log(res);
})

setTimeout(()=>{
    console.log("I'm setTimeout Function");
}, 3000);


console.log(sum(3,5));

console.log(a);

