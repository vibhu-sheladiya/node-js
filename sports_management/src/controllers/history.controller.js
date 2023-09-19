const {historyService}=require('../services');

const createHistory=async(req,res)=>{
    try {
        const reqBody=req.body;
               console.log("create History",reqBody);
      const history=await historyService.createHistory(reqBody);
            if(!history){
                throw new Error('no such History');
            }
            res.status(200).json({
                message:'successfully created a new History',
                success:true,
                data:{history},
            });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

const getHistoryList=async(req,res)=>{
    try {
        let history =await historyService.getHistoryList(req,res);
        res.status(200).json({
            success:true,
            message:'successfully fetched all History',
            data: history,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getHistoryId=async (req,res)=>{
    try {
        const history=await historyService.getHistoryId(req.params.historyId);
        if(!history){
            throw new Error("No Such History Found!!!");
        }
        res.status(200).json({
                       success : true ,
                       message :"Successfully Fetched A History" ,
                       data  :{...history}
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


const deleteHistory=async(req,res)=>{
    try {
        const historyId=req.params.historyId;
        const history=await historyService.getHistoryId(historyId);
        if(!history){
            throw 'no History found';
        }
        await historyService.deleteHistoryId(historyId);
        res.status(200).json({
            message: "Deleted Successfully",
            data: { history },
            success: true,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports={deleteHistory,getHistoryList,createHistory,getHistoryId}