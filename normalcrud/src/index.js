const http=require('http');
const express=require('express');
const app=express()
const dotenv=require('dotenv');
const { connectDB } = require('./db/dbconnection');

connectDB();
dotenv.config();
 const server=http.createServer(app)
 server.listen(process.env.PORT),()=>{console.log(`server is running port on ${process.env.PORT}`);}
