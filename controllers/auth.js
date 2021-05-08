const express = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');
const { generateJwt } = require('../helpers/jwt');

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

        // generate token
        const token = await generateJwt( user._id, user.name );

        res.status(201).json({
            status: true,
            _id: user._id,
            name: user.name,
            token
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

        // generate token
        const token = await generateJwt( user._id, user.name );
        
        res.json({
            status: true,
            _id: user._id,
            name: user.name,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
        });
    }

}
const renewToken = async(req, res = express.response) => {

    const { _id, name } = req;

    // generate token
    const token = await generateJwt( _id, name );
    
    res.json({
        status: true,
        token,
        _id,
        name
    });

}

module.exports = {
    register,
    login,
    renewToken
}
