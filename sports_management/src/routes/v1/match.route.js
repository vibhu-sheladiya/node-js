const express=require('express');
const {matchController}=require('../../controllers');
const router=express.Router();

router.post('/create-match',
matchController.createMatch);

router.get('/list',
matchController.getMatchList);

router.get('/id/:matchId',
matchController.getMatchId);

router.delete('/delete/:matchId',
matchController.deleteMatch);

module.exports=router;