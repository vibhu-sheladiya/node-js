const express = require("express");

const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const productRoute = require("./product.route");
const addcartRoute = require("./addcart.route");
const orderRoute = require("./order.route");
// const paymentRoute = require("./payment.route");
// const shipperRoute = require("./shipper.route");
// const viewRoute = require("./view.route");
// const mobileRoute = require("./mobileshop.route");
// const ecomRoute = require("./ecom.route");
// const bookRoute = require("./book.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/product", productRoute);
router.use("/cart", addcartRoute);
router.use("/order", orderRoute);
// router.use("/payment", paymentRoute);
// router.use("/shipper", shipperRoute);
// router.use("/view", viewRoute);
// router.use("/book", bookRoute);
// router.use("/ecom", ecomRoute);
// router.use("/mobile", mobileRoute);

module.exports = router;
