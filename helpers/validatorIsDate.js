const moment = require('moment');

const validatorIsDate = ( value, { req, location, path } ) => {
    if( !value ){
        return false
    }
    
    const date = moment( value );

    return date.isValid() ? true : false;
}
module.exports = {
    validatorIsDate
}