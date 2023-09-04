const express=require('express');
const { addcartController}=require('../../controller');

const router=express.Router();

// create book
router.post("/create-cart",
addcartController
);

// get list book detail
router.get("/list",
addcartController
);

// get Book details By Id 
router.get("/get-details/:cartId",
addcartController
);

// delete book
router.delete("/delete-cart/:cartId",
addcartController
);


module.exports=router;