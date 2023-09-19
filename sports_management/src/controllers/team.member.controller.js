const {memberService}=require('../services');

const createMember=async(req,res)=>{
    try {
        const reqBody=req.body;
               console.log("create Member",reqBody);
      const member=await memberService.craeteMember(reqBody);
            if(!member){
                throw new Error('no such Member');
            }
            res.status(200).json({
                message:'successfully created a new Member',
                success:true,
                data:{member},
            });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

const getMemberList=async(req,res)=>{
    try {
        let member =await memberService.getMemberList(req,res);
        res.status(200).json({
            success:true,
            message:'successfully fetched all Member',
            data: member,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getMemberId=async (req,res)=>{
    try {
        const member=await memberService.getMemberId(req.params.memberId);
        if(!member){
            throw new Error("No Such Member Found!!!");
        }
        res.status(200).json({
                       success : true ,
                       message :"Successfully Fetched A Member" ,
                       data  :{...member}
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


const deleteMember=async(req,res)=>{
    try {
        const memberId=req.params.memberId;
        const member=await memberService.getMemberId(memberId);
        if(!member){
            throw 'no Member found';
        }
        await memberService.deleteMemberId(memberId);
        res.status(200).json({
            message: "Deleted Successfully",
            data: { member },
            success: true,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports={deleteMember,getMemberId,getMemberList,createMember}