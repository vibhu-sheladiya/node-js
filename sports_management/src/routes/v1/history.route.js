const express=require('express');
const {historyController}=require('../../controllers');
const router=express.Router();

router.post('/create-history',
historyController.createHistory);

router.get('/list',
historyController.getHistoryList);

router.get('/id/:historyId',
historyController.getHistoryId);

router.delete('/delete/:historyId',
historyController.deleteHistory);

module.exports=router;