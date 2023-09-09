const mongoose = require("mongoose");
const productScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    countinstock: {
      type: Number,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
    sub_child_category: {
      type: mongoose.Types.ObjectId,
      ref: "subchildcategory",
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    sub_category: {
      type: mongoose.Types.ObjectId, //reference to the model we want to reference
      ref: "subcategory", //name of the collection in which it is stored
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("product", productScheme);
module.exports = Product;
