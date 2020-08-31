// Using Node.js `require()`
import mongoose  from 'mongoose';
const locationShema = require('@model/locationShema');


const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const markShema = new Schema(
    {
        // id: ObjectId,
        name: { type: String, default: '', required: true },
        description: { type: String, default: '', required: true},
        coordinates: {
            type: locationShema,
            required: true,
        },
        date: { type: Date, default: Date.now },
    },
    { timestamps: true },
);

const Mark = mongoose.model('Mark', markShema);
export default Mark;