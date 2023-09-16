const {Gallery}=require('../models');

const createGallery=async(reqBody)=>{
    return Gallery.create(reqBody);
};
const getGallery=async()=>{
    return await Gallery.find();
};
module.exports={
    createGallery,
    getGallery
}