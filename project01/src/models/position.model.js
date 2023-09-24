const mongoose=require('mongoose');
const positionSchema=new mongoose.Schema(
    {
        pos_name:{
            type:String,
            trim:true,
        },
    },{timestamps:true}
);
const Position=mongoose.model('position',positionSchema);
module.exports=Position;
