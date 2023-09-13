const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination:function (req, file, cb) {
    if (file.fieldname == "banner_image") {
      console.log(__dirname, "__dirname+++++");
      fs.mkdirSync(path.join(__dirname, "../public/product_images"), {
        recursive: true, //to create folder recursively
      });
      cb(null, path.join(__dirname, "../public/product_images"));
    }
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
   if(ext !== '.png' && ext !== '.jpg' && ext!=='.jpeg' ){
    cb('Only images are allowed');
   }
   cb(null, new Date().getTime()+ ext);
  },
});

const upload = multer({
    storage : storage ,
});
module.exports={upload};
