const express = require("express");
const app = express();

app.get("/user", (req,res,next)=>{
  console.log("First");
 // res.send("Hello Ji");
  next();
  console.log("Fifth");
},
  (req,res,next)=>{
    console.log("Second");
   // res.send("I am Second.");
    next();
    console.log("forth");
  },
  (req,res)=>{
    console.log("Third");
    res.send("I am third");
  }
)


app.listen(3000,()=>{
  console.log("Server Started on port 3000.");
});
