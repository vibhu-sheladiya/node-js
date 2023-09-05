const joi= require('joi');
/**create category */
const createProducts={
    body:joi.object().keys({
        product_name:joi.string().required().trim(),
        category:joi.string().required().trim()
    }),
};

/**get category list */
// const getProductsList = {
//     body:joi.object().keys({
// search:joi.string().trim().allow(),
// sortBy:joi.string().trim().allow(),
// limit:joi.string().trim().allow(),
// page:joi.string().trim().allow(),

//     }),
// };

/** get category list by id and delete both work*/
//   const createProductByIds={
//   params:joi.object().keys({
//     product_name:joi.string().required(),
//       category:joi.string().required(),
//  }),
//  };
 module.exports={
    createProducts,
    // getProductsList,
    // createProductByIds
 }
