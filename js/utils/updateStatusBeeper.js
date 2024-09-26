"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatusBeeper = void 0;
const BeeperStatus_1 = require("./enums/BeeperStatus");
//צקבל ביפר וצעדכן את הסטטוס שלו רק קדימה
const UpdateStatusBeeper = (beeper, updateStatu) => {
    const status = updateStatu.status;
    if (beeper.status === BeeperStatus_1.BeeperStatus.manufactured && status === BeeperStatus_1.BeeperStatus.assembled) {
        beeper.status = status;
    }
    else if (beeper.status === BeeperStatus_1.BeeperStatus.assembled && status === BeeperStatus_1.BeeperStatus.shipped) {
        beeper.status = status;
    }
    else if (beeper.status === BeeperStatus_1.BeeperStatus.shipped && status === BeeperStatus_1.BeeperStatus.deployed) {
        beeper.status = status;
        beeper.latitude = updateStatu.latitude;
        beeper.longitude = updateStatu.longitude;
    }
    else if (beeper.status === BeeperStatus_1.BeeperStatus.deployed && status === BeeperStatus_1.BeeperStatus.detonated) {
        beeper.status = status;
    }
    return beeper;
};
exports.UpdateStatusBeeper = UpdateStatusBeeper;
