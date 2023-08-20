const {Book}=require("../models");
/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
// craete book service 
const createBook= async(reqBody)=>{
return Book.create(reqBody);
};

// get/list book service
const getBookList= async (req,res)=>{
    return Book.find();
}

module.exports={
    createBook,
    getBookList
};