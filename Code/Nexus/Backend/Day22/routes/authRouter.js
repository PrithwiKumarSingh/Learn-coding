const express = require("express");
const authRouter = express.Router();
const User = require("../Models/users");
const bcrypt = require("bcrypt");
const validuser = require("../utils/validuser");


authRouter.post("/register", async (req, res) => {
  try {
    validuser(req.body);
    // converting password into hash 
    req.body.password = await bcrypt.hash(req.body.password, 10);
    await User.create(req.body);
    res.send("Uesr Data Saved Succesfully");
  } catch (err) {
    res.status(400).send("Error Here : " + err.message);
  }
});

authRouter.post("/login", async (req, res) => {

  try {
    const people = await User.findOne({ email: req.body.email });
    if (!(req.body.email === people.email))
      throw new Error("Invalid credentials")

    const IsAllowed = people.verifyPassword(req.body.password);
    if (!IsAllowed)
      throw new Error("Invalid credentials");

    // jwt token 
    const token = people.getJWT();
    res.cookie("token", token);

    res.send(" Login Succesfully ");

  } catch (err) {
    res.send("Error : " + err.message);
  }
})


module.exports = authRouter;


