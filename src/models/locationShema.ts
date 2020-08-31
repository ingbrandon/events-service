// Using Node.js `require()`
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const locationShema = new Schema(
    {
        latitude: { type: [Number], default: 0, required: true },
        longitude: { type: [Number], default: 0, required: true},
    },
);

//const Location = mongoose.model('Location', locationShema);
export default locationShema;