const joi=require('joi');
const createCoach={
    body:joi.object().keys({
        name:joi.string().required().trim(),
        email:joi.string().required().trim(),
    }),
};
module.exports = {createCoach} ;