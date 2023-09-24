const mongoose=require('mongoose');
const emploginSchema=new mongoose.Schema(
    {
        employee:{
            type:String,
            ref:'employee',
        },
        password:{
            type:Number,
            trim:true,
        },
        email:{
type:String,
trim:true,
        },
    },{timestamps:true},
);

const Elogin=mongoose.model('emp_login',emploginSchema);
module.exports=Elogin;