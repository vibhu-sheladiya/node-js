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

// get book list
const getBookList =async (req,res)=>{
    try {
        const bookList= await bookService.getBookList(req,res);
        res.status(200).json({
            success : true ,
            message :"success" ,
            data    :  {bookList},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
};

// get book details by id
const getBookDetails= async(req,res)=>{
    try {
        const bookDetails = await bookService.getBookById(req.params.userId);
        if(!bookDetails){
            throw new Error("book not found");
        }
        res.status(200).json({
            success:"Book details get successfully",
            data:bookDetails,
        });
    } catch (error) {
        res.status(400).json({success: false,message:error.message});

    }
};

// delete book by id
const deleteBook=async(req,res)=>{
    try {
        const bookId=req.params.bookId;
        const bookExists=await bookService.getBookById(bookId);
        if(!bookExists){
            throw new Error("user not found");
        }
        await bookService.deleteBook(bookId);
        res.status(200).json({
            success:true,
            message:"User deleted Successfully ",
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
module.exports={ 
      createBook,
      getBookList,
      getBookDetails,
      deleteBook
}