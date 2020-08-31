"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Using Node.js `require()`
var mongoose_1 = __importDefault(require("mongoose"));
var locationShema = require('@model/locationShema');
var Schema = mongoose_1.default.Schema;
// const ObjectId = Schema.ObjectId;
var markShema = new Schema({
    // id: ObjectId,
    name: { type: String, default: '', required: true },
    description: { type: String, default: '', required: true },
    coordinates: {
        type: locationShema,
        required: true,
    },
    date: { type: Date, default: Date.now },
}, { timestamps: true });
var Mark = mongoose_1.default.model('Mark', markShema);
exports.default = Mark;
//# sourceMappingURL=markShema.js.map