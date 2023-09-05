const joi= require('joi');
/**create category */
const createOrder={
    body:joi.object().keys({
        order_number:joi.string().required().trim(),
        user:joi.string().required().trim(),
        product:joi.string().required().trim(),
        payment:joi.string().required().trim(),
        // quantity:joi.number().integer().required().trim(),
        // totalPrice:joi.number().integer().required().trim(),
    }),
};
module.exports={
    createOrder,
   
 }