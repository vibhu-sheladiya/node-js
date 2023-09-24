const {Member}=require('../models');

const createMember=async(reqBody)=>{
    return Member.create(reqBody);
};

const getMemberList=async(req,res)=>{
    return Member.find()
};

const getMemberId=async(memberId)=>{
    return Member.findById(memberId);
};

const deleteMemberId=async(memberId)=>{
    return Member.findByIdAndDelete(memberId);
};

const updateMember=async(memberId,updateBody)=>{
    return await Member.findByIdAndUpdate(memberId,{$set:updateBody},{new:true});
};
module.exports={createMember ,getMemberList,getMemberId,deleteMemberId,updateMember}