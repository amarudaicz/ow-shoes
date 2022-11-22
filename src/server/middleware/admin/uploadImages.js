


const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  
  filename: function (req, file, cb) {
    const date = new Date();
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    
    cb(null, `${month}-${day}-${year}-${file.originalname.replace(' ', '-')}` );
  },
});


const upload = multer({ storage: storage });


exports.uploadArray = upload.array('img-detail-product', 10)
exports.uploadSingle = upload.single('img-thumbnail-product')
