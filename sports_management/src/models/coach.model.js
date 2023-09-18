const mongoose=require('mongoose');
const coachSchema=new mongoose.Schema(
    {
        name:{
            type:String,trim:true,
        },
        email:{type: String},
        skill:{
            type:String,trim:true,//eg:-cricket football,khokho
        },team_member:{
            type:Array,
            ref:'member'
          },
    },{ timestamps: true }
);
const Coach=mongoose.model('coach',coachSchema);
module.exports =Coach;