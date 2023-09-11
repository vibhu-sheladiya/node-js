const express = require("express");
const { productValidation } = require("../../validations");
const { productController } = require("../../controller");
const validate = require("../../middlewares/validate");
const router = express.Router();

// create product
router.post(
  "/create-product",
  validate(productValidation.createCategory),
  productController.createProduct
);

// get product list
router.get("/list", productController.getProductList);

/**get product list by id */
router.get("/product-id/:ProductId", productController.getProductId);

/**delete product  */
router.delete("/delete/:ProductId", productController.deleteProduct);

router.put("/update-product/:ProductId");

module.exports = router;
