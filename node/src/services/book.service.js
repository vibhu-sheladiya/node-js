const {Book}=require("../models");
/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
// create book service 
const createBook= async(reqBody)=>{
return Book.create(reqBody);
};

// get/list book service
const getBookList= async (req,res)=>{
    return Book.find();
}

// get book details by id 
const getBookById= async(userId)=>{
    return Book.findById(userId);
};

module.exports={
    createBook,
    getBookList,
    getBookById
};