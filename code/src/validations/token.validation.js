const joi = require("joi");

/** Create jsonwebroken  */
const generateToken = {
  body: joi.object({
    user: joi.string().required().trim(),
  }),
};

module.exports = {
  generateToken,
};