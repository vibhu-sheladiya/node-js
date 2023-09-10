const joi=require('joi');
const createCategory={
    body:joi.object().keys({
        name:joi.string().required().trim(),
        price:joi.number().integer().required(),
        countinstock:joi.number().integer().required(),
        sub_child_category:joi.string().required().trim(),
        category:joi.string().required().trim(),
        sub_category:joi.string().required().trim(),
        
    })
};
module.exports={createCategory}