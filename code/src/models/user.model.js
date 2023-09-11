const mongoose = require("mongoose");
const userScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your Name"],
      trim: true,
    },
    email: {
      type: String,
      unique: true, //email must be unique in the database
      trim: true,
    },
    password: {
      type: String,
      required: [true, "please provide a Password"],
    },
  },
  { timestamps: true }
);
const User = mongoose.model("user", userScheme);
module.exports = User;
