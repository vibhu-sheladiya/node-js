const express=require('express');
const {  productController}=require('../../controller');
// const { validate } = require('../../models/user.model');
const validate=require('../../middlewares/validate');
const {productValidation}= require('../../validations');

const router=express.Router();

// create book
router.post("/create-product",
validate(productValidation.createProducts),
productController.createProduct
);

// get list book detail
router.get("/list",
productController.getProductList
);

// get Book details By Id 
router.get("/get-details/:productId",
productController.getProductId);

// delete book
// router.delete("/delete-book/:bookId",
// validate(bookValidation.getDetails),
// bookController.deleteBook);


module.exports=router;