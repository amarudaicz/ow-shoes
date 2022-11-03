const express = require('express');
const router = express.Router();
const {
  getLogin,
  getRegister,
  getUser,
  registerControl,
  loginControl,
  isAuth,
} = require('../controllers/login');

const {authToken} = require('../middleware/authToken');
const { checkOrders } = require('../middleware/checkOrders');
const { validatorRegisterUser } = require('../validators/loginValidator');


router.get('/', getLogin);

router.get('/register-view', getRegister);

router.get('/getUser', authToken , getUser);

router.get('/isAuth', authToken, checkOrders, isAuth);

router.post('/register', validatorRegisterUser, registerControl);

router.post('/go', loginControl);

module.exports = router;
