const mongoose=require('mongoose');
const config=require('../config/config');

const connectDB=async()=>{
    mongoose
    .connect(config.url,config.mongodb.option)
    .then((data)=>{
        console.log("Connected to MongoDB");
    })
    .catch(()=>{
        console.error("Error connecting to mongoDb")
    });
};
module.exports={connectDB};