const  {Router} = require( "express" );

const courseRouter = Router();

courseRouter.post("/purchase", (req,res)=>{
    res.json({
        message: "course purchase router"
    })

})


courseRouter.post("/preview", (req,res)=>{
    res.json({
        message: "See All Courses router"
    })

})


module.exports = {
    courseRouter : courseRouter
}