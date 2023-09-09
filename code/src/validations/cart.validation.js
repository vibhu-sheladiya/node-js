const joi=require("joi");
const createCarts={
    body:joi.object().keys({
        // user:joi.string().required().trim(),
        // product:joi.string().required().trim(),
        qty:joi.number().integer().required(),
        totalqty:joi.string().required().trim(),
        totalprice:joi.number().integer().required(),
    })
};
module.exports = {createCarts}