const express = require('express');

const register = (req, res = express.response) => {
    
    const { name, email, password} = req.body;

    res.status(201).json({
        message: 'register',
        name,
        email,
        password,
    });

}
const login = (req, res = express.response) => {

    const { email, password} = req.body;

    res.json({
        message: 'register',
        email,
        password,
    });

}
const renewToken = (req, res = express.response) => {
    
    res.json({
        message: 'renew'
    });

}

module.exports = {
    register,
    login,
    renewToken
}
