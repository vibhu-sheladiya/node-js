const express=require('express');
const {tournamentController}=require('../../controllers');
const router=express.Router();

router.post('/create-tournament',
tournamentController.createTournament);

router.get('/list',
tournamentController.getTournamentList);

router.get('/id/:tournamentId',
tournamentController.getTournamentId);

router.delete('/delete/:tournamentId',
tournamentController.deleteTournament);

module.exports=router;