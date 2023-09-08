const mongoose=require("mongoose");
const productScheme=new mongoose.Schema({

},{timestamps:true});
const Product=mongoose.model("product",productScheme);
module.exports=Product;