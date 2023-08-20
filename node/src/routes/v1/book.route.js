const express=require('express');
const { bookController}=require('../../controller');
const validate=require('../../middlewares/validate');
const {bookValidation}= require('../../validations');

const router=express.Router();

// create book
router.post("/create-book",
validate(bookValidation.createBook),
bookController.createBook
);

// get list book detail
router.get("/list",

bookController.getBookList
)

module.exports=router;