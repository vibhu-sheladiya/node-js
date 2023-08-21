const express=require('express');
const {userValidation}= require('../../validations');
const {userController}=require('../../controller');
const validate=require('../../middlewares/validate');
const router=express.Router();

// create user 
router.post("/create-user",
validate(userValidation.createUser),
userController.createUser
);

// get user list 
router.get(
    "/list",
    validate(userValidation.getUserList),
    userController.getUserList
  );

  // get user by id
  router.get('/get-userid',
  userController.)
  // delete user list
  router.delete('/delete-user/:userId',
  userController.deleteUser);

// get user list simple api
// router.post('/create-user',(req,res)=>{
//     res.send("connected succesfuly");
// });
module.exports=router;
