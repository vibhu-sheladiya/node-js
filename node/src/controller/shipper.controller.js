const { shipperService } = require("../services");

/** create shipper*/
const createShipper = async (req, res) => {
  try {
    const reqBody = req.body;
      console.log(reqBody,'+++++++++++ reqBody.shipper');
    const shipper = await shipperService.createShipper(reqBody);
    if (!shipper) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: reqBody,
      data: { shipper },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
  
  /** Get shipper list */
  const getShipperList = async (req, res) => {
    try {
      let shipper=await shipperService.getShipperList(req,res);
      res.status(200).json({
        success:true,
        message:'success',
        data:{shipper},
      });
          }catch(error){
            res.status(400).json({success:false,message:error.message});
          }
        };

        /**get shipper list by id */
        const getShipperId= async(req,res)=>{
          try {
            const shipperDetails=await shipperService.getShipperById(req.params.shipperId);
            if(!shipperDetails){
              throw new Error("shipper not found");
            }
            res.status(200).json({
              success : true ,
              message:"Success",
              data:{shipperDetails},
            });
          } catch (error) {
            res.status(400).json({success:false,message:error.message});
          }
        };

        /**delete shipper */
        const deleteShipper=async(req,res)=>{
          try{
            const shipperId=req.params.shipperId;
            const shipperExists= await shipperService.getShipperById(shipperId);
            if(!shipperExists){
              throw new Error ("shipper not found");
            }
            await shipperService.deleteShipper(shipperId);
            res.status(200).json({
              success:true,
              message :"Successfully deleted",
              data:{shipperExists},
                 });
        }catch(error){
          res.status(400).json({success:false,message:error.message});
        }
      };
    module.exports = {
    createShipper,
    getShipperList,
    getShipperId,
    deleteShipper
  };