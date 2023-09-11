const mongoose = require("mongoose");
const subcategoryScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "subcategory is required"],
      trim: true,
    },
    desc: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Subcategory = mongoose.model("subcategory", subcategoryScheme);
module.exports = Subcategory;
