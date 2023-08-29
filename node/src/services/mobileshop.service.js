const {Mobile}=require('../models');
// create Mobile
const createMobile=async(reqBody)=>{
    return Mobile.create(reqBody);
}
// get list Mobile service
const getMobileList=async(req,res)=>{
    return Mobile.find({$or:[{is_active:true}]});
}

// get list by id Mobile service
const getMobileById=async(mobileId)=>{
    return Mobile.findById(mobileId);
}
//  delete Mobile
const deleteMobile=async(mobileId)=>{
    return  Mobile.deleteOne({_id:mobileId});
}

// update Mobile
const updateMobile=async(mobileId,updateBody)=>{
    return await Mobile.findByIdAndUpdate(mobileId,{ $set: updateBody });
}

// update status
const changeStatus = async (mobileId) => {
    return await Mobile.findOneAndUpdate(mobileId, {$set:{ is_active : !true }})
}
module.exports={
    createMobile,
    getMobileList,
    getMobileById,
    deleteMobile,
    updateMobile,
    changeStatus
}

