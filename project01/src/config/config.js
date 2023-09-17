const joi=require('joi');
const dotenv=require('dotenv');
dotenv.config();

const envVarsSchema=joi.object({
    PORT:joi.number().default(6500),
    MONGODB_URL:joi.string().description('conncertd').trim()
}).unknown()

const {value:envVars,error}=envVarsSchema
.prefs({errors:{label:"key"}})
.validate(process.env);

if(error){
    console.log(`Config validation error:${error}`);
}
module.exports={
    port:envVars.PORT,
    mongodb:{
        url:envVars.MONGODB_URL,
        Option:{
                       useNewUrlParser : true ,
                       useUnifiedTopology :true
        },
    },
};