const {Cart}=require("../models");
const createCart=async(reqBody)=>{
    return Cart.create(reqBody);
};

const getCartList=async(req,res)=>{
    return Cart.find()
};

const getCartListId=async(cartId)=>{
    return   Cart.findById(cartId)
}

const deleteCart=async(cartId)=>{
    return Cart.findByIdAndDelete(cartId)
}
module.exports={
    createCart,getCartList ,deleteCart,getCartListId 
}