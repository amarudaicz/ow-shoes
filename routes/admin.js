const express = require('express');
const router = express.Router();
const {
  getAdminPanel,
  InsertProduct,
  getProductsPanel,
  deleteProduct,
  listProducts,
  getProductCtrl,
  updateProductCtrl,
  getVariations,
  setingVariations,
  insertVariations,
  getProductsVariations,
  getProductModel
} = require('../controllers/admin');

const { authToken } = require('../middleware/authToken');

const {validatorInsertProduct,} = require('../validators/adminPanelValidators/insertProductValidator');



router.get('/home', getAdminPanel);

router.get('/products-panel', getProductsPanel);

router.get('/list-products', listProducts);


//EDIT PRODUCT
router.get('/edit-product', getProductCtrl);
router.post('/edit-product', updateProductCtrl);



//ADD VARIATIONS
router.post('/insert-variations', insertVariations);
router.post('/seting-variations', setingVariations);
router.get('/get-variations', getVariations);

router.get('/get-products-variations', getProductsVariations);

//GET PRODUCT MODEL
router.get('/get-product-model', getProductModel);




//CONTROL PRODUCTS
router.post('/insert-product', validatorInsertProduct, InsertProduct);
router.delete('/delete-product/:id', deleteProduct);

module.exports = router;
