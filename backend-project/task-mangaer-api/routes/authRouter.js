import {User} from "../model/User.js";
import express from "express";
import {validuser} from "../utils/validUser.js"
import bcrypt from 'bcrypt';


export const authRouter = express.Router();

authRouter.post("/register", async (req,res)=>{
    try{
        validuser(req.body);
        console.log("Hello");

        const hash = await bcrypt.hash(req.body.password,10);
        req.body.password = hash;
        await User.create(req.body);
        res.send("Register Successfully")

    }catch(err){
        res.send("Error " + err.message);
    }
})

authRouter.post("/login", async (req,res)=>{
    try{
        const people = await User.findOne({email: req.body.email});
        if(!people)
            throw new Error ("Invalid Crediential")

        const IsAllowed = await people.verifyPassword(req.body.password); 
        if(!IsAllowed)
            throw new Error ("Invalid Creadential")


        const token = people.getJWT();
        console.log(token);
        console.log("Hello");
        res.cookie("token", token);

        res.send("Login Successfully ");
    }catch(err){
        res.send("Error :" + err.message);
    }
})