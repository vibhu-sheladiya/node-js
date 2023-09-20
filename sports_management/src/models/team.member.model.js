const mongoose=require('mongoose');
const memberSchema=new mongoose.Schema(
    {
        name:{type:String,trim:true},
        age:{
            type :Number ,
        },mobile:{
            type:Number,trim:true,
        },country:{
            type:String,
        },
    //     schedule_date:{ 
    //  type:Date,default: Date.now()
    //     }
    role:{
        type:Array,
    },is_active:{
        type:Boolean, default:true,
    }

},{timestamps:true,},
);
const Member=mongoose.model('member',memberSchema);
module.exports =Member;