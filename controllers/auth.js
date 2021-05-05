const express = require('express');
const { validationResult } = require('express-validator');

const validateErrors = (req, res) => {
    const errors = validationResult( req );
    if( !errors.isEmpty() ){
        return res.status(400).json({
            status: false,
            errors: errors.mapped()
        });
    }
}

const register = (req, res = express.response) => {
    
    const { name, email, password} = req.body;

    validateErrors(req, res);

    res.status(201).json({
        message: 'register',
        name,
        email,
        password,
    });

}
const login = (req, res = express.response) => {

    const { email, password} = req.body;

    validateErrors(req, res);
    
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