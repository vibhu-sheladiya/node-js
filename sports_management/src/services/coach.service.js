const {Coach}=require('../models');

const createCoach=async(reqBody)=>{
    return Coach.create(reqBody);
};

const getCoachList=async(req,res)=>{
    return Coach.find()
};

const getCoachId=async(coachId)=>{
    return Coach.findById(coachId);
};

const deleteCoachId=async(coachId)=>{
    return Coach.findByIdAndDelete(coachId);
};

const updateCoach=async(coachId,updateBody)=>{
    return await Coach.findByIdAndUpdate(coachId,{$set:updateBody},{new:true});
};
module.exports={getCoachList ,deleteCoachId,updateCoach,createCoach,getCoachId}