const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");


const validatorRegisterUser = [
    check('name')
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),

    check('email')
    .exists()
    .notEmpty()
    .isEmail(),

    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    
    (req, res, next) => {
      validateResult(req, res, next);
    },
];

const validatorLogin = [
  
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),

    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    
    (req, res, next) => {
      validateResult(req, res, next);
    },
];


module.exports = {validatorRegisterUser, validatorLogin};