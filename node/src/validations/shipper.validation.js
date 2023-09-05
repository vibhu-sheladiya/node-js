const joi= require('joi');
/**create category */
const createShipper={
    body:joi.object().keys({
        company_name:joi.string().required().trim(),
        product:joi.string().required().trim(),
        company_email:joi.string().required().trim()
    }),
};
module.exports={
    createShipper,
   
 }
