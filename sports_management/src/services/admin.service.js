const { Admin } = require("../models");

const findAdmin=async(reqBody)=>{
  return Admin.findOne({$or:[{email:reqBody.email},{phone:reqBody.phone}]})
}
const createAdmin = async (reqBody) => {
  return Admin.create(reqBody);
};

const getAdminList = async (req, res) => {
  return Admin.find();
};

const getAdminId = async (adminId) => {
  return Admin.findById(adminId);
};

const deleteAdminId = async (adminId) => {
  return Admin.findByIdAndDelete(adminId);
};

// const updateUser = async (adminId, updateBody) => {
//   return await Admin.findByIdAndUpdate(
//     adminId,
//     { $set: updateBody },
//     { new: true }
//   );
// };
module.exports = {
  findAdmin,
  deleteAdminId,
  getAdminId,
  getAdminList,
  createAdmin,findAdmin
};
