const mongoose=require('mongoose');
const contactSchema=new mongoose.Schema(
    {
        //
        name:{
            type:String,
            trim:true,
        },
        email:{
            type:String,
            trim:true,
        },
    },{timestamps:true,},
);
const Contact=mongoose.model('contact',contactSchema)
module.exports =Contact;