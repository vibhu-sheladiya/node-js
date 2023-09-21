const {Member}=require('../models');

const craeteMember=async(reqBody)=>{
    return Member.create(reqBody);
};

const getMemberList=async(req,res)=>{
    return Member.find().count();
};

const getMemberId=async(memberId)=>{
    return Member.findById(memberId);
};

const deleteMemberId=async(memberId)=>{
    return Member.findByIdAndDelete(memberId);
};

module.exports={
    craeteMember,getMemberList,getMemberId,deleteMemberId}