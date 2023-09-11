const mongoose = require("mongoose");
const categoryScheme = new mongoose.Schema(
  {
    category_name: {
      type: String,
      trim: true,
      required: [true, "please enter a name"],
    },
    category_desc: {
      type: String,
      trim: true,
    },

    is_active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Category = mongoose.model("category", categoryScheme);
module.exports = Category;
