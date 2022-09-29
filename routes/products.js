const express = require('express');
const router = express.Router();
const {getItem} = require('../controllers/products')


router.get('/:id', getItem);


module.exports = router;

