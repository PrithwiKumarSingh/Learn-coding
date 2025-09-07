// let age = 21;
// const name = "Prithwi";
// var city = "Varanasi";

// console.log(`age ${age}, name ${name}, city ${city}`);


// let num = 42;         // number
// let text = "hello";   // string
// let isCool = true;    // boolean
// let empty = null;     // null
// let notSet;           // undefined
// console.log(typeof notset);


// let arr = [1,2,4,-5,6,7,"Prithwi", true];
// console.log(arr[7]);

// let num = arr[3];

// if(num>0)console.log("Positive")
//     else console.log("Negative")


// let users = ["harkirat", "raman", "Prithwi", "Kajal", "Aman"];

// for(let i=0; i<users.length;i++){
//     console.log(users[i]);
// } 

// Assignment 

// let a = 10;
// let sum = 0;
// for(let i=1; i<=a; i++){
//     sum += i;
// }
// console.log(sum);

// const sum = (a,b)=>{return console.log(a + b)};
// sum(5,4);
// sum("Prithwi"," Singh");


// Assignment #2
// Write a function called canVote that returns true or false if the age of a user is > 18

// age = 15;



// if(age>=18){
//     console.log("canVote");
// }else{
//     console.log("You are minor can'tVote");
// }

// let num = 30;

// if(num%2==0){
//     console.log("The Number is even");
// }else{ console.log("The number is odd")};


// Object 

// let user = {
//     name : "Prithwi",
//     age : 21
// }
// console.log("Prithwi age is "+user.age);

// Assignment #1
// Write a function that takes a user as an input and greets them with their name and age

// let data = {
//     name : "Prithwi",
//     age : 34,

// }
// const user = (data)=>{return console.log(" Hello "+data.name +"Your age is : "+data.age)};
// user(data);

let user1 = {
    firstName: "Mr.",
    middleName : "Prithwi",
    lastName : "Kumar",
    age : 21,
    gender : "Male"
}
let user2 = {
    firstName: "Mrs.",
    middleName : "Anamika",
    lastName : "Singh",
    age : 22,
    gender : "Female"
}

const vote = (data)=>{
    if(data>=18){
        return " You Can Vote. ";
    }else{ return "You Can't Vote (underage)"}
}

const show = (data)=>{
        let res = vote(data.age);
    console.log(`Hello, ${data.firstName} ${data.middleName} ${data.lastName} 
                 Your age is ${data.age} & 
                 Your gender is ${data.gender}.
                 ${res}`)
    }
show(user1);
show(user2);


