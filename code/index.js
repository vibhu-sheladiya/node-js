const http=require('http');
const express=require('express');
const bodyParser = require("body-parser");
const { connectDB } = require("./src/db/dbConnection");
const config = require("./src/config/config");
const cors = require("cors");
const routes=require('./src/routes/v1');
const path=require('path');
require('./src/middlewares/upload');
// require("./helpers/crons");
const app=express();

/**
 * allow form-data from body
 * form-data is use for image upload
 * parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * allow json data from body
 * parse application/json
 */
app.use(bodyParser.json());

/** enable cors */
app.use(cors());
app.options("*", cors());

console.log(__dirname,"dirname")
app.use(express.static(path.join(__dirname,`./src/public`)));

// router with name space 
app.use('/v1',routes);

/** whenever   route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
  });

  // app.use(express.static("./public"));

/** Database connection */
connectDB()

const server= http.createServer(app);
server.listen(config.port,()=>{
console.log("server listing the port 5000"+config.port);
});
