const express = require('express');
const router = express.Router();
const { getLogin, getRegister, getUsers, registerControl, loginControl } = require('../controllers/login');
const { encrypt, compare } = require('../utils/handlePassword');
const { tokenSign, verifyToken } = require('../utils/handleJwt');
const authMiddleware = require('../middleware/session')
const userPermisos = require('../middleware/userPermisos')
const fs = require('fs');


// router.post('/up', passport.authenticate('local', {
    //     succesRedirect:'/home',
    //     failureRedirect:'/login'
// }))


router.get('/', getLogin);


router.get('/register', getRegister);



router.get('/getUser', authMiddleware, userPermisos(['user', 'admin']) ,getUsers);

router.post('/register', registerControl);

router.post('/iniciar', loginControl )

 

module.exports = router;