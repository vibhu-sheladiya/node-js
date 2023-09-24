const mongoose=require('mongoose');
const employdetailSchema=new mongoose.Schema(
    {
        company_detail:{
            type:String,
            trim:true,
            ref:''
        },employee:{
            type:String,
            trim:true,
            ref:''
        },department:{
type:String,
ref:'',
        },
    },{timestamps:true}
);
const Viewdetail=mongoose.model('view_detail',employdetailSchema);
module.exports=Viewdetail;