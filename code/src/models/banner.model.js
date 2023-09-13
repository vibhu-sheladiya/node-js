const mongoose=require('mongoose');
const config=require('../config/config');

const bannerSchema=mongoose.Schema(
    {
        banner_name:{
            type:String,
            trim:true,
        },
        banner_image:{
            type : String
        },
        banner_des:{
            type:String,
            trim:true,
        },
        product:{
            type:mongoose.Types.ObjectId,
            ref:'product',
        },
        is_active:{
            type:Boolean , default:false,
        },
    },
    {timestamps:true,versionKey:false,}
);
const Banner=mongoose.model('banner',bannerSchema);
module.exports =Banner;