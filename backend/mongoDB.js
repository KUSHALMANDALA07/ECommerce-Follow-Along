const mongoose = require('mongoose');

async function connect() {
  try {
      await mongoose.connect('mongodb+srv://kushalmandala123:iamkushal07@cluster0.yly7z.mongodb.net/') 
    } catch (error) {
    console.log('Failed to connect to MongoDB', error);
  }
}

module.exports = connect;