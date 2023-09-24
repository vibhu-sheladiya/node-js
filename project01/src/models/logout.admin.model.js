const mongoose=require('mongoose');
const logoutSchema=new mongoose.Schema(
    {
        admin:{
            type:String,
            ref:'admin',
        },
        email:{
            type:String,
            trim:true,
        },
    },{timestamps:true}
);
const Logoutadmin=mongoose.model('logout_admin',logoutSchema);
module.exports=Logoutadmin;