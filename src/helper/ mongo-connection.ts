// Using Node.js `require()`
import mongoose from 'mongoose';
const CONFIG = require('@constants/config');



/**
 * Performs the connection to Mongo.
 */
const mongoConnect = async () => {
    return await mongoose.connect(CONFIG.url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(() => {
            console.log(`Mongo DB connected.`)
            return true
        })
        .catch( (error: any) => {
            console.log(`Couldn't connect DB. Details: ${error}`)
            return Promise.reject('Internal server error starting repository.')
        })
}


export default mongoConnect;