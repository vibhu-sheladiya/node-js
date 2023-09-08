const mongoose=require("mongoose");
const subcategoryScheme= new mongoose.Schema({

},{timestamps:true});
const Subcategory=mongoose.model("sub_category",subcategoryScheme);
module.exports=Subcategory;