const handleHttpError = require('../utils/handleHttpError');
const { verifyToken, tokenSign } = require('../utils/handleJwt');


const authToken = (req, res, next) => {

  try {

    const token = req.header('token')
    
    if (token === 'null' || !token) return res.json({errors:'Not Token'})

    const payload = verifyToken(token);
    
    //MANDAR A LOGIN
    if (!payload) return res.json({errors:'Token Invalid'})

    
    req.user = payload;

    next();

  } catch (err) {

    handleHttpError(res, 'TOKEN_NOT_VALID', 401);
  
  }
};

module.exports = { authToken };
