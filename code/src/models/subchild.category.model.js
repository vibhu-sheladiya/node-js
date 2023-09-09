const mongoose=require("mongoose");
const subChildCategoryScheme= new mongoose.Schema({
    name:{
        type:String,required:[true,"subcategory is required"],trim:true,
        },
        desc:{
            type : String ,
            trim:true,
        },
        sub_category: {
            type: mongoose.Types.ObjectId,
            ref: "subcategory",
          },
        is_active:{
            type:Boolean,default:false
        },
},{timestamps:true});
const Subcategory=mongoose.model("subchildcategory",subChildCategoryScheme);
module.exports=Subcategory;