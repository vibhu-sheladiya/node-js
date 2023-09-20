const {galleryService}=require('../services');
const fs=require('fs');
// const path=require('path');

const createGallery=async(req,res)=>{
    try {
        const reqBody=req.body;
        // console.log(req.file) 
        if(req.file){
            // reqBody.product_image=req.file.filename
            reqBody.gallery_image=req.file.filename;
        }else{
            throw new Error('gallery image is required')
        }
        // console.log(reqBody)
        const createGallery=await galleryService.createGallery(reqBody);
        res.status(200).json({
            message:'success',
            data:createGallery,
            success:true,
        });
    } catch (error) {
        res.status(error?.statusCode  || 400).json({success:false,message:error?.message || 'something went wrong'});
    } 
};

const getDetails = async (req, res) => {
    try {
      const galleryExists = await galleryService.getGallery(
        req,res
      );
      if (!galleryExists) {
        throw new Error("gallery not found!");
      }
  
      res.status(200).json({
        success: true,
        message: "Product details get successfully!",
        data: galleryExists,
      });
    } catch (error) {
      res.status(error?.statusCode || 400).json({
        success: false,
        message:
          error?.message || "Something went wrong, please try again or later!",
      });
    }
  };
  
module.exports={
    createGallery,
    getDetails
}