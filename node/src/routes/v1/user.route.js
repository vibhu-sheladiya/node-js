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
  router.get('/getid-user/:userId',
  validate(userValidation.getUserById),
  userController.getUserId
  );

  // delete user list
  router.delete('/delete-user/:userId',
  validate(userValidation.getUserById),
  userController.deleteUser
  );

  

module.exports=router;
