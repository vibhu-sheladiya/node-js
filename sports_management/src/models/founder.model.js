const mongoose=require('mongoose');
const founderSchema=new mongoose.Schema(
    {
        name:{type:String,
            trim:true,
        },
        nationality:{
            type : String ,
            trim  : true,
        },
        phone_no:{
            type    : Number,
            trim:true,
        },
        team:{
            type:String,
            ref:'team', //reference to the Team model
        },
    },{timestamps:true,},
);
const Founder=mongoose.model('founder',founderSchema);
module.exports =Founder;