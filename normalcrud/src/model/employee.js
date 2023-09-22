const mongoose=require('mongoose');
const Schema=mongoose.Schema;

// user schema ...actual users of the admin and employee
const employeeSchema=new Schema(
    {
        type:{
            type:String,
            default:'employee'
        },
        name:{type:String,required:true},
        phone:{
            type:Number,minlength:[10],maxlength:[10],required:true,unique:true,
        },password:{
            type:String,
            required:true,
            minlength:6
        },
        occupancy:{
            adults:{
                type:Number,default:0
            },children:{
                type:Number,default:0
            }
        },  user_secret: {
            type: String,
            default: null
        }
    },{timestamps:true}
);


const Employee=mongoose.model('employee',employeeSchema);
module.exports= Employee;