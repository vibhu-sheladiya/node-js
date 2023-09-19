const { contactService}=require('../services');

const createContact=async(req,res)=>{
    try {
        const reqBody=req.body;
               console.log("create Contact",reqBody);
      const contact=await contactService.createContact(reqBody);
            if(!contact){
                throw new Error('no such Contact');
            }
            res.status(200).json({
                message:'successfully created a new Contact',
                success:true,
                data:{contact},
            });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

const getContactList=async(req,res)=>{
    try {
        let contact =await contactService.getContactList(req,res);
        res.status(200).json({
            success:true,
            message:'successfully fetched all Contact',
            data: contact,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getContactId=async (req,res)=>{
    try {
        const contact=await contactService.getContactId(req.params.contactId);
        if(!contact){
            throw new Error("No Such Contact Found!!!");
        }
        res.status(200).json({
                       success : true ,
                       message :"Successfully Fetched A Contact" ,
                       data  :{...contact}
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteContact=async(req,res)=>{
    try {
        const contactId=req.params.contactId;
        const contact=await contactService.getContactId(contactId);
        if(!contact){
            throw 'no Contact found';
        }
        await contactService.deleteContactId(contactId);
        res.status(200).json({
            message: "Deleted Successfully",
            data: { contact },
            success: true,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports={deleteContact,getContactList,createContact,getContactId}