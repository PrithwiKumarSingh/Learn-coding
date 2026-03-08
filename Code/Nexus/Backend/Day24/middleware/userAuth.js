const jwt = require("jsonwebtoken");
const User = require("../Models/users");
const redisClient = require("../config/redis");

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    throw new Error("Token Doesn't exist");

  const payload = jwt.verify(token, process.env.SECRET_KEY);

  const { id } = payload;

  if (!id)
    throw new Error("ID is Missing");

  const result = await User.findById(id);


  if (!result)
    throw new Error("User is Not Found");
  req.result = result;

  const IsBlocked = await redisClient.exists(`token:${token}`);
  if (IsBlocked)
    throw new Error("Invalid Token");

  next();

}

module.exports = userAuth;
