const mongoose=require('mongoose');
const historySchema=new mongoose.Schema(
    {
        match:{
            type:String,
            ref:'',
        },
        team:{
            type:String,
            ref:'',
        },
        founder:{
            type:String,
            ref:'',
        },
        tournament:{
            type:String,ref:'',
        },
    },{timestamps:true,},
);
const History=mongoose.model('history',historySchema)
module.exports =History;