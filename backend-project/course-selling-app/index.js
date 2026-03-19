const express = require("express");
const { userRouter } = require("./routes/user");
const {courseRouter} = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const dotenv = require("dotenv");
dotenv.config();


const app  = express();

app.get("/prithwi",(req,res)=>{
    res.json({
        message: "hello ji" 
    })
})

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter )


const main = async()=>{
     await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
     app.listen(3000)
     console.log("Server is running on port 3000");
}
