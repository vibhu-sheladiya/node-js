const { User } = require("../models");
/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

/**
 * Get user list
  * @param {object} filter
  * @param {object} options
  * @returns {Promise<User>}
 */
const getUserList = async (req,res) => {
return User.find({ $or: [ {is_active:true}]})
// const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
// return User.find(filter).skip(skip).limit(options.limit).select("-password");
  };

  // get user details by id
  const getUserById =async(userId)=>{
    return User.findById(userId);
  };
  // delete user
  const deleteUser = async (userId) => {
    return User.findByIdAndDelete(userId);
  };
module.exports={
    createUser,
    getUserList,
    deleteUser,
    getUserById
};
