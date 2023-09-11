const joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = joi
  .object({
    PORT: joi.number().default(5060),
    MONGODB_URL: joi.string().trim().description("mongodb url"),
  })
  .unknown();
// console.log(envVarsSchema)

const aa = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);
console.log(aa);

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

// console.log('====================================');
// console.log(envVars.PORT);
// console.log(envVars.url);
// console.log(envVars);
// console.log('====================================');
if (error) {
  console.log("Config Error", error);
}
module.exports = {
  port: envVars.PORT,
  mongodb: {
    url: envVars.MONGODB_URL,
    // url:'mongodb+srv://vibhasheladiya3936:azHqS6BCvCKsIqMV@cluster0.gxfoxkv.mongodb.net',
    option: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
