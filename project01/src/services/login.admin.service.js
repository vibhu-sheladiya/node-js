const {Ladmin}=require('../models');

const createLadmin=async(reqBody)=>{
    return Ladmin.create(reqBody);
};

const getLadminList=async(req,res)=>{
    return Ladmin.find()
};

const getLadminId=async(ladminId)=>{
    return Ladmin.findById(ladminId);
};

const deleteLadminId=async(ladminId)=>{
    return Ladmin.findByIdAndDelete(ladminId);
};

const updateLadmin=async(ladminId,updateBody)=>{
    return await Ladmin.findByIdAndUpdate(ladminId,{$set:updateBody},{new:true});
};
module.exports={createLadmin ,getLadminList,getLadminId,deleteLadminId,updateLadmin}