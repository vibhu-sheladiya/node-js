const mongoose=require('mongoose');
const matchSchema=new mongoose.Schema(
    {
        match_name:{type:String,trim:true,},
        sport_description:{ type : String , trim : true },
       location:{
            type:String,trim:true,
        },match_date:{
            type:Date,default: Date.now()
        } ,
        // img:{
        //     type:String,
        //     trim:true,
        // },
        // time:{
        //     type:Number,
        // },
        team:{
            type:String,ref:'team',
          },is_active:{
            type:Boolean, default:true,
          }
    },{ timestamps: true }
);
const Match=mongoose.model('match',matchSchema);
module.exports =Match;