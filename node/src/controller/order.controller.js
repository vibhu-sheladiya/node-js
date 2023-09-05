const {orderService}=require("../services");

/** create order */
const createOrder=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'+++++++++++++++++++++++++++++++++req.order');
        const order =await orderService.createOrder(reqBody);
        if(!order){
            throw new Error("something went wrong,please try again and later");
        }
         res.status(200).json({
            success:true,
            message:"success",
            data:order
         });
    } catch (error) {
        res.status(400).json({success:true,message:error.message})
    }
};

// get order list
const getOrderList =async (req,res)=>{
    try {
        const orderList= await orderService.getOrderList(req,res);
        res.status(200).json({
            success : true ,
            message :"success" ,
            data    :  {orderList},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

// get order details by id
const getOrderDetails= async(req,res)=>{
    try {
        const orderDetails = await orderService.getOrderById(req.params.orderId);
        if(!orderDetails){
            throw new Error("order not found");
        }
        res.status(200).json({
            success:"order details get successfully",
            data:orderDetails,
        });
    } catch (error) {
        res.status(400).json({success: false,message:error.message});

    }
};

// delete order by id
const deleteOrder=async(req,res)=>{
    try {
        const orderId=req.params.orderId;
        const orderExists=await orderService.getOrderById(orderId);
        if(!orderExists){
            throw new Error("order not found");
        }
        await orderService.deleteOrder(orderId);
        res.status(200).json({
            success:true,
            message:"order deleted Successfully ",
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
// 	
module.exports={ 
    createOrder,
    getOrderList,
    getOrderDetails,
    deleteOrder
}