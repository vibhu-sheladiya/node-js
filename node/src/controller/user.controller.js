const { userService } = require("../services");

/** create user */
const createUser = async (req, res) => {
  // console.log()
  try {
    const reqBody = req.body;
      console.log(reqBody,'+++++++++++ reqBody.email');
    // const userExists = await userService.getUserByEmail(reqBody.email);
    // if (userExists) {
    //   throw new Error("User already created by this email!");
    // }
    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: reqBody,
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
  
  /** Get user list */
  const getUserList = async (req, res) => {
    try {
      const getList = await userService.getUserList(req,res);
      res.status(200).json({
        success: true,
        message: "Get user list successfully!",
        data: {getList},
        });
      // const { search, ...options } = req.query;
      // let filter = {};
  
      // if (search) {
      //   filter.$or = [
      //     { first_name: { $regex: search, $options: "i" } },
      //     { last_name: { $regex: search, $options: "i" } },
      //   ];
      }
     catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  // get user list by id
  const getUserId =  async (req, res)=>{
    try {
      const getDetails = await userService.getUserById(req.params.userId);
      if(!getDetails){
        throw new Error("user not found");
      }
      res.status(200).json({
        success:true,
        message:"user get successfully",
        data: {getDetails},
      });
    } catch (error) {
      res.status(400).json({success:false, message:error.message});
    }
  };

  // delete user list
  const deleteUser = async (req, res) => {
    try {
      const userId = req.params.userId;
      const userExists = await userService.deleteUser(userId);
      if (!userExists) {
        throw new Error("User not found!");
      }
        await userService.deleteUser(userId);
        res.status(200).json({
        success: true,
        message: "User delete successfully!",
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };


  module.exports = {
    createUser,
    getUserList,
    getUserId,
    // updateDetails,
    deleteUser
    // sendMail,
  };