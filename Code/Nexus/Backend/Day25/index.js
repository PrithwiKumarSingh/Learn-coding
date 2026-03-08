const express = require("express");
const main = require("./database");
const User = require("./Models/users");
const validuser = require("./utils/validuser");
const bcrypt = require("bcrypt");
const cookiesParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
require('dotenv').config()
const redisClient = require("./config/redis");
const rateLimiter = require("./rateLimiter");


const app = express();
app.use(express.json());
app.use(cookiesParser());

// Rate Limiter using Fixed winow 
app.use(rateLimiter);

app.use("/auth", authRouter);
app.use("/user", userRouter);


const InitializeConnection = async () => {
  try {
    // await redisClient.connect();
    // console.log("Redis connected Successfully");
    //
    // await main();
    // console.log("MongoDB connected Successfully");

    // connect parallel both DB using promise
    await Promise.all([redisClient.connect(), main()]);
    console.log("DB Connnected Successfully");

    app.listen(process.env.PORT, () => {
      console.log("Server is Listening on port 3000");
    })
  }
  catch (err) {
    console.log("Error : " + err);
  }
}

InitializeConnection();




//
// main()
//   .then(() => {
//     console.log("MongoDB Connected Succesfully");
//     app.listen(process.env.PORT, () => {
//       console.log("Server is Listening on port 3000");
//     })
//   })
//   .catch((err) => {
//     console.error("Error : ", err);
//   })
