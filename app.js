const age = 21;
const firstName = "prithwi singh ";
const dob = '10/03/2004';

function sayName(){
    console.log('My name is ' + firstName);
}

sayName();

function printName(){
    for(let i=0; i<5; i++){
        console.log(firstName);
    }
}
printName();