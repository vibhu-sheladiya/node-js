const mongoose=require('mongoose');
const coachSchema=new mongoose.Schema(
    {
        name:{
            type:String,trim:true,
        },
        email:{type: String},
        is_active:{
            type:Boolean,
            default : true,
        },
    },{ timestamps: true }
);
const Coach=mongoose.model('coach',coachSchema);
module.exports =Coach;