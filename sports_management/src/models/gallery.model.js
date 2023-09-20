const mongoose=require('mongoose');
const config=require('../config/config');

const gallerySchema=mongoose.Schema(
    {
        // gallery_image_name:{
        //     type:String,
        //     trim:true,
        // },
        gallery_image:{
            type : String,
            trim:true,
        },
        gallery_des:{
            type:String,
            trim:true,
        },
        match:{
            type:mongoose.Types.ObjectId,
            ref:'match',
        },
        is_active:{
            type:Boolean , default:false,
        },
    },
    {timestamps:true,versionKey:false,
        toJSON: {
            transform: function (doc, data) {
              if (data?.gallery_image) {
                data.gallery_image = `${config.base_url}gallery_images/${data.gallery_image}`;
                console.log(config.gallery_image)
              }
            },
          },
        }
        );
const Gallery=mongoose.model('gallery',gallerySchema);
module.exports =Gallery;