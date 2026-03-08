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

const app = express();
app.use(express.json());
app.use(cookiesParser());

app.use("/auth", authRouter);
app.use("/user", userRouter);



main()
  .then(() => {
    console.log("MongoDB Connected Succesfully");
    app.listen(process.env.PORT, () => {
      console.log("Server is Listening on port 3000");
    })
  })
  .catch((err) => {
    console.error("Error : ", err);
  })
