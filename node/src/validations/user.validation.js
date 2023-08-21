const joi=require('joi');
//** create user */
const createUser={
    body: joi.object().keys({
        first_name: joi.string().required().trim(),
        last_name: joi.string().required().trim(),
        email : joi.string().required().trim(),
        password:joi.string().required().trim(),
    }),
    };
/**get user list */
    const getUserList={
        query: joi.object().keys({
        search: joi.string().trim().allow(""),
        sortBy: joi.string().trim().allow(""),
        limit: joi.number().integer().allow(""),
        page: joi.number().integer().allow(""),
        }),
    };

    /**get user details by id and delete id(both together work*/
    const getUserById = {
        params:joi.object().keys({
            userId:joi.string().required().trim(),
        }),
        };

        



    module.exports={
        createUser,
        getUserList,
        getUserById
    }