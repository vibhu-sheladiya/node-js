const express = require("express");
const { subchildcategoryValidation } = require("../../validations");
const { subchildcategoryController } = require("../../controller");
const validate = require("../../middlewares/validate");
const router = express.Router();

// create user
router.post(
  "/create-child",
  validate(subchildcategoryValidation.createSubCategory),
  subchildcategoryController.createChildeCategory
);

// get user list
router.get("/list", subchildcategoryController.getChildCategory);

/**get user list by id */
router.get("/child-id/:childId", subchildcategoryController.getChildCategoryId);

/**delete user  */
router.delete(
  "/delete/:childId",
  subchildcategoryController.deleteChildCategory
);

module.exports = router;
