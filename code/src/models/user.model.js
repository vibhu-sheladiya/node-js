const mongoose=require("mongoose");
const userScheme=new mongoose.Schema({

},{timestamps:true});
const User=mongoose.model("user",userScheme);
module.exports=User;