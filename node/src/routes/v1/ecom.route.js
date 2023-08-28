const express = require('express');
const { eComController } = require('../../controller');

const router = express.Router();

// getAllList
router.get(
    "/e-comList",
    eComController.getAllList
);

module.exports = router;