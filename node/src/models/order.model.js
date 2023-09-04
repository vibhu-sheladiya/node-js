const mongoose = require("mongoose");
const orderScheme = new mongoose.Schema(
  {
    order_number: {
      type: String,
      // required : true
    },
    user: { type: Schema.Types.ObjectId, ref: "" },
    product: { type: Schema.Types.ObjectId, ref: "" },
    shipper: { type: Schema.Types.ObjectId, ref: "" },
    payment: { type: Schema.Types.ObjectId, ref: "" },
    productname: { type: String },
    price: { type: Number },
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
