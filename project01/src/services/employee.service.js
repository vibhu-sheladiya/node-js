const {Employee}=require('../models');

const createEmployee=async(reqBody)=>{
    return Employee.create(reqBody);
};

const getEmployeeList=async(req,res)=>{
    return Employee.find()
};

const getEmployeeId=async(employeeId)=>{
    return Employee.findById(employeeId);
};

const deleteEmployeeId=async(employeeId)=>{
    return Employee.findByIdAndDelete(employeeId);
};

const updateEmployee=async(employeeId,updateBody)=>{
    return await Employee.findByIdAndUpdate(employeeId,{$set:updateBody},{new:true});
};
module.exports={createEmployee ,getEmployeeList,getEmployeeId,deleteEmployeeId,updateEmployee}