const express = require("express");

const userRoute = require("./user.route");
const mobileRoute = require("./mobileshop.route");
const categoryRoute = require("./category.route");
const productRoute = require("./product.route");
const ecomRoute = require("./ecom.route");
const bookRoute = require("./book.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/mobile", mobileRoute);
router.use("/product", productRoute);
router.use("/ecom", ecomRoute);
router.use("/book", bookRoute);

module.exports = router;
