const age = 21;
const firstName = "prithwi singh ";
const dob = '10/03/2004';

function sayName(){
    console.log('My name is ' + firstName);
}

// sayName();

function printName(){
    for(let i=0; i<5; i++){
        console.log(firstName);
    }
}
// printName();

function sumIndex(num){
    let sum = 0;
    for(let i=0; i<num.length; i++){
        sum += num[i] 
        console.log(sum);
    }
}

sumIndex('12345');