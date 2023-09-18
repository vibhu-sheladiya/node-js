const mongoose=require('mongoose');
const teamSchema=new mongoose.Schema(
    {
        team_name:{
            type:String,required:[true,'team name is required'],unique: true,
        },
      coach:{
        type: String,
        ref:'coach',
      },team_member:{
        type:Array,
        ref:'member'
      },
    is_active:{
        type:Boolean,
        default:true,
      },
    },
    { timestamps: true }
);
const Team=mongoose.model('team',teamSchema);
module.exports =Team;