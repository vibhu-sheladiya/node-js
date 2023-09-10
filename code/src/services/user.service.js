const {User}=require('../models');

const createUser=async(reqBody)=>{
    return User.create(reqBody);
};

const getUserList=async(req,res)=>{
    return User.find();
};

const getUserId=async(userId)=>{
    return User.findById(userId)
};

const deleteUserId=async(userId)=>{
    return User.findByIdAndDelete(userId)
};
module.exports={createUser ,getUserList,deleteUserId,getUserId  };