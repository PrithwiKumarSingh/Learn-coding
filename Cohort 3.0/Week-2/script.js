//ParseInt parseFloat 
function sum(a,b){
    return parseInt(a) + parseFloat(b);
}

let ans = sum('2.2',"40.8");
console.log(ans);


//   find sum from 1 to a number 

function sum(n){
    let sum = 0; 
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}

let res = sum(100);
console.log(res);
