const http=require('http');
const express=require('express');
const { connectDB } = require("./src/db/dbConnection");
const config = require("./src/config/config");
const routes=require('./src/routes/v1')
const app=express();

/** whenever   route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
    next(new Error("Route not found!"));
  });

/** Database connection */
connectDB()

// router with name space 
app.use('/v1',routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

// creating server using http
const server= http.createServer(app);
server.listen(config.port,()=>{
    console.log("server listing the port 3000");
});
