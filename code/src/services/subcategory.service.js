const { Subcategory } = require("../models");

const createSubCategory = async (reqBody) => {
  return Subcategory.create(reqBody);
};

const getSubCategoryList = async (req, res) => {
  return Subcategory.find().populate("category");
};

const getSubCategoryId = async (SubcategoryId) => {
  return Subcategory.findById(SubcategoryId);
};

const deleteSubCategory = async (SubcategoryId) => {
  // return await Subcategory.deleteOne({_id:SubcategoryId});  //returns deleted count if successful or error message otherwise
  return Subcategory.findByIdAndDelete(SubcategoryId);
};

const updateSubProduct = async (SubcategoryId, updateBody) => {
  return await Subcategory.findByIdAndUpdate(
    SubcategoryId,
    { $set: updateBody },
    { new: true }
  );
};
module.exports = {
  getSubCategoryList,
  createSubCategory,
  getSubCategoryId,
  deleteSubCategory,
  updateSubProduct
};
