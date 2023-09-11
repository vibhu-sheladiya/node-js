const joi = require("joi");
const createOrders = {
  body: joi.object().keys({
    desc: joi.string().required().trim(),
    cart: joi.string().required().trim(),
    product: joi.string().required().trim(),
    user: joi.string().required().trim(),
  }),
};
module.exports = { createOrders };
