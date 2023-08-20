const joi=require('joi');
// create book
const createBook={
    body: joi.object().keys({
        book_name : joi.string().required().trim(),
        description :joi.string().required().trim(),
        author_name:joi.string().required().trim()
}),
};
module.exports={
    createBook
}