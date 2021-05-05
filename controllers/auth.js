const express = require('express');

const register = (req, res = express.response) => {
    
    const { name, email, password} = req.body;
    res.json({
        msg: 'register',
        name,
        email,
        password,
    });

}
const login = (req, res = express.response) => {

    const { email, password} = req.body;
    
    res.json({
        msg: 'register',
        email,
        password,
    });

}
const renewToken = (req, res = express.response) => {
    
    res.json({
        msg: 'renew'
    });

}

module.exports = {
    register,
    login,
    renewToken
}