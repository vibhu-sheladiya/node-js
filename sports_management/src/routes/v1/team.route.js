const express=require('express');
const {teamController}=require('../../controllers');
const router=express.Router();

router.post('/create-team',
teamController.createTeam);

router.get('/list',
teamController.getTeamList);

router.get('/id/:teamId',
teamController.getTeamId);

router.delete('/delete/:teamId',
teamController.deleteTeam);

module.exports=router;