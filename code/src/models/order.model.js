const mongoose=require("mongoose");
const orderScheme=new mongoose.Schema({

},{timestamps:true});
const Order=mongoose.model("order",orderScheme);
module.exports=Order;