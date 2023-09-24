const {Company}=require('../models');

const createCompany=async(reqBody)=>{
    return Company.create(reqBody);
};

const getCompanyList=async(req,res)=>{
    return Company.find()
};

const getCompanyId=async(companyId)=>{
    return Company.findById(companyId);
};

const deleteCompanyId=async(companyId)=>{
    return Company.findByIdAndDelete(companyId);
};

const updateCompany=async(companyId,updateBody)=>{
    return await Company.findByIdAndUpdate(companyId,{$set:updateBody},{new:true});
};
module.exports={createCompany ,getCompanyList,getCompanyId,deleteCompanyId,updateCompany}