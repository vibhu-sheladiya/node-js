const mongoose=require("mongoose");
const categoryScheme=new mongoose.Schema({

},{timestamps:true});
const Category=mongoose.model("category",categoryScheme);
module.exports=Category;