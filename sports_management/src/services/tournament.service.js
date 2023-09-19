const {Tournament}=require('../models');

const createTournament=async(reqBody)=>{
    return Tournament.create(reqBody);
};

const getTournamentList=async(req,res)=>{
    return Tournament.find();
};

const getTournamentId=async(tournamentId)=>{
    return Tournament.findById(tournamentId);
};

const deleteTournamentId=async(tournamentId)=>{
    return Tournament.findByIdAndDelete(tournamentId);
};


module.exports={getTournamentList ,deleteTournamentId,createTournament,getTournamentId}