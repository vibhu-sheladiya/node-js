const http=require('http');
const express=require('express');
const {connectDB}=require('./src/db/dbconnection');
const bodyParser=require('body-parser');
const config=require('./src/config/config');
const cors=require('cors');
const routes=require('./src/routes/v1');
const path=require('path');
require('./src/middlewares/upload');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use(cors());
app.options('*',cors());

app.use(express.static(path.join(__dirname,`./public`)));

app.use('/v1',routes);
