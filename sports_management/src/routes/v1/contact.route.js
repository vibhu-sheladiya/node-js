const express=require('express');
const { contactController}=require('../../controllers');
const router=express.Router();

router.post('/create-contact',
contactController.createContact);

router.get('/list',
contactController.getContactList);

router.get('/id/:contactId',
contactController.getContactId);

router.delete('/delete/:contactId',
contactController.deleteContact);

module.exports=router;