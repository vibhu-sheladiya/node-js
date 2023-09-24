const {Role}=require('../models');

const createRole=async(reqBody)=>{
    return Role.create(reqBody);
};

const getRoleList=async(req,res)=>{
    return Role.find()
};

const getRoleId=async(roleId)=>{
    return Role.findById(roleId);
};

const deleteRoleId=async(roleId)=>{
    return Role.findByIdAndDelete(roleId);
};


module.exports={createRole ,getRoleList,getRoleId,deleteRoleId,}