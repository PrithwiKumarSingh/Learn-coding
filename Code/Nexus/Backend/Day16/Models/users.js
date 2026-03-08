const mongoose = require('mongoose');
const { Schema} = mongoose; 


  const userSchema = new Schema({
    name : String,
    age : Number, 
    city : String
  });
// 1. Create a model for the user "collection" using the schema defined above.
  const User = mongoose.model("User", userSchema);

  module.exports = User;