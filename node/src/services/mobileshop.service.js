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
    return await Mobile.findByIdAndUpdate(mobileId,{ $set: updateBody },{new:true});
}

// update status
const changeStatus = async (mobileId) => {
    const mobileEx=await getMobileById(mobileId);
    if(!mobileEx){
        throw new Error('Mobile not found with this Id')
    }
    return Mobile.findOneAndUpdate({_id:mobileId},{$set:{is_active:!mobileEx.is_active,},},{new:true});
    // return   await Mobile.findOneAndUpdate({ _id : mobileId },{ is_active: !mobileExo['is_active'] },{new:true})
    // return   await Mobile.findOneAndUpdate({'_id':mobileId},{status:'inactive'});
};
module.exports={
    createMobile,
    getMobileList,
    getMobileById,
    deleteMobile,
    updateMobile,
    changeStatus
}

