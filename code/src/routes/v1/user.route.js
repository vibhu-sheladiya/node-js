const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controller");
const validate = require("../../middlewares/validate");
const router = express.Router();

// create user
router.post(
  "/create-user",
  validate(userValidation.createUser),
  userController.createUser
);

// get user list
router.get("/list", userController.getUserList);

/**get user list by id */
router.get("/user-id/:userId", userController.getUserId);

/**delete user  */
router.delete("/delete/:userId", userController.deleteUser);

module.exports = router;
