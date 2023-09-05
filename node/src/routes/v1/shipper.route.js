const express=require('express');
const { shipperController}=require('../../controller');
const validate=require('../../middlewares/validate');
const {shipperValidation}= require('../../validations');
const router=express.Router();

// create shipper
router.post("/create-shipper",
validate(shipperValidation.createShipper),
shipperController.createShipper
);

// get list shipper detail
router.get("/list",
shipperController.getShipperList
);

// get shipper details By Id 
router.get("/get-details/:shipperId",
shipperController.getShipperId
);

// delete shipper
router.delete("/delete-shipper/:shipperId",
shipperController.deleteShipper
);


module.exports=router;