const {History}=require('../models');

const createHistory=async(reqBody)=>{
    return History.create(reqBody);
};

const getHistoryList=async(req,res)=>{
    return History.find().populate('match').populate('team').populate('founder').populate('tournament');
};

const getHistoryId=async(historyId)=>{
    return History.findById(historyId);
};

const deleteHistoryId=async(historyId)=>{
    return History.findByIdAndDelete(historyId);
};


module.exports={getHistoryList ,deleteHistoryId,createHistory,getHistoryId}