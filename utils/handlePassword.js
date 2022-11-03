const bcryptjs = require('bcryptjs')

/**
 * CONTRASEÑA SIN ENCRIPTAR
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) => {
    const saltRound = 10
    const salt = await bcryptjs.genSalt(saltRound);

    const hash = await bcryptjs.hash(passwordPlain, salt)

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