const joi=require('joi');
const dotenv=require('dotenv');

dotenv.config({path:'./.env'});

const envVarsSchema=joi
.object({
    PORT:joi.number().default(2500),
    MONGODB_URL:joi.string().trim().description('mongodb url'),
    BASE_URL:joi.string().trim().description('base URL'),
    JWT_SECRET_KEY:joi.string().description('Jwt sectreat key').default('thisisjwtsecreat_key'),

}).unknown();

const aa =envVarsSchema
.prefs({ errors: { label: "key" } })
.validate(process.env);

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);
  console.log(aa)

  if(error){
    console.log(`Config validation failed`,error);
  }
  module.exports={
    port: envVars.PORT,
    mongodb: {
      url: envVars.MONGODB_URL,
      // url:'mongodb+srv://vibhasheladiya3936:azHqS6BCvCKsIqMV@cluster0.gxfoxkv.mongodb.net',
      option: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
    base_url: envVars.BASE_URL,
    jwt: {
      secret_key: envVars.JWT_SECRET_KEY,
    },
    };
