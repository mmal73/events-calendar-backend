const jwt = require('jsonwebtoken');

const generateJwt = ( _id, name ) => {
    return new Promise(( resolve, reject) => {
        
        const payload = {
            _id,
            name
        }
        jwt.sign(payload, process.env.SECRET_JWT_SECRET, {
            expiresIn: '2h'
        }, ( err, token ) => {

            if(err){
                console.log(err);
                return reject('The token could not be generated');
            }
            resolve(token)

        });
    });

}

module.exports = {
    generateJwt
};
