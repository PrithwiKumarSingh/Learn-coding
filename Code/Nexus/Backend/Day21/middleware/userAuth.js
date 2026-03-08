const jwt = require("jsonwebtoken");
const User = require("../Models/users");

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    throw new Error("Token Doesn't exist");

  const payload = jwt.verify(token, "Prithwi@123");

  const { id } = payload;

  if (!id)
    throw new Error("Id is missing");

  const result = await User.findById(id);


  if (!result)
    throw new Error("User is Not Found");
  req.result = result;

  console.log("User Authentication ");
  next();

}

module.exports = userAuth;
