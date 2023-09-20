const express = require("express");
const { galleryController } = require("../../controllers");
// const validate = require("../../middlewares/validate");
// const { galleryValidation } = require("../../validations");
// const auth =require('../../middlewares/auth');
const {upload}=require('../../middlewares/upload');
const router = express.Router();

// create book
router.post(
  "/create-gallery",
  // auth(),
  upload.single('gallery_image'),
//   validate(bannerValidation.createBanner),
  galleryController.createGallery
);

// get list book detail
router.get(
    "/list",
    // validate(bannerValidation.getList),
    galleryController.getDetails,
    
  );
// get Book details By Id
// router.get("/get-details/:cartId", cartController.getCartDetailsById);

// delete book
// router.delete("/delete-cart/:cartId", cartController.deleteCartById);

// router.put("/update-cart/:cartId", cartController.updateCart);

module.exports = router;
