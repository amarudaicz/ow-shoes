const express = require('express');
const router = express.Router();
const {authToken} = require('../middleware/authToken')
const {getCartByUser, insertItemCart, deleteItemCart, assignOrder} = require ('../controllers/cart');
const { checkOrders } = require('../middleware/checkOrders');
const { validatorBuyProduct } = require('../validators/buyProductValidator');


router.get('/getCartUser' ,authToken, checkOrders ,getCartByUser)

router.get('/assign-order' , assignOrder)

router.post('/insert-product', authToken, checkOrders, validatorBuyProduct, insertItemCart)

router.delete('/delete-product/:id', deleteItemCart)

 
module.exports = router;