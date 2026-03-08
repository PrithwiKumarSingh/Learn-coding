const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  firstname : {
    type : String,
    required : true,
    minLength : 3,
    maxLength : 25  // firstname should be between 3 and 25 characters
  },
  lastname : {
    type : String
  },
  age : {
    type : Number,
    min : 14, 
    max : 70 // age should be between 14 and 70
  }, 
  gender : { 
    type : String,
    // enum : ['male', 'female', 'other']
    validate(value){  // custom validation
      if(!['male', 'female', 'other'].includes(value));  // if the value is not in the allowed list, throw an error
      throw new Error("Gender Invalid");
    }
  },
  email : {
    type : String, // email is of type string
    required : true,  // email is required for each user
    unique : true, // email should be unique for each user
    immutable : true // email can not be changed once set
  }
},{timestamps : true}); // timestamps will automatically add createdAt and updatedAt fields to the schema

const User = mongoose.model('user', UserSchema);

module.exports = User;

