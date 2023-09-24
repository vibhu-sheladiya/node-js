const mongoose=require('mongoose');
const memberSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
        },
        role:{
            type:Array,
            trim:true,
        },
        project_detail:{
            type:String,
            ref:''
        },
    },{timestamps:true}
);
const Member=mongoose.model('member',memberSchema);
module.exports=Member;