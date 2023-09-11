const { Category } = require("../models");
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

const categoryList = async (req, res) => {
  return Category.find();
};

const getCategoryListId = async (categoryId) => {
  return Category.findById(categoryId);
};

const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

const updateCategory = async (categoryId, updateBody) => {
  return await Category.findByIdAndUpdate(
    categoryId,
    { $set: updateBody },
    { new: true }
  );
};
module.exports = {
  categoryList,
  getCategoryListId,
  deleteCategory,
  createCategory,
  updateCategory,
};
