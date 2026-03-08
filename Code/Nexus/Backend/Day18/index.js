const main = require("./database");
const User = require("./Models/users");
const express = require("express");

const app = express();
app.use(express.json());

app.get("/info", async (req,res)=>{
    try{
        const data = await User.find({});
        res.send(data);
    }catch(err){ 
        res.status(500).send("Error : "+err.message);
    }
})

app.get("/info/:id",async (req,res)=>{
    try{
        const data = await User.findById(req.params.id);
        res.send(data);
    }catch(err){
        res.status(404).send("Error : "+err.message);
    }
})

app.post("/register", async (req,res)=>{
    try{
        await User.create(req.body);
        res.send("Uesr Data Saved Succesfully");
    }catch(err){
        res.status(400).send("Error : "+err.message);
    }
});

app.delete("/user/:id",async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.send("Delete Succesfully");
    }catch(err){
        res.status(400).send("Error : " + err.message);
    }
})

app.patch("/user",async(req,res)=>{
    try{
        const {id, ...update} = req.body; 
        await User.findByIdAndUpdate(id, update,{"runValidators" : true});
        res.send("Update Succesfully");
    }catch(err){
        res.status(404).send("Error : " + err.message);
    }
})


main()
.then(()=>{
    console.log("MongoDB Connected Succesfully");
    app.listen(3000, ()=>{
    console.log("Server is Listening on port 3000");
})
})
.catch((err)=>{
    console.error("Error : ", err);
})
