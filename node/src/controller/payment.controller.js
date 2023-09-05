const {paymentService}=require("../services");

/** create payment */
const createPayment=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'+++++++++++++++++++++++++++++++++req.payment');
        const payment =await paymentService.createPayment(reqBody);
        if(!payment){
            throw new Error("something went wrong,please try again and later");
        }
         res.status(200).json({
            success:true,
            message:"success",
            data:payment
         });
    } catch (error) {
        res.status(400).json({success:true,message:error.message})
    }
};

// get payment list
const getPaymentList =async (req,res)=>{
    try {
        const paymentList= await paymentService.getPaymentList(req,res);
        res.status(200).json({
            success : true ,
            message :"success" ,
            data    :  {paymentList},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

// get payment details by id
const getPaymentDetails= async(req,res)=>{
    try {
        const paymentDetails = await paymentService.getPaymentById(req.params.paymentId);
        if(!paymentDetails){
            throw new Error("payment not found");
        }
        res.status(200).json({
            success:"payment details get successfully",
            data:paymentDetails,
        });
    } catch (error) {
        res.status(400).json({success: false,message:error.message});

    }
};

// delete payment by id
const deletePayment=async(req,res)=>{
    try {
        const paymentId=req.params.paymentId;
        const paymentExists=await paymentService.getPaymentById(paymentId);
        if(!paymentExists){
            throw new Error("payment not found");
        }
        await paymentService.deletePayment(paymentId);
        res.status(200).json({
            success:true,
            message:"payment deleted Successfully ",
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
// 	
module.exports={ 
    createPayment,
    getPaymentList,
    getPaymentDetails,
    deletePayment
}