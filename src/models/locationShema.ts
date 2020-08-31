// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationShema = new Schema(
    {
        latitude: { type: [Number], default: 0, required: true },
        longitude: { type: [Number], default: 0, required: true},
    },
);

//const Location = mongoose.model('Location', locationShema);
module.exports = locationShema;