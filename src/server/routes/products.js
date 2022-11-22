const express = require('express');
const router = express.Router();

const {getItem, getVariantsByColor} = require('../controllers/products')



router.get('/get-product', getItem);

router.get('/get-variants-bycolor', getVariantsByColor );

module.exports = router;

