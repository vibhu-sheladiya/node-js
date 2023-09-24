const { default: mongoose } = require("mongoose");

const adminloginSchema=new mongoose.Schema(
    {
        admin:{
            type:String,
            ref:'admin',
        },
        email:{
            type:String,
            trim:true,
        },
        password:{
            type:Number,
        },
        name:{
            type:String,
            trim:true,
        },
    },{timestamps:true}
);
const Ladmin=mongoose.model('login_admin',adminloginSchema);
module.exports=Ladmin;