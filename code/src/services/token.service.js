const jwt= require('jsonwebtoken');
const {Token}=require('../models');
const config=require('../config/config');

const createToken=async(reqBody)=>{
    let payload={
        ...reqBody,
    };
    return jwt.sign(payload,config.jwt.secret_key);
};

const saveToken=async(reqBody)=>{
    return Token.findOneAndUpdate(
        {user:reqBody.user},
        {
            $set:{
                ...reqBody,
            },
        },
        
        );
};
module.exports ={createToken ,saveToken};