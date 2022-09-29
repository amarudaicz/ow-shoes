const express = require('express');
const router = express.Router();
const getIndex = require('../controllers/home')



router.get('/', getIndex);



module.exports = router;

