const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(
      "mongodb+srv://vibhasheladiya3936:azHqS6BCvCKsIqMV@cluster0.gxfoxkv.mongodb.net/project03"
    )
    .then(() => {
      console.log("mongo connect");
    })
    .catch(() => {
      console.error("error is connecting db");
    });
};
module.exports = { connectDB };
