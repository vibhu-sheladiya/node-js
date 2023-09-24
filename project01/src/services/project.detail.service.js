const {Project}=require('../models');

const createProject=async(reqBody)=>{
    return Project.create(reqBody);
};

const getProjectList=async(req,res)=>{
    return Project.find()
};

const getProjectId=async(projectId)=>{
    return Project.findById(projectId);
};

const deleteProjectId=async(projectId)=>{
    return Project.findByIdAndDelete(projectId);
};

const updateProject=async(projectId,updateBody)=>{
    return await Project.findByIdAndUpdate(projectId,{$set:updateBody},{new:true});
};
module.exports={createProject ,getProjectList,getProjectId,deleteProjectId,updateProject}