const {Category}=require("../models");
const createCategory=async(reqBody)=>{
    return Category.create(reqBody);
};

const categoryList=async(req,res)=>{
return Category.find()
};

const getCategoryListId=async(categoryId)=>{
    return Category.findById(categoryId)
}

const deleteCategory=async(categoryId)=>{
    return Category.findByIdAndDelete(categoryId)
}
module.exports={categoryList ,getCategoryListId  ,deleteCategory , createCategory }