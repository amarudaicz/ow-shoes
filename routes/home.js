


const express = require('express');
const router = express.Router();
const {getIndex,getHome} = require('../controllers/home')
const {authToken} = require('../middleware/authToken');
const { checkOrders } = require('../middleware/checkOrders');



router.get('/' ,getHome);

module.exports = router;

