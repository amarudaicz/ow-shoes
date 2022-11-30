const express = require('express');
const router = express.Router();
const {
  getAdminPanel,
  InsertProduct,
  getProductsPanel,
  deleteProduct,
  getProductsModels,
  getProductCtrl,
  updateProductCtrl,
  insertVariations,
  getProductsVariations,
  getProductModel,
  getSizesProductModel,
  getColorsProductModel,
  getGuideValues,
  filterVariants,
  deleteProductVariant,
  editProductVariant,
  uploadThumbanail,
  uploadDetailImages
} = require('../controllers/admin');

const {validatorInsertProduct, validatorInsertVariants} = require('../validators/adminPanelValidators/insertProductValidator');

const multerOp = require('../middleware/admin/uploadImages');

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


router.get('/home', getAdminPanel);

router.get('/products-panel', getProductsPanel);

router.get('/list-products', getProductsModels);



//GET PRODUCT MODEL
router.get('/get-product-model', getProductModel);

  

//GET COLORS AND SIZES PRODUCTS
router.get('/get-sizes-product-model', getSizesProductModel)
router.get('/get-colors-product-model', getColorsProductModel)



//CRUD PRODUCTS
router.post('/insert-product', InsertProduct);
router.post('/insert-image-thumbnail' ,uploadThumbanail);
router.post('/insert-image-detail', multerOp.uploadArray ,uploadDetailImages);
router.delete('/delete-product/:id', deleteProduct);
router.delete('/delete-product-variant/:id', deleteProductVariant);



//EDIT PRODUCT
router.get('/edit-product', getProductCtrl);
router.put('/update-product-model', updateProductCtrl);



//ADD VARIATIONS
router.post('/insert-variations', validatorInsertVariants, insertVariations);
router.get('/get-guide-values/:table', getGuideValues);
router.get('/get-products-variations', getProductsVariations);

//CONTROL VARIATIONS
router.put('/edit-product-variant', editProductVariant);

//FILTER LIST VARIANTS
router.get('/get-filter-variants', filterVariants)






module.exports = router;
