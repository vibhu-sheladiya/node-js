const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
    },category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categorys",
    },
  },
  { timestamps: true } //database collection name
);
const Product = mongoose.model("item", productSchema);
module.exports = Product;
