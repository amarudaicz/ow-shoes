const handleHttpError = require('../utils/handleHttpError')

const userPermisos = (roles) => ( req, res, next ) => {

    try {
        //["admin"]
        const {user} = req.dataUser

        userRole = user.role
        
        console.log(user);

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




