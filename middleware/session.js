const handleHttpError = require('../utils/handleHttpError')
const {verifyToken} = require('../utils/handleJwt')
const identificarUser = require('../utils/identificarUser')


const authMiddleware = (req, res, next)=>{

    try {
        
        if(!req.headers.authorization){
            handleHttpError(res, "NOT_TOKEN", 401)
            return
        }

        const token = req.headers.authorization.split(' ').pop()//SEPARAMOS EL TOKEN DE LA PALABRA BEARER QUE VIENE EN EL HEADER DE LA SOLICITUD
        const dataToken = verifyToken(token)
        
        if (!dataToken) {
            handleHttpError(res, "ERROR_EN_VERIFY_TOKEN", 401)
            return
        }

        identificarUser(req, dataToken.id)

        next()
    }catch (err) {
        handleHttpError(res, "ERROR_EN_SESSION_AUTH", 401)
    }
}

module.exports = authMiddleware