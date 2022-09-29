const handleHttpError = (res, message="A ocurrido un error", code=403 ) => { 
    res.status(code)
    res.send({error:message})

    
}

module.exports = handleHttpError;
