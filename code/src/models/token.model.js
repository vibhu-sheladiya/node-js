const mongoose=require('mongoose');

const tokenScehma=mongoose.Schema({
    token:{
        type:String,
    },
    expire_time:{
        // type : Date , default : new Date() + 10*60 * 1000, //default time is one hour
type:Date,
default:null,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'user',
    }, 
},
{
    timestamps: true,
    versionKey: false,
});

const Token=mongoose.model('token',tokenScehma);
module.exports=Token;