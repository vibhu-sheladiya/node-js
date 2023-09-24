const {Elogout}=require('../models');

const createElogout=async(reqBody)=>{
    return Elogout.create(reqBody);
};

const getElogoutList=async(req,res)=>{
    return Elogout.find()
};

const getElogoutId=async(elogoutId)=>{
    return Elogout.findById(elogoutId);
};

const deleteElogoutId=async(elogoutId)=>{
    return Elogout.findByIdAndDelete(elogoutId);
};

const updateElogout=async(elogoutId,updateBody)=>{
    return await Elogout.findByIdAndUpdate(elogoutId,{$set:updateBody},{new:true});
};
module.exports={createElogout ,getElogoutList,getElogoutId,deleteElogoutId,updateElogout}