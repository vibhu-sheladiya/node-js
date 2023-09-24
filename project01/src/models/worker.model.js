const mongoose=require('mongoose');
const workerSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
        },
        mobile:{
            type:Number,
            trim:true,
        },
        work_name:{
            type:String,
            trim:true,
        },
    },{timestamps:true},
);
const Worker=mongoose.model('worker',workerSchema);
module.exports=Worker;