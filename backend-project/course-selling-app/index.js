const express = require("express");
const { userRouter } = require("./routes/user");
const {courseRouter} = require("./routes/course");
const { adminRouter } = require("./routes/admin");


const app  = express();

app.get("/prithwi",(req,res)=>{
    res.json({
        message: "hello ji" 
    })
})

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter )


app.listen(3000)
