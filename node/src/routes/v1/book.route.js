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
validate(bookValidation.getBookList),
bookController.getBookList
);

// get Book details By Id 
router.get("/get-details/:bookId",
// validate(bookValidation.getDetails),
bookController.getBookDetails);

// delete book
router.delete("/delete-book/:bookId",
validate(bookValidation.getDetails),
bookController.deleteBook);


module.exports=router;