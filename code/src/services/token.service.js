const jwt= require('jsonwebtoken');
const {Token}=require('../models');
const config=require('../config/config');

const createToken=async(reqBody)=>{
    let payload={
        ...reqBody,
    };
    console.log(payload);
    return jwt.sign(payload,config.jwt.secret_key);
};

const saveToken=async(reqBody)=>{
    // console.log(payload)
    return Token.findOneAndUpdate(
        {user:reqBody.user},
        {
            $set:{
                ...reqBody,
            },
        },
        { new: true, upsert: true }
        // console.log(user)
        );
};
module.exports ={createToken ,
    saveToken
};