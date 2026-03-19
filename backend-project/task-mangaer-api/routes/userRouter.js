import {userAuth} from '../middleware/userAuth.js';
import {Task} from "../model/TaskModel.js";
import express from "express";


export const userRouter = express.Router();



userRouter.post("/task",userAuth,async (req,res)=>{
    try{
        await Task.create(req.body);
        res.send("Succesfully added");
    }catch(err){
        res.send("Error : "+err);
    }
})


userRouter.get("/task",userAuth,async (req,res)=>{
    console.log("Takdsd");
    try{
        const data = await Task.find({});
        res.send(data);
    }catch(err){
        res.send("Error : "+err);
    }
})

userRouter.delete("/task/:id",userAuth, async (req,res)=>{
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.send("Delete Succesfully");
    }catch(err){
        res.send("Error : "+err.message);
    }
})