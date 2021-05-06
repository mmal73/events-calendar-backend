/*
    url: /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { register, login, renewToken } = require('../controllers/auth');
const { validate } = require('../middlewares/validate-body');
const { veryfyToken } = require('../middlewares/verify-token');

const validateEmail = check('email', 'The emails must be an email valid').isEmail();
const validatePassword = check('password', 'The password is required and min 8 characters').isLength(8)

const router = Router();

router.post('/register',
    [
        check('name', 'The name is required').not().isEmpty(),
        validateEmail,
        validatePassword,
        validate
    ],
    register
);
router.post('/login',
    [
        validateEmail,
        validatePassword,
        validate
    ],
    login);
router.get('/renew-token',
    veryfyToken,
    renewToken
);

module.exports = router;
