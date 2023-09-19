const {coachService}=require('../services');

const createCoach=async(req,res)=>{
    try {
        const reqBody=req.body;
               console.log("create coach",reqBody);
      const coach=await coachService.createCoach(reqBody);
            if(!coach){
                throw new Error('no such coach');
            }
            res.status(200).json({
                message:'successfully created a new coach',
                success:true,
                data:{coach},
            });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

const getCoachList=async(req,res)=>{
    try {
        let coach =await coachService.getCoachList(req,res);
        res.status(200).json({
            success:true,
            message:'successfully fetched all coach',
            data: coach,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getCoachId=async (req,res)=>{
    try {
        const coach=await coachService.getCoachId(req.params.coachId);
        if(!coach){
            throw new Error("No Such Coach Found!!!");
        }
        res.status(200).json({
                       success : true ,
                       message :"Successfully Fetched A Coach" ,
                       data  :{...coach}
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateCoach=async(req,res)=>{
    try {
        const coachId=req.params.coachId;
        const coach=await coachService.getCoachId(coachId);
        if (!coach )throw "No Such Coach or does not exists";
        await coachService.updateCoach(coachId,req.body);
        res.status(201).json({
            success : true ,
            message:"Updated Successfully",data:{coach},
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
          });
    }
};
const deleteCoach=async(req,res)=>{
    try {
        const coachId=req.params.coachId;
        const coach=await coachService.getCoachId(coachId);
        if(!coach){
            throw 'no coach found';
        }
        await coachService.deleteCoachId(coachId);
        res.status(200).json({
            message: "Deleted Successfully",
            data: { coach },
            success: true,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports={deleteCoach,updateCoach,getCoachList,createCoach,getCoachId}