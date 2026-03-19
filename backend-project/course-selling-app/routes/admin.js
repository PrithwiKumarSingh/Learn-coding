const {Router} = require("express");

const adminRouter = Router();

adminRouter.post("/login", (req,res)=>{
    res.json({
        message: "admin login Page"
    })
})

adminRouter.post("/logout",(req,res)=>{
    res.json({
        message: "admin logout page"
    })
})

adminRouter.post("/course", (req,res)=>{
    res.json({
        message: "admin can create course here"
    })
})

adminRouter.put("/course",(req,res)=>{
    res.json({
        message: "admin can delete the course"
    })
})

adminRouter.get("/course/bulk", (req,res)=>{
    res.json({
        message: "admin can see all the courses"
    })
})


module.exports = {
adminRouter : adminRouter
}