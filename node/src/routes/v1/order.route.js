const express=require('express');
const { orderController}=require('../../controller');
const validate=require('../../middlewares/validate');
const {orderValidation}= require('../../validations');
const router=express.Router();

// create orderController
router.post("/create-order",
validate(orderValidation.createOrder),
orderController.createOrder
);

// get list orderController detail
router.get("/list",
orderController.getOrderList
);

// get orderController details By Id 
router.get("/get-details/:orderId",
orderController.getOrderDetails
);

// delete orderController
router.delete("/delete-order/:orderId",
orderController.deleteOrder
);


module.exports=router;