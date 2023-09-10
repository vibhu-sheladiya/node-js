const {productService}=require('../services');

const createProduct=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'+++++++product');
        const product=await productService.createProduct(reqBody);
        if(!product){
            throw new Error('no find product');
        }
               res.status(201).json({
                message:'success',
                data:product,
            success:true,
            });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

const getProductList=async(req,res)=>{
    try {
        let product=await productService.productList(req,res)
        res.status(200).json({
            data:{...product},
            // message:'success',
            // success:true,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

const getProductId=async(req,res)=>{
    try {
        const product=await productService.getProductId(req.params.ProductId);
        if(!product){
            throw  new Error("not found");
        }
        res.status(200).json({
            data:{product},
             message:"success",
            success:true,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

const deleteProduct=async(req,res)=>{
    try {
        const ProductId=req.params.ProductId;
        const product=await productService.getProductId(ProductId);
        if(!product){
            throw   new Error ("Not Found")
        }
        await productService.deleteProduct(ProductId);
        res.status(200).json({
            data:{product},
                        message:"success",
                            success:true,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};
module.exports={createProduct,getProductList ,getProductId,deleteProduct };