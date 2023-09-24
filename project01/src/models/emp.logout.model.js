const mongoose=require('mongoose');
const emplogoutSchema= new mongoose.Schema(
    {
        employee:{
            type:String,
            ref:'employee',
        },
        name:{
            type:String,
            trim:true,
        },
        email:{
            type:String,
            trim:true,
        },
        password:{
            type:String,
        },
    },{timestamps:true}
);
const Elogout=mongoose.model('emp_logout',emplogoutSchema);
module.exports=Elogout;