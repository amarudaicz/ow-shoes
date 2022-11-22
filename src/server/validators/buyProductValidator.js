const { check } = require('express-validator');
const { validateResult } = require('../utils/handleValidator');

const validatorBuyProduct = [
  check('color_id').notEmpty().withMessage('Elije un color porfavor'),

  check('size_id').notEmpty().withMessage('Elije un talle'),

  (req, res, next) => {
    validateResult(req, res, next);
  },

];



module.exports = { validatorBuyProduct };
