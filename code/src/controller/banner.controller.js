const {bannerService}=require('../services');
const fs=require('fs');
// const path=require('path')

const createBanner=async(req,res)=>{
    try {
        const reqBody=req.body;
        // console.log(req.file) 
        if(req.file){
            // reqBody.product_image=req.file.filename
            reqBody.banner_image=req.file.filename;
        }else{
            throw new Error('banner image is required')
        }
        // console.log(reqBody)
        const createBanner=await bannerService.createBanner(reqBody);
        res.status(200).json({
            message:'success',
            data:createBanner,
            success:true,
        });
    } catch (error) {
        res.status(error?.statusCode  || 400).json({success:false,message:error?.message || 'something went wrong'});
    } 
};
module.exports={
    createBanner,
}