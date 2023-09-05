const joi= require('joi');
/**create category */
const createCarts={
    body:joi.object().keys({
        user:joi.string().required().trim(),
        product:joi.string().required().trim(),
        quantity:joi.string().trim()
    }),
};
module.exports={
    createCarts,
   
 }