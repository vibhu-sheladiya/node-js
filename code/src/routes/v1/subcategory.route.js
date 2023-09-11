const express = require("express");
const { subcategoryValidation } = require("../../validations");
const { subcategoryController } = require("../../controller");
const validate = require("../../middlewares/validate");
const router = express.Router();

// create subcategory
router.post(
  "/create-sub-category",
  validate(subcategoryValidation.createSubCategory),
  subcategoryController.createSubCategory
);

// get subcategory list
router.get("/list", subcategoryController.getSubCategoryList);

/**get subcategory list by id */
router.get(
  "/sub-category-id/:subcategoryId",
  subcategoryController.getSubCategoryId
);

/**delete subcategory  */
router.delete(
  "/delete/:subcategoryId",
  subcategoryController.deleteSubCategory
);

module.exports = router;
