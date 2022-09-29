const bcryptjs = require('bcryptjs')

/**
 * CONTRASEÑA SIN ENCRIPTAR
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash( passwordPlain, 10)
    return hash

};

/**
 * contraseña sin encriptar y contraseña encriptada
 * @param {} passwordPlain 
 * @param {*} passwordHashed 
 */
const compare = async (passwordPlain, passwordHashed) => {
    const pass =  await bcryptjs.compare(passwordPlain, passwordHashed)
    return pass
};




module.exports = {encrypt, compare}