const mongoose = require('mongoose');

const dbConection = async()=>{

    try {
        await mongoose.connect( process.env.DB_CONECTION,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('db conected');
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    dbConection
}
