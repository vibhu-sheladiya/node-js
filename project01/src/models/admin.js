const mongoose=require('mongoose');
const adminSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'name is required']
    },
        email:{type: String , unique : true},
        password:{
            type:String,trim:true,
        },
        role:{
            type:'string',enum:['admin','user'],default:"user",
        },
        mobile_no:{
            type:Number,unique:true,minlenghth:[1],maxlength:[10]
        },
        city:{
            type:String,
        }

    },{timestamps:true,versionKey:false}
);

const Admin=mongoose.model('admin',adminSchema);
module.exports=Admin;
