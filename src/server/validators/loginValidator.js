const { check } = require('express-validator');
const { validateResult } = require('../utils/handleValidator');

const validatorRegisterUser = [
  check('name').notEmpty().withMessage('El nombre no debe estar vacio'),

  check('email')
    .isEmail()
    .withMessage('Completar el campo Email'),

  check('age').notEmpty().withMessage('Completar el campo Edad'),

  check('password')
    .notEmpty()
    .withMessage('Completar el campo Contraseña')
    .isLength({ max: 30, min: 8 })
    .withMessage('La contraseña tener una longitud minima de 8 caracteres'),
    
    
  (req, res, next) => {
    validateResult(req, res, next);
  },

];

const validatorLoginUser = [
  check('email').exists().notEmpty().isEmail(),

  check('password').exists().notEmpty().isLength({ min: 3, max: 15 }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validatorRegisterUser, validatorLoginUser };
