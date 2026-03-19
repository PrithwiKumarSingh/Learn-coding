const {Router} = require("express");

const userRouter = Router();

userRouter.post("/login", (req,res)=>{
    res.json({
        message: "uesr Login Page"
    })
})
userRouter.post("/signup", (req,res)=>{
    res.json({
        message: "uesr signup Page"
    })
})

userRouter.get("/purchases", (req,res)=>{
    res.json({
        message: "uesr purchase Page"
    })
})


module.exports = {
    userRouter:userRouter
}


