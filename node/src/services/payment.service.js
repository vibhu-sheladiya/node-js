const {Payment}=require("../models");
/**
 * Create Payment
 * @param {object} reqBody
 * @returns {Promise<Payment>}
 */
// create Payment service 
const createPayment= async(reqBody)=>{
return Payment.create(reqBody);
};

// get/list Payment service
const getPaymentList= async (req,res)=>{
    return Payment.find().populate("user");
}

// get Payment details by id 
const getPaymentById= async(paymentId)=>{
    return Payment.findById(paymentId);
};

// delete Payment
const deletePayment= async(paymentId)=>{
    return Payment.findByIdAndDelete(paymentId)
}

module.exports={
    createPayment,
    getPaymentList,
    getPaymentById,
    deletePayment
};