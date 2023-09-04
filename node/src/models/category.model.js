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
      maxlength: [50, "maximum length is 25 characters"],
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const Category = mongoose.model("categorys", categoryScheme);
module.exports = Category;
