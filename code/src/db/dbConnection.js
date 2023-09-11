const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
  mongoose
    // .connect("mongodb+srv://vibhasheladiya3936:azHqS6BCvCKsIqMV@cluster0.gxfoxkv.mongodb.net",config.mongodb.option)
    .connect(config.mongodb.url, config.mongodb.option)
    .then((data) => {
      console.log("MongoDB Connected");
    })
    .catch(() => {
      console.error("Error connecting to MongoDB", error);
    });
};

module.exports = { connectDB };
