const express = require("express");
const userRouter = express.Router();
const User = require("../Models/users");
const userAuth = require("../middleware/userAuth");

userRouter.get("/", userAuth, async (req, res) => {
  try {
    const data = await User.find({});
    res.send(data);

  } catch (err) {
    res.status(500).send("Error : " + err.message);
  }
})

userRouter.get("/:id", userAuth, async (req, res) => {
  try {
    res.send(req.result);
  } catch (err) {
    res.status(404).send("Error : " + err.message);
  }
})


userRouter.delete("/:id", userAuth, async (req, res) => {
  try {
    const { id } = req.result;
    await User.findByIdAndDelete(id);
    res.send("Delete Succesfully");
  } catch (err) {
    res.status(400).send("Error : " + err.message);
  }
})

userRouter.patch("/", userAuth, async (req, res) => {
  try {
    const { id, ...update } = req.body;
    await User.findByIdAndUpdate(id, update, { "runValidators": true });
    res.send("Update Succesfully");
  } catch (err) {
    res.status(404).send("Error : " + err.message);
  }
})

module.exports = userRouter;
