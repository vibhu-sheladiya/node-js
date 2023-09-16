const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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
    img:{
      type :String ,
    }
  },
  { timestamps: true }
);
userScheme.pre("save", async function (next) {
  // const user = this;

  // if (user.isModified("password")) {
  //   user.password = bcrypt.hash(user.password, 8);
  // }
  // next();
  var salt = bcrypt.genSaltSync(10);
  this.password=await bcrypt.hash(this.password,salt);
console.log(bcrypt);
});
const User = mongoose.model("user", userScheme);
module.exports = User;
