const mongoose=require('mongoose');
const sportSchema=new mongoose.Schema(
    {
        sport_name:{type:String,trim:true,},
        sport_description:{ type : String , trim : true },
        total_member:{
            type:Number,trim:true,
        },  team:{
            type:String,ref:'team',
          },
    },{ timestamps: true }
);
const Sport=mongoose.model('sport',sportSchema);
module.exports =Sport;