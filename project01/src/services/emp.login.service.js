const {Elogin}=require('../models');

const createElogin=async(reqBody)=>{
    return Elogin.create(reqBody);
};

const getEloginList=async(req,res)=>{
    return Elogin.find()
};

const getEloginId=async(eloginId)=>{
    return Elogin.findById(eloginId);
};

const deleteEloginId=async(eloginId)=>{
    return Elogin.findByIdAndDelete(eloginId);
};

const updateElogin=async(eloginId,updateBody)=>{
    return await Elogin.findByIdAndUpdate(eloginId,{$set:updateBody},{new:true});
};
module.exports={createElogin ,getEloginList,getEloginId,deleteEloginId,updateElogin}