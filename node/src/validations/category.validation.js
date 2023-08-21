const joi= require('joi');
/**create category */
const createCategories={
    body:joi.object().keys({
        category_name:joi.string().required().trim(),
        category_desc:joi.string().required().trim(),
    }),
};

/**get category list */
const getCategoriesList = {
    body:joi.object().keys({
search:joi.string().trim().allow(),
sortBy:joi.string().trim().allow(),
limit:joi.string().trim().allow(),
page:joi.string().trim().allow(),
    }),
};

/** get category list by id and delete both work*/
  const getCategoryDetails={
  params:joi.object().keys({
 categoryId:joi.string().trim().required(),
 }),
 };
 module.exports={
    createCategories,
    getCategoriesList,
    getCategoryDetails
 }
