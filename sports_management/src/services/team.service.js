const {Team}=require('../models');

const craeteTeam=async(reqBody)=>{
    return Team.create(reqBody);
};

const getTeamList=async(req,res)=>{
    return Team.find();
};

const getTeamId=async(teamId)=>{
    return Team.findById(teamId);
};

const deleteTeamId=async(teamId)=>{
    return Team.findByIdAndDelete(teamId);
};

module.exports={
    craeteTeam,deleteTeamId,getTeamList,deleteTeamId,getTeamId,}