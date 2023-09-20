const mongoose=require('mongoose');
const historySchema=new mongoose.Schema(
    {
        match:{
            type:String,
            ref:'match',
        },
        team:{
            type:String,
            ref:'team',
        },
        founder:{
            type:String,
            ref:'founder',
        },
        tournament:{
            type:String,ref:'tournament',
        },is_active:{
            type : Boolean ,default : true 
        },
    },{timestamps:true,},
);
const History=mongoose.model('history',historySchema)
module.exports =History;