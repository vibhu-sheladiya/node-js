const { userService , productService , categoryService } = require('../services');

/** get all list */
const getAllList = async (req , res) => {
    try {
        const userList = await userService.getUserList(req,res);
        const productList = await productService.getProductList(req,res);
        const categoryList = await categoryService.categoryList(req,res);

        res.status(200).json({
            success : true,
            message : "Your list create successfully !!",
            data : {userList , productList , categoryList}
        })
    } catch (error) {
        res.status(400).json({ success : false , message : error.message});
    }
}

module.exports = {getAllList}