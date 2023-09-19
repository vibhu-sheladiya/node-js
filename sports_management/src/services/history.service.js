const {History}=require('../models');

const createHistory=async(reqBody)=>{
    return History.create(reqBody);
};

const getHistoryList=async(req,res)=>{
    return History.find();
};

const getHistoryId=async(historyId)=>{
    return History.findById(historyId);
};

const deleteHistoryId=async(historyId)=>{
    return History.findByIdAndDelete(historyId);
};


module.exports={getHistoryList ,deleteHistoryId,createHistory,getHistoryId}