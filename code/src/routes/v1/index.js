const express = require("express");

// const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
// const productRoute = require("./product.route");
const cartRoute = require("./cart.route");
// const orderRoute = require("./order.route");
// const subcategoryRoute = require("./subcategory.route");

const router = express.Router();

// router.use("/user", userRoute);
router.use("/category", categoryRoute);
// router.use("/product", productRoute);
router.use("/cart", cartRoute);
// router.use("/order", orderRoute);
// router.use("/sub-category",subcategoryRoute );

module.exports = router;