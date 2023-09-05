const {Shipper}=require("../models");
/**
 * Create Shipper
 * @param {object} reqBody
 * @returns {Promise<Shipper>}
 */
// create Shipper service 
const createShipper= async(reqBody)=>{
return Shipper.create(reqBody);
};

// get/list Shipper service
const getShipperList= async (req,res)=>{
    return Shipper.find().populate("product");
}

// get Shipper details by id 
const getShipperById= async(shipperId)=>{
    return Shipper.findById(shipperId);
};

// delete Shipper
const deleteShipper= async(shipperId)=>{
    return Shipper.findByIdAndDelete(shipperId)
}

module.exports={
    createShipper,
    getShipperList,
    getShipperById,
    deleteShipper
};