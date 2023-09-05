const {Order}=require("../models");
/**
 * Create Order
 * @param {object} reqBody
 * @returns {Promise<Order>}
 */
// create Order service 
const createOrder= async(reqBody)=>{
return Order.create(reqBody);
};

// get/list Order service
const getOrderList= async (req,res)=>{
    return Order.find().populate("user").populate("product").populate("payment");
}

// get Order details by id 
const getOrderById= async(orderId)=>{
    return Order.findById(orderId);
};

// delete Order
const deleteOrder= async(orderId)=>{
    return Order.findByIdAndDelete(orderId)
}

module.exports={
    createOrder,
    getOrderList,
    getOrderById,
    deleteOrder
};