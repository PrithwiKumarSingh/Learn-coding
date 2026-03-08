const mongoose = require('mongoose');

async function main  (){
  await mongoose.connect("mongodb+srv://CoderPrithwi:Prithwi%40123@codingprithwi.suswp5x.mongodb.net/Instagram");
}

module.exports = main;