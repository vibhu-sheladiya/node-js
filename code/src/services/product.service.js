const { Product } = require("../models");
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

const productList = async (req, res) => {
  return Product.find()
    .populate("sub_child_category")
    .populate("category")
    .populate("sub_category");
};

const getProductId = async (ProductId) => {
  return Product.findById(ProductId);
};

const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId);
};
module.exports = { productList, getProductId, deleteProduct, createProduct };
