const { User } = require("../models");

const findUser=async(reqBody)=>{
  return User.findOne({$or:[{email:reqBody.email},{phone:reqBody.phone}]})
}
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

const getUserList = async (req, res) => {
  return User.find().populate('history');
};

const getUserId = async (userId) => {
  return User.findById(userId);
};

const deleteUserId = async (userId) => {
  return User.findByIdAndDelete(userId);
};

// const updateUser = async (userId, updateBody) => {
//   return await User.findByIdAndUpdate(
//     userId,
//     { $set: updateBody },
//     { new: true }
//   );
// };
module.exports = {
  createUser,
  getUserList,
  deleteUserId,
  getUserId,
findUser
};
