import {check, validationResult} from 'express-validator/check';

<<<<<<< HEAD
const validate = {
  signup : [
    check('firstName')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('First Name should not be left empty: Please input firstName')
      .isAlpha()
      .trim()
      .withMessage('first Name can only contain letters: Please remove invalid characters'),
    check('lastName')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Last name should not be left empty: Please input lastName')
      .isAlpha()
      .trim()
      .withMessage('Last name can ony contain letters: remove invalid characters'),
    check('email')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Email should not be left empty: Please input email address')
      .isEmail()
      .trim()
      .withMessage('Email is not valid: Please input a valid email address'),
    check('password')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Password should not be empty: Please input password')
      .trim()
      .isLength({ min: 7 })
      .withMessage('Password Length should be at least 8 Characters'),
      
    (req, res, next) => {
      const errors = validationResult(req);
      const errMessages = [];
      if (!errors.isEmpty()) {
        errors.array({ onlyFirstError: true }).forEach((err) => {
          errMessages.push(err.msg);
        });
        return res.status(400).json({
          status: 400,
          error: errMessages,
        });
      }
      return next();
  },
  ]  
}

export default validate;
=======

const signupValidate = [
  check('firstName')
    .not()
    .isEmpty({ ignore_whitespace: true })
    .withMessage('First Name should not be left empty: Please input firstName')
    .isAlpha()
    .trim()
    .withMessage('first Name can only contain letters: Please remove invalid characters'),
  check('lastName')
    .not()
    .isEmpty({ ignore_whitespace: true })
    .withMessage('Last name should not be left empty: Please input lastName')
    .isAlpha()
    .trim()
    .withMessage('Last name can ony contain letters: remove invalid characters'),
  check('email')
    .not()
    .isEmpty({ ignore_whitespace: true })
    .withMessage('Email should not be left empty: Please input email address')
    .isEmail()
    .trim()
    .withMessage('Email is not valid: Please input a valid email address'),
  check('password')
    .not()
    .isEmpty({ ignore_whitespace: true })
    .withMessage('Password should not be empty: Please input password')
    .trim()
    .isLength({ min: 7 })
    .withMessage('Password Length should be at least 8 Characters'),
    
  (req, res, next) => {
    const errors = validationResult(req);
    const errMessages = [];
    if (!errors.isEmpty()) {
      errors.array({ onlyFirstError: true }).forEach((err) => {
        errMessages.push(err.msg);
      });
      return res.status(400).json({
        status: 400,
        error: errMessages,
      });
    }
    return next();
},
]

export default signupValidate;
>>>>>>> feat(validation): write sign up validation