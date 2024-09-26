"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeeperService = void 0;
const fileDL_1 = require("../config/fileDL");
const Beeper_1 = __importDefault(require("../models/Beeper"));
class BeeperService {
    // יצירת ביפר חדש
    static async createNewBeeper(newBeeper) {
        const beeper = new Beeper_1.default(newBeeper.name);
        let beepers = await (0, fileDL_1.getBeepersFromData)();
        if (!beepers) {
            beepers = [];
        }
        beepers.push(beeper);
        return await (0, fileDL_1.saveFileData)(beepers);
    }
}
exports.BeeperService = BeeperService;
