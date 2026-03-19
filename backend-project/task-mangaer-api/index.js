import express from 'express'
import {main} from './config/database.js'
import 'dotenv/config';
import {authRouter} from "./routes/authRouter.js"
import {userRouter} from "./routes/userRouter.js"
import cookieParser from "cookie-parser";


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/user", userRouter);


main()
.then(()=>{
    console.log("DB connected");
    app.listen(process.env.PORT, ()=>{
        console.log(`Listening on Port Number ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("Error : "+err);
})