const mongoose = require("mongoose");
const productScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    countinstock: {
      type: Number,
      trim: true,
    },
    product_image:{
      type :String ,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
    sub_child_category: {
      type: mongoose.Types.ObjectId,
      ref: "subchildcategory",
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    sub_category: {
      type: mongoose.Types.ObjectId, //reference to the model we want to reference
      ref: "subcategory", //name of the collection in which it is stored
    },
    img:{
      type :String ,
    }
  },
  { timestamps: true,
    // toJSON: {
    //   transform: function (doc, data) {
    //     if (data?.product_image) {
    //       data.product_image = `${config.base_url}product_images/${data.product_image}`;
    //     }
    //   },
    // },
  }
);
const Product = mongoose.model("product", productScheme);
module.exports = Product;
