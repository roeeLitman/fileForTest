"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.turnOnBeeper = void 0;
const fileDL_1 = require("../config/fileDL");
const BeeperStatus_1 = require("./enums/BeeperStatus");
// פונקציה להפעלת טיימר ופיצוץ שלו כעבור 10 שניות
const turnOnBeeper = (beeper) => {
    if (beeper.status !== BeeperStatus_1.BeeperStatus.deployed) {
        return;
    }
    setTimeout(async () => {
        beeper.status = BeeperStatus_1.BeeperStatus.detonated;
        const beepers = await (0, fileDL_1.getBeepersFromData)();
        beepers?.push(beeper);
        (0, fileDL_1.saveFileData)(beepers);
    }, 10000);
};
exports.turnOnBeeper = turnOnBeeper;
