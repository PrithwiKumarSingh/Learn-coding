const express = require('express');
const app = express();


// app.use("/user", (req,res)=>{
//     res.send("Hello Coder Army");
// })

app.use(express.json());

app.get("/user",(req,res)=>{
    res.send({name:"Prithwi",
        current:"Dehradun"
    });
})

app.post("/user",(req,res)=>{
    console.log("Data Save Successfully");
    console.log(typeof req.body.age);
    res.send("Data Save Successfully");
})



app.listen(4000, ()=>{
    console.log("Listening port 4000")
})