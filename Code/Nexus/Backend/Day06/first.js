const express = require('express');


const app = express();

app.use("/about/:id/:user",(req,res)=>{
    console.log(req.params);
    res.send({"name":"Prithwi Kumar", "age" : 20, "Address" : {"Village" : "Gokhula", "Post":"siswa","Polic Station":"Banjariya", "Pin Code" : 845401 }, "City" : "Motihari", "State" : "Bihar", "Phone":{ "father":9973779049, "me" : 9708930789, "GrandFather":8700322619, "BadeFather":7301622750}});
})

// app.use("/contact", (req,res)=>{
//     res.send("I am your contact page");
// })
// app.use("/detail", (req,res)=>{
//     res.send("I am your detail page");
// })
// app.use("/about/people",(req,res)=>{
//     res.send("I am a People"); 
// })

app.listen(4000,()=>{
    console.log("Sever Started Port No 4000 ");
})