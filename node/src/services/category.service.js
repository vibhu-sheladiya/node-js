const { Category } = require("../models");
/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};
/**
 * Get category list
//  * @param {object} filter
//  * @param {object} options
//  * @returns {Promise<User>}
//  */
const categoryList= async(req,res)=>{
  return Category.find()
};
// const getUserList = async (filter, options) => {
// const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
// return User.find(filter).skip(skip).limit(options.limit).select("-password");
//   };

/**get category list by id */
const getCategoryListId= async(categoryId)=>{
  return Category.findById(categoryId)
};

/**delete category */
const deleteCategory=async(categoryId)=>{
  return Category.findByIdAndDelete(categoryId)
};

module.exports={
    createCategory,
    categoryList,
    getCategoryListId,
    deleteCategory
    // getUserList
};

