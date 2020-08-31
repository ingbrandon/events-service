// Using Node.js `require()`
const mongoose = require('mongoose');
const CONFIG = require('@constants/config');



/**
 * Performs the connection to Mongo.
 */
async function mongoConnect() {
    return await mongoose.connect(CONFIG.url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(() => {
            console.log(`Mongo DB connected.`)
            connected = true
        })
        .catch(error => {
            console.log(`Couldn't connect DB. Details: ${error}`)
            return Promise.reject('Internal server error starting repository.')
        })
}


module.exports = mongoConnect;