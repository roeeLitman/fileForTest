"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeeperService = void 0;
const fileDL_1 = require("../config/fileDL");
const Beeper_1 = __importDefault(require("../models/Beeper"));
const updateStatusBeeper_1 = require("../utils/updateStatusBeeper");
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
            const beeper = beepers?.find((beep) => {
                return beep.id === id;
            });
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
            const newArrDelete = beepers.filter((beep) => {
                return beep.id !== id;
            });
            await (0, fileDL_1.saveFileData)(newArrDelete);
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
    static async getBeeperByStatus(status) {
        try {
            const beepers = await (0, fileDL_1.getBeepersFromData)();
            if (!beepers) {
                throw new Error("");
            }
            return beepers.filter((beep) => {
                return beep.status === status;
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    static async UpdateStatus(id, updataStatus) {
        try {
            // מביא את המערך
            const beepers = await (0, fileDL_1.getBeepersFromData)();
            if (!beepers)
                throw new Error("");
            // מוצא את הביפר 
            const beeper = beepers.find((beep) => { return beep.id === id; });
            if (!beeper)
                throw new Error("");
            //   מחזיר חזרה את הדאטה ללא הפיבר המעודכן
            // משנה את הסטטוס רק אם זה הסטטוס הבא בתור
            const updetaBeeper = (0, updateStatusBeeper_1.UpdateStatusBeeper)(beeper, updataStatus.status);
            // פונקציה שתקבל את הביפר תבדוק האם הסטטוס מוקם ובמקרה שכן סופר עשר שניות ומחזיר את הביפר בסטטוס מעודכן
            // מכניס את הביפר חזרה למערך
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
}
exports.BeeperService = BeeperService;
