const {Order}=require('../models');
const createOrder=async(reqBody)=>{
    return Order.create(reqBody)
};

const orderList=async(req,res)=>{
    return Order.find().populate('user').populate('product').populate('cart')
};

const orderListId=async(orderId)=>{
    return Order.findById(orderId)
};

const deleteOrder=async(orderId)=>{
    return Order.findByIdAndDelete(orderId)
};
module.exports={orderList,deleteOrder,orderListId,createOrder}