const { validationResult } = require('express-validator'); //TODO:

const validateResult = (req, res, next) => {
  try {
    
    validationResult(req).throw();

    return next();
    
  } catch (err) {
    res.status(400);
    res.json( err );
  }
};

module.exports = { validateResult };
