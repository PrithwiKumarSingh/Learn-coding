const express = require("express");
const app = express();


app.use("/user",(req,res,next)=>{
  console.log(`${Date.now()} ${req.method} ${req.url} `);
  // 30 line of code(Authentication);  // Good Practice (middleware);
  next();
})


// Same line of Authentication code written multiple times is not a good practice of prgrammer then we use middleware to performe this task
app.get("/user", (req,res)=>{
// 30 line of code(Authentication) => Bad Practice
  res.send("Item Received");
})

app.patch("/user",(req,res)=>{
// 30 line of code(Authentication) => Bad practice
  res.send("Item Patched");
})

app.delete("/user", (req,res)=>{
// 30 line of code(Authentication) => Bad Practice  
  res.send("Item Deleted");
})


app.listen(3000, (req,res)=>{
  console.log("Server Started on Port 3000");
})
