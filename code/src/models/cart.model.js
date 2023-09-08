const mongoose= require("mongoose");
const cartScheme=new mongoose.Schema({
    
},{timestamps:true});
const Cart=mongoose.model("cart",cartScheme);
module.exports= Cart;