const {Founder}=require('../models');

const createFounder=async(reqBody)=>{
    return Founder.create(reqBody);
};

const getFounderList=async(req,res)=>{
    return Founder.find().populate('team');
};

const getFounderId=async(founderId)=>{
    return Founder.findById(founderId);
};

const deleteFounderId=async(founderId)=>{
    return Founder.findByIdAndDelete(founderId);
};


module.exports={getFounderList ,deleteFounderId,createFounder,getFounderId}