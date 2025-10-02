
// let firstPromis = new Promise((resolve, reject)=>{
//     console.log("Adam Chal gya ! ")
// });


// let Promise1 = new Promise((resolve, reject)=>{
//     let success = true; 
//     if(success){
//         resolve("Promise fullfiled");
//     }else{
//         reject("Promise Rejected");
//     }
// })

// Promise1.then((massage)=>{
//     console.log("The ka massage is "+ massage);
// }).catch((error)=>{
//     console.log("Error : "+error);
// })


// // promise chaining 
// Promise1.then((massage)=>{
//     console.log("first msg : "+massage);
//     return ("Promise Fullfild ho gya Second msg");
// }).then((massage)=>{
//     console.log("Second msg : "+ massage);
//     return ("second massage fullfiled");
// }).then((massage)=>{
//     console.log("Third msg : " +massage);
// }).catch((error)=>{
//     console.log("Error: " + error);
// }).finally((massage)=>{
//     console.log("Main to final hoon : chalunga hi chalunga");
// })


// let Promise1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,"First");
// })
// let Promise2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,"second");
// })
// let Promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,"third");
// })
// let Promise4 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,"forth");
// })

// Promise.all([Promise1, Promise2, Promise3, Promise4]).then((massage)=>{
//     // console.log(massage);
//     for(let i=0; i<massage.length; i++){
//         console.log(massage[i]);
//     }
// }).catch((error)=>{
//     console.log("Error : " + error);
// })






// console.log("Start");

// const promise1 = new Promise((resolve, reject)=>{
//     console.log("massasge");
//     reject("Hello");
// }).then((massage)=>{
//     console.log(massage);
// }).catch((error)=>{
//     console.log("Error : "+error);
// })


const promise2 = new Promise((resolve, reject)=>{
    let success = true; 
    if(success){
        resolve("Promise Resolve Ho gya");
    }else{
        reject("Promise Reject Ho Gya");
    }
}).then((massage)=>{
    console.log("First : ", massage);
    resolve("resolve Ho hurry Up!");
}).then((massage)=>{
    console.log("Second : "+ massage);
}).catch( error => console.log("Error : "+error));