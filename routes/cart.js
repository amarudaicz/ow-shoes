const express = require('express');
const router = express.Router();
const {authToken} = require('../middleware/authToken')
const {getCartByUser, insertItemCart, deleteItemCart, getDataCart} = require ('../controllers/cart');
const { checkOrders } = require('../middleware/checkOrders');



router.get('/getCartUser' ,authToken, checkOrders ,getCartByUser)

router.post('/buy', checkOrders, insertItemCart)

router.delete('/delete-product/:id', deleteItemCart)

router.get('/data', getDataCart)


module.exports = router;