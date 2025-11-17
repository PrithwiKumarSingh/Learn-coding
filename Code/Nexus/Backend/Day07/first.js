const express = require('express');

const app = express();

// app.use("/user", (req,res)=>{
//     res.send("Hello Coder Army");
// })


// parsing karni padti hai 
app.use(express.json());

app.get("/user", (req,res)=>{
    res.send({name:"Prithwi"});
})


app.post("/user",(req,res)=>{
    // console.log("Data saved Sucessfully");
    console.log(req.body);
    res.send("Data saved Sucessfully");

})

app.listen(4000, (()=>{
    console.log("Server Started Port 4000");
}))