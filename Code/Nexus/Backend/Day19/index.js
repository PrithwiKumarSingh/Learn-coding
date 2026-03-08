const express = require("express");
const main = require("./database");
const User = require("./Models/users");
const validuser = require("./utils/validuser");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());



app.post("/register", async (req, res) => {
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

app.post("/login", async (req, res) => {

  try {
    const people = await User.findById(req.body.id);
    if (!(req.body.email === people.email))
      throw new Error("Invalid credentials")

    const IsAllowed = await bcrypt.compare(req.body.password, people.password);
    if (!IsAllowed)
      throw new Error("Invalid credentials");

    res.send(" Login Succesfully ");

  } catch (err) {
    res.send("Error : " + err.message);
  }
})



app.get("/info", async (req, res) => {
  try {
    const data = await User.find({});
    res.send(data);
  } catch (err) {
    res.status(500).send("Error : " + err.message);
  }
})

app.get("/info/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(404).send("Error : " + err.message);
  }
})


app.delete("/user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("Delete Succesfully");
  } catch (err) {
    res.status(400).send("Error : " + err.message);
  }
})

app.patch("/user", async (req, res) => {
  try {
    const { id, ...update } = req.body;
    await User.findByIdAndUpdate(id, update, { "runValidators": true });
    res.send("Update Succesfully");
  } catch (err) {
    res.status(404).send("Error : " + err.message);
  }
})


main()
  .then(() => {
    console.log("MongoDB Connected Succesfully");
    app.listen(3000, () => {
      console.log("Server is Listening on port 3000");
    })
  })
  .catch((err) => {
    console.error("Error : ", err);
  })
