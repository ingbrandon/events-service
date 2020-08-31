"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Using Node.js `require()`
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var locationShema = new Schema({
    latitude: { type: [Number], default: 0, required: true },
    longitude: { type: [Number], default: 0, required: true },
});
//const Location = mongoose.model('Location', locationShema);
exports.default = locationShema;
//# sourceMappingURL=locationShema.js.map