const mongoose = require("mongoose");
const tournamentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    start_date: Date,
    end_date: Date,
    is_active:{
      type : Boolean , default : true
    }
    // tournament_type:{
    //      type:Number,//0-single 1-double
    //        required:[true,'tournament Type is Required'],
    //         enum :[0,1],
    //           default:'',
    //    },
    //       status:{
    //             type:String ,enum:["active","inactive"],
    // },
  },
  { timestamps: true }
);
const Tournament = mongoose.model("tournament", tournamentSchema);
module.exports = Tournament;
