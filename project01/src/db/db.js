// const mongoose=require('mongoose');
// const dbUri= 'mongodb+srv://vibhasheladiya3936:azHqS6BCvCKsIqMV@cluster0.gxfoxkv.mongodb.net/demo?retryWrites=true&w=majority'
// module.exports=()=>{
//      return mongoose.connect(dbUri,{ useNewUrlParser: true,
//         useUnifiedTopology: true,});
// }

const mongoose=require('mongoose');
const config=require('../config/config');
const connectDB=async()=>{
        mongoose.connect(config.mongodb.url,config.mongodb.Option)
        .then((data)=>{console.log('mongodb connected successfully')
});
};
module.exports={
        connectDB}