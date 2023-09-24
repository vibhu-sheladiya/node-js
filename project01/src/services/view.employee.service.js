const {Viewdetail}=require('../models');

const createViewdetail=async(reqBody)=>{
    return Viewdetail.create(reqBody);
};

const getViewdetailList=async(req,res)=>{
    return Viewdetail.find()
};

const getViewdetailId=async(viewdetailId)=>{
    return Viewdetail.findById(viewdetailId);
};

const deleteViewdetailId=async(viewdetailId)=>{
    return Viewdetail.findByIdAndDelete(viewdetailId);
};


module.exports={createViewdetail ,getViewdetailList,getViewdetailId,deleteViewdetailId,}