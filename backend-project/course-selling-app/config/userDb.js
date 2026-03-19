const {mongoose} = require("express");

const userDb = async ()=>{
    await mongoose.connect("mongodb+srv://CoderPrithwi:Prithwi%40123@codingprithwi.suswp5x.mongodb.net/BakendCourseSelling")

}

module.exports = {
    userDb: userDb
}