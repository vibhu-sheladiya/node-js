const mongoose = require("mongoose");
const shipperScheme = new mongoose.Schema(
  {
    company_name: {
      type: String,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "item",
    },
    company_email: {
      type: String,
    },
    company_phone: {
      type: Number,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Shipper = mongoose.model("shipper", shipperScheme);
module.exports = Shipper;
