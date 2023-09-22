const mongoose=require('mongoose');
const companySchema=new mongoose(
    {
        name:String,
        area:{type: String},
        mobile:Number,
    },{timestamps:true,}
);
const Company=mongoose.model('company',companySchema);
module.exports =Company;