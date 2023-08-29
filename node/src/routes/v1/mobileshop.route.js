const express = require("express");
const { mobileController } = require("../../controller");
// const {mobileValidation}= require('../../validations');
// const validate=require('../../middlewares/validate');
const router = express.Router();

router.post("/create-mobile", mobileController.createMobile);

router.get("/list", mobileController.getMobileList);

router.get("/listid/:mobileId", mobileController.getMobileDetails);

router.delete("/delete/:mobileId", mobileController.deleteMobile);

router.put("/update-mobile/:mobileId", mobileController.updateMobile);

router.put("/mobile-status/:mobileId", mobileController.updateStatus);

module.exports = router;
