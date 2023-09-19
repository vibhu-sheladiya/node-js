const {founderService}=require('../services');

const createFounder=async(req,res)=>{
    try {
        const reqBody=req.body;
               console.log("create Founder",reqBody);
      const founder=await founderService.createFounder(reqBody);
            if(!founder){
                throw new Error('no such Founder');
            }
            res.status(200).json({
                message:'successfully created a new Founder',
                success:true,
                data:{founder},
            });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

const getFounderList=async(req,res)=>{
    try {
        let founder =await founderService.getFounderList(req,res);
        res.status(200).json({
            success:true,
            message:'successfully fetched all Founder',
            data: founder,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getFounderId=async (req,res)=>{
    try {
        const founder=await founderService.getFounderId(req.params.founderId);
        if(!founder){
            throw new Error("No Such Founder Found!!!");
        }
        res.status(200).json({
                       success : true ,
                       message :"Successfully Fetched A Founder" ,
                       data  :{...founder}
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


const deleteFounder=async(req,res)=>{
    try {
        const founderId=req.params.founderId;
        const founder=await founderService.getFounderId(founderId);
        if(!founder){
            throw 'no Founder found';
        }
        await founderService.deleteFounderId(founderId);
        res.status(200).json({
            message: "Deleted Successfully",
            data: { founder },
            success: true,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports={deleteFounder,getFounderList,createFounder,getFounderId}