const express=require('express');
const { paymentController}=require('../../controller');

const router=express.Router();

// create payment
router.post("/create-payment",
paymentController
);

// get list payment detail
router.get("/list",
paymentController
);

// get payment details By Id 
router.get("/get-details/:paymentId",
paymentController
);

// delete a
router.delete("/delete-payment/:paymentId",
paymentController
);


module.exports=router;