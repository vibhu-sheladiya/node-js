const joi=require('joi');
const createSubCategory={
    body:joi.object().keys({
        name : joi.string().required().trim(),
        desc : joi.string().required().trim(),
        sub_category : joi.string().required().trim(),
    })
};
module.exports = {createSubCategory} ;