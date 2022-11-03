const jsonwebtoken = require('jsonwebtoken');

/**
 * Pasar el objeto del usuario
 * @param {*} users
 */

const tokenSign = (payload) => {

  const sign = jsonwebtoken.sign(

    payload,

    process.env.SECRET_JWT,

    {
      expiresIn: '1d',
    }

  );

  return sign;
};

/**
 * PASAR EL TOKEN DE SESSION OSEA EL JWT
 * @param {*} tokenJwt
 * @returns
 */

const verifyToken = (tokenJwt) => {
  try {

    let decoded = jsonwebtoken.verify(tokenJwt, process.env.SECRET_JWT);

    return decoded; 
    
  } catch (err) {
    return false;

  }

};

module.exports = { tokenSign, verifyToken };









