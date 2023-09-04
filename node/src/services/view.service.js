const {View}=require("../models");

// get/list View service
const getViewList= async (req,res)=>{
    return View.find();
}

// get View details by id 
const getViewById= async(cartId)=>{
    return View.findById(cartId);
};
// cart id ni jgiya ae kai id levani view ma to khali list j kravanuave so

// delete View
const deleteView= async(cartId)=>{
    return View.findByIdAndDelete(cartId)
}

module.exports={
    createOrder,
    getOrderList,
    getOrderById,
    deleteOrder
};