const joi= require('joi');
/**create category */
const createPayment={
    body:joi.object().keys({
        user:joi.string().required().trim(),
        amount:joi.string().required().trim(),
        payment_mode:joi.string().required().trim(),
        payment_type:joi.string().required().trim(),
        bank_name:joi.string().required().trim(),
        // account_no:joi.number().integer().required().trim(),
        ifscode:joi.string().required().trim(),
    }),
};
module.exports={
    createPayment,
 }