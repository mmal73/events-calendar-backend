const express = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');

const register = async(req, res = express.response) => {
    const { email, password} = req.body;

    try {
        
        // Check if the user is already registered
        let user = await User.findOne({ email }); 
        if( user ){
            return res.status(400).json({
                message: 'The user is already registered',
                status: false,
            });
        }

        // Save in db
        user = new User( req.body );
        // Hash password
        user.password = bcryptjs.hashSync(password, 10);
        await user.save();

        res.status(201).json({
            message: 'user registered',
            name: user.name,
            status: true,
            _id: user.id,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: 'An error has ocurred'
        });
    }

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
