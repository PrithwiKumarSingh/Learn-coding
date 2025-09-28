
let firstPromis = new Promise((resolve, reject)=>{
    console.log("Adam Chal gya ! ")
});


let Promise1 = new Promise((resolve, reject)=>{
    let success = true; 
    if(success){
        resolve("Promise fullfiled");
    }else{
        reject("Promise Rejected");
    }
})

Promise1.then((massage)=>{
    console.log("The ka massage is "+ massage);
}).catch((error)=>{
    console.log("Error : "+error);
})


// promise chaining 
Promise1.then((massage)=>{
    console.log("first msg : "+massage);
    return ("Promise Fullfild ho gya Second msg");
}).then((massage)=>{
    console.log("Second msg : "+ massage);
    return ("second massage fullfiled");
}).then((massage)=>{
    console.log("Third msg : " +massage);
}).catch((error)=>{
    console.log("Error: " + error);
}).finally((massage)=>{
    console.log("Main to final hoon : chalunga hi chalunga");
})