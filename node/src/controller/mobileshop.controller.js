const { mobileService } = require("../services");
// create mobile
const createMobile = async (req, res) => {
  try {
    const reqBody = req.body;
    console.log(reqBody, "+++++++++++reqbody.mobile");
    const mobile = await mobileService.createMobile(reqBody);
    if (!mobile) {
      throw new Error("something went to wrong");
    }
    res.status(201).json({
      success: true,
      message: "created successfully",
      data: mobile,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//get list mobile
const getMobileList = async (req, res) => {
  try {
    const mobileList = await mobileService.getMobileList(req, res);
    res.status(201).json({
      success: true,
      message: "get all mobile list",
      data: { ...mobileList },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get list mobile by id
const getMobileDetails = async (req, res) => {
  try {
    const mobileDetails = await mobileService.getMobileById(
      req.params.mobileId
    );
    if (!mobileDetails) {
      throw new Error("no such mobile found");
    }
    res.status(201).json({
      success: "mobile details list success",
      data: { ...mobileDetails },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// delete mobile by id
const deleteMobile = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.getMobileById(mobileId);
    if (!mobileExists) {
      throw new Error("No Such mobile Found");
    }
    await mobileService.deleteMobile(mobileId);
    res.status(201).json({
      success: true,
      message: `${mobileId} deleted Successfully`,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update mobile
const updateMobile = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileEx = await mobileService.getMobileById(mobileId);
    if (!mobileEx) {
      throw new Error("mobile does not exist");
    }
    await mobileService.updateMobile(mobileId, req.body);
    res.status(201).json({
      success: true,
      message: "successfully updated",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// update mobile status
const updateStatus=async(req,res)=>{
  try {
    const mobileId=req.params.mobileId;
    const mobileEx = await mobileService.getMobileById(mobileId);
    if (!mobileEx) {
      throw new Error("mobile does not exist");
    }
    const currentStatus=req.params.mobileId;
    if(currentStatus.is_active==true){
       // Update the data
       currentStatus.is_active = false;
      }elseif(currentStatus.is_active==false)
      
      {
        currentStatus.is_active = true;
      }
      await mobileService.changeStatus(mobileId, req.body);
      res.status(201).json({
        success: true,
        message: "successfully updated",
      });

  } catch (error) {
    
  }
}
module.exports = {
  createMobile,
  getMobileList,
  getMobileDetails,
  deleteMobile,
  updateMobile,
  updateStatus
};
