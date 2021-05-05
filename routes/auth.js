/*
    url: /api/auth
*/

const { Router } = require('express');
const router = Router();

const { register, login, renewToken } = require('../controllers/auth');

router.post('/register',    register);
router.post('/login',       login);
router.get('/renew-token',  renewToken);

module.exports = router;
