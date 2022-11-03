const { check } = require('express-validator');
const { validateResult } = require('../../utils/handleValidator');


const validatorInsertProduct = [
  check('title').notEmpty().isLength({ max: 30, min: 2 }),

  check('subtitle').notEmpty().isLength({ max: 30, min: 2 }),
  
  check('price').notEmpty(),
  
  check('priceOffer').notEmpty(),

  check('sizes').notEmpty(),

  check('description1').notEmpty(),

  check('description2').notEmpty(),
  
  check('images').notEmpty(),
  
  (req, res, next) => {
    validateResult(req, res, next);
  },
];


module.exports = { validatorInsertProduct };
