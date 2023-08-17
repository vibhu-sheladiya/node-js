const express=require('express');
const { bookController}=require('../../controller');

const router=express.Router();

// create book
router.post("/create-book",
bookController.createBook
);
module.exports=router;