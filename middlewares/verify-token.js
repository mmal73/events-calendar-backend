const jwt = require('jsonwebtoken');

const veryfyToken = ( req, res, next ) =>{

    const token = req.header('x-token');
    if( !token ){
        return res.status(400).json({
            status: false,
            error: 'No token found in the request'
        });
    }
    try {

        const { _id, name } = jwt.verify(token, process.env.JWT_SECRET_WORD);
        
        req._id = _id;
        req.name = name;
        
    } catch (error) {
        return res.status(400).json({
            status: false,
            error: 'Invalid token'
        });
    }
    next();

}

module.exports = {
    veryfyToken
}
