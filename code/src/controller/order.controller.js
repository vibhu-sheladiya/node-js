const {orderService}=require('../services');

const createOrder=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'+++++++reqBody');
        const order=await orderService.createOrder(reqBody);
        if(!order){
            throw new Error("no such order")
        }
        res.status(200).json({
            message:'success',data:order,success:true
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

const getOrderList=async(req,res)=>{
    try {
        let order=await orderService.orderList(req,res)
        res.status(200).json({
                       success: true, data:{...order},message:"success"
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

const orderId=async(req,res)=>{
    try {
        const order=await orderService.orderListId(req.params.orderId);
        if(!order){
            throw  error('No Order Found')
        }
        res.status(200).json({
            success: true, data: {...order} ,message:"success",
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

const deleteOrder=async(req,res)=>{
    try {
        const orderId=req.params.orderId;
        const order=await orderService.orderListId(orderId);
        if(!order){
            throw   error('No Order Found')
        }
        await orderService.deleteOrder(orderId);
        res.status(200).json({
            // code:201,
            message:`${orderId} deleted successfully`,
            success:true,
            data:{order}
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};
module.exports={createOrder,getOrderList,orderId,deleteOrder };