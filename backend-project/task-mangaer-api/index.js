import express from 'express'
import {Task} from './model/Model.js'
import {main} from './config/database.js'
import 'dotenv/config';


const app = express();
app.use(express.json());

app.post("/task",async (req,res)=>{
    try{
        await Task.create(req.body);
        res.send("Succesfully added");
    }catch(err){
        res.send("Error : "+err);
    }
})

app.get("/task",async (req,res)=>{
    try{
        const data = await Task.find({});
        res.send(data);
    }catch(err){
        res.send("Error : "+err);
    }
})


main()
.then(()=>{
    console.log("DB connected");
    app.listen(3000, ()=>{
        console.log("server started on port 3000");
    })
}).catch((err)=>{
    console.log("Error : "+err);
})