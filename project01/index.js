// const express=require('express');
// const bodyParser=require('body-parser');
// const connectDb=require('./src/db/db')
// const app= express();
// app.use(bodyParser.json())
// connectDb()
// .then(()=>{
//     console.log('db conncetion success');
//     app.listen(2000,()=>{
//         console.log('server started at 2000')
//     })
// })
// .catch( err=>console.log(err))

const express=require('express');
const http=require('http');
const bodyParser=require('body-parser');
const config=require('./src/config/config');
const {connectDB}=require('./src/db/db');
const app=express();
// const routes=require('./src/')
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use('/va',routes);
app.use((req,res,next)=>{
    next(new Error('routes not found'));
});

connectDB()

const server=http.createServer(app);
server.listen(config.port,()=>{
    console.log('server listing the port 3000');
});

