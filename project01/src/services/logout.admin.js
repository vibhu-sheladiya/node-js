const {Logoutadmin}=require('../models');

const createLogoutadmin=async(reqBody)=>{
    return Logoutadmin.create(reqBody);
};

const getLogoutadminList=async(req,res)=>{
    return Logoutadmin.find()
};

const getLogoutadminId=async(logoutadminId)=>{
    return Logoutadmin.findById(logoutadminId);
};

const deleteLogoutadminId=async(logoutadminId)=>{
    return Logoutadmin.findByIdAndDelete(logoutadminId);
};

const updateLogoutadmin=async(logoutadminId,updateBody)=>{
    return await Logoutadmin.findByIdAndUpdate(logoutadminId,{$set:updateBody},{new:true});
};
module.exports={createLogoutadmin ,getLogoutadminList,getLogoutadminId,deleteLogoutadminId,updateLogoutadmin}