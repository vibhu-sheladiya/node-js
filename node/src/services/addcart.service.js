const {Cart}=require("../models");
/**
 * Create Addcart
 * @param {object} reqBody
 * @returns {Promise<Addcart>}
 */
// create Addcart service 
const createAddcart= async(reqBody)=>{
return Cart.create(reqBody);
};

// get/list Addcart service
const getAddcartList= async (req,res)=>{
    return Cart.find();
}

// get Addcart details by id 
const getAddcartById= async(cartId)=>{
    return Cart.findById(cartId);
};

// delete Addcart
const deleteAddcart= async(cartId)=>{
    return Cart.findByIdAndDelete(cartId)
}

module.exports={
    createAddcart,
    getAddcartList,
    getAddcartById,
    deleteAddcart
};