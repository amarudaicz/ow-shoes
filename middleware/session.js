const handleHttpError = require('../utils/handleHttpError')
const {verifyToken} = require('../utils/handleJwt')


const authSession = (req, res, next)=>{
    
    try {

        const { cookies } = req;
        const userToken = cookies.user.token 
        
        const dataToken = verifyToken(userToken) //VERIFICAMOS SI EL TOKEN EXISTE Y ACCEDEMOS A SU PAYLOAD
        
        if (!dataToken) {
            handleHttpError(res, "ERROR_EN_VERIFY_TOKEN", 401)
            return
        }

        next()
        
    }catch (err) {
        handleHttpError(res, "ERROR_EN_SESSION_AUTH", 401)
    }
}

module.exports = authSession