const jsonwebtoken = require('jsonwebtoken')
const jwtSecret = 'masterKey'

/**
 * Pasar el objeto del usuario 
 * @param {*} users 
 */
const tokenSign = (user) => {
    const sign = jsonwebtoken.sign(
        {
            id:user.id,//PAILOAD
            role:user.role,//PAILOAD
            name:user.name,//PAILOAD

        },
        jwtSecret,//SECRET
        {
            expiresIn:'6h'
        }
    )

    return sign

}


/**
 * PASAR EL TOKEN DE SESSION OSEA EL JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = (tokenJwt) => {
    try {

        let decoded = jsonwebtoken.verify(tokenJwt, jwtSecret)

        return decoded

    } catch (err) {
        return null
    }
}

module.exports = {tokenSign, verifyToken}
