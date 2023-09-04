const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
    },
  },
  { timestamps: true } //database collection name
);
const Product = mongoose.model("item", productSchema);
module.exports = Product;
