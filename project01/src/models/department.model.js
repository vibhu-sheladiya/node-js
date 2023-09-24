const mongoose=require('mongoose');
const departmentSchema=new mongoose.Schema(
    {
        depart_name:{
            type:String,
            required:[true,'please enter the name of your Department'],
            trim:true,
        }
    },{timestamps:true,versionKey:false}
);

const Department=mongoose.model('department',departmentSchema);
module.exports =Department;