const mongoose=require('mongoose');
const employeeSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        image:{
            type : String 
        },
    },{timestamps:true}
);

const Employee=mongoose.model('employee',employeeSchema);
module.exports= Employee;