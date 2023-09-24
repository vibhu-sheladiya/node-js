const mongoose=require('mongoose');
const roleSchema=new mongoose.Schema(
    {
        role_name:{
            type:String,
            trim:true,
        },
    },{timestamps:true}
);
const Role=mongoose.model('role',roleSchema);
module.exports=Role;