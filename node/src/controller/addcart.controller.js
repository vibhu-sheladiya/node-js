const {addcartService}=require("../services");

/** create cart */
const createCart=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'+++++++++++++++++++++++++++++++++req.cart');
        const cart =await addcartService.createAddcart(reqBody);
        if(!cart){
            throw new Error("something went wrong,please try again and later");
        }
         res.status(200).json({
            success:true,
            message:"success",
            data:cart
         });
    } catch (error) {
        res.status(400).json({success:true,message:error.message})
    }
};

// get cart list
const getCartList =async (req,res)=>{
    try {
        const cartList= await addcartService.getAddcartList(req,res);
        res.status(200).json({
            success : true ,
            message :"success" ,
            data    :  {cartList},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

// get cart details by id
const getCartDetails= async(req,res)=>{
    try {
        const cartDetails = await addcartService.getAddcartById(req.params.cartId);
        if(!cartDetails){
            throw new Error("cart not found");
        }
        res.status(200).json({
            success:"cart details get successfully",
            data:bookDetails,
        });
    } catch (error) {
        res.status(400).json({success: false,message:error.message});

    }
};

// delete cart by id
const deleteCart=async(req,res)=>{
    try {
        const cartId=req.params.cartId;
        const cartExists=await addcartService.getAddcartById(cartId);
        if(!cartExists){
            throw new Error("cart not found");
        }
        await addcartService.deleteAddcart(cartId);
        res.status(200).json({
            success:true,
            message:"cart deleted Successfully ",
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
// 	
module.exports={ 
    createCart,
      getCartList,
      getCartDetails,
      deleteCart
}