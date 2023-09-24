const {Client}=require('../models');

const createClient=async(reqBody)=>{
    return Client.create(reqBody);
};

const getClientList=async(req,res)=>{
    return Client.find()
};

const getClientId=async(clientId)=>{
    return Client.findById(clientId);
};

const deleteClientId=async(clientId)=>{
    return Client.findByIdAndDelete(clientId);
};

const updateClient=async(clientId,updateBody)=>{
    return await Client.findByIdAndUpdate(clientId,{$set:updateBody},{new:true});
};
module.exports={createClient ,getClientList,getClientId,deleteClientId,updateClient}