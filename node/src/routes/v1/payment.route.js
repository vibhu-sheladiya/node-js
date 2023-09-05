const express=require('express');
const { paymentController}=require('../../controller');
const validate=require('../../middlewares/validate');
const {paymentValidation}= require('../../validations');
const router=express.Router();

// create payment
router.post("/create-payment",
validate(paymentValidation.createPayment),
paymentController.createPayment
);

// get list payment detail
router.get("/list",
paymentController.getPaymentList
);

// get payment details By Id 
router.get("/get-details/:paymentId",
paymentController.getPaymentDetails
);

// delete a
router.delete("/delete-payment/:paymentId",
paymentController.deletePayment
);


module.exports=router;