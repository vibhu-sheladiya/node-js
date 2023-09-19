const {Match}=require('../models');

const craeteMatch=async(reqBody)=>{
    return Match.create(reqBody);
};

const getMatchList=async(req,res)=>{
    return Match.find();
};

const getMatchId=async(matchId)=>{
    return Match.findById(matchId);
};

const deleteMatchId=async(matchId)=>{
    return Match.findByIdAndDelete(matchId);
};

module.exports={
    craeteMatch,getMatchList,getMatchId,deleteMatchId}