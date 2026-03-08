const express = require('express');
const app = express();
const main = require('./database');
const User = require("./Models/users");

app.use(express.json());

app.get("/user",async (req,res)=>{
    const ans = await User.find({});
    res.send(ans);
})

app.post("/user",async (req,res)=>{
    try{
    await User.create(req.body);
    res.send("Successfully Updated");
    }catch(err){
        res.status(500).send(err);
    }
})

// app.delete("/user", async (req,res)=>{
//     await User.deleteOne({name : "Rashi"});
//     res.send("Deleted");
// })

app.delete("/user", async (req,res)=>{

    try{
        const {city} = req.body;
        await User.deleteOne({city});
        res.send("Deleted");
    }catch(err){
        res.status(500).send(err);
    }
})

app.put("/user", async (req,res)=>{
    try{
       const {name} = req.body;
        await User.updateOne({name}, {city : "Motihari"});
        res.send("Update Successfully");
    }catch(err){
        res.status(500).send("Error is : " + err);
    }
})


main()
.then(async () => {
    console.log('Connected to MongoDB')
    app.listen(3000,()=>{
    console.log("Listen at port 3000");
    });
})
.catch((err) => console.error('Error connecting to MongoDB:', err));
