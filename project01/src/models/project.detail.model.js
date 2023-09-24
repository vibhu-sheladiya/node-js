const mongoose=require('mongoose');
const projectSchema=new mongoose.Schema(
    {
        project_name:{
            type:String,
            trim:true,
        },
        project_team:{
            type:String,
            trim:true,
        },
    },{timestamps:true}
);

const Project=mongoose.model('project',projectSchema);
module.exports=Project;