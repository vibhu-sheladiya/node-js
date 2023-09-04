const express=require('express');
const { orderController}=require('../../controller');

const router=express.Router();

// create orderController
router.post("/create-order",
orderController
);

// get list orderController detail
router.get("/list",
orderController
);

// get orderController details By Id 
router.get("/get-details/:orderId",
orderController
);

// delete orderController
router.delete("/delete-order/:orderId",
orderController
);


module.exports=router;