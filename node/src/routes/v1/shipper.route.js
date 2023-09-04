const express=require('express');
const { shipperController}=require('../../controller');

const router=express.Router();

// create shipper
router.post("/create-shipper",
shipperController
);

// get list shipper detail
router.get("/list",
shipperController
);

// get shipper details By Id 
router.get("/get-details/:shipperId",
shipperController
);

// delete shipper
router.delete("/delete-shipper/:shipperId",
shipperController
);


module.exports=router;