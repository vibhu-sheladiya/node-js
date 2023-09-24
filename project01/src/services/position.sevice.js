const {Position}=require('../models');

const createPosition=async(reqBody)=>{
    return Position.create(reqBody);
};

const getPositionList=async(req,res)=>{
    return Position.find()
};

const getPositionId=async(positionId)=>{
    return Position.findById(positionId);
};

const deletePositionId=async(positionId)=>{
    return Position.findByIdAndDelete(positionId);
};

module.exports={createPosition ,getPositionList,getPositionId,deletePositionId}