const {Department}=require('../models');

const createDepartment=async(reqBody)=>{
    return Department.create(reqBody);
};

const getDepartmentList=async(req,res)=>{
    return Department.find()
};

const getDepartmentId=async(departmentId)=>{
    return Department.findById(departmentId);
};

const deleteDepartmentId=async(departmentId)=>{
    return Department.findByIdAndDelete(departmentId);
};

const updateDepartment=async(departmentId,updateBody)=>{
    return await Department.findByIdAndUpdate(departmentId,{$set:updateBody},{new:true});
};
module.exports={createDepartment ,getDepartmentList,getDepartmentId,deleteDepartmentId,updateDepartment}