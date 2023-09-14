const joi = require("joi");

/** Create Banner */
const createBanner = {
  body: joi.object({
    banner_name: joi.string().required().trim(),
    banner_description: joi.string().optional(),
    banner_image: joi.string().required(),
    product: joi.string().required(),
  }),
};
module.exports.createBanner ={ createBanner};