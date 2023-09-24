const {Worker}=require('../models');

const createWorker=async(reqBody)=>{
    return Worker.create(reqBody);
};

const getWorkerList=async(req,res)=>{
    return Worker.find()
};

const getWorkerId=async(workerId)=>{
    return Worker.findById(workerId);
};

const deleteWorkerId=async(workerId)=>{
    return Worker.findByIdAndDelete(workerId);
};

const updateWorker=async(workerId,updateBody)=>{
    return await Worker.findByIdAndUpdate(workerId,{$set:updateBody},{new:true});
};
module.exports={createWorker ,getWorkerList,getWorkerId,deleteWorkerId,updateWorker}