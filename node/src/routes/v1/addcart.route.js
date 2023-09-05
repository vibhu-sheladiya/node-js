const express=require('express');
const { addcartController}=require('../../controller');
const { validate } = require('../../models/user.model');
const { productValidation } = require('../../validations');

const router=express.Router();

// create book
router.post("/create-cart",
addcartController.createCart
);

// get list book detail
router.get("/list",
addcartController.getCartList
);

// get Book details By Id 
router.get("/get-details/:cartId",
addcartController.getCartDetails
);

// delete book
router.delete("/delete-cart/:cartId",
addcartController.deleteCart
);


module.exports=router;