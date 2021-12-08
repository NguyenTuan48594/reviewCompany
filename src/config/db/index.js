const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://Tuan:0982276805@cluster0.nhtap.mongodb.net/examMidterm?retryWrites=true&w=majority"
    );
    console.log("connect succesfully");
  } catch (error) {
    console.log("connect failed");
  }
}

module.exports = { connect };
