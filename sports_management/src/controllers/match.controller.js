const {matchService}=require('../services');

const createMatch=async(req,res)=>{
    try {
        const reqBody=req.body;
               console.log("create Match",reqBody);
      const match=await matchService.craeteMatch(reqBody);
            if(!match){
                throw new Error('no such match');
            }
            res.status(200).json({
                message:'successfully created a new Match',
                success:true,
                data:{match},
            });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

const getMatchList=async(req,res)=>{
    try {
        let match =await matchService.getMatchList(req,res);
        res.status(200).json({
            success:true,
            message:'successfully fetched all Match',
            data: match,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getMatchId=async (req,res)=>{
    try {
        const match=await matchService.getMatchId(req.params.matchId);
        if(!match){
            throw new Error("No Such Match Found!!!");
        }
        res.status(200).json({
                       success : true ,
                       message :"Successfully Fetched A Match" ,
                       data  :{...match}
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


const deleteMatch=async(req,res)=>{
    try {
        const matchId=req.params.matchId;
        const match=await matchService.getMatchId(matchId);
        if(!match){
            throw 'no Match found';
        }
        await matchService.deleteMatchId(matchId);
        res.status(200).json({
            message: "Deleted Successfully",
            data: { match },
            success: true,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports={deleteMatch,getMatchId,getMatchList,createMatch}