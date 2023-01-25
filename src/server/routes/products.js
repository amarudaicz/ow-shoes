const express = require('express');
const router = express.Router();

const {getItem, getVariantsByColor, getAllProducts} = require('../controllers/products')



router.get('/get-product/:id', getItem);

router.get('/get-variants-bycolor', getVariantsByColor );

router.get('/get-all-products', getAllProducts)
module.exports = router;

