const joi=require('joi');
// create book
const createBook={
    body: joi.object().keys({
        book_name : joi.string().required().trim(),
        description :joi.string().required().trim(),
        author_name:joi.string().required().trim()
}),
};

// get book list 
const getBookList={
    body: joi.object().keys({
        // pageNo  : joi.number().integer().min(1).default(0),
        // pageSize   : joi.number().integer().positive().max(5)
        // .default(20),
        // sortField    : joi.string().valid("bookName","author").default(""),
        // order     :"asc"|| "desc",
        search: joi.string().trim().allow(""),
        sortBy: joi.string().trim().allow(""),
        limit: joi.number().integer().allow(""),
        page: joi.number().integer().allow("")
    }),
};

// get book details by id
const getDetails={
    params:joi.object().keys({
        bookId:joi.string().required().trim(),
    }),
};
module.exports={
    createBook,
    getBookList,
    getDetails
}