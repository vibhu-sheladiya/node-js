const express = require("express");
const { bannerController } = require("../../controller");
const validate = require("../../middlewares/validate");
const {bannerValidation }=require('../../validations')
// const { bannerValidation } = require("../../validations");
// const auth =require('../../middlewares/auth');
const {upload}=require('../../middlewares/upload');
const router = express.Router();

// create book
router.post(
  "/create-banner",
  // auth(),
  upload.single('banner_image'),
  validate(bannerValidation.createBanner),
  bannerController.createBanner
);

// get list book detail
// router.get("/list", cartController.getCartList);

// get Book details By Id
// router.get("/get-details/:cartId", cartController.getCartDetailsById);

// delete book
// router.delete("/delete-cart/:cartId", cartController.deleteCartById);

// router.put("/update-cart/:cartId", cartController.updateCart);

module.exports = router;
