const mongoose=require('mongoose');
const bookScheme= new mongoose.Schema(
    {
        book_name:{
            type:String,
            trim:true,
            required:[true,'book name is required']
            },
            author_name:{
            type : String,
            trim: true,
            maxlength: 300,
            minlength: [2,"author's length must be greater than or equal to two characters"],
            required: false,
        },
        // genre:{type:Array},
        description:{
            type:String,
            trim:false,
            default:'',
            maxlength:512,
        },
        // coverImageURL:{
        //     type:String,
        //     trim:true,
        //     match:/^https?:\/\//i,
        // },
        // status:{
        //     type:Boolean,
        //     default:true,
        //     },  
            createdAt:{
                type:Date,
                default: Date.now()
                },
                // updatedAt:{
                //     type:Date,
                //     default: null
                //     },
    },{timestamps:true,versionKey:false}
);

const Book = mongoose.model("books",bookScheme);
module.exports=Book;
