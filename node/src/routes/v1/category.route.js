const express=require('express');
const {categoryValidation}= require('../../validations');
const {categoryController}=require('../../controller');
const validate=require('../../middlewares/validate');
const router=express.Router();

// create category 
router.post("/create-category",
validate(categoryValidation.createCategories),
categoryController.createCategory
);


// get category list 
router.get("/list",
validate(categoryValidation.getCategoriesList),
categoryController.getCategoryList
);

/**get category list by id */
router.get('/category-id/:categoryId',
// validate(categoryValidation.getCategoryDetails),
categoryController.getCategoryId);

/**delete category  */
router.delete('/delete/:categoryId',
validate(categoryValidation.getCategoryDetails),
categoryController.deleteCategory);


// get user list simple api
// router.post('/create-user',(req,res)=>{
//     res.send("connected succesfuly");
// });
module.exports=router;
