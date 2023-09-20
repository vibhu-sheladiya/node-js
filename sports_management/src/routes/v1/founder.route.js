const express=require('express');
const {founderController}=require('../../controllers');
const router=express.Router();

router.post('/create-founder',
founderController.createFounder);

router.get('/list',
founderController.getFounderList);

router.get('/id/:founderId',
founderController.getFounderId);

router.delete('/delete/:founderId',
founderController.deleteFounder);

module.exports=router;