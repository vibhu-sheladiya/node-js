const mongoose = require("mongoose");
const viewScheme= new mongoose.Schema(
  {
    view_product: {
      type: mongoose.Types.ObjectId,
      ref: "",
    },
    view_order: {
      type: mongoose.Types.ObjectId,
      ref: "",
    },
    view_shipper:{
      type: mongoose.Types.ObjectId,
      ref: "",
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

const Item = mongoose.model("view", viewScheme);
module.exports = Item;
