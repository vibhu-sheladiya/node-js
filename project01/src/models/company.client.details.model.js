const mongoose=require('mongoose');
const clientSchema=new mongoose(
    {
        name:String,
        emailId:{type : String , unique : true},  //unique email id for each user
        country:{
            type : Array,
        },
        state:{
            type:String,
            //            type : Schema.Types.ObjectId, ref:'State'   //ref is used to refer the model in which we are referring
        },
    },{timestamps:true},
);
const Client=mongoose.model('client',clientSchema);
module.exports =Client;