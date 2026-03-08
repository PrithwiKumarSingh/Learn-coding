const mongoose = require('mongoose');
const { Schema} = mongoose; 

async function main(){
  await mongoose.connect('mongodb+srv://CoderPrithwi:Prithwi%40123@codingprithwi.suswp5x.mongodb.net/BookStore');

  // below code is for creating a schema and model for a collection named 'users'
  // const userSchema = new Schema({
  //   name : String,
  //   age : Number, 
  //   city : String
  // });

  // Model create  === collection create
  // const User = mongoose.model("User", userSchema);

  // Document create or Obeject create
  // const user1 = new User({name:"Vishal", age: 25, city: "Delhi"});
  // await user1.save();

  // // Second way to create a document
  // await User.create({name:"Rashi", age: 22, city: "Motihari"});

  // await User.insertMany([{name : "Ansh", age : 22, city : "Haridwar"},{age : 23, city : "Dehradun"}])

  // const ans = await User.find({});
  // console.log(ans);

  // Find document by particular name 
  // const result = await User.find({name : "Rashi"});
  // console.log(result);

}

module.exports = main;