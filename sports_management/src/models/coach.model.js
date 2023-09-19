const mongoose=require('mongoose');
const coachSchema=new mongoose.Schema(
    {
        name:{
            type:String,trim:true,
        },
        email:{type: String},
    },{ timestamps: true }
);
const Coach=mongoose.model('coach',coachSchema);
module.exports =Coach;