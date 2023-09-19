const {tournamentService}=require('../services');

const createTournament=async(req,res)=>{
    try {
        const reqBody=req.body;
               console.log("create Tournament",reqBody);
      const tournament=await tournamentService.createTournament(reqBody);
            if(!tournament){
                throw new Error('no such Tournament');
            }
            res.status(200).json({
                message:'successfully created a new Tournament',
                success:true,
                data:{tournament},
            });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

const getTournamentList=async(req,res)=>{
    try {
        let tournament =await tournamentService.getTournamentList(req,res);
        res.status(200).json({
            success:true,
            message:'successfully fetched all Tournament',
            data: tournament,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getTournamentId=async (req,res)=>{
    try {
        const tournament=await tournamentService.getTournamentId(req.params.tournamentId);
        if(!tournament){
            throw new Error("No Such Tournament Found!!!");
        }
        res.status(200).json({
                       success : true ,
                       message :"Successfully Fetched A Tournament" ,
                       data  :{...tournament}
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


const deleteTournament=async(req,res)=>{
    try {
        const tournamentId=req.params.tournamentId;
        const tournament=await tournamentService.getTournamentId(tournamentId);
        if(!tournament){
            throw 'no Tournament found';
        }
        await tournamentService.deleteTournamentId(tournamentId);
        res.status(200).json({
            message: "Deleted Successfully",
            data: { tournament },
            success: true,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports={deleteTournament,getTournamentList,createTournament,getTournamentId}