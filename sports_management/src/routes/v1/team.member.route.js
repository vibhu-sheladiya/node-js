const express=require('express');
const {memberController}=require('../../controllers');
const router=express.Router();

router.post('/create-member',
memberController.createMember);

router.get('/list',
memberController.getMemberList);

router.get('/id/:memberId',
memberController.getMemberId);

router.delete('/delete/:memberId',
memberController.deleteMember);

module.exports=router;