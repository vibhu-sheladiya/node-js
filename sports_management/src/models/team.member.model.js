const mongoose=require('mongoose');
const memberSchema=new mongoose.Schema(
    {
        name:{type:String,trim:true},
        age:{
            type :Number ,
        },mobile:{
            type:Number,trim:true,
        },
        schedule_date:{ 
     type:Date,default: Date.now()
        }

},{timestamps:true,},
);
const Member=mongoose.model('member',memberSchema);
module.exports =Member;