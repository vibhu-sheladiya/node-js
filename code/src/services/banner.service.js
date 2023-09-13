const {Banner}=require('../models');

const createBanner=async(reqBody)=>{
    return Banner.create(reqBody);
};

// const getList=async()=>{
//     return await Banner.find().populate('product');
// };
// const getBannerListId=async(bannerId)=>{
//     return Banner.findById(bannerId);
//     // return  await Banner.findById({_id: bannerId}).populate("product");;
// };

// const deleteBanner=async(bannerId)=>{
//     return   Banner.findByIdAndDelete({"_id":bannerId});
// };

// const updateBanner=async(bannerId,updateBody)=>{
//     return    Banner.findOneAndUpdate({'_id':bannerId},{$set:{...updateBody}},{new :true}) ;
// };
module.exports={
    // getList ,
    createBanner,
    // getBannerListId,
    // deleteBanner,
    // updateBanner
}