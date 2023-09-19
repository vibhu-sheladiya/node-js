const {Contact}=require('../models');

const createContact=async(reqBody)=>{
    return Contact.create(reqBody);
};

const getContactList=async(req,res)=>{
    return Contact.find();
};

const getContactId=async(contactId)=>{
    return Contact.findById(contactId);
};

const deleteContactId=async(contactId)=>{
    return Contact.findByIdAndDelete(contactId);
};


module.exports={getContactList ,deleteContactId,createContact,getContactId}