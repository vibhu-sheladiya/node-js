const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controller");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const router = express.Router();

// create category
router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
  auth(),
  categoryController.createCategory
);

// get category list
router.get(
  "/list",
  // validate(categoryValidation.getCategoriesList),
  categoryController.getCategoryList
);

/**get category list by id */
router.get(
  "/category-id/:categoryId",
  // validate(categoryValidation.getCategoryDetails),
  categoryController.getCategoryId
);

/**delete category  */
router.delete(
  "/delete/:categoryId",
  validate(categoryValidation.getCategoryDetails),
  categoryController.deleteCategory
);

router.put("/update-category/:categoryId");
module.exports = router;
