const express = require("express");
const app = express();
app.use(express.json());

app.get("/user", (req,res,next)=>{
  console.log("first");
  next();
})
app.get("/user", (req,res,next)=>{
  console.log("Second");
  next();
})
app.get("/user",(req,res)=>{
  res.send("I third response");
})
app.listen(3000, (req,res)=>{
  console.log("Server Started on port 3000");
})
