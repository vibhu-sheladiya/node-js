const { categoryService } = require("../services");

/** create category*/
const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;
      console.log(reqBody,'+++++++++++ reqBody.category');
    const category = await categoryService.createCategory(reqBody);
    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: reqBody,
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
  
  /** Get category list */
  const getCategoryList = async (req, res) => {
    try {
      let categories=await  categoryService.categoryList(req,res);
      res.status(200).json({
        success:true,
        message:'success',
        data:{categories},
      });
          }catch(error){
            res.status(400).json({success:false,message:error.message});
          }
        };

        /**get category list by id */
        const getCategoryId= async(req,res)=>{
          try {
            const categoryDetails=await categoryService.getCategoryListId(req.params.categoryId);
            if(!categoryDetails){
              throw new Error("category not found");
            }
            res.status(200).json({
              success : true ,
              message:"Success",
              data:{categoryDetails},
            });
          } catch (error) {
            res.status(400).json({success:false,message:error.message});
          }
        };

        /**delete category */
        const deleteCategory=async(req,res)=>{
          try{
            const categoryId=req.params.categoryId;
            const categoryExists= await categoryService.getCategoryListId(categoryId);
            if(!categoryExists){
              throw new Error ("category not found");
            }
            await categoryService.deleteCategory(categoryId);
            res.status(200).json({
              success:true,
              message :"Successfully deleted",
              data:{categoryExists},
                 });
        }catch(error){
          res.status(400).json({success:false,message:error.message});
        }
      };
    module.exports = {
    createCategory,
    getCategoryList,
    getCategoryId,
    deleteCategory
    // getUserList,
    // getUserDetails,
    // updateDetails,
    // deleteUser,
    // sendMail,
  };