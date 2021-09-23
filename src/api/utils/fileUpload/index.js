const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const newDestination = __dirname + `/../../../public/`;

    cb(null, newDestination);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 10000000,
  },
  fileFilter: (req, file, cb) => {
    //allowed extension
    const filetypes = /jpeg|jpg|png|gif|mp4/;
    //check extension
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    //check mimetype
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      cb(null, true);
    } else {
      cb("Error: Image only !", false);
    }
  },
});
module.exports = upload;
