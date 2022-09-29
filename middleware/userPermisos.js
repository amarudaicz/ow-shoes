const handleHttpError = require('../utils/handleHttpError')

const userPermisos = (roles) => ( req, res, next ) => {


    try {
        //["admin"]
        const userRole = req.user.user.role

        const checkRol = roles.some((rol) => userRole.includes(rol))//TRUE/FALSE

        if (!checkRol) {
            handleHttpError(res, "USER_NOT_PERMISSIONS")
            return
        }

        next() 


    } catch (err) {
        handleHttpError(res, "ERROR_EN_USER_PERMISOS") 
    }
}

module.exports = userPermisos




