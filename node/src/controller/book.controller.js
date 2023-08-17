const {bookService}=require("../services");

/** create user */
const createBook=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'+++++++++++++++++++++++++++++++++req.book');
        const book =await bookService.createBook(reqBody);
        if(!book){
            throw new Error("something went wrong,please try again and later");
        }
         res.status(200).json({
            success:true,
            message:"success",
            data:book
         });
    } catch (error) {
        res.status(400).json({success:true,message:error.message})
    }
};
module.exports={ 
      createBook
}