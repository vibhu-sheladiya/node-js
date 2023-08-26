const {Product}=require("../models");

// create book service 
const createProduct = async (reqBody) => {
    return Product.create(reqBody);
};

// get/list book service
const getProductList= async (req,res)=>{
    return Product.find();
}

// get book details by id 
const getProductById= async(productId)=>{
    return Product.findById(productId);
};

// delete Book
// const deleteProduct= async(productId)=>{
//     return Product.findByIdAndDelete(productId)
// }

module.exports={
    createProduct,
    getProductList,
    getProductById,
    // deleteProduct
};