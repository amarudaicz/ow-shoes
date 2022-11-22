const handleHttpError = (res, message="A ocurrido un error", code=403 ) => { 
    res.status(code)
    res.json({errors:message})
}

module.exports = handleHttpError;
