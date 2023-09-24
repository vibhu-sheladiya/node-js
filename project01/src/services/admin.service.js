const {Admin}=require('../models');

const createAdmin=async(reqBody)=>{
    return Admin.create(reqBody);
};

const getAdminList=async(req,res)=>{
    return Admin.find()
};

const getAdminId=async(adminId)=>{
    return Admin.findById(adminId);
};

const deleteAdminId=async(adminId)=>{
    return Admin.findByIdAndDelete(adminId);
};

const updateAdmin=async(adminId,updateBody)=>{
    return await Admin.findByIdAndUpdate(adminId,{$set:updateBody},{new:true});
};
module.exports={createAdmin ,getAdminList,deleteAdminId,updateAdmin,getAdminId}