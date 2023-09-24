const { adminService } = require("../services");

/** create admin */
const createAdmin = async (req, res) => {
  // console.log()
  try {
    const reqBody = req.body;
      console.log(reqBody,'+++++++++++ admin');
    const admin = await adminService.createAdmin (reqBody);
    if (!admin) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: reqBody,
      data: { admin },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
  
  /** Get admin list */
  const getAdminList = async (req, res) => {
    try {
      const admin = await adminService.getAdminList(req,res);
      res.status(200).json({
        success: true,
        message: "Get admin list successfully!",
        data: {admin},
        });
      }
     catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  // get admin list by id
  const getAdminId =  async (req, res)=>{
    try {
      const admin = await adminService.getAdminId(req.params.adminId);
      if(!admin){
        throw new Error("admin not found");
      }
      res.status(200).json({
        success:true,
        message:"admin get successfully",
        data: {admin},
      });
    } catch (error) {
      res.status(400).json({success:false, message:error.message});
    }
  };

  // delete admin list
  const deleteAdmin = async (req, res) => {
    try {
      const adminId = req.params.adminId;
      const admin = await adminService.getAdminId(adminId);
      if (!admin) {
        throw new Error("admin not found!");
      }
        await adminService.deleteAdminId(adminId);
        res.status(200).json({
        success: true,
        message: "admin delete successfully!",
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };


  module.exports = {
    createAdmin,
    getAdminList,
    getAdminId,

    deleteAdmin
  
  };