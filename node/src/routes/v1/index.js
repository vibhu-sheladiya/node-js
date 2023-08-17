const express=require('express');
const userRoute= require('./user.route');
const bookRoute= require('./book.route');
const categoryRoute= require('./category.route');
const router=express.Router();

router.use('/user',userRoute);
router.use('/category',categoryRoute);
router.use('/book',bookRoute);

module.exports=router;