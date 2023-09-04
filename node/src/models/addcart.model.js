const mongoose = require("mongoose");
const cartScheme = new mongoose.Schema(
  {
    cart_name: {
      type: String,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "item",
    },
    quantity: {
      type: Number,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("add_cart", cartScheme);
module.exports = Cart;
