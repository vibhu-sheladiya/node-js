const mongoose = require("mongoose");
const mobileScheme = new mongoose.Schema(
  {
 
  },
  { timestamps: true,versionKey:false},
);

const Mobile  = mongoose.model("mobileshop", mobileScheme);
module.exports =Mobile;
