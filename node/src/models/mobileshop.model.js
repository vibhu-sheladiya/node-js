const mongoose = require("mongoose");
const mobileScheme = new mongoose.Schema(
  {
    phone_name: {
      type: String,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    model: {
      type: String,
      trim: true,
    },
    os: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
    },
    color: {
      type: Array,
      trim: true,
    },
    storage_capacity: {
      type: String,
      trim: true,
    },
    display_technology: {
      type: Array,
    },
    ram: {
      type: String,
    },
    battery_capacity: {
      type: Number,
    },
    connectivity: {
      type: [String],
    },
    availability: {
      type: Boolean,
    },
    price_in_stock: {
      type: Number,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Mobile = mongoose.model("mobileshop", mobileScheme);
module.exports = Mobile;
