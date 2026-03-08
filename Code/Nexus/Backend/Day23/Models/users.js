const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 25 // firstname should be between 3 and 25 characters
  },
  lastname: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 14,
    max: 70 // age should be between 14 and 70
  },
  gender: {
    type: String,
    // enum : ['male', 'female', 'other']
    validate(value) {  // custom validation
      if (!['male', 'female', 'other'].includes(value))  // if the value is not in the allowed list, throw an error
        throw new Error("Gender Invalid");
    }
  },
  email: {
    type: String, // email is of type string
    required: true,  // email is required for each user
    unique: true, // email should be unique for each user
    immutable: true // email can not be changed once set
  }
}, { timestamps: true }); // timestamps will automatically add createdAt and updatedAt fields to the schema


// creating mongoose class 
UserSchema.methods.getJWT = function () {
  const ans = jwt.sign({ id: this.id, email: this.email }, process.env.SECRET_KEY, { expiresIn: 100 });
  return ans;
}
UserSchema.methods.verifyPassword = async function (password) {
  const ans = await bcrypt.compare(password, this.password);
  return ans
}

const User = mongoose.model('user', UserSchema);

module.exports = User;

