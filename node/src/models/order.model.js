const mongoose = require("mongoose");
const orderScheme = new mongoose.Schema(
  {
    order_number: {
      type: String,
      // required : true
    },
    user: { type: mongoose.Types.ObjectId, ref: "users" },
    product: { type: mongoose.Types.ObjectId, ref: "item" },
    // shipper: { type: mongoose.Types.ObjectId, ref: "" },
    payment: { type: mongoose.Types.ObjectId, ref: "payment" },
    quantity: { type: Number },
    totalPrice: { type: Number },

    is_active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("order", orderScheme);
module.exports = Order;
