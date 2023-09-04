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
    return Order.find();
}

// get Order details by id 
const getOrderById= async(cartId)=>{
    return Order.findById(cartId);
};

// delete Order
const deleteOrder= async(cartId)=>{
    return Order.findByIdAndDelete(cartId)
}

module.exports={
    createOrder,
    getOrderList,
    getOrderById,
    deleteOrder
};