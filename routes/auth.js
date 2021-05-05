/*
    url: /api/auth
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { register, login, renewToken } = require('../controllers/auth');

const validateEmail = check('email', 'The emails must be an email valid').isEmail();
const validatePassword = check('password', 'The password is required and min 8 characters').isLength(8)

router.post('/register',
    [
        check('name', 'The name is required').not().isEmpty(),
        validateEmail,
        validatePassword
    ],
    register
);
router.post('/login',
    [
        validateEmail,
        validatePassword
    ],
    login);
router.get('/renew-token',renewToken);

module.exports = router;
