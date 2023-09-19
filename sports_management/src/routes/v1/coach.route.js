const express=require('express');
const {coachController}=require('../../controllers');
const router=express.Router();

router.post('/create-coach',
coachController.createCoach);

router.get('/list',
coachController.getCoachList);

router.get('/id/:coachId',
coachController.getCoachId);

router.put('/update/:coachId',
coachController.updateCoach);

router.delete('/delete/:coachId',
coachController.deleteCoach);

module.exports=router;