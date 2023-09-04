const mongoose = require("mongoose");
const itemScheme = new mongoose.Schema(
  {
    item_name: {
      type: String,
      trim: true,
    },
    item_price: {
      type: Number,
      //  required:[true,"Please enter the price"],
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "item",
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("ecom_item", itemScheme);
module.exports = Item;
