const { Subchildcategory } = require("../models");

const createChildeCategory = async (reqBody) => {
  return Subchildcategory.create(reqBody);
};

const getChildList = async (req, res) => {
  return Subchildcategory.find().populate("sub_category");
};

const getChildCategoryId = async (childId) => {
  return Subchildcategory.findById(childId);
};

const deleteChildId = async (childId) => {
  return Subchildcategory.findByIdAndDelete(childId);
};
module.exports = {
  createChildeCategory,
  getChildList,
  getChildCategoryId,
  deleteChildId,
};
