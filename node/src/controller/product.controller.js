const { productService } = require("../services");

/** create category*/
const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;
      console.log(reqBody,'+++++++++++ reqBody.product');
    const product = await productService.createProduct(reqBody);
    if (!product) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: product,
      data: { product },
    })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
  
  /** Get category list */
  const getProductList = async (req, res) => {
    try {
      let product=await  productService.getProductList(req,res);
      res.status(200).json({
        success:true,
        message:'success',
        data:{product},
      });
          }catch(error){
            res.status(400).json({success:false,message:error.message});
          }
        };

        /**get category list by id */
        const getProductId= async(req,res)=>{
          try {
            const productDetails=await productService.getProductById(req.params.productId);
            if(!productDetails){
              throw new Error("category not found");
            }
            res.status(200).json({
              success : true ,
              message:"Success",
              data:{productDetails},
            });
          } catch (error) {
            res.status(400).json({success:false,message:error.message});
          }
        };

        /**delete category */
    //     const deleteCategory=async(req,res)=>{
    //       try{
    //         const productId=req.params.productId;
    //         const productExists= await categoryService.getCategoryListId(productId);
    //         if(!productExists){
    //           throw new Error ("category not found");
    //         }
    //         await categoryService.deleteCategory(productId);
    //         res.status(200).json({
    //           success:true,
    //           message :"Successfully deleted",
    //           data:{categoryExists},
    //              });
    //     }catch(error){
    //       res.status(400).json({success:false,message:error.message});
    //     }
    //   };
    module.exports = {
        createProduct,
        getProductList,
        getProductId,
    // deleteCategory
    // getUserList,
    // getUserDetails,
    // updateDetails,
    // deleteUser,
    // sendMail,
  };