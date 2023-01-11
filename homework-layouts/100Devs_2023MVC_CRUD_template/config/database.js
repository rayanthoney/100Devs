const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECTION);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB