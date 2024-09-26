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
        try {
            const beeper = new Beeper_1.default(newBeeper.name);
            let beepers = await (0, fileDL_1.getBeepersFromData)();
            if (!beepers) {
                beepers = [];
            }
            beepers.push(beeper);
            return await (0, fileDL_1.saveFileData)(beepers);
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
    static async getAllBeepers() {
        try {
            const beepers = await (0, fileDL_1.getBeepersFromData)();
            return beepers;
        }
        catch (err) {
            console.log(err);
        }
    }
    static async getBeeperById(id) {
        try {
            const beepers = await (0, fileDL_1.getBeepersFromData)();
            const beeper = beepers?.find((beep) => { return beep.id === id; });
            console.log(beeper);
            return beeper;
        }
        catch (err) {
            console.log(err);
        }
    }
    static async deleteBeeper(id) {
        try {
            const beepers = (await (0, fileDL_1.getBeepersFromData)());
            const newArrDelete = beepers.filter((beep) => { return beep.id !== id; });
            await (0, fileDL_1.saveFileData)(newArrDelete);
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
}
exports.BeeperService = BeeperService;
