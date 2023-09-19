const {teamService}=require('../services');

const createTeam=async(req,res)=>{
    try {
        const reqBody=req.body;
               console.log("create Team",reqBody);
      const team=await teamService.craeteTeam(reqBody);
            if(!team){
                throw new Error('no such Team');
            }
            res.status(200).json({
                message:'successfully created a new Team',
                success:true,
                data:{team},
            });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

const getTeamList=async(req,res)=>{
    try {
        let team =await teamService.getTeamList(req,res);
        res.status(200).json({
            success:true,
            message:'successfully fetched all Team',
            data: team,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getTeamId=async (req,res)=>{
    try {
        const team=await teamService.getTeamId(req.params.teamId);
        if(!team){
            throw new Error("No Such Team Found!!!");
        }
        res.status(200).json({
                       success : true ,
                       message :"Successfully Fetched A Team" ,
                       data  :{...team}
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


const deleteTeam=async(req,res)=>{
    try {
        const teamId=req.params.teamId;
        const team=await teamService.getTeamId(teamId);
        if(!team){
            throw 'no Team found';
        }
        await teamService.deleteTeamId(teamId);
        res.status(200).json({
            message: "Deleted Successfully",
            data: { team },
            success: true,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports={deleteTeam,getTeamId,getTeamList,createTeam}