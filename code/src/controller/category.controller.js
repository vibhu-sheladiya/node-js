const {categoryService}=require("../services");

const createCategory=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'+++++++++reqBody.category');
        const category=await categoryService.createCategory(reqBody);
        if(!category){
            throw new Error("Error in creating the Category")
        }
        res.status(200).json({
            message:"Successfully created a new category",
            success:true,
            data:{category},
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

const getCategoryList=async(req,res)=>{
    try {
        let categories=await categoryService.categoryList(req,res)
res.status(200).json({
    message:"successfully fetched all Categories list",
    data:{categories} ,  //this is an array of objects
    success:true,
});
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

const getCategoryId=async(req,res)=>{
    try {
        const categoryDetails=await categoryService.getCategoryListId(req.params.categoryId);
        if(!categoryDetails){
            throw new Error('No such category found')
        }
        res.status(200).json({
            success:true,
            data:{categoryDetails},
            message:'Fetched successfully',
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

const deleteCategory=async(req,res)=>{
    try {
        const categoryId=req.params.categoryId;
        const categoryExists=await categoryService.getCategoryListId(categoryId);
        if(!categoryExists){
            throw new Error(`No Such Category Found`)
        }
        await categoryService.deleteCategory(categoryId);
        res.status(200).json({
            success:true,
            message:"Deleted Successfully",
            data:{categoryExists},
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

module.exports={
    createCategory,getCategoryList,getCategoryId,deleteCategory
}