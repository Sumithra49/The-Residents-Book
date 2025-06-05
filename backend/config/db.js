const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected db");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDb;
