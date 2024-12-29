function sayHello(){
    console.log("Hello Namaste !");
}

sayHello();

function sum(a,b){
    return a + b;
}

function calculateDig(a,b, op){
    if(op == "+"){
        console.log(`sum of ${a} + ${b} = ${a + b}`);
    } else if(op == "-"){
        console.log(`sub of ${a} - ${b} = ${a - b}`);
    }
     else if(op == "*"){
        console.log(`prod of ${a} * ${b} = ${a * b}`);
    }
     else if(op == "-"){
        console.log(`divide of ${a} / ${b} = ${a / b}`);
    }
}

calculateDig(5,3,"*");

function randomDig(){
    let random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
}

function generateLoop(n){
    for(int i=0; i<n; i++){
        randomDig();
    }
generateLoop(10);
    
