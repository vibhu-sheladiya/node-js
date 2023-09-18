const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "please provide an email"],
      unique: true,
    }, //to check if the value is already in
    password: {
      type: String,
      minlength: 4,
    },
    role: {
      type: Array,
      trim: true,
      // default:'user',
      //   enum:['admin','editor'],
      // type:String,enum:['user','publisher'] // enum:-check if the value given is an item in the array
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  var salt = bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  console.log(bcrypt);
});
const User = mongoose.model("user", userSchema);
module.exports =  User ;
// ========> to my undestand below code plz do not disturb after  to view this code
//pre-hook to hash the password before saving it in db
// userSchema.pre("save", async function (next) {
//     if(!this.isModified("password")){
//         return next();
//         }
//         const salt = await bcrypt.genSalt(10);
//         console.log(`salt is ${salt}`);
//         this.password =await PASSWORD.hashSync(this.password, salt );
//         });
