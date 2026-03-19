const {mongoose} = require("express");

const adminDb = async ()=>{
    await mongoose.connect("mongodb+srv://CoderPrithwi:Prithwi%40123@codingprithwi.suswp5x.mongodb.net/BakendCourseSelling")

}

module.exports = {
    adminDb : adminDb
}