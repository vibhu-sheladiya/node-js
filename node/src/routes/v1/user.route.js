const express=require('express');
// const {userValidation}= require('../../validations');
const {userController}=require('../../controller');
// const validate=require('../../middlewares/validate');
const router=express.Router();

// create user 
router.post("/create-user",
// validate(userValidation.createUser),
userController.createUser
);
// router.post('/list',(req,res)=>{
//     res.write('ijkk');
//     res.end();
// })

// get user list 
// router.post("/create-user",
// // validate(userValidation.getUserList),
// userController.getUserList
// );

// get user list simple api
// router.post('/create-user',(req,res)=>{
//     res.send("connected succesfuly");
// });
module.exports=router;
