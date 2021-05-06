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
            status: true,
            name: user.name,
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
const login = async(req, res = express.response) => {
    const { email, password} = req.body;

    try {
        
        // Check if the user is already registered
        const user = await User.findOne({ email }); 
        if( !user ){
            return res.status(400).json({
                message: 'The user is not yet registered with this email',
                status: false,
            });
        }

        // Check if the password is correct
        const correctPassword = bcryptjs.compareSync( password, user.password);
        if( !correctPassword ){
            return res.status(400).json({
                message: 'The password is incorrect',
                status: false,
            });
        }
        
        res.json({
            status: true,
            name: user.name,
            _id: user.id,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
        });
    }

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
