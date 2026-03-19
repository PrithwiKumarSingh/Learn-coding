import jwt from 'jsonwebtoken';
import {User} from '../model/User.js';



export const userAuth = async (req,res,next)=>{

    try{
    const {token} = req.cookies;
    console.log(token);
    if(!token)
        throw new Error ("Token Doesn't Exists.");

    const payload = jwt.verify(token, process.env.KEY);

    const {id} = payload;
    if(!id)
        throw new Error ("Id Doesn't exists");

    const result = await User.findById(id);

    if(!result)
        throw new Error("User Not Found");

    req.result = result;

    console.log("Authentication Done");

    next();
}catch(err){
    res.send("Authentication Error : " + err.message);
}


}