const mongoose=require('mongoose');
const employeeSchema=new mongoose.Schema(
    {
        name:{type:String,trim:true},
        email:{ type : String , unique : true },  //unique email id for each user
        password:{type:String},
        city:{type:String,trim:true,},
    },{timestamps:true,versionKey:false}
);
const Employee=mongoose.model('employee',employeeSchema);
module.exports =Employee;