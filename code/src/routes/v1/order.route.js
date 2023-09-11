const express = require("express");
const { orderValidation } = require("../../validations");
const { orderController } = require("../../controller");
const validate = require("../../middlewares/validate");
const router = express.Router();

// create order
router.post(
  "/create-order",
  validate(orderValidation.createOrders),
  orderController.createOrder
);

// get order list
router.get("/list", orderController.getOrderList);

/**get order list by id */
router.get("/order-id/:orderId", orderController.orderId);

/**delete order  */
router.delete("/delete/:orderId", orderController.deleteOrder);

router.put("/update-order/:orderId");
module.exports = router;
